class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return `${this._password}chandan`;
  }

  set password(value) {
    this._password = value;
  }
}

const chandan = new User("c@chandan.ai", "abc");
console.log(chandan.email);
