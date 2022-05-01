const express  = require("express");
require("./db");
const TodoRouter = require("./routes/todo.routes");
const app = express();
app.use(express.json());
app.use("/api/todos",TodoRouter);
app.listen(9090,() => console.log("Server Started at Port: 9090"))
