FROM node:lts-alpine AS build
WORKDIR /opt/react-router
COPY . .
RUN npm i --silent && npm run build && npm cache clean --force && rm -rf node_modules

FROM node:lts-alpine
WORKDIR /opt/react-router
COPY --from=build /opt/react-router/build /opt/react-router/build
COPY --from=build /opt/react-router/*.json /opt/react-router/
EXPOSE 8080
CMD ["sh", "-c", "npm i --omit=dev --silent && npm start"] 