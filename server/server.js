const express = require("express");
const userRoute = require("./Routes/userRoute");
const filiereRoute = require("./Routes/filiereRoute");
const courRoute = require("./Routes/CourRoute");
const cors = require("cors");
const app = express();

const origin = "http://localhost:3000";

app.use(cors({ origin: origin }));
app.use(express.json());

app.use("/user", userRoute);
app.use("/filiere", filiereRoute);
app.use("/cour", courRoute);

app.listen(process.env.PORT || 5000, () => console.log("server listen"));
