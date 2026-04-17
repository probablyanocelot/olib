// This code demonstrates how to convert a JavaScript object to JSON, write it to a file, read it back, modify it, and write it again.

const { BuildObject } = require("./build_object");
const fs = require("fs");

// First, we create an object with a property 'table' which is an array.
class WriteJSON extends BuildObject {
  constructor(obj) {
    super();
    this.obj = obj;
    this.directory = __dirname;
  }
  getDataJSON() {
    return JSON.stringify(this.obj);
  }
  fromFile(filename, callback) {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) {
        callback(err);
      } else {
        this.obj = JSON.parse(data);
        callback(null, this.obj);
      }
    });
  }
  toFile(filename, callback) {
    const json = this.getDataJSON();
    fs.writeFile(filename, json, "utf8", callback);
  }
}

const writer = new WriteJSON({ table: [] });
writer.setProperty("table", [{ id: 1, square: 2 }]);

const json = writer.getDataJSON();

// Write the JSON string to a file named 'data.json'.
writer.toFile("data.json", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("Data written to file successfully.");
  }
});

// Read the JSON string back from the file and log it to the console.
writer.fromFile("data.json", (err, data) => {
  if (err) {
    console.error("Error reading from file:", err);
  } else {
    console.log("Data read from file:", data);
    // Modify the object and write it back to the file.
    writer.setProperty("table", [{ id: 2, square: 4 }]);
    writer.toFile("data.json", (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log("Data updated and written to file successfully.");
      }
    });
  }
});
