package com.revature.quizzard.repos;

import com.revature.quizzard.entities.AppUser;
import com.revature.quizzard.web.dtos.Credentials;
import org.hibernate.SessionFactory;

import java.util.List;

// Check spring-orm-notes and hibernate demos!
public class UserRepository implements CrudRepository {

    private SessionFactory sessionFactory;

    public UserRepository(SessionFactory factory) {
        super();
        this.sessionFactory = factory;
    }

    public AppUser findUserByCredentials(Credentials creds) {
        return null;
    }

    @Override
    public List getAll() {
        return null;
    }

    @Override
    public Object findById(int id) {
        return null;
    }

    @Override
    public Object save(Object newObj) {
        return null;
    }

    @Override
    public boolean update(Object updatedObj) {
        return false;
    }

    @Override
    public boolean deleteById(int id) {
        return false;
    }
}
