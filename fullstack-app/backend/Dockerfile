FROM node:18

WORKDIR /app  

# Copy package.json first
COPY package*.json ./  
RUN npm install  

# Copy all files (ensure index.js is included)
COPY . .  

# List files to confirm index.js is there
RUN ls -l /app  

EXPOSE 5000  

# Update CMD to use index.js
CMD ["node", "index.js"]
