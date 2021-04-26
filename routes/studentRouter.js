import express from 'express';
import { studentModel } from '../models/studentModel.js';
const studentRouter = express();

//create
studentRouter.post('/student', async (req, res) => {
  try {
    const student = new studentModel(req.body);
    await student.save();

    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});
//retrieve
studentRouter.get('/student', async (req, res) => {
  try {
    const student = await studentModel.find({}); //findAll
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

//patch
studentRouter.patch('/student/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

//put
studentRouter.put('/student/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

//UPDATE
studentRouter.patch('/student/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

//DELETE
studentRouter.delete('/student/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findByIdAndDelete({ _id: id });
    if (!student) {
      res.status(404).send('Documento não encontrado para exclusão!');
    } else {
      res.send(200).send('Deleted:' + id);
    }
    res.send('Deleted:' + id);
  } catch (error) {
    res.status(500).send(error);
  }
});

export { studentRouter };
