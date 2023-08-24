import express from "express";

const app = express();
const router = express.Router();

app.use(express.json());

router.get("/", function (req, res) {
  res.json({
    message: "Hello World! 2",
  })
});


app.use(router);

export default app;