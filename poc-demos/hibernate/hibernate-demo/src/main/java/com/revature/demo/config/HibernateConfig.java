package com.revature.demo.config;

import com.revature.demo.models.Student;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
import org.reflections.Reflections;


import javax.persistence.Entity;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;
import java.util.Set;

public class HibernateConfig {

    /*
        Primarily used for the creation of Session instances. An application usually
        only has a single SessionFactory instance and threads servicing client requests
        obtain Session instances from this factory.
     */
    private static SessionFactory sessionFactory;

    /*
        This is just a simply utility class provided by the JRE which allows us to load
        in values from a .properties file on our classpath.
     */
    private static Properties props = new Properties();

    /*
        Here we are providing some static logic that will be ran when this class
        is loaded in to memory by a JVM classloader. This logic will load the
        app.properties file to give us access to the key/value pairs it stores.
     */
    static {
        try {
            props.load(new FileReader("src/main/resources/app.properties"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    /**
     * A builder method which is used to instantiate the application's SessionFactory
     * if it does not already exist. If it does, the existing instance is simply
     * returned.
     *
     * return a singleton instance of this application's SessionFactory implementation
     */
    public static SessionFactory buildSessionFactory() {

        if (sessionFactory == null) {

            System.out.println("Instantiating SessionFactory...");

            try {

                Configuration config = new Configuration();
                config.setProperties(props);

                assignAnnotatedClasses(config);

                /*
                    Services provide various types of functionality, in a pluggable manner. Specifically
                    they are interfaces defining certain functionality and then implementations of those
                    service contract interfaces.

                    A ServiceRegistry, at its most basic, hosts and manages Services. Its contract is
                    defined by the org.hibernate.service.ServiceRegistry interface.

                    We already gave a basic overview and definition of services. But services have other
                    interesting characteristics as well. Services have a lifecycle. They have a scope.
                    Services might depend on other services. And they need to be produced (choose using
                    one implementation over another). The ServiceRegistry fulfills all these needs.

                    In a concise definition, the ServiceRegistry acts as a inversion-of-control (IoC)
                    container.

                    More at: https://docs.jboss.org/hibernate/orm/4.3/topical/html/registries/ServiceRegistries.html
                 */
                ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder()
                                                            .applySettings(config.getProperties())
                                                            .build();

                sessionFactory = config.buildSessionFactory(serviceRegistry);

            } catch (Exception e) {
                e.printStackTrace();
            }

            System.out.println("SessionFactory instantiation complete!");

        }

        return sessionFactory;

    }

    private static void assignAnnotatedClasses(Configuration config) {
        Reflections reflect = new Reflections("com.revature.demo.models");
        Set<Class<? extends Object>> entities = reflect.getTypesAnnotatedWith(Entity.class);
        entities.forEach(config::addAnnotatedClass);
    }

}
