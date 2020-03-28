var allUsers = [];
var right = [];
var allGroups = [];

// Возвращает массив всех пользователей.
function users() {
    let users = [];
    for (let i = 0; i < allUsers.length; i++) {
        users[i] = allUsers[i].username
    }
    return users;
}

//Создает нового пользователя с указанным логином username и паролем password, возвращает созданного пользователя.
function createUser(name, password) {
    let checkUser = users();
    if (checkUser.includes(name) == false) {
        let user = { username: name, password: pass, groups: ["basic"] };
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
function addUserToGroup(user, group) {}

// Удаляет пользователя user из группы group. Должна бросить исключение, если пользователя user нет в группе group
function removeUserFromGroup(user, group) {}

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
        right.splice(checkRight.indexOf(name), 1)
    } else {
        throw new Error('Нельзя выполнить это действие.');
    };
    return;
}

// Возвращает массив групп
function groups() {
    return allGroups;
}

// Создает новую группу и возвращает её.
function createGroup(name) {
    allGroups.push({ name: name, right: [] });
    return allGroups[allGroups.length - 1];
}

// Удаляет группу group
function deleteGroup(group) {
    let checkGroup = groups();
    if (checkGroup.includes(name)) {
        allGroups.splice(checkGroup.indexOf(name), 1)
    } else {
        throw new Error('Нельзя выполнить это действие.');
    };
    return;
}

// Возвращает массив прав, которые принадлежат группе group
function groupRights(name) {
    for (let i = 0; i < allGroups.length; i++) {
        if (name == allGroups[i].name) {
            return allGroups[i].right;
        };
    };
}

// Добавляет право right к группе group
function addRightToGroup() {}

// Удаляет право right из группы group. Должна бросить исключение, если права right нет в группе group
function removeRightFromGroup() {}

function login(username, password) {}

function currentUser() {}

function logout() {}

function isAuthorized(user, right) {}