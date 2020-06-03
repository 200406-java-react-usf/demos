package com.revature.poc.exceptions;

public class ResourcePersistenceException extends RevaboardsException {

    public ResourcePersistenceException() {
        super(409, "Resource could not be persisted!");
    }

    public ResourcePersistenceException(String msg) {
        super(409, msg);
    }

    public ResourcePersistenceException(String msg, Throwable cause) {
        super(409, msg, cause);
    }

}
