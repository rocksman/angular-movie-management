export class Users {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public password: string,
        public phone: string,
        public isAdmin: boolean
    ){}
}
