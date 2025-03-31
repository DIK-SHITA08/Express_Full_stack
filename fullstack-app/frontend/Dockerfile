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

# Build the React app for production
RUN npm run build

# Install a lightweight static file server
RUN npm install -g serve

# Expose the port the React app will run on
EXPOSE 3000

# Start the React app using 'serve'
CMD ["serve", "-s", "build", "-l", "3000"]

