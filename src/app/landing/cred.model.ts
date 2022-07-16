export class Cred {
    public name: string;
    public userID: string
    public email: string;
    public password: string;

    constructor (name: string, userID: string, email: string, password: string) {
        this.name = name;
        this.userID = userID;
        this.email = email;
        this.password = password;
    }
}