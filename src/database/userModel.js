// userModel.js
const pool = require('./database');

module.exports = {
  async getUserByEmail(email) {
    try {
      const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  },
};
