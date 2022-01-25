import React, { useEffect, useState } from "react";

export default function () {
  const [wordData, setWordData] = useState([]);
  const [note, setNote] = useState("");
  async function handleChange(e) {
    setNote(e.target.value);

    try {
      const res = await fetch(`/getdata/${note}`, {
        method: "get",
      });
      const data = await res.json();
      setWordData(data);
    } catch (err) {
      console.log(err);
    }
  }
  function playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  }
  return (
    <>
      <h1>home</h1>
      {note}
      <center>
        <form method="get">
          <input type="text" onChange={handleChange} name="word" />
        </form>
        {wordData.word ? (
          <>
            {" "}
            <div>
              <button onClick={playAudio}>
                <span>Play Audio</span>
              </button>
            </div>
            <h2>Word: {wordData.word} </h2>
            <p>Phonetic: {wordData.phonetic} </p>
            <p> Audio: {wordData.phonetics[0].audio} </p>
            <audio className="audio-element">
              <source src={wordData.phonetics[0].audio}></source>
            </audio>
            <p> Origin: {wordData.origin} </p>
            {wordData.meanings[0] ? (
              <>
                <p> Part of Speech(1): {wordData.meanings[0].partOfSpeech} </p>
                <p>
                  {" "}
                  0.meanings[0].definitions[1].synonyms Meaning(1):{" "}
                  {wordData.meanings[0].definitions[0].definition}{" "}
                </p>
                <p>Example {wordData.meanings[0].definitions[0].example} </p>
                <p>
                  Synonyms:
                  {wordData.meanings[0].definitions[0].synonyms.map((one) => {
                    return (
                      <p style={{ display: "inline-block" }}>
                        {" "}
                        <strong> {one}</strong>{" "}
                      </p>
                    );
                  })}
                </p>
              </>
            ) : (
              ""
            )}
            {wordData.meanings[0].definitions[1] ? (
              <>
                {" "}
                <p> Part of Speech(2): {wordData.meanings[0].partOfSpeech} </p>
                <p>
                  {" "}
                  Meaning(2): {
                    wordData.meanings[0].definitions[1].definition
                  }{" "}
                </p>
                <p>Example: {wordData.meanings[0].definitions[1].example} </p>
                <p>
                  Synonyms:
                  {wordData.meanings[0].definitions[1].synonyms.map((one) => {
                    return <p style={{ display: "inline-block" }}>{one}</p>;
                  })}
                </p>{" "}
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          "No Word Found"
        )}
      </center>
    </>
  );
}
