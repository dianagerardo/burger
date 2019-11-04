var connection = require("./connection");

// In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

    //  `selectAll()`
    //  `insertOne()`
    //  `updateOne()`

//    Export the ORM object in `module.exports`.

// Object Relational Mapper (ORM)
var orm = {
  selectAll: function(tableInput) {
    var queryString = `SELECT * FROM ${tableInput} `;
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
//   insertOne: function(table, cols, vals) {
//     var queryString = `INSERT INTO ${table}`;
//     console.log(queryString);
//     connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   },
//   updateOne: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
//     var queryString =
//       "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

//     connection.query(
//       queryString,
//       [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
//       function(err, result) {
//         if (err) throw err;
//         console.log(result);
//       }
//     );
//   }
};

module.exports = orm;