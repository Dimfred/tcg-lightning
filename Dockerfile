FROM oven/bun:latest AS builder

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

FROM oven/bun:latest

WORKDIR /app

# Copy built files
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["bun", "build/index.js"]
