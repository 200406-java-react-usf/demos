package com.revature.msa.user.util;

import com.revature.msa.user.dtos.ErrorResponse;
import com.revature.msa.user.exceptions.AuthenticationException;
import com.revature.msa.user.exceptions.BadRequestException;
import com.revature.msa.user.exceptions.ResourceNotFoundException;
import com.revature.msa.user.exceptions.RevaboardsException;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletResponse;

@Component
@RestControllerAdvice
public class ErrorResponseAspect {

    @ExceptionHandler
    public ErrorResponse handleRevaboardsException(RevaboardsException e, HttpServletResponse resp) {
        ErrorResponse err = new ErrorResponse(e);

        if (e instanceof ResourceNotFoundException) {
            resp.setStatus(404);
        } else if (e instanceof BadRequestException) {
            resp.setStatus(400);
        } else if (e instanceof AuthenticationException) {
            resp.setStatus(401);
        }

        return err;
    }

}
