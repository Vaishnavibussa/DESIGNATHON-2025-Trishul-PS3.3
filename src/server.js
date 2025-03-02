const { exec } = require("child_process");
const express = require("express");
const app = express();

app.get("/run-applet", (req, res) => {
  exec("python path/to/app.py", (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${stderr}`);
      res.status(500).send("Failed to launch the applet.");
    } else {
      console.log(`Output: ${stdout}`);
      res.send("Applet launched successfully!");
    }
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
