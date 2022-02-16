// requiring fs in node
const fs = require("fs");
const folderName = process.argv[2] || "New Folder";

// async version of creating a directory
// fs.mkdir("Animals", (err) => {
//   console.log("In the callback!");
//   if (err) throw err;
// });

// sync version of creating a directory and adding standard files
// BROKEN - needs updating to current syntax
try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`);
  fs.writeFileSync(`${folderName}/styles.css`);
  fs.writeFileSync(`${folderName}/app.js`);
} catch (e) {
  if (e) throw e;
  console.log("Oh no! An error has occurred!");
}
