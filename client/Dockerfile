# # Build stage ----------------

# # Use the official Node runtime as a parent image
# FROM node:20.10 as build

# # Set the working directory
# WORKDIR /app

# # Install dependencies
# # Copy both package.json AND package-lock.json
# COPY package*.json ./
# RUN npm install

# # Copy the current directory contents into the container
# COPY . .

# # Build the app
# RUN npm run build


# # Production stage --------------------------

# FROM node:20.10
# WORKDIR /app
# COPY --from=build /app/next.config.js ./
# COPY --from=build /app/public ./public
# COPY --from=build /app/.next ./.next
# COPY --from=build /app/node_modules ./node_modules
# COPY --from=build /app/package.json ./package.json

# # Start the app
# CMD ["npm", "start"]


# dev stage

# Use the official Node runtime as a parent image
FROM node:20.10

# Set the working directory
WORKDIR /app

# Install dependencies
# Copy both package.json AND package-lock.json
COPY package*.json ./
RUN npm install

# Copy the current directory contents into the container
COPY . .

# Start the app with the development server
CMD ["npm", "run", "dev"]
