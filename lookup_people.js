const pg = require("pg");
const settings = require("./settings");

const args = process.argv.slice(2);

const client = new pg.Client({
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
});

function lookupPeopleByFirstOrLastName(name, cb) {
  client.query("SELECT * FROM famous_people WHERE first_name = $1 OR last_name = $1", [name], cb);
}

client.connect((err) => {
  if (err) {
    console.error("Connection error. ", err);
    return;
  }
  lookupPeopleByFirstOrLastName(args[0], (err, result) => {
    if (err) {
      console.error("Error running query! ", err);
      return;
    }
    console.log(result.rows[0]);
    client.end();
  });
});