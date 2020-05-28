package com.revature.demo.models;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name="instructor_details")
public class InstructorDetail {

    @Id
    @Column
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column(nullable=false)
    private String focus;

    @Column(nullable=false)
    private String hobby;

    // should NOT be a column in the instructor_details table
    // but should have a reference to the associated instructor record
    @OneToOne(mappedBy="details")
    private Instructor instructor;

    public InstructorDetail() {
        super();
    }

    public InstructorDetail(String focus, String hobby) {
        this.focus = focus;
        this.hobby = hobby;
    }

    public InstructorDetail(String focus, String hobby, Instructor instructor) {
        this.focus = focus;
        this.hobby = hobby;
        this.instructor = instructor;
    }

    public InstructorDetail(int id, String focus, String hobby, Instructor instructor) {
        this.id = id;
        this.focus = focus;
        this.hobby = hobby;
        this.instructor = instructor;
    }

    public int getId() {
        return id;
    }

    public InstructorDetail setId(int id) {
        this.id = id;
        return this;
    }

    public String getFocus() {
        return focus;
    }

    public InstructorDetail setFocus(String focus) {
        this.focus = focus;
        return this;
    }

    public String getHobby() {
        return hobby;
    }

    public InstructorDetail setHobby(String hobby) {
        this.hobby = hobby;
        return this;
    }

    public Instructor getInstructor() {
        return instructor;
    }

    public InstructorDetail setInstructor(Instructor instructor) {
        this.instructor = instructor;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        InstructorDetail that = (InstructorDetail) o;
        return id == that.id &&
                Objects.equals(focus, that.focus) &&
                Objects.equals(hobby, that.hobby) &&
                Objects.equals(instructor, that.instructor);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, focus, hobby, instructor);
    }

    @Override
    public String toString() {
        return "InstructorDetail{" +
                "id=" + id +
                ", focus='" + focus + '\'' +
                ", hobby='" + hobby + '\'' +
                '}';
    }

}
