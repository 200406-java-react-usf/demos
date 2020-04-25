class AppError {
    message: string;
    reason: string;

    constructor(rsn?:string){
        
        this.message = 'An unexpected Error occurred'
        rsn? (this.reason = rsn): this.reason = 'Unspecified Reason'
    
    }
    setMessage(message: string){
        this.message = message
    }
}

class ResourceNotFoundError extends AppError{
    constructor(reason?: string){
        super(reason);
        super.setMessage('No resource found using this criteria')
    }
}

class ResourceSaveError extends AppError{
    
}