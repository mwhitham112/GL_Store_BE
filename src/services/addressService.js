const db = require("../database/db");

exports.getAddress = async (user_id) => {
  try {
    const query = "SELECT * FROM gl_store.address WHERE user_id = $1;";
    const values = [user_id];
    const result = await db.query(query, values);
    return result.rows;
  } catch (error) {
    throw new Error("Error getting address");
  }
};

exports.createAddress = async (user_id, house_num, postcode, street_name, town) => {
  try {
    const query =
      "INSERT INTO gl_store.address (user_id, house_num, postcode, street_name, town) VALUES ($1, $2, $3, $4, $5)";
    const values = [user_id, house_num, postcode, street_name, town];
    await db.query(query, values);
    console.log("Bakset created successfully");
  } catch (error) {
    throw new Error("Error creating address");
  }
};

exports.removeAddress = async (address_id) => {
  console.log(address_id)
  try {
    const query = `DELETE FROM gl_store.address WHERE address_id = $1;`;
    const values = [address_id];
    await db.query(query, values);
    console.log("Address removed successfully");
  } catch (error) {
    throw new Error("Error removing address");
  }
};