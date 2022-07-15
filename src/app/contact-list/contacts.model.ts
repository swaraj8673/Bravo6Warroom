export class Contact {
    public name: string;
    public userID: string;
    public profilePicPath: string;

    constructor (name: string, userID: string, profilePicPath: string) {
        this.name = name;
        this.userID = userID;
        this.profilePicPath = profilePicPath;
    }
}