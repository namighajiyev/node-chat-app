const expect = require('expect');
var {
    Users
} = require('./users');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
                id: '1',
                name: 'mike',
                room: 'Node Course'
            },
            {
                id: '2',
                name: 'jen',
                room: 'React Course'
            },
            {
                id: '3',
                name: 'julie',
                room: 'Node Course'
            }
        ];
    });

    it('should add new users', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'namiq',
            room: 'otaq'
        }
        var resUser = users.addUser(user.id, user.name, user.room)

        expect(users.users).toEqual([user]);
    });
    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course');
        expect(userList).toEqual(['mike', 'julie']);
    });

    it('should return names for react course', () => {
        var userList = users.getUserList('React Course');
        expect(userList).toEqual(['jen']);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);
        expect(user.id).toEqual(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var userId = '99';
        var user = users.removeUser(userId);
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        var userId = '2';
        var user = users.getUser(userId);
        expect(user.id).toEqual(userId);
    });

    it('should not find a user', () => {
        var userId = '99';
        var user = users.getUser(userId);
        expect(user).toNotExist();
    });
});