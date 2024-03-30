const client = require("../../config/db");

const getUser = async (req, res) => {
  client.query(`SELECT * FROM users`, (error, result) => {
    if (!error) {
      res.send(result?.rows);
    } else {
      console.log(error.message);
    }
    client.end();
  });
};

module.exports = {
  getUser,
};
