# Étape 1 : Build avec Maven
FROM maven:3.6.3-jdk-11 AS build
WORKDIR /app

# On copie d'abord le pom.xml pour mettre les dépendances en cache et éviter de les retélécharger à chaque changement de code
COPY pom.xml .
RUN mvn dependency:go-offline

# On copie le code source et on build
COPY src ./src
RUN mvn clean package -DskipTests

# Étape 2 : Runtime avec JRE
FROM eclipse-temurin:11-jre-focal
WORKDIR /app

# Utilisation de l'étoile (*) pour attraper le JAR quel que soit son <finalName>
COPY --from=build /app/target/*.jar app.jar

# On utilise la variable d'environnement PORT définie dans le docker-compose
EXPOSE 8080 
ENTRYPOINT ["java", "-jar", "app.jar"]