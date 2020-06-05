package com.revature.msa.zuul.filters;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.exception.ZuulException;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;

@Component
public class AppPreFilter extends ZuulFilter {

    @Override
    public String filterType() {
        return "pre";
    }

    @Override
    public int filterOrder() {
        return 1;
    }

    @Override
    public boolean shouldFilter() {
        return true;
    }

    @Override
    public Object run() throws ZuulException {

        System.out.println("in filter<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
        RequestContext reqCtx = RequestContext.getCurrentContext();
        HttpServletRequest request = reqCtx.getRequest();
        request.setAttribute("went-through-gateway", true);
        return request;

    }
}
