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

# Build the static site
RUN NODE_ENV=production bun run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Copy built static files from builder
COPY --from=builder /app/build ./

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
