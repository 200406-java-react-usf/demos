FROM openjdk:8-jdk-alpine
ADD target/user-service-1.0-SNAPSHOT.jar user-service.jar
EXPOSE 8080
ENTRYPOINT exec java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar user-service.jar
