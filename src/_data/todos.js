const axios = require("axios");
const fs = require("fs");

const LOCAL_FILE = "./dist/api/todos.json";

const init = async () => {
  if (fs.existsSync(LOCAL_FILE)) {
    console.log("Todos from local file");
    let fileContent = fs.readFileSync(LOCAL_FILE);
    return JSON.parse(fileContent);
  }

  try {
    console.log("Todos from API");
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = init();
