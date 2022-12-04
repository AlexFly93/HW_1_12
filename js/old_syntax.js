function User(fname, lname, age) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
}

User.isUser = function (value) {
  return value instanceof User;
};

function UserProto() {
  this.fullName = function () {
    return `${this.fname}${this.lname}`;
  };
}
User.prototype = new UserProto();

const person1 = new User("Brad", "Pitt", 58);
console.log(person1.fullName());
const person2 = new User();
console.log(User.isUser(person1));
