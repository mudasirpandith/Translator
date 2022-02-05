import React, { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { Button } from "@mui/material";
export default function Home() {
  const [wordData, setData] = useState({
    word: "",
    inputlan: "",
    outputlan: "",
  });
  const [translated, setTranslated] = useState("");

  function updateForm(value) {
    return setData((prev) => {
      return { ...prev, ...value };
    });
  }
  async function onsubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch("/getData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(wordData),
      });
      const data = await res.json();
      setTranslated(data);
    } catch (err) {
      console.log(err);
    }
  }
  // f7d122cd96msh727dd7eed5f7076p13de59jsne834b00a67cc;
  return (
    <>
      <div className="boxa">
        <h1>Translator</h1>
        <form method="POST" onSubmit={onsubmit}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { width: "30ch" },
            }}
            display="inline-block"
            noValidate
            autoComplete="off"
          >
            <TextField
              id="filled-textarea"
              label="Type Here..."
              placeholder="Translator"
              multiline
              variant="filled"
              type="text"
              value={wordData.word}
              onChange={(e) => updateForm({ word: e.target.value })}
              name="word"
            />
          </Box>{" "}
          <br />
          <div className="lan">
            <Box sx={{ minWidth: 40 }}>
              <FormControl>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Translate From
                </InputLabel>
                <NativeSelect
                  onChange={(e) => updateForm({ inputlan: e.target.value })}
                  name="inputlan"
                  id="lans"
                  defaultChecked="en"
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value="en">Select Lang</option>
                  <option value="ar">Arabic</option>
                  <option value="as">Assamese</option>
                  <option value="az">Azarbaijani</option>
                  <option value="bg">Bulgarian</option>
                  <option value="bn">Bangla</option>
                  <option value="izh">Chinese</option>
                  <option value="en">English</option>
                  <option value="fr">French</option>{" "}
                  <option value="de">German</option>{" "}
                  <option value="gu">Gujrati</option>
                  <option value="hi">Hindi</option>{" "}
                  <option value="ja">Japanese</option>
                  <option value="kn">Kannada</option>
                  <option value="ml">Malayalam</option>
                  <option value="pa">Panjabi</option>
                  <option value="fa">Persian</option>
                  <option value="es">Spanish</option>
                  <option value="te">Telugu</option>
                  <option value="bo">Tibetan</option>
                  <option value="tr">Turkish</option>
                  <option value="ur">Urdu</option>
                </NativeSelect>
              </FormControl>
            </Box>
          </div>
          <div className="lan">
            <Box sx={{ minWidth: 40 }}>
              <FormControl>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Translate To
                </InputLabel>
                <NativeSelect
                  onChange={(e) => updateForm({ outputlan: e.target.value })}
                  name="outputlan"
                  id="lans"
                  defaultChecked="ur"
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                >
                  {" "}
                  <option value="en">Select Lang</option>
                  <option value="ar">Arabic</option>
                  <option value="as">Assamese</option>
                  <option value="az">Azarbaijani</option>
                  <option value="bg">Bulgarian</option>
                  <option value="bn">Bangla</option>
                  <option value="izh">Chinese</option>
                  <option value="en">English</option>
                  <option value="fr">French</option>{" "}
                  <option value="de">German</option>{" "}
                  <option value="gu">Gujrati</option>
                  <option value="hi">Hindi</option>{" "}
                  <option value="ja">Japanese</option>
                  <option value="kn">Kannada</option>
                  <option value="ml">Malayalam</option>
                  <option value="pa">Panjabi</option>
                  <option value="fa">Persian</option>
                  <option value="es">Spanish</option>
                  <option value="te">Telugu</option>
                  <option value="bo">Tibetan</option>
                  <option value="tr">Turkish</option>
                  <option value="ur">Urdu</option>
                </NativeSelect>
              </FormControl>
            </Box>{" "}
          </div>{" "}
          <br />
          <Button variant="contained" color="success" type="submit">
            {" "}
            Translate
          </Button>
        </form>{" "}
        {translated ? (
          <div className="translated">
            {" "}
            <p>Translated to {wordData.outputlan}</p>
            <h1>{translated[0].translations[0].text} </h1>
          </div>
        ) : (
          <div className="translated">Type a word/sentence to translate</div>
        )}{" "}
      </div>{" "}
      <footer>
        <center>
          <p>Mudasir Ahmad Pandith 2022</p>
        </center>
      </footer>
    </>
  );
}
