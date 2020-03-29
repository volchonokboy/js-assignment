var allUsers = [];
var right = [];
var allGroups = [];
var userOnline = "";

// Возвращает массив всех пользователей.
function users() {
    let users = [];
    for (let i = 0; i < allUsers.length; i++) {
        users[i] = allUsers[i].username
    }
    return users;
}

//Создает нового пользователя с указанным логином username и паролем password, возвращает созданного пользователя.
function createUser(name, pass) {
    let checkUser = users();
    if (checkUser.includes(name) == false) {
        let user = { username: name, password: pass, groups: [] };
        allUsers.push(user)
        return allUsers[allUsers.length - 1].username;
    } else {
        throw new Error('Такой пользователь уже соществует.');
    };
}

// Удаляет пользователя user
function deleteUser(user) {
    let checkUser = users();
    if (checkUser.includes(user)) {
        allUsers.splice(checkUser.indexOf(user), 1)
    } else {
        throw new Error('Нельзя удалить пользователя, которого нет.');
    };
    return;
}

// Возвращает массив групп, к которым принадлежит пользователь user
function userGroups(user) {
    for (let i = 0; i < allUsers.length; i++) {
        if (user == allUsers[i].username) {
            return allUsers[i].groups;
        };
    };
}

// Добавляет пользователя user в группу group
function addUserToGroup(user, group) {
    let checkBox = 0;
    if (!!user && !!group) {
        for (let i = 0; i < allUsers.length; i++) {
            if (allUsers[i].username == user) {
                for (let j = 0; j < allGroups.length; j++) {
                    if (allGroups[j].name == group.name) {
                        allUsers[i].groups.push(group.name);
                        ++checkBox;
                        break;
                    } else if (j == allGroups.length - 1 && checkBox == 0) {
                        throw new Error("Такой группы нет");
                    };
                };
            } else if (i == allUsers.length - 1 && checkBox == 0) {
                throw new Error("нет такого пользователя");
            };
        };
    } else {
        throw new Error("Плохой аргумент");
    };
}

// Удаляет пользователя user из группы group. Должна бросить исключение, если пользователя user нет в группе group
function removeUserFromGroup(user, group) {
    let checkBox = 0;
    if (!!user && !!group) {
        for (let i = 0; i < allUsers.length; i++) {
            if (allUsers[i].username == user) {
                for (let j = 0; j <= allUsers[i].groups.length; j++) {
                    if (allUsers[i].groups[j] == group.name) {
                        allUsers[i].groups.splice(j, 1);
                        ++checkBox;
                        break;
                    } else if (j == allUsers[i].groups.length - 1 && checkBox == 0 || allUsers[i].groups.length == 0) {
                        throw new Error("Такой группы нет у пользователя");
                    };
                };
            } else if (i == allUsers.length - 1 && checkBox == 0) {
                throw new Error("нет такого пользователя");
            };
        };
    } else {
        throw new Error("Плохой аргумент");
    };
}

// Возвращает массив прав
function rights() {
    return right;
}

// Создает новое право с именем name и возвращает его
function createRight(name) {
    right.push([name]);
    return right[right.length - 1];
}

// Удаляет право right
function deleteRight(name) {
    let checkRight = rights();
    if (checkRight.includes(name)) {
        right.splice(checkRight.indexOf(name), 1);
        for (let i = 0; i < allGroups.length; i++) {
            if (allGroups[i].right.includes(name[0])) {
                allGroups[i].right.splice(allGroups[i].right.indexOf(name[0]), 1);
            };
        };
    } else {
        throw new Error('Нельзя удалить право, которого нет.');
    };
    return;
}

// Возвращает массив групп
function groups() {
    return allGroups;
}

// Создает новую группу и возвращает её.
function createGroup(group) {
    allGroups.push({ name: group, right: [] });
    return allGroups[allGroups.length - 1];
}

// Удаляет группу group
function deleteGroup(group) {
    let checkGroup = groups();
    if (checkGroup.includes(group)) {
        allGroups.splice(checkGroup.indexOf(group), 1);
        for (let i = 0; i < allUsers.length; i++) {
            if (allUsers[i].groups.includes(group.name)) {
                allUsers[i].groups.splice(allUsers[i].groups.indexOf(group.name), 1);
            };
        };
    } else {
        throw new Error('Нельзя удалить группу, которой нет.');
    };
    return;
}

// Возвращает массив прав, которые принадлежат группе group
function groupRights(name) {
    for (let i = 0; i < allGroups.length; i++) {
        if (name.name == allGroups[i].name) {
            return allGroups[i].right;
        };
    };
}

// Добавляет право right к группе group
function addRightToGroup(rightName, group) {
    let checkBox = 0;
    if (!!rightName && !!group) {
        for (let i = 0; i < right.length; i++) {
            if (right[i] == rightName[0]) {
                for (let j = 0; j < allGroups.length; j++) {
                    if (allGroups[j].name == group.name) {
                        allGroups[j].right.push(rightName[0]);
                        ++checkBox;
                        break;
                    } else if (j == allGroups.length - 1 && checkBox == 0) {
                        throw new Error("Такой группы нет");
                    };
                };
            } else if (i == right.length - 1 && checkBox == 0) {
                throw new Error("нет такого право");
            };
        };
    } else {
        throw new Error("Плохой аргумент");
    };
}

// Удаляет право right из группы group. Должна бросить исключение, если права right нет в группе group
function removeRightFromGroup(rightName, group) {
    let checkBox = 0;
    if (!!rightName && !!group) {
        if (right.includes(rightName)) {
            for (let i = 0; i < allGroups.length; i++) {
                if (allGroups[i].name == group.name) {
                    if (allGroups[i].right > 0) {
                        allGroups[i].right.splice(allGroups[i].right.indexOf(rightName), 1);
                        ++checkBox;
                        break;
                    } else {
                        throw new Error("нет такого право в группе");
                    };
                } else if (i == allGroups.length - 1 && checkBox == 0) {
                    throw new Error("Такой группы нет");
                };
            }
        } else {
            throw new Error("нет такого право");
        };
    } else {
        throw new Error("Плохой аргумент");
    };
}

function login(user, pass) {
    for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].username === user && allUsers[i].password === pass && userOnline.length == 0) {
            userOnline = user;
            return true;
        };
    };
    return false;
}

function currentUser() {
    if (userOnline.length > 0) {
        return userOnline;
    }
}

function logout() {
    userOnline = "";
}

function isAuthorized(user, right) {}