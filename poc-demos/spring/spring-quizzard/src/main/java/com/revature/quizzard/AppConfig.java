package com.revature.quizzard;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

@EnableWebMvc
@Configuration
@ComponentScan
@EnableTransactionManagement
@PropertySource("classpath:app.properties")
public class AppConfig {

    @Bean
    public BasicDataSource dataSource() {
        System.out.println("Creating BasicDataSource bean...");
        BasicDataSource dataSource = new BasicDataSource();

        ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
        InputStream dbPropertiesStream = classLoader.getResourceAsStream("app.properties");
        Properties dbProperties = new Properties();

        try {
            dbProperties.load(dbPropertiesStream);
        } catch (FileNotFoundException fnfe) {
            fnfe.printStackTrace();
        } catch (IOException ioe) {
            ioe.printStackTrace();
        }

        dataSource.setDriverClassName(dbProperties.getProperty("driver"));
        dataSource.setUrl(dbProperties.getProperty("url"));
        dataSource.setUsername(dbProperties.getProperty("username"));
        dataSource.setPassword(dbProperties.getProperty("password"));

        System.out.println("DataSource bean successfully created");
        return dataSource;
    }

    @Bean
    public LocalSessionFactoryBean sessionFactory() {
        System.out.println("Creating SessionFactory bean...");
        LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
        sessionFactory.setDataSource(dataSource());
        sessionFactory.setPackagesToScan("com.revature");
        sessionFactory.setHibernateProperties(hibernateProperties());
        System.out.println("SessionFactory bean successfully created");
        return sessionFactory;
    }

    @Bean
    public PlatformTransactionManager hibernateTransactionManager() {
        System.out.println("Creating PlatformTransactionManager bean...");
        HibernateTransactionManager transactionManager = new HibernateTransactionManager();
        transactionManager.setSessionFactory(sessionFactory().getObject());
        System.out.println("PlatformTransactionManager bean successfully created");
        return transactionManager;
    }

    private final Properties hibernateProperties() {
        System.out.println("Loading Hibernate properties");
        Properties hibernateProperties = new Properties();
        hibernateProperties.setProperty("hibernate.dialect", "org.hibernate.dialect.Oracle10gDialect");
        hibernateProperties.setProperty("hibernate.show_sql", "true");
        hibernateProperties.setProperty("hibernate.format_sql", "true");
        hibernateProperties.setProperty("hibernate.hbm2ddl.auto", "create-drop");
        System.out.println("Hibernate properties loaded");
        return hibernateProperties;
    }
}
