//var admin = require('firebase-admin');
const http = require('http');

//https://stackoverflow.com/questions/4295782/how-to-process-post-data-in-node-js
const server = http.createServer(function (request, response) {
    if (request.method == "POST") {
        console.log("Algo por POST");
        var body = '';

        request.on('data', function (data) {
            body += data;

        });
        request.on('data', data => {
            console.log(data);
        });

        request.on('close', () => {
            console.log("Se acabo");
            console.log(gd.parse(body));
        });

    }else {
        console.log("Otra cosa");
    }
})


const port = 6969;

const host = "https://fabadalitoral-todos.zeet.app";
try {
    server.listen(port, host);
//server.listen(host);
} catch (error) {
   console.log(error); 
}
console.log("Escuchando en " + host + ":" + port);


// admin.initializeApp({
//     credential:admin.credential.applicationDefault(),
//     databaseURL:'https://todos-c9840-default-rtdb.europe-west1.firebasedatabase.app/'
// });

// var db = admin.database();
// var ref = db.ref("/hola");

// ref.once('value', data => {
//     console.log(data.val());
// });

// var topic = 'all';

// var message = {
//     notification:{
//         title:'Hola a todos',
//         body:'Hola doctor nick'
//     },
//     topic:topic
// };

// admin.messaging().send(message).then((response) => {
//     console.log("Enviado de puta madre socio " + response);
// }).catch ((error) => {
//     console.log("puta mierda " + error);
// });