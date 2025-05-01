FROM node:22 as builder

WORKDIR /app

COPY package*.json ./

# install the dependencies
RUN npm install

COPY . .

RUN npm run build

#copy the env file
COPY .env .env


## Use Nginx to serve the built files
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html


#expose the port
EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]



