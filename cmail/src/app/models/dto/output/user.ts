export class User {
    name = '';
    username = '';
    password = '';
    phone = '';
    avatar = '';

    // object destructuring
    constructor({user_full_name, user_username, user_password, user_phone_number, user_avatar}) {
        this.name = user_full_name;
        this.username = user_username;
        this.password = user_password;
        this.phone = user_phone_number;
        this.avatar = user_avatar;
    }
}