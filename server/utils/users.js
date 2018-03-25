class Users {
    constructor() {
        this.users = [];
    }

    addUser(id, name, room) {
        var user = {
            id,
            name,
            room
        };
        this.users.push(user);
        return user;
    }

    getUser(id) {
        return this.users.filter(u => u.id === id)[0];
    }

    removeUser(id) {
        var user = this.getUser(id);
        if (user) {
            this.users = this.users.filter(u => u.id !== id);
        }
        return user;
    }

    getUserList(room) {
        var users = this.users.filter(u => u.room === room);
        var names = users.map(u => u.name);
        return names;
    }

}

module.exports = {
    Users
};