const {sendEmail} = require('./nodeMailer.services');

const sendTestEmail = async (req, res) => {
    try {
        const { to, subject, message } = req.body;

        await sendEmail(to, subject, message);


        res.status(200).json({ message: 'Correo enviado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {sendTestEmail};