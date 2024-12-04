# Frontend
FROM node:18 AS build-frontend
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend .
RUN npm run build

# Backend
FROM node:18
WORKDIR /app/backend
ARG MONGO_URI
ENV MONGO_URI=${MONGO_URI}
COPY backend/package.json backend/package-lock.json ./
RUN npm install
COPY backend .
COPY --from=build-frontend /app/frontend/build ./public
EXPOSE 4000
CMD ["node", "server.js"]
