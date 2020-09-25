import nodemailer from 'nodemailer';

class Mail{
 

    constructor(){

    }

       
    private hosting = {
        host: '',
        port: '587',
        secure: false,
        auth: {
            user: '',
            pass: ''
        }
    }

    private mail = {
        from: '',
        to: '',
        subject: '',
        text: '',
        html: ''
    }

    async send(){

        let account = await nodemailer.createTestAccount();
        let login = nodemailer.createTransport(this.hosting);
        let SendMail = await login.sendMail(this.mail);
    
        return nodemailer.getTestMessageUrl(SendMail);
    }
}

