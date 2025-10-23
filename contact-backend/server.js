const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send', async (req, res) => {
    const { name, _replyto, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'YOUR_GMAIL@gmail.com', // your Gmail
            pass: 'YOUR_APP_PASSWORD'     // Gmail App Password
        }
    });

    let mailOptions = {
        from: _replyto,
        to: 'mithamadhu8785@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${_replyto}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Failed to send message.' });
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));
