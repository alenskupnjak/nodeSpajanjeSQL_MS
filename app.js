const sql = require('mssql');

let dbConfig = {
  server: "TATA",
  database: "Prva",
  user: "alen",
  password: "123",
  // port: 1433,
  // options: {
  //   encrypt: false,
  // },
};

const conn = new sql.ConnectionPool(dbConfig);

conn.connect(async function (err) {
  if (err) {
    console.log(err); 
  }

  const req = new sql.Request(conn);
  let zapis = await req.query('SELECT * from Pokus', function (err, record) {
    if (err) {
      console.log();
    } else {
      // console.log(record);
      console.log(record.recordsets[0][0].name);
      return ispisime(record.recordsets[0]);
      // console.log(JSON.stringify(record));
    }

    // let z = record[0].name

    conn.close();
  });
  console.log('Zapis=',zapis);
  
});


function ispisime (data) {
  console.log('data=',data);
  
}
