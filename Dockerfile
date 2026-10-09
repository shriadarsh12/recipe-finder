FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app

COPY recipe-finder/pom.xml ./pom.xml
COPY recipe-finder/.mvn/ .mvn/
COPY recipe-finder/mvnw ./mvnw
RUN chmod +x mvnw

RUN ./mvnw dependency:go-offline -B

COPY recipe-finder/src/ ./src/
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]