const prompt = require('prompt-sync')();

export let mail = {
    from: '',
    to: '',
    subject: '',
    text: '',
    html: ''
}

export function getMail(){
    function setFrom(){
        const from = prompt('Digite seu email ');
        mail.from = from;
    }
    function setTo(){
        const to = prompt('Digite o destinatário ');
        mail.to = to;
    }
    function setSubject(){
        const subject = prompt('Digite o assunto ');
        mail.subject = subject;
    }
    function setText(){
        const text = prompt('Digite o texto do email ');
        mail.text = text;
    }
    function setHTML(){
        const html = prompt('Digite o HTML a ser enviado ');
        mail.html = html;
    }

    return {
        setFrom,
        setTo,
        setSubject,
        setText,
        setHTML
    }
}