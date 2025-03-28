# Use Node.js 18 as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that React runs on
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
