# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy everything to the container
COPY . . 

# Debugging: List files inside /app before build
RUN ls -l /app/public/

# Build the React app
RUN npm run build

# Install "serve" to serve the frontend
RUN npm install -g serve

# Serve the built React app
CMD ["serve", "-s", "build", "-l", "3000"]

# Expose port 3000
EXPOSE 3000
