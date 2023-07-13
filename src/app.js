const express = require('express');
const cors = require('cors');
const app = express();
const usersRouter = require('./routes/users');
const basketsRouter = require('./routes/baskets')


app.use(cors())
app.use(express.json());
app.use('/users', usersRouter);
app.use("/baskets", basketsRouter)


const port = 4040;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
