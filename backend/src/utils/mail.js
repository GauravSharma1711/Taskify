 import Mailgen from 'mailgen'
 import nodemailer from 'nodemailer'

  export const sendMail = async (options)=>{
      const mailGenerator = new Mailgen({
    theme: 'default',
    product: {
       
        name: 'Task Manager',
        link: 'https://mailgen.js/'
       
    },
 });


  

const emailText = mailGenerator.generatePlaintext(options.mailGenContent);
const emailHTML = mailGenerator.generate(options.mailGenContent);

 const transporter = nodemailer.createTransport({
  host:process.env.MAILTRAP_HOST,
  port: process.env.MAILTRAP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user:process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASSWORD,
  },
});




const mail = {
     from: '"m@m.com',
    to:options.email,
    subject:options.subject,
    text: emailText, // plain‑text body
    html: emailHTML, // HTML body
}

  try {
    await transporter.sendMail(mail)
  } catch (error) {
    console.error("email failed",error)
  }

 }

export const emailVerificationMailGenContent = (username,verificationUrl) =>{

    return {
        body:{
            name:username,
            intro:"Welcome to our app",
             action: {
            instructions: 'To get started with our app, please click here:',
            button: {
                color: '#22BC66', // Optional action button color
                text: 'verify your email',
                link: verificationUrl,
            }
        },
     outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
    }
        }
    }
  


  export  const forgotPasswordMailGenContent = (username,passwordResetUrl) =>{

    return {
        body:{
            name:username,
            intro:"We got a request to reset your password",
             action: {
            instructions: 'To change your password, please click here:',
            button: {
                color: '#22BC66', // Optional action button color
                text: 'Reset password',
                link: passwordResetUrl,
            }
        },
     outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
    }
        }
    }