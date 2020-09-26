import * as nodemailer from 'nodemailer';
import { hosting } from './hosting';
import { mail } from './mail';

export function send(){

    const start = async () => {

        let account = await nodemailer.createTestAccount();
        let login = nodemailer.createTransport(hosting);
        let SendMail = await login.sendMail(mail);
    
        return nodemailer.getTestMessageUrl(SendMail);
    }

    return {
        start,
    }
}