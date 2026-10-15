######################################################################
# BUILD
FROM oven/bun:1.4.3@sha256:ec06c3b6cea04192ae6770c434f668ca41d343ad19fa6472216c7b48be39c598 AS builder

WORKDIR /app

# Install dependencies
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

# Copy source files
COPY src ./src
COPY static ./static
COPY svelte.config.js ./
COPY vite.config.js ./
COPY tsconfig.json ./

# Build the app
RUN NODE_ENV=production bun run build

######################################################################
# RUN
FROM oven/bun:1.4.3-distroless@sha256:1aaa515018b0b37d95dbdebd55d1b7f37ad258a6289ba63e4bc3b9c9e3038697

COPY --chown=1000:1000 --from=builder /app/build /app/build
COPY --chown=1000:1000 --from=builder /app/package.json /app/package.json
WORKDIR /app
ENV NODE_ENV=production
USER 1000:1000

ENV PORT=3000
EXPOSE 3000

CMD ["build/index.js"]
