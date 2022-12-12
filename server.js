const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

// MIDDLEWARES
app.use(express.static("./public"));
app.use(express.json());

app.get("/", (req, res) => {
  // res.status(200).sendFile(path.resolve(__dirname, "./public/contact.html"));
  res.status(200).sendFile(__dirname + "/public/contact.html");
});

app.post("/", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    // host: "smtp.gmail.com",
    secure: false,
    auth: {
      user: "app4bells@gmail.com",
      pass: "qjfghdphbfhyezdq",
    },
  });

  const emailOptions = {
    // from: "olalekanbello534@gmail.com",
    // to: "imagine.media360@gmail.com",
    // subject: `Message from Olalekan`,
    // text: "Testing mail",
    from: req.body.email,
    to: "app4bells@gmail.com",
    subject: `Message from ${req.body.name}: ${req.body.subject}`,
    text: req.body.message,
  };

  transporter.sendMail(emailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log(`Email sent ${info.response}`);
      res.send("success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
