const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

// POST endpoint to send email
app.post("/send-email", async (req, res) => {
  try {
    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "godoyleebron3@gmail.com",       // replace with your Gmail
        pass: "your-app-password"          // use Gmail App Password
      }
    });

    // Send email
    await transporter.sendMail({
      from: "yourgmail@gmail.com",
      to: "yourgmail@gmail.com",
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
app.listen(3000, () => console.log("Server running on http://localhost:3000"));