const express = require("express");
const cors = require("cors");
const app = express();
const usersRouter = require("./routes/users");
const basketsRouter = require("./routes/baskets");
const addressRouter = require("./routes/address");
const ordersRouter = require("./routes/orders");

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use("/users", usersRouter);
app.use("/baskets", basketsRouter);
app.use("/orders", ordersRouter);
app.use("/address", addressRouter);

const port = 4040;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
