class Moderator extends UserClasses {
    constructor(fname, lname, age, rating) {
        super(fname, lname, age)
        this.rating = rating
    }
    applyMessage() {
        return "applyMessage";
    }
}
class Admin extends Moderator {
  constructor(fname, lname, age, rating, propAdmin) {
    super(fname, lname, age, rating);
    this.propAdmin = propAdmin;
  }
  ban(user) {
    if (UserClasses.isUserClasses(user)) {
      return (user.isBan = true);
    }
    throw new TypeError("instance must be user");
  }
  unBan(user) {
    if (UserClasses.isUserClasses(user)) {
      return (user.isBan = false);
    }
    throw new TypeError("instance must be user");
  }
}




// try {
    
//   const moder = new Moderator("Moder", "Moderator", 55, 12);
//     console.log(moder.getFullName);
//     console.log(moder)
//     const admin = new Admin('ad', 'Admin', 22, 5.0)
//     admin.ban(moder.isBan)
// } catch (error) {
// console.log(error)
// }
