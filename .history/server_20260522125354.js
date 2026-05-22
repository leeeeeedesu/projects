const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();


const app = express();
app.use(express.json());

// POST endpoint to send email
app.post("/send-email", async (req, res) => {
  try {
    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,       // replace with your Gmail
        pass: process.env.GMAIL_PASS          // use Gmail App Password
      }
    });

    // Send email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: "Proposal Response",
      text: req.body.response || "Yes to your proposal"
    });

    res.send("Email sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email");
  }
});

// Start server
app.listen(process.env.port || 3000, () => console.log("Server running on https://my-surprise-qlfo.onrender.com")); 