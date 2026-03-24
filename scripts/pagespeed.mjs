import { chromium } from "playwright";

const args = process.argv.slice(2);
const headed = args.includes("--headed");
const filteredArgs = args.filter((a) => a !== "--headed");
const url = filteredArgs[0] || "https://tcg-lightning.com";
const formFactor = filteredArgs[1] || "mobile";

const psUrl = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(url)}&form_factor=${formFactor}`;

console.log(`Running PageSpeed analysis for: ${url} (${formFactor})`);
console.log(`URL: ${psUrl}\n`);

const browser = await chromium.launch({ headless: !headed });
const page = await browser.newPage();

await page.goto(psUrl, { waitUntil: "networkidle", timeout: 120000 });

// Wait for the gauge scores to render
await page.waitForSelector(".lh-gauge__percentage", { timeout: 120000 });

// If desktop requested, click the desktop tab
if (formFactor === "desktop") {
  const desktopTab = await page.$("#desktop_tab");
  if (desktopTab) {
    await desktopTab.click();
    await page.waitForTimeout(3000);
  }
}

// Give extra time for all audits to render
await page.waitForTimeout(5000);

const results = await page.evaluate((ff) => {
  // Find the active tab panel
  const panels = document.querySelectorAll('[role="tabpanel"]');
  let panel = null;
  for (const p of panels) {
    if (p.getAttribute("data-tab-panel-active") === "true") {
      panel = p;
      break;
    }
  }
  if (!panel) panel = document;

  // Scores from the header gauges (these are global, not per-panel)
  const scores = {};
  const gauges = panel.querySelectorAll(
    ".lh-gauge__wrapper, .lh-scores-header .lh-gauge__wrapper",
  );
  if (gauges.length === 0) {
    // Fallback: get from header
    const headerGauges = document.querySelectorAll(
      ".lh-scores-header .lh-gauge__wrapper",
    );
    headerGauges.forEach((g) => {
      const label = g.querySelector(".lh-gauge__label")?.textContent?.trim();
      const score = g.querySelector(".lh-gauge__percentage")?.textContent?.trim();
      if (label && score) scores[label] = score;
    });
  } else {
    gauges.forEach((g) => {
      const label = g.querySelector(".lh-gauge__label")?.textContent?.trim();
      const score = g.querySelector(".lh-gauge__percentage")?.textContent?.trim();
      if (label && score) scores[label] = score;
    });
  }

  // Metrics from .lh-metric elements
  const metrics = {};
  const metricEls = panel.querySelectorAll(".lh-metric");
  metricEls.forEach((m) => {
    const name = m.querySelector(".lh-metric__title")?.textContent?.trim();
    const value = m.querySelector(".lh-metric__value")?.textContent?.trim();
    if (name && value) metrics[name] = value;
  });

  // Insights
  const insights = [];
  const insightEls = panel.querySelectorAll(
    ".lh-audit-group--insights .lh-audit",
  );
  insightEls.forEach((a) => {
    const title = a.querySelector(".lh-audit__title")?.textContent?.trim();
    const display = a
      .querySelector(".lh-audit__display-text")
      ?.textContent?.trim();
    const cls = a.className;
    let severity = "info";
    if (cls.includes("lh-audit--fail")) severity = "fail";
    else if (cls.includes("lh-audit--average")) severity = "warning";
    else if (cls.includes("lh-audit--pass")) severity = "pass";
    if (title)
      insights.push({
        title,
        savings: display || "",
        severity,
      });
  });

  // Diagnostics
  const diagnostics = [];
  const diagEls = panel.querySelectorAll(
    ".lh-audit-group--diagnostics .lh-audit",
  );
  diagEls.forEach((a) => {
    const title = a.querySelector(".lh-audit__title")?.textContent?.trim();
    const display = a
      .querySelector(".lh-audit__display-text")
      ?.textContent?.trim();
    if (title) diagnostics.push({ title, detail: display || "" });
  });

  return { scores, metrics, insights, diagnostics };
}, formFactor);

console.log("=== SCORES ===");
for (const [k, v] of Object.entries(results.scores)) {
  console.log(`  ${k}: ${v}`);
}

console.log("\n=== METRICS ===");
for (const [k, v] of Object.entries(results.metrics)) {
  console.log(`  ${k}: ${v}`);
}

if (results.insights.length) {
  console.log("\n=== INSIGHTS ===");
  results.insights.forEach((i) => {
    const icon =
      i.severity === "fail"
        ? "X"
        : i.severity === "warning"
          ? "!"
          : i.severity === "pass"
            ? "v"
            : "-";
    console.log(`  [${icon}] ${i.title}${i.savings ? ` ${i.savings}` : ""}`);
  });
}

if (results.diagnostics.length) {
  console.log("\n=== DIAGNOSTICS ===");
  results.diagnostics.forEach((d) =>
    console.log(`  - ${d.title}${d.detail ? ` ${d.detail}` : ""}`),
  );
}

await browser.close();
