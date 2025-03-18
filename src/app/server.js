require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "SendGrid",
    auth: {
        user: "apikey",
        pass: process.env.SENDGRID_API_KEY,
    },
});

app.post("/send", async (req, res) => {
    const { name, email, phone, service } = req.body;

    const mailOptions = {
        from: `${email}`,
        to: "admin@livingenvironmentt.com",
        subject: "New Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Error sending email" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
