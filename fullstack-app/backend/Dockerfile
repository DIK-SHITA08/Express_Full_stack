# Use Node.js as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies (force clean install)
RUN npm install && npm install cors

# Copy the entire application code
COPY . .

# Expose the backend port
EXPOSE 5000

# Start the backend server
CMD ["node", "index.js"]
