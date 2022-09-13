// const fs = require("fs"); //to access crt and key file 
const http = require("http"); //for https social login

const express = require("express");
const cors = require("cors");

const knexFile = require("./knexfile").development;
const knex = require("knex")(knexFile);


const LinkRouter = require("./Routers/LinkRouter");
const LinkService = require("./Services/LinkService");
require("dotenv").config();
const port = 8888;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(express.static(__dirname+'/public'));

const linkService = new LinkService(knex);
app.use("/", new LinkRouter(linkService, express).router());

// const eventService = new EventService(knex);
// app.use("/event", isLoggedIn.isLoggedIn, new EventsRouter(eventService, express).router());


http
  .createServer(app)
  .listen(port, () => console.log(`Listening to port ${port}`));