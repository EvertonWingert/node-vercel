import express from "express";
import config from "@/src/config/app";

const app = express();
const router = express.Router();

app.use(express.json());

router.get("/", function (req, res) {
  res.json({
    message: "Hello World! 2",
    port: config.port,
  })
});


app.use(router);

export default app;