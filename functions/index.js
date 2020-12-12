const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { request } = require('express');
const stripe = require('stripe')('sk_test_51HwiACCaW2R8VUI3aTJBKzeRAO6X8vY3HCu13CVC89XItKBB5jSCvCATuk9ead4BCkt5j1R1SAYmvzyfJJIYmLx300wd0UtlDX');

/* Things we need for this API */

// App config
const app = express();


//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async(request, response) => {
    const total = request.query.total;
    console.log('Payment request recieved !!!', total );

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "inr",
    });

    //OK- Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listen command
exports.api = functions.https.onRequest(app)

//Example endpoint
//http://localhost:5001/clone-3094e/us-central1/api
