# Use the official Node.js 18 image as the base image
FROM node:18  

# Set the working directory inside the container
WORKDIR /app  

# Copy package.json and package-lock.json first (to leverage Docker caching)
COPY package*.json ./  

# Install application dependencies
RUN npm install  

# Copy the entire application code into the container
COPY . .  

# Build the frontend app (for React or Angular)
RUN npm run build  

# Install a lightweight web server for serving static files
RUN npm install -g serve  

# Expose port 3000 for the application
EXPOSE 3000  

# Serve the frontend app
CMD ["serve", "-s", "build", "-l", "3000"]
