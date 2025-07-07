FROM  node:22-alpine

WORKDIR /app

COPY package*.json ./


# dependencies
RUN npm install

COPY . .
#expose the file
EXPOSE ${PORT}


CMD [ "node","index.js" ]
