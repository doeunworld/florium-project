FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Expose port 4200
EXPOSE 4200

# Run ng serve, binding to all interfaces
CMD ["npx", "ng", "serve", "--host", "0.0.0.0"]
