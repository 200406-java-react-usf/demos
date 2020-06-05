package com.revature.msa.user.exceptions;

public class InternalServerErrorException extends RevaboardsException {

    public InternalServerErrorException() {
        super(500, "An unexpected error occurred. Please try again later.");
    }

    public InternalServerErrorException(String msg) {
        super(500, msg);
    }

    public InternalServerErrorException(String msg, Throwable cause) {
        super(500, msg, cause);
    }

}
