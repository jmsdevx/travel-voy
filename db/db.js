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
  createUser: (client, userData, req, res) => {
    const { firstName, lastName, email, password } = userData;
    const query = `
    INSERT INTO user_table(firstname, lastname, user_email, user_password)
    VALUES('${firstName}', '${lastName}', '${email}', '${password}')
    `
    console.log(query);
    client.query(query)
    .then(response => {
      return response.command;
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    })
  },
  getUser: (client, email, req, res) => {
    const query = `SELECT * FROM user_table WHERE user_email = '${email}'`
    client.query(query)
    .then(response => {
      const { firstname, lastname, user_email, id } = response.rows[0];
      const userData = {
        firstName: firstname,
        lastName: lastname,
        email: user_email,
        id: id
      }
      console.log('SESSION')
      console.log(req.session);
      req.session.user = userData;
      console.log(req.session);
      res.status(200).send(userData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    })
  },
  getLogin: (client, email, password, req, res) => {
    const query = `SELECT * FROM user_table WHERE user_email = '${email}'`
    client.query(query)
    .then(response => {
      console.log(response);
      console.log(response.rows.length);
      if (response.rows.length === 0){
        res.status(200).send('Cannot find this email address.  Please try another.')
      } else {
        const { firstname, lastname, user_email, user_password, id } = response.rows[0];
        const userData = {
          firstName: firstname,
          lastName: lastname,
          email: user_email,
          id: id
        }
        if (password !== user_password){
          res.status(200).send('Incorrect password.  Please try again.')
        } else {
          req.session.user = userData;
          res.status(200).send(userData);
        }
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err)
    })
  },
  deleteUser: (client, email, req, res) => {
    const query = `DELETE FROM user_table WHERE user_email = '${email}'`
    client.query(query)
    .then(response => {
      return response.command;
    })
    .catch(err => {
      console.log(err)
      return (err);
    })
  },
  updateUser: (client, userData, id, req, res) => {
    const { firstname, lastname, email, password } = userData;

    const query = `
    UPDATE user_table SET firstname = '${firstname}', lastname = '${lastname}', user_email = '${email}', user_password = '${password}' WHERE id = '${id}'
    `;
    client.query(query)
    .then(response => {
      return response.command;
    })
    .catch(err => {
      console.log(err);
      return (err);
    })
  }
};
