var admin = require('firebase-admin');
const http = require('http');

var gd = require('querystring');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://todos-c9840-default-rtdb.europe-west1.firebasedatabase.app/"
});

var db = admin.database();

//https://stackoverflow.com/questions/4295782/how-to-process-post-data-in-node-js
const server = http.createServer(function (request, response) {
    //TODO: Adaptar el código de atrapado para poder pasar arrays
    if (request.method == "POST") {
        console.log("Algo por POST");
        var body = [];

        request.on('data', function (data) {
            console.log(data);
            body.push(data);

        });

        request.on('close', () => {
            console.log("Se acabo");
            var token = Buffer.concat(body).toString();
            console.log(token);

            var message = {
                notification: {
                    title: 'Un contacto ha tenido COVID-19',
                    body:'Un contacto ha tenido COVID-19'
                },
                token: token
            };

            //TODO: Comprobar si el dato que nos estan pasando esta en BBDD
            admin.messaging().send(message).then((res) => {
                console.log("De puta madre socio " + res);
            }).catch((err) => {
                console.error("puta mierda " + err);
            });
        });

    } else {
        console.log("Otra cosa");
    }
})


const port = 3000;

const host = "192.168.1.43";
try {
    server.listen(port, host)
} catch (error) {
    console.log(error);
}
console.log("Escuchando en " + host + ":" + port);




// ref.once('value', data => {
//     console.log(data.val());
// });

// var topic = 'all';



// admin.messaging().send(message).then((response) => {
//     console.log("Enviado de puta madre socio " + response);
// }).catch ((error) => {
//     console.log("puta mierda " + error);
// });