// User class with private password
class User {
  #password;

  constructor(username) {
    this.username = username;
    this.#password = null;
  }

  setPassword(newPassword) {
    if (typeof newPassword !== 'string' || newPassword.length < 6) {
      throw new Error("Password must be a string with at least 6 characters.");
    }
    this.#password = newPassword;
  }

  validatePassword(passwordAttempt) {
    return this.#password === passwordAttempt;
  }

  // For admin access - not exposed directly
  _forceSetPassword(newPassword) {
    this.#password = newPassword;
  }
}

// AdminUser class that can reset other users' passwords
class AdminUser extends User {
  constructor(username) {
    super(username);
  }

  resetUserPassword(user, newPassword) {
    if (!(user instanceof User)) {
      throw new Error("Invalid user.");
    }
    user._forceSetPassword(newPassword);
    console.log(`Password for user "${user.username}" has been reset by admin.`);
  }
}

// Example Usage:
const user1 = new User("ahsan_shariff");
user1.setPassword("secure123");
console.log(user1.validatePassword("wrong")); // false
console.log(user1.validatePassword("secure123")); // true

const admin = new AdminUser("admin");
admin.resetUserPassword(user1, "newPass4567");
console.log(user1.validatePassword("newPass4567")); // true
