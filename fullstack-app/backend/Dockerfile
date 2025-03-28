# Use the official Node.js 18 image as the base image
FROM node:18  

# Set the working directory inside the container
WORKDIR /app  

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./  

# Install application dependencies
RUN npm install  

# Copy the entire application code into the container
COPY . .  

# Define the command to run the application
CMD ["node", "server.js"]  

# Expose port 5000 for the application
EXPOSE 5000  
