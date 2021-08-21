var mysql = require('mysql');
export var conexion= mysql.createConnection({
    host : 'data-avimo.cgriqmyweq5c.us-east-2.rds.amazonaws.com',
    database : 'testing_ali_fullstack',
    user : 'testing',
    password : 'Pruebas%ALI%2020',
});

conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
});