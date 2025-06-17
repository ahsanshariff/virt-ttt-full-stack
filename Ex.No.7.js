const user = {
  name: "Ahsan",
  roles: ["editor", "moderator", "contributor"]
};

const privilegedRoles = ["admin", "moderator", "superuser"];

// Check for any matching privileged role using `some`
const hasAccess = user.roles.some(role => privilegedRoles.includes(role));

// Calculate power score as 2 raised to the number of roles
const powerScore = 2 ** user.roles.length;

// Print appropriate message using template literals
const message = hasAccess
  ? `Access Granted. Power Score: ${powerScore}`
  : `Access Denied. Power Score: ${powerScore}`;

console.log(message);
