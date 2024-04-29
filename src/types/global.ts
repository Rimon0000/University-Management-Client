export type TError = {
    data:{       
        message : string;
        stack: string;
        success: boolean
    };
    status: boolean
}

export type TResponse = {
    data?: any;
    error?: TError;
}