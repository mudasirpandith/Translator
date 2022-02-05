const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.post("/getdata", (req, res) => {
  const { word, inputlan, outputlan } = req.body;
  console.log(outputlan);
  const options = {
    method: "POST",
    url: "https://microsoft-translator-text.p.rapidapi.com/translate",
    qs: {
      to: outputlan,
      "api-version": "3.0",
      from: inputlan,
      profanityAction: "NoAction",
      textType: "plain",
    },
    headers: {
      "content-type": "application/json",
      "x-rapidapi-host": "microsoft-translator-text.p.rapidapi.com",
      "x-rapidapi-key": "-------------------------------------",
      useQueryString: true,
    },
    body: [{ Text: word }],
    json: true,
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    res.status(200).json(body);
  });
});

const path = require("path");
const req = require("express/lib/request");
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
app.listen(3000, () => {
  console.log("Port no. 3000");
});
