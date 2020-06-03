package com.revature.poc.exceptions;

public class AuthorizationException extends RevaboardsException {

    public AuthorizationException() {
        super(403, "You do not have permission to perform that action.");
    }

    public AuthorizationException(String msg) {
        super(403, msg);
    }

    public AuthorizationException(String msg, Throwable cause) {
        super(403, msg, cause);
    }

}
