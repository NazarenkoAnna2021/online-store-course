export class ApiError extends Error {
    status: number;
    constructor(status: number, massage: string) {
        super();
        this.status = status;
        this.message = massage;
    }

    static badRequest = (massage: string) => {
        return new ApiError(404, massage);
    }

    static internal = (massage: string) => {
        return new ApiError(500, massage);
    }

    static forbidden = (massage: string) => {
        return new ApiError(403, massage);
    }
};