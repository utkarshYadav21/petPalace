const express=require('express');
const app=express();
require('./db/config');
const authRoutes=require('./routes/authRoutes');
const petRoutes=require('./routes/petRoutes');
const donateRoutes=require('./routes/donateRoute');
const stripe = require("stripe")('PUT YOUR OWN STRIPE KEY');

const cors=require('cors')

app.use(express.json());
app.use(cors());

app.use(authRoutes);
app.use(petRoutes);
app.use(donateRoutes);

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

