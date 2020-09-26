import { send } from './send';
import { getMail } from './mail';
import { getHost } from './hosting';

const getmail = getMail();
const gethost = getHost();
const sending = send();

try{
    getmail.setFrom();
    getmail.setTo();
    getmail.setSubject();
    getmail.setText();
    getmail.setHTML();

    gethost.setUser();
    gethost.setPass();

    sending.start();

}catch(error){
    console.log(error);
}
 

    