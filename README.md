#sendEmail

this project was done with a single JS file through a LIB called "nodemailer"

#getStart

installing NodeJS:
you can install the node on your machine through the node's official website
https://nodejs.org/

installing nodemailer:
run the command "npm install nodemailer" on the linux terminal, in the project folder

running the project:

modify object parameters in JSON format.

logo on the "transport" object
you can change the email service at "service: <your email service>
then change the values ​​of "user" and "pass" respectively to the values ​​of your Mail account

in the same way, change the values ​​of the "mailOptions" object
"from: <sender email>"
"to: <recipient email>"
"subject: <email subject>"
"text: <email text>"

you can also send email with HTML body replacing the text tag for html tag as commented on app.js

go to the project's / src / path and run the app.js file using the node
example: node /src/app.js

There, your email was sent :)
use responsibly, I am not responsible for any malicious email sent by third parties.

likely errors:
some email services block this type of sending, you need to enable email sending from less secure sources in your service settings.
