const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3500;
const userRoutes = require('./routes/userRoutes');

app.use(cors());
app.use(express.json());
app.use('/admin', userRoutes);
app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
});