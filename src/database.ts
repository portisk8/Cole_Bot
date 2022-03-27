import mongoose from "mongoose";
import config from "./config";

mongoose
  .connect(config.MONGO_URI)
  .then((db) => console.log(`DB is connected`))
  .catch((err) => console.log(err));
