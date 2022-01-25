const express = require("express");
const axios = require("axios");
const { response } = require("express");
const app = express();

app.get("/getdata/:word", async (req, res) => {
  const word = req.params.word;
  await axios
    .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) => {
      res.status(200).json(response.data[0]);
    });
});

const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
app.listen(3000, () => {
  console.log("Port no. 3000");
});
