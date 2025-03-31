# Use Node.js as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the React app
RUN npm run build

# Install "serve" globally to serve the frontend
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Run the React app using "serve"
CMD ["serve", "-s", "build", "-l", "3000"]
