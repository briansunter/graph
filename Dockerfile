# Dockerfile
FROM node:18

# Set the working directory
WORKDIR /workspace

# Copy the local files to the container
COPY site .

# Install dependencies
RUN npm install sharp && \
    npm install && \
    npx playwright install-deps && \
    npx playwright install && \
    npm run build

CMD ["npm", "run", "start"]