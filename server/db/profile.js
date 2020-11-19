const db = require('./index');

// Do not use transactions with the pool.query method.

module.exports = {
  getProfile: async (userId) => {
    try {
      // specify user_table.id to remove ambiguity
      const query = `SELECT * FROM user_table JOIN profile_table ON user_table.id = profile_table.id where user_table.id='${userId}'`;
      const response = await db.query(query);

      console.log(response);
      if (response.rows.length <= 0) {
        return null;
      }
      const {
        id,
        firstname,
        lastname,
        user_email,
        traveler_type,
        home_city,
        profile_picture
      } = response.rows[0];

      const profileData = {
        id: id,
        firstName: firstname,
        lastName: lastname,
        email: user_email,
        travelerType: traveler_type,
        homeCity: home_city,
        profilePicture: profile_picture
      }

      return profileData;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  addProfile: async (profileData, userId) => {
    try {

      const {
        homeCity,
        travelerType
      } = profileData;

      const query = `insert into profile_table(id, home_city, traveler_type) values('${userId}', '${homeCity}', '${travelerType}')`;

      const response = await db.query(query);
      return response;

    } catch (err) {
      throw (err);
    }
  },

  updateProfile: async (profileData, id) => {
    try {

      const {
        homeCity,
        travelerType,
        profilePicture,
        backgroundPicture
      } = profileData;

      let query = `update profile_table set `;

      if (homeCity)
        query += `home_city = '${homeCity}',`;

      if (travelerType)
        query += `traveler_type = '${travelerType}',`;

      if (profilePicture)
        query += `profile_picture = '${profilePicture}',`;

      if (backgroundPicture)
        query += `background_picture = '${backgroundPicture}',`;

      // remove last ',' from the query
      query = query.substring(0, query.length - 1);

      query += ` WHERE id='${id}'`;

      console.log(query);

      const response = await db.query(query);
      return response;

    } catch (err) {
      throw (err);
    }
  }
};