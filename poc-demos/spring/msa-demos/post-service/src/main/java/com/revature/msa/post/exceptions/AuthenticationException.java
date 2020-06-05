package com.revature.msa.post.exceptions;

public class AuthenticationException extends RevaboardsException {

    public AuthenticationException() {
        super(401, "Authentication failed!");
    }

    public AuthenticationException(Throwable cause) {
        super(401, cause);
    }

    public AuthenticationException(String msg) {
        super(401, msg);
    }

    public AuthenticationException(String msg, Throwable cause) {
        super(401, msg, cause);
    }

}
