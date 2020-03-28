var allUsers = [];
var right = [];
var allGroups = [];

function createUser(name, pass) {
    let checkUser = users();
    if (checkUser.includes(name) == false) {
        let user = { username: name, password: pass, groups: ["basic"] };
        allUsers.push(user)
        return allUsers[allUsers.length - 1].username;
    } else {
        throw new Error('Такой пользователь уже соществует.');
    };
};

function deleteUser(user) {
    let checkUser = users();
    if (checkUser.includes(user)) {
        allUsers.splice(checkUser.indexOf(user), 1)
    } else {
        throw new Error('Нельзя удалить пользователя, которого нет.');
    };
    return;
};

function users() {
    let users = [];
    for (let i = 0; i < allUsers.length; i++) {
        users[i] = allUsers[i].username
    }
    return users;
};

function createGroup() {
    allGroups.push({ name: "", right: [] });
    return allGroups[allGroups.length - 1];
};

function deleteGroup(name) {
    let checkGroup = groups();
    if (checkGroup.includes(name)) {
        allGroups.splice(checkGroup.indexOf(name), 1)
    } else {
        throw new Error('Нельзя выполнить это действие.');
    };
    return;
};

function groups() {
    return allGroups;
};

function addUserToGroup() {

};

function userGroups(name) {
    for (let i = 0; i < allUsers.length; i++) {
        if (name == allUsers[i].username) {
            return allUsers[i].groups;
        };
    };
};

function removeUserFromGroup() {

};

function createRight() {
    right.push([]);
    return right[right.length - 1];
};

function deleteRight(name) {
    let checkRight = rights();
    if (checkRight.includes(name)) {
        right.splice(checkRight.indexOf(name), 1)
    } else {
        throw new Error('Нельзя выполнить это действие.');
    };
    return;
};

function groupRights(name) {
    for (let i = 0; i < allGroups.length; i++) {
        if (name == allGroups[i].name) {
            return allGroups[i].right;
        };
    };
};

function rights() {
    return right;
};

function addRightToGroup() {

};

function removeRightFromGroup() {

};

function login(username, password) {

};

function currentUser() {

};

function logout() {

};

function isAuthorized(user, right) {

};