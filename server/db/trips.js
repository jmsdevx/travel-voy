const db = require('./index');

// Do not use transactions with the pool.query method.

module.exports = {
  getTrip: async (tripId, userId) => {
    try {
      // specify user_table.id to remove ambiguity
      const query = `SELECT * FROM trips_table JOIN user_table ON user_table.id = trips_table.user_id where trips_table.id='${tripId}' and user_table.id='${userId}'`;

      const response = await db.query(query);

      // console.log(response);
      if (response.rows.length <= 0) {
        return null;
      }

      return {
        id: response.rows[0].id,
        location: response.rows[0].location,
        dateStart: response.rows[0].start_date,
        dateEnd: response.rows[0].end_date,
        picture: response.rows[0].picture
      };
    } catch (err) {
      // console.log(err);
      throw err;
    }
  },

  getTrips: async (userId) => {
    try {

      const query = `SELECT * FROM trips_table JOIN user_table ON user_table.id = trips_table.user_id where user_table.id='${userId}'`;

      const response = await db.query(query);

      // console.log(response);
      if (response.rows.length <= 0) {
        return [];
      }

      const trips = response.rows.map((trip) => {
        return {
          id: trip.id,
          location: trip.location,
          dateStart: trip.start_date,
          dateEnd: trip.end_date,
          picture: trip.picture
        };
      });

      return trips;
    } catch (err) {
      // console.log(err);
      throw err;
    }
  },

  createTrip: async (data, userId) => {
    try {

      const {
        location,
        dateStart,
        dateEnd,
        picture
      } = data;

      const query = `insert into trips_table(location, start_date, end_date, picture, user_id) values('${location}', '${dateStart}', '${dateEnd}', '${picture? picture: null}', ${userId}) RETURNING *`;

      const response = await db.query(query);

      if (response.rows.length <= 0) {
        return null;
      }

      return {
        id: response.rows[0].user_id,
        location: response.rows[0].location,
        dateStart: response.rows[0].start_date,
        dateEnd: response.rows[0].end_date,
        picture: response.rows[0].picture,
      };

    } catch (err) {
      throw (err);
    }
  },

  updateTrip: async (data, userId) => {
    try {

      const {
        id,
        location,
        dateStart,
        dateEnd,
        picture
      } = data;

      const query = `
      UPDATE trips_table SET location = '${location}', start_date = '${dateStart}', end_date = '${dateEnd}', picture = '${picture}' WHERE id = '${id}' and user_id = '${userId}' RETURNING *`;

      const response = await db.query(query);

      return {
        id: response.rows[0].id,
        location: response.rows[0].location,
        dateStart: response.rows[0].start_date,
        dateEnd: response.rows[0].end_date,
        picture: response.rows[0].picture
      };

    } catch (err) {
      throw (err);
    }
  }
};