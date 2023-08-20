import nodemailer from 'nodemailer';

//*https://nodemailer.com/smtp/testing/
//*https://www.npmjs.com/package/nodemailer

export const tagEmailService = async (userEmail, userName, peepContent) => {
    nodemailer.createTestAccount(async (err, account) => {
        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: account.user,
                pass: account.pass
            }
        });
        try {
            const info = await transporter.sendMail({
                from: '"Chitter" <tagged@chitter.com>',
                to: `${userEmail}`,
                subject: "Chitter - You've been tagged",
                text: `You were tagged by ${userName}, in their peep: "${peepContent}"`,
                html: `<b>You were tagged by ${userName}, in their peep: "${peepContent}"</b>`,
            });
            console.log(`Email sent to ${userEmail}: `, nodemailer.getTestMessageUrl(info));
        } catch (e) {
            throw e;
        }




    });

}
