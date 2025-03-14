const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user.js');
const authRouter = require('./routes/auth.js');
const orderRouter = require('./routes/order.js');
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Middleware
app.use(express.json());
app.use(cors());

// Basic route
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/order', orderRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
