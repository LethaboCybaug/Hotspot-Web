
const validUser = {
  name: "Alice Mokoena",
  email: "alice@example.com",
  phone_number: "0734567890",
  password: "Secure123!"
};

const anotherValidUser = {
  name: "Thabo Nkosi",
  email: "thabo.nkosi@example.com",
  phone_number: "0823456789",
  password: "ThaboSecure@2025"
};

const shortPasswordUser = {
  name: "Shorty",
  email: "short@example.com",
  phone_number: "0841234567",
  password: "123"
};

const invalidEmailUser = {
  name: "Nomsa Dlamini",
  email: "nomsa-at-example.com",
  phone_number: "0729876543",
  password: "Nomsa123!"
};

const missingFieldsUser = {
  email: "missingfields@example.com"
};

const invalidLogin = {
  email: "alice@example.com",
  password: "wrongpassword"
};

module.exports = {
  validUser,
  anotherValidUser,
  shortPasswordUser,
  invalidEmailUser,
  missingFieldsUser,
  invalidLogin
};
