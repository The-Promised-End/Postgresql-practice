var myArgs = process.argv.slice(2);
const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

function lookupPeopleByFirstOrLastName(name) {
  client.query("SELECT * FROM famous_people WHERE first_name = $1 OR last_name = $1", [myArgs[0]], (err, result) => {
    if (err) {
      console.error("Error running query! ", err)
    } else {
      console.log(result.rows[0]);
      client.end();
    }
  });
};

client.connect((err) => {
  if (err) {
    console.error("Connection error. ", err)
  }
  lookupPeopleByFirstOrLastName(myArgs[0]);
});