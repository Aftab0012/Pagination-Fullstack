const mongoose = require("mongoose");
const User = require("./models/userModel");

const faker = require("faker");

function generateFakeUserData() {
  return {
    name: faker.name.firstName(),
  };
}
async function insertFakeUsers(numUsers) {
  const fakeUsers = [];
  for (let i = 0; i < numUsers; i++) {
    fakeUsers.push(generateFakeUserData());
  }

  try {
    const insertedUsers = await User.insertMany(fakeUsers);
    console.log(`${insertedUsers.length} fake users inserted successfully.`);
  } catch (error) {
    console.error("Error inserting fake users:", error);
  }
}
const DB_URI =
  "mongodb+srv://aftabmulani1515:tRTMcbndon1lZJVU@cluster0.kqdtcoh.mongodb.net/Cluster0?retryWrites=true&w=majority";

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Connected to Db at, " + DB_URI);

    // Call the function to insert fake users here
    insertFakeUsers(10); // Inserting 10 fake users in this example
  })
  .catch((error) => {
    console.log(error);
  });
