package com.revature.demo;

import com.revature.demo.config.HibernateConfig;
import com.revature.demo.models.Student;
import com.revature.demo.repos.StudentRepo;
import org.hibernate.Session;

public class Driver {

    private final static StudentRepo studentRepo = new StudentRepo();

    public static void main(String[] args) {

        try (Session session = HibernateConfig.buildSessionFactory().getCurrentSession()) {

            // Old logic used to verify a proper connection to DB
//            if (session == null) {
//                System.out.println("Could not establish connection to DB!");
//            } else {
//                System.out.println("Connection established!");
//            }

            addStudentDemo();
//            getStudentUsingGet();
//            getStudentUsingLoad();
            getAllStudents();

        }

    }

    public static void addStudentDemo() {
        // CREATE STUDENT DEMO
        Student student1 = new Student("Wezley", "Singleton", "ws@gmail.com");
        student1 = studentRepo.addStudent(student1);
        System.out.println(student1);
    }

    public static void getStudentUsingGet() {
        Student s = studentRepo.getStudentById_get(1);
        System.out.println(s);
    }

    public static void getStudentUsingLoad() {
        Student s = studentRepo.loadStudentById(1);

        // throws a LazyInitializationException since we are trying to init the proxy outside of a session
        System.out.println(s);
    }

    public static void getAllStudents() {
        studentRepo.getAllStudents();

    }

}
