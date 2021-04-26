import express from 'express';
import mongoose from 'mongoose';
import { studentRouter } from './routes/studentRouter.js';
import dotenv from 'dotenv';
dotenv.config();

const DBNAME = `mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@cluster0.xtyga.mongodb.net/grades`;
//conectar ao mongo DB
(async () => {
  try {
    await mongoose.connect(DBNAME, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado a base:' + DBNAME);
  } catch (err) {
    console.log('Erro ao conectar a base:' + err);
  }
})(); //acho que se auto chama

const app = express();
app.use(express.json());
app.use(studentRouter);

app.listen(process.env.PORT, () => console.log('Api iniciada!'));
