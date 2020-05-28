package com.revature.quizzard.repos;

import java.util.List;

public interface CrudRepository<T> {

    List<T> getAll();
    T findById(int id);
    T save(T newObj);
    boolean update(T updatedObj);
    boolean deleteById(int id);

}
