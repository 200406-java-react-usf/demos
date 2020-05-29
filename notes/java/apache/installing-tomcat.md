# Installing Apache Tomcat

Apache Tomcat is an open-source implementation of the Java Servlet, JavaServer Pages, Java Expression Language and WebSocket technologies. Tomcat provides a "pure Java" HTTP web server environment in which Java code can run. This document will walk you through installing Apache Tomcat (current version is 9.0.35 at the time of writing). 


***Prerequisites***
- Access to any UNIX-compatible shell
- Java SE 8 installed

### Step 1: Download the Apache Tomcat v9.0.35 binary distribution

```console
username@machine-name:~/Downloads$ wget https://mirrors.gigenet.com/apache/tomcat/tomcat-9/v9.0.35/bin/apache-tomcat-9.0.35.tar.gz
```

### Step 2: Extract the files from the tarball to the desired install location

```console
username@machine-name:~/Downloads$ sudo tar -C <desired-install-location> -zxvf apache-tomcat-9.0.35.tar.gz 
```

### Step 3: Create an environment variable that points to the root of the install folder

The details of this step are completely dependent on two things: the install location and your operating system. Ensure that you create a system environment variable named `CATALINA_HOME` whose value is the absolute path to the extracted folder - which is named `apache-tomcat-9.0.35`.

### Step 4: Set the secure permissions on the newly extracted files.

Again, this is another step that will depend upon your preferences. It is recommended that you avoid using `chmod -R 777` for any directory (especially for anything running production!). For development purposes, the author recommends using `chmod -R 750` (u=rwx, g=r-x, o=---) to provide simple yet adequate file security.

### Optional Step 5: Run your Apache Tomcat web server

To start up you Apache Tomcat web server run the command below.

```console
username@machine-name:~$ sudo $CATALINA_HOME/bin/startup.sh
``` 

You should see a few lines of output which ends with: `Tomcat started.` At this point you can visit `http://localhost:8080` and you should see the Apache splash page. To shutdown the server, run the command:

```console
username@machine-name:~$ sudo $CATALINA_HOME/bin/shutdown.sh
``` 
