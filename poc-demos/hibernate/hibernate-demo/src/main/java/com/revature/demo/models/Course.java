package com.revature.demo.models;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name="courses")
public class Course {

    @Id
    @Column
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column
    private String name;

    @JoinColumn
    @ManyToOne(cascade={
            CascadeType.REMOVE, CascadeType.MERGE,
            CascadeType.PERSIST, CascadeType.DETACH
    })
    private Instructor instructor;

    public Course() {
        super();
    }

    public Course(String name) {
        this.name = name;
    }

    public Course(String name, Instructor instructor) {
        this.name = name;
        this.instructor = instructor;
    }

    public Course(int id, String name, Instructor instructor) {
        this.id = id;
        this.name = name;
        this.instructor = instructor;
    }

    public int getId() {
        return id;
    }

    public Course setId(int id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return name;
    }

    public Course setName(String name) {
        this.name = name;
        return this;
    }

    public Instructor getInstructor() {
        return instructor;
    }

    public Course setInstructor(Instructor instructor) {
        this.instructor = instructor;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Course course = (Course) o;
        return id == course.id &&
                Objects.equals(name, course.name) &&
                Objects.equals(instructor, course.instructor);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, instructor);
    }

    @Override
    public String toString() {
        return "Course{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", instructor=" + instructor +
                '}';
    }

}
