FROM node:18
WORKDIR /app
COPY legacy-app/package.json .
RUN npm install
COPY legacy-app/ .
CMD ["npm", "start"]
