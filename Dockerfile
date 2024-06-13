# Use the official lightweight Node.js 16 image.
# https://hub.docker.com/_/node
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./
# If you're using yarn instead of npm, copy the yarn.lock file
# COPY package.json yarn.lock ./

# Install dependencies
RUN npm install
# If you're using yarn, use the following command instead
# RUN yarn install --frozen-lockfile

# Copy the rest of your application code
COPY . .

# Build the application
RUN npm run build
# If you're using yarn, use the following command instead
# RUN yarn build

# Expose the port Next.js runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
# If you're using yarn, use the following command instead
# CMD ["yarn", "start"]
