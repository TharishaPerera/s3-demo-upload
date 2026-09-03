FROM node:26-alpine

WORKDIR /app

RUN npm install --global pnpm@11.24.0

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY tsconfig*.json ./
COPY . .

EXPOSE 5173
CMD ["pnpm", "dev"]