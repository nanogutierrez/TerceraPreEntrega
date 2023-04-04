import express from 'express';
import UserManager from './UserManager.js'

const app = express()


const productos = [
    {
      id: 1,
      nombre: "Mousse de chocolate",
      precio: 2000,
    },
    {
      id: 2,
      nombre: "Marquise",
      precio: 1700,
    },
    {
      id: 3,
      nombre: "Chocotorta",
      precio: 1500,
    },
  ];
  

app.get('/', (req, res) => {
    res.send('<h1 style="color:red;"> Bienvenidos a mi pagina web </h1>')
})

app.get('/usuario/:id', async (req, res) => {
    const { id } = req.params
    const users = userManager.getUsers()
    console.log(users)
    const user = users.find(user => user.id == id)
    console.log(user)

    if(!user) {
        return res.send('User not found')
    }

    res.json(user)

})

app.get('/productos', (req, res) => {
    const { nombre, precio } = req.query
    const producto = productos.find(prod => prod.nombre === nombre || prod.precio == precio)

    if(!producto) {
        return res.send('Producto not found')
    }

    res.json(producto)
})

// app.get('/usuario', (request, response) => {
//     const usuario = {
//         name: 'juan',
//         age: 32,
//         email: 'juan@gmail.com',
//     }
//     response.json(usuario)
// })

// app.get('*', (request, response) => {
//     response.send('error')
// })

const transport = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: "gutierrez.nano@gmail.com",
    pass: "vgqbbqwxkovxfemi",
  },
});

const transportMailtrap = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f6d695b991bc47",
    pass: "2cdc6468a4478b"
  }
});

const mails = ["leandrohugocid20@gmail.com", "nanogutierrez16@gmail.com"]

app.get("/mail", async (req, res) => {
  const result = await transportMailtrap.sendMail({
    from: "coderhouse@gmail.com",
    to: mails,
    subject: "Prueba de envío de mail",
    html: `
      <div>
        <h1>Prueba de envío de mail</h1>
        <img src="cid:prueba_1" />
      </div>
    `,
 });
    res.json({ result }) ,

app.listen(3000, () => console.log('Listening on port 3000')); } )