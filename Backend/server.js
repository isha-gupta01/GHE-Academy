require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Email Configuration
const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email provider (Gmail, Outlook, etc.)
  auth: {
    user: process.env.EMAIL_USER, // Store in .env
    pass: process.env.EMAIL_PASS, // Store in .env
  },
});

app.post("/send-email", async (req, res) => {
  const { firstName, lastName, email, phone, subject, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "ishaguptavnsv@gmail.com", // Replace with your client's email
    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    html: `
      <h2>Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject || "No subject"}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
