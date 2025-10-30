const transporter = require('../config/mailer');

const sendEmail = async (to, subject, message) =>  {
    await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to,
        subject,
        html: `<p>${message}</p>`,
        
        attachments: 
        [
            {
                filename: 'attachment.txt',
                content: 'Prueba de archivo adjunto'
            },
        ]
    });
    
};

module.exports = { sendEmail };
