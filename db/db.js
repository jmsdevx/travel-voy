module.exports = {
  testMethod: (client) => {
    client.query('SELECT * FROM user_table', (err, res) => {
      if (err) throw err;
      for (let row of res.rows) {
        console.log(JSON.stringify(row));
      }
      client.end();
    })
  },
  createUser: (client, userData) => {
    const { firstname, lastname, email, password } = userData;
    const query = `
    INSERT INTO user_table(firstname, lastname, user_email, user_password)
    VALUES('${firstname}', '${lastname}', '${email}', '${password}')
    `
    console.log(query);
    // (${firstname}, ${lastname}, ${email}, ${password})
    client.query(query)
    .then(response => {
      console.log(response);
      return response.command;
    })
    .catch(err => {
      console.log(err);
      return(err);
    })
  },
  getUser: (client, email) => {
    const query = `SELECT * FROM user_table WHERE user_email = '${email}'`
    client.query(query)
    .then(response => {
      console.log(response.rows[0]);
      return response.rows[0];
    })
    .catch(err => {
      console.log(err);
      return (err);
    })
  },
  deleteUser: (client, email) => {
    const query = `DELETE FROM user_table WHERE user_email = '${email}'`
    client.query(query)
    .then(response => {
      console.log(response);
      return response.command;
    })
    .catch(err => {
      console.log(err)
      return (err);
    })
  },
  updateUser: (client, userData, id) => {
    const { firstname, lastname, email, password } = userData;

    const query = `
    UPDATE user_table SET firstname = '${firstname}', lastname = '${lastname}', user_email = '${email}', user_password = '${password}' WHERE id = '${id}'
    `;
    client.query(query)
    .then(response => {
      console.log(response);
      return response.command;
    })
    .catch(err => {
      console.log(err);
      return (err);
    })
  }
};
