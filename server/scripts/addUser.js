require("dotenv").config();
const { Users } = require("../src/modules");

Users.create({
    fullName: "Tomer H",
    password: "123456",
    email: "test@gmail.com" 
})