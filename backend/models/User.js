// implementera

export default class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.createDate = new Date();
        this.lastLoggedIn = new Date();
    }

    static convert(row) {
        return {
            username: row.username,
            email: row.email,
            password: row.password,
            id: row.id,
            createDate: row.createDate,
            lastLoggedIn: row.lastLoggedIn
        }

    }
}


