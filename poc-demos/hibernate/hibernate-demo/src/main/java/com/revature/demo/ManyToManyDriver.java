//package com.revature.demo;
//
//import com.revature.demo.config.HibernateConfig;
//import com.revature.demo.models.Student;
//import org.hibernate.Session;
//
//public class ManyToManyDriver {
//
//    public static void main(String[] args) {
//
//        try (Session session = HibernateConfig.buildSessionFactory().getCurrentSession()) {
//
//            session.beginTransaction();
//
//            Student wezley = session.get(Student.class, 1);
//
//        } catch (Exception e) {
//
//            e.printStackTrace();
//
//        }
//
//    }
//
//}
