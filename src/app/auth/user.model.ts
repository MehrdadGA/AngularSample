export class user{
    constructor(
        public email: string,
        public Id: string,
        private _token: string,
        private _tokenExpirationDate: Date
    ) {}
}