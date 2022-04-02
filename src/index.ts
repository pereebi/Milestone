let message: string = "Hello World";
console.log(message);

// importing required dependencies
import express, { Application, Request, Response } from "express";
import bodyParser from 'body-parser';
import routes from "./routes";

// express object
const app: Application = express();

app.use(bodyParser.json());

// port decleared
const PORT = 5050;

// get method
app.use("/api", routes);

// listening on the port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
  