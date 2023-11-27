const express = require("express");
const userRoute = require("./Routes/userRoute");
const filiereRoute = require("./Routes/filiereRoute");
const courRoute = require("./Routes/CourRoute");
const actuRoute = require("./Routes/actuRoute");
const commentRoute = require("./Routes/commentaireRoute");
const cors = require("cors");
const app = express();

const origin = "http://localhost:3000";

app.use(cors({ origin: origin }));
app.use(express.json());

app.use("/user", userRoute);
app.use("/filiere", filiereRoute);
app.use("/cour", courRoute);
app.use("/actu", actuRoute);
app.use("/commentaire", commentRoute);
app.listen(process.env.PORT || 5000, () => console.log("server listen"));
