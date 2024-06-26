import express from "express";
// require('dotenv').config()

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Atom Joke",
      content:
        "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 2,
      title: "Anti-gravity Joke",
      content:
        "I'm reading a book on anti-gravity. It's impossible to put down!",
    },
    {
      id: 3,
      title: "Scarecrow Joke",
      content:
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 4,
      title: "Eyebrows Joke",
      content:
        "I told my wife she was drawing her eyebrows too high. She looked surprised!",
    },
    {
      id: 5,
      title: "Bicycle Joke",
      content: "Why did the bicycle fall over? Because it was two-tired!",
    },
  ];

  res.send(jokes);
});

app.listen(port, () => {
  console.log("Serve at http://localhost:${port}");
});
