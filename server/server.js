/*const { response } = require('express');
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

function sendEmail(){
    return new Promise((resolve, reject) =>{
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user: 'fraytern@gmail.com',
                pass: 'vtwiiytufdeuemln'
            }
        })

    const mail_configs = {
        from: '',
        to: '',
        subject: 'Testing Coding email',
        text: 'Hello world!'
    }
    transporter.sendMail(mail_configs, function(error, info){
        if(error){
            console.log(error)
            return reject({message:`An error has occurred`})
        }
        return resolve({message:"Email sent successfully"})
    })

    app.get('/', (req,res) => {
        sendEmail()
        .then(response => res.send(response.message))
        .catch(error => res.status(500).send(error.message))
    })

    })
}


/*
const authRouter = require('./routes/auth');
const messagesRouter = require('./routes/messages');

app.get("/api", (req, res) =>{
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

app.use("/api/messages", messagesRouter);
app.use("/api/auth", authRouter)


app.listen(5000, () =>{console.log("Server listening on port 5000...")} ) 

const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;

// Replace these with your own client ID and client secret
const clientId = 'YOUR_CLIENT_ID';
const clientSecret = 'YOUR_CLIENT_SECRET';
const redirectUrl = 'YOUR_REDIRECT_URL';

const oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);

// Replace this with the access token for the authenticated user
oauth2Client.setCredentials({
  access_token: 'YOUR_ACCESS_TOKEN',
});

async function sendData(name, email, message) {
  const gmail = google.gmail({version: 'v1', auth: oauth2Client});

  const encodedMessage = new Buffer(
    `From: ${name} <${email}>\r\n` +
    `To: "Receiver Name" <receiver@example.com>\r\n` +
    `Subject: Contact form submission\r\n\r\n` +
    `${message}`
  ).toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  const response = await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: encodedMessage,
    },
  });

  console.log(`Data sent with message ID: ${response.data.id}`);
}

// Example usage
sendData('John Doe', 'johndoe@example.com', 'This is a message from the contact form.');
 
module.exports = {sendData}; */

//import InterestForm from '../src/Web Pages/Components/InterestForm';
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', ()=>{
  resizeBy.send('welcome to my forma')
})

app.post('/api/forma', (req,res)=>{
  let data = req.body;
  let smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    auth:{
      user: 'fraytern@gmail.com',
      pass: process.env.PASSWORD
    }
  })


let mailOptions={
  from: data.email,
  to: 'fraytern@gmail.com',
  subject: `Message from ${data.name}`,
  html:`
  
  <h1>Message Info</h1>
  <ul>
    <li>Name: ${data.name}</li>
    <li>Last Name: ${data.lastName}</li>
    <li>Email: ${data.email}</li>
  </ul>

  <h3>Message</h3>
  <p>${data.message}</p>
  `
};

smtpTransport.sendMail(mailOptions, (error, response) => {
  if (error) {
    res.send(error);
  } else {
    res.send('Success');
  }
})

smtpTransport.close();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})

})
/*
async function sendEmail(name, email, message) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: process.env.USERNAME,
      pass: process.env.PASSWORD,
  },
  })

  const info = await transporter.sendMail({
    from: `"${InterestForm.formGridFirst}" <${InterestForm.formGridAddress1}>`,
    to: '"Nick Frayter" <fraytern@gmail.com>',
    subject: 'GURFC Contact form submission',
    text: `${InterestForm.formGridAddress2}`,
  })
  console.log('Message sent: %s', info.messageId);
}

sendEmail(); */