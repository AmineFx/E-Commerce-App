const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// connexion MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connecté ✅"))
  .catch(err => console.log(err));

// routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/user"));
app.use("/api/products", require("./routes/product"));
app.use("/api/orders", require("./routes/order"));

app.listen(5000, () => console.log("Serveur lancé sur le port 5000 🚀"));






