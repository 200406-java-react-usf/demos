class ApplicationError {

    message: string;
    reason: string;

    constructor(rsn?: string) {
        this.message = 'An unexpected error occurred.';
        rsn ? (this.reason = rsn) : this.reason = 'Unspecified reason.';
    }

    setMessage(message: string) {
        this.message = message;
    }

}

class ResourcePersistenceError extends ApplicationError {

    constructor(reason?: string) {
        super(reason);
        super.setMessage('The resource was not persisted.');
    }
    
}

class ResourceNotFoundError extends ApplicationError {

    constructor(reason?: string) {
        super(reason);
        super.setMessage('No resource found using provided criteria.');
    }
    
}

class BadRequestError extends ApplicationError {

    constructor(reason?: string) {
        super(reason);
        super.setMessage('Invalid parameters provided.');
    }

}

class AuthenticationError extends ApplicationError {

    constructor(reason?: string) {
        super(reason);
        super.setMessage('Authentication failed.');
    }

}

class NotImplementedError extends ApplicationError {

    constructor(reason?: string) {
        super(reason);
        super.setMessage('No implementation yet!');
    }

}

export {
    ResourceNotFoundError,
    ResourcePersistenceError,
    BadRequestError,
    AuthenticationError,
    NotImplementedError
}