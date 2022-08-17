/**
 *  Your code ⬇️
 *
 */
const express = require("express");
const app = express();
const data = require("./disney.json");
const port = 3000;
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is rocking @ http://localhost:${port}`);
});

app.get("/characters", (req, res) => {
  const name = req.query.name;
  if (name) {
    const result = data.filter((oneCharacter) => {
      return oneCharacter.name.includes(name);
    });
    return res.json({
      message: `Found ${result.length} character(s)`,
      result,
    });
  }
  res.json(data);
});

app.get("/characters/:_id", (req, res) => {
  const { _id } = req.params;
  const findingThatCharacter = data.find((character) => {
    return character._id === Number(_id);
  });
  return res.json(findingThatCharacter);
});

app.post("/characters", (req, res) => {
  //   const { name, films } = req.body;
  //   const name = req.query.name;
  //   const films = req.query.films;
  const { name, films } = req.query;
  let _id = data.at(-1)._id;
  _id++;
  const characterToCreate = {
    name,
    films,
    _id,
  };
  data.push(characterToCreate);
  res.json({
    message: `You created ${name} ! Good job.`,
    createdCharacter: characterToCreate,
  });
});

app.get("/characters/films", (req, res) => {
  let result = [...characters];
  if (film) {
    result.filter((character) => {
      return character.name.some();
    });
    /**
     * A character can be in multiple movies, we will want to filter the characters
     * based on the fact that the film variable (the film name) is included in atleast some
     * of the films of a character.
     */
    // result = // Your code :)
  }
  if (name) {
    // result = // Your previous code (with a little edit) for the name could be here!
  }
  res.json(result);
});
