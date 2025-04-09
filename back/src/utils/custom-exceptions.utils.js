export class UserNotFound extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    };
};

export class ImageNotFound extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    };
};