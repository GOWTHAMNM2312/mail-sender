const nodemailer = require('nodemailer');

// Replace with your actual email credentials
const transporter = createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'balaji.imtex2025@gmail.com',
    pass: 'vkfaitffsbwtysrd'
  }
});

function sendEmail(recipientEmail, subject, body, pdfPath) {
  const mailOptions = {
    from: 'balaji.imtex2025@gmail.com',
    to: recipientEmail,
    subject: 'the broucher you asked for',
    text: 'thankyou for showing intrest in balaji autotech pvt please find the attachment helpfull.' ,
    attachments: [
      {
        filename: 'dc.pdf',
        path: 'c:\Users\enn07\Desktop\dc.pdf'
      }
    ]
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        reject(error);
      } else {
        console.log('Email sent:', info.response);
        resolve();
      }
    });
  });
}

// Example usage:
sendEmail('recipient@example.com', 'Test Email', 'This is a test email.', '/path/to/your/pdf.pdf')
  .then(() => {
    console.log('Email sent successfully!');
  })
  .catch((error) => {
    console.error('Error sending email:', error);
  });