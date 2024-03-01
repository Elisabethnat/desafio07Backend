import nodemailer from 'nodemailer';
import { __dirname } from '../path.js';

//Conexion Node Mailer
let transporter= nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'santiagosordi2@gmail.com',
        pass: process.env.PASWORD_EMAIL,
        authMethod:'LOGIN'
    }
});

const getMail = async (req, res)=>{
    try {
        const resultado = await transporter.sendMail({
            from: 'TEST Santi santiagosordi2@gmail.com',
            to: 'santiagosordi@gmail.com',
            subject: 'Hola profe! Soy Goku!',
            html:
                `
                <div>
                    <h1> Si te gusta programar tenes que dominarlo </h1>
                </div>
            `,
            attachments: [{
                filename: 'original.jpg',
                path: __dirname + '/image/goku.jpg',
                cid: 'goku.jpg'
            }]
        });
        console.log(resultado);
        res.status(200).send({mensaje: "Correo enviado"});
        ;

    } catch (error) {
        res.status(400).send({ error: `Error al enviar correo: ${error}` });
    }
};

const mailController = {
    getMail,
};

export default mailController;