import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from './routes/user.js'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(201).json({ message: "Connected to Backend!" });
});
app.use("/user",userRoutes)

const mongoURI = 'mongodb+srv://A158_debug:073gxURdf30SXPSg@kloudstac-0.lacdzaz.mongodb.net/';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`App is Listening on PORT:${PORT}`))).then(() => console.log("Connected to MonogoDB"))
  .catch((error) => console.log(error))