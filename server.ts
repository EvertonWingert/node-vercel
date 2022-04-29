import express from "express";

const app = express();
const router = express.Router();

// respond with "hello world" when a GET request is made to the homepage
router.get("/", function (req, res) {
  res.json({
    message: "Hello World!",
  })
});


app.use(express.json());
app.use(router);


export default app;