const prompt = require('prompt-sync')();

export let hosting: any = {
    host: 'smtp.gmail.com',
    port: '587',
    secure: false,
    auth: {
        user: '',
        pass: ''
    }
}

export function getHost(){
    function setUser(){
        const user = prompt('Digite seu email ');
        hosting.auth.user = user;
    }

    function setPass(){
        const pass = prompt('Digite sua senha ');
        hosting.auth.pass = pass;
    }

    return{
        setUser,
        setPass
    }
}
    