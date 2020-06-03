package com.revature.poc.exceptions;

public class RevaboardsException extends RuntimeException {

    private int status;

    public RevaboardsException(int status) {
        this.status = status;
    }

    public RevaboardsException(int status, Throwable cause) {
        super(cause);
        this.status = status;
    }

    public RevaboardsException(int status, String msg) {
        super(msg);
        this.status = status;
    }

    public RevaboardsException(int status, String msg, Throwable cause) {
        super(msg, cause);
        this.status = status;
    }

    public int getStatus() {
        return status;
    }

}
