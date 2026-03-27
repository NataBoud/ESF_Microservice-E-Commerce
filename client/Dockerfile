# Étape 1 : Build de l'application React
FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# On génère le dossier /build
RUN npm run build

# Étape 2 : Service des fichiers via Nginx
FROM nginx:stable-alpine
# On copie les fichiers buildés vers le dossier par défaut de Nginx
COPY --from=build /app/build /usr/share/nginx/html
# Copie d'une config nginx minimaliste pour gérer le routing React (SPA)
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]