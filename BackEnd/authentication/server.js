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










// app.use("/register", require("./routes/register"));
//verify email
// app.use("/auth", require("./routes/auth"));
// app.use("/refresh", require("./routes/refresh"));
// app.use("/logout", require("./routes/logout"));
//note: app.use fl route works in order !!!! edheka aaleh hatina verifyJWT taht authentication bsh tekhdem ken aal employees
// app.use(verifyJWT);
// app.use("/employees", require("./routes/api/employees"));








app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
});