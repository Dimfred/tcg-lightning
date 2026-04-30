######################################################################
# BUILD
FROM oven/bun:canary@sha256:a2ad318b71d2c7661bd6a2f540470d4829ce4dd5b90e19525bb73ccfdbe97fa0 AS builder

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
FROM oven/bun:canary-distroless@sha256:3cef5a689f2e13e3bebd39302c71dc91dc54b80c5b67460fc22cf3b593149997

COPY --chown=1000:1000 --from=builder /app/build /app/build
COPY --chown=1000:1000 --from=builder /app/package.json /app/package.json
WORKDIR /app
ENV NODE_ENV=production
USER 1000:1000

ENV PORT=3000
EXPOSE 3000

CMD ["build/index.js"]
