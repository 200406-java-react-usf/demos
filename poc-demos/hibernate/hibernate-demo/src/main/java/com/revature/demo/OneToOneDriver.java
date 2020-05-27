package com.revature.demo;

import com.revature.demo.config.HibernateConfig;
import com.revature.demo.models.Instructor;
import com.revature.demo.models.InstructorDetail;
import org.hibernate.Session;
import org.hibernate.Transaction;

public class OneToOneDriver {

    public static void main(String[] args) {

        Transaction tx = null;
        try (Session session = HibernateConfig.buildSessionFactory().getCurrentSession()) {

            tx = session.beginTransaction();

            Instructor instructor1 = new Instructor("Wezley", "Singleton", "ws@gmail.com");
            InstructorDetail details1 = new InstructorDetail("Java/Spring", "Astronomy");

            Instructor instructor2 = new Instructor("Blake", "Kruppa", "bk@gmail.com");
            InstructorDetail details2 = new InstructorDetail("JavaScript", "Turtles");

            instructor1.setDetails(details1);
            instructor2.setDetails(details2);

            session.save(instructor1);
            session.save(instructor2);

            tx.commit();

        } catch (Exception e) {
            e.printStackTrace();

            if (tx != null) {
                tx.rollback();
            }

        }
    }
}
