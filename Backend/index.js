const express=require('express');
const app=express();
require('./db/config');
const authRoutes=require('./routes/authRoutes');
const petRoutes=require('./routes/petRoutes');
const donateRoutes=require('./routes/donateRoute');
const stripe = require("stripe")('sk_test_51OfysrSHDYZD3Q5cI1UJZxVEuhVZQeyozm7hQgzuy9foNS4bmu1vYD0ilJmWZyXTAsSA2H00QPVN25iLulo7qVSs00CJPUSAfJ');

const cors=require('cors')

app.use(express.json());
app.use(cors());

app.use(authRoutes);
app.use(petRoutes);
app.use(donateRoutes);

app.listen(3000);
