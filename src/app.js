const express = require('express');
const app = express();
const nodemail = require('nodemailer');

let transport = nodemail.createTransport({
    service: 'gmail',
    auth:{
        user: 'kevin.almeida1111.ka@gmail.com',  // this's my real email, don't send me span :)
        pass: ''
    }
})

let mailOptions = {
    from: 'yourMail@gmail.com',
    to: 'yourFriend@example.com',
    subject: '',
    text: '<write your message here!>'
  //html: '<h1>example</h1>'     << you can send html
}

    transport.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Email sent:' + info.response);
        }
    });


app.listen(3000);