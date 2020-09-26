import * as nodemailer from 'nodemailer';
import * as readline from 'readline';


class App{
 
     private rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: ">"
    })

    constructor(){
      this.getStart();
    }


    private hosting: any = {
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

    async getStart(){
        await this.getLogin();
        await this.getMail();
        await this.send();
    }

    async getLogin(){
        const host = () => {
            return new Promise((resolve , reject) => {
                this.rl.question("Digite o serviço de email ", (host) => {
                    this.hosting.host = host;
                    resolve();
                })
            })
           
        }
        const user = () => {
            return new Promise((resolve , reject) => {
                this.rl.question("Digite seu Email ", (email) => {
                    this.hosting.auth.user = email;
                    resolve();
                })
            })
        }
        const pass = () => {
            return new Promise((resolve , reject) => {
                this.rl.question("Digite sua senha ", (senha) => {
                    this.hosting.auth.pass = senha;
                    resolve();
                    this.rl.close();
                })
            })
        }

        const main = async () => {
            await host();
            await user();
            await pass();
        }

        main();
    }

    getMail(){

        const to = () => {
            return new Promise((resolve , reject) => {
                this.rl.question("Digite o email que irá receber o email! ", (to) => {
                    this.mail.to = to;
                    resolve();
                })
            })
           
        }

        const subject = () => {
            return new Promise((resolve , reject) => {
                this.rl.question("Digite o assunto do email ", (subject) => {
                    this.mail.subject = subject;
                    resolve();
                })
            })
           
        }

        const text = () => {
            return new Promise((resolve , reject) => {
                this.rl.question("Digite o texto do email ", (texto) => {
                    this.mail.text = texto;
                    resolve();
                    this.rl.close();
                })
            })
           
        }

        const main = async () => {
            await to();
            await subject();
            await text();
        }

        main();
    }

    async send(){

        let account = await nodemailer.createTestAccount();
        let login = nodemailer.createTransport(this.hosting);
        let SendMail = await login.sendMail(this.mail);
    
        return nodemailer.getTestMessageUrl(SendMail);
    }

}

new App