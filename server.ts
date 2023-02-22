import express from "express";

const app = express();
const router = express.Router();
app.use(express.json());

router.get("/", function (req, res) {
  res.json({
    message: "Hello World!",
  })
});


app.use(router);

export default app;