package com.revature.demo.models;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@NamedNativeQueries({
    @NamedNativeQuery(
            name="getStudentByEmail",
            query="SELECT * FROM quizzard.students WHERE email = :email",
            resultClass=Student.class
    )
})

@Entity // Let's Hibernate know that this class is an entity that will be mapped
@Table(name="students") // Used to specify a custom name for the table, any table-level constraints, or indexes
public class Student {

    @Id // Designates this field as a PK on the mapped table
    @Column(name="id") // Technically, not needed but included for completeness
    @GeneratedValue(strategy=GenerationType.IDENTITY) // Indicates to use serial type for this column
    private int id;

    @Column(name="first_name", nullable=false)
    private String firstName;

    @Column(name="last_name", nullable=false)
    private String lastName;

    @Column(name="email", unique=true, nullable=false)
    private String email;

//    @ManyToMany
//    @JoinTable(
//            name="students_courses",
//            joinColumns = @JoinColumn(name="student_id"),
//            inverseJoinColumns = @JoinColumn(name = "course_id")
//    )
//    private List<Course> courses;

    public Student() {
        super();
    }

    public Student(String firstName, String lastName, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public Student(int id, String firstName, String lastName, String email) {
        this(firstName, lastName, email);
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public Student setId(int id) {
        this.id = id;
        return this;
    }

    public String getFirstName() {
        return firstName;
    }

    public Student setFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }

    public String getLastName() {
        return lastName;
    }

    public Student setLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public Student setEmail(String email) {
        this.email = email;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return id == student.id &&
                Objects.equals(firstName, student.firstName) &&
                Objects.equals(lastName, student.lastName) &&
                Objects.equals(email, student.email);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName, email);
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                '}';
    }

}
