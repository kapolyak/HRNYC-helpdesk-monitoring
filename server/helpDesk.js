const db = require('./../db/index.js');

const query = {
  text: 'SELECT * FROM "helpdesk" WHERE staff_name = $1',
  values: ['Trenton Going'],
}

const getCounts = (req, res) =>  {
  console.log(query);
  db.query(query)
    .then(result => {
      console.log(result.rows[0]);
      res.send(result);
    })
    .catch(e => {
      console.error(e.stack);
      res.sendStatus(500);
    })
};

const getTimes = async (req, res) => {
  
}

module.exports = {
  getCounts,
  getTimes
}