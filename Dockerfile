FROM node:20-alpine

# pnpm corepack
RUN corepack enable
RUN corepack prepare pnpm@9.15.9 --activate

# Set the working directory 
WORKDIR /app

# Copy package.json and pnpm-llock.yaml files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm i --frozen-lockfile

# Copy source project code
COPY . .

# Build the project
RUN pnpm build

# Run the hello typescript in index.js
CMD ["node", "dist/index.js"]