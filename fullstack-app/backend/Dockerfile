FROM node:18

WORKDIR /app  

# Copy package.json and install dependencies
COPY package*.json .  
RUN npm install  

# Copy ALL project files (including server.js)
COPY . .  

# Ensure working directory has server.js
RUN ls -l /app  

EXPOSE 5000  
CMD ["node", "index.js"]
