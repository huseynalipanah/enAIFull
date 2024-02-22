import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { loginRouter } from "./src/Router/LoginRoute.js";
import { newsRouter } from "./src/Router/NewsRoute.js";
import { registerRouter } from "./src/Router/RegisterRoute.js";
import { slideRouter } from "./src/Router/SlideRoute.js";
import { userRouter } from "./src/Router/UserRoute.js";
import { AiModelRouter } from "./src/Router/AiModelRoute.js";
import { CategoryAiRouter } from "./src/Router/CategoryAIRoute.js";


const app = express();
const port = 3000;


app.use(express.json());
app.use(cors());
app.use("/slide", slideRouter);
app.use("/news", newsRouter);
app.use("/user", userRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/aimodels", AiModelRouter);
app.use("/categories", CategoryAiRouter);







mongoose
  .connect("mongodb+srv://huz3yn:huseyn04ru@hakunamatata.wsdwnh9.mongodb.net/")
  .then(() => console.log("DataBase Connected!"))
  .catch((error) => console.log(error.message));

  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
