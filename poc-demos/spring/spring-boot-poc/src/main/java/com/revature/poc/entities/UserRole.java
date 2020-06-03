package com.revature.poc.entities;

public enum UserRole {

    ADMIN("Admin"), DEV("Dev"), USER("User"), LOCKED("Locked");

    private final String roleName;

    UserRole(String name) {
        this.roleName = name;
    }

    public static UserRole getByName(String name) {
        for (UserRole role : UserRole.values()) {
            if (role.roleName.equals(name)) {
                return role;
            }
        }
        return LOCKED;
    }

    @Override
    public String toString() {
        return roleName;
    }

}
