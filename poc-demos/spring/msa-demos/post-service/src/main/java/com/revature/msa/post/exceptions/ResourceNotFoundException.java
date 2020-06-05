package com.revature.msa.post.exceptions;

public class ResourceNotFoundException extends RevaboardsException {

    public ResourceNotFoundException() {
        super(404, "No resource found with provided search criteria!");
    }

    public ResourceNotFoundException(String msg) {
        super(404, msg);
    }

    public ResourceNotFoundException(String msg, Throwable cause) {
        super(404, msg, cause);
    }

}
