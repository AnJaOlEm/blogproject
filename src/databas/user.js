class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.createdDate = new Date();
    }
}

module.exports = User;