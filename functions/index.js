const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51KpA07SGUqhMoZoPSx8nMRLig7Y5pkjZRlR0GKSabBMIW4UfNNYRH4yo7Z6BVrO7fB0tdPuP4lP7XZB9fhUbbnmj00nauWON4S')

//API

//app config
const app = express();

//middlewares
app.use(cors({ origin: true }));
app.use(express.json());


//api routes
app.get('/', (request, response) => response.status(200).send('Hello bhomik'))



app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("payment request received for >>", total);
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });
    //ok created paymentIntent

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//listener commands
exports.api = functions.https.onRequest(app)


//example api endpoint
//("http://localhost:5001/clone-2edb2/us-central1/api")