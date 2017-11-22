const settings = require("./settings");
const args = process.argv.slice(2);

const knex = require('knex')({
  client: 'pg',
  connection: {
    user: settings.user,
    password: settings.password,
    database: settings.database,
    host: settings.hostname,
    port: settings.port,
    ssl: settings.ssl
  }

});

  knex('famous_people')
  .insert({first_name: args[0],
    last_name: args[1],
    birthdate: args[2]}).then(console.log('good!'));
//   .asCallback(function(err, result){
//     if (err) {
//       return console.log(err);
//     }
//     knex.destroy();
//   })
// }

// addFamousPerson(args[0], args[1], args[2]);