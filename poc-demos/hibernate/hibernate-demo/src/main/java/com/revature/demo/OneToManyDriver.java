package com.revature.demo;

import com.revature.demo.config.HibernateConfig;
import com.revature.demo.models.Course;
import com.revature.demo.models.Instructor;
import org.hibernate.Session;
import org.hibernate.Transaction;

public class OneToManyDriver {

    public static void main(String[] args) {

//        persistCourses();

        try (Session session = HibernateConfig.buildSessionFactory().getCurrentSession()) {

            session.beginTransaction();

            Instructor blake = session.get(Instructor.class, 2);

            System.out.println("+-----------------------------------+");

            blake.getCourses().forEach(System.out::println);


        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public static void persistCourses() {
        Transaction tx = null;
        try (Session session = HibernateConfig.buildSessionFactory().getCurrentSession()) {

            tx = session.beginTransaction();

            Instructor blake = session.get(Instructor.class, 2);
            blake.getCourses().forEach(System.out::println);

            Course course1 = new Course("Hibernate Basics");
            Course course2 = new Course("Advanced Hibernate Mappings");

            blake.addCourse(course1);
            blake.addCourse(course2);

            session.save(course1);
            session.save(course2);

            tx.commit();

        } catch (Exception e) {
            e.printStackTrace();
            if (tx != null) {
                tx.rollback();
            }
        }
    }

}
