FROM node:22-alpine as builder

WORKDIR /app


#copy the env file
# Build-time variable for API base URL
# Accept build-time args

ARG VITE_API_BASE_URL
ARG VITE_FIREBASE_API

# Set them as env vars for Vite to read
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
ENV VITE_FIREBASE_API=$VITE_FIREBASE_API


COPY package*.json ./

#insall the dependencies
RUN npm install

COPY . .

RUN npm run build


## Use Nginx to serve the built files
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

#expose the port
EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]
