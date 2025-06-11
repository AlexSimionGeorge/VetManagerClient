FROM node:20-alpine

WORKDIR /app

# Copy dependency files and install
COPY package*.json ./
RUN npm install

# Copy the source code
COPY . .

# Expose Angular dev server port
EXPOSE 4200

# Start Angular dev server
CMD ["npm", "run", "start"]
