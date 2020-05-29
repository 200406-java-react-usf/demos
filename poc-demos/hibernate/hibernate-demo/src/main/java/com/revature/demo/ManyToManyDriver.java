package com.revature.demo;

import com.revature.demo.config.HibernateConfig;
import com.revature.demo.models.Course;
import com.revature.demo.models.Instructor;
import com.revature.demo.models.Student;
import org.hibernate.Session;
import org.hibernate.Transaction;

public class ManyToManyDriver {

    public static void main(String[] args) {

        try (Session session = HibernateConfig.buildSessionFactory().getCurrentSession()) {

            session.beginTransaction();

            Course reactCourse = session.get(Course.class, 5);
            System.out.println("\n\n\n\n\n\n\n\n");
            System.out.println("Students enrolled in " + reactCourse.getName());
            reactCourse.getCourseStudents().forEach(System.out::println);

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public static void manyToManyDemo() {
        Transaction tx = null;
        try (Session session = HibernateConfig.buildSessionFactory().getCurrentSession()) {

            tx = session.beginTransaction();

            Instructor me = session.get(Instructor.class, 1);
            Course reactCourse = new Course("Learn React with TypeScript!");
            reactCourse.setInstructor(me);

            Student s1 = new Student("Josef", "Bostik", "jb@gmail.com");
            Student s2 = new Student("Korey", "Keipe", "kk@gmail.com");
            Student s3 = new Student("Thomas", "Hoang", "th@gmail.com");
            Student s4 = new Student("Scotty", "Thoms", "st@gmail.com");

            reactCourse.addStudents(s1, s2, s3, s4);

            session.save(reactCourse);

            tx.commit();

        } catch (Exception e) {
            e.printStackTrace();
            if (tx != null) {
                tx.rollback();
            }
        }
    }

}
