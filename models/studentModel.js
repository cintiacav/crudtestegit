import mongoose from 'mongoose';
//criação do modelo
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
    /*outra opção validate(value) {
      if (value < 0) {
        throw new Exception('Valor negativo para a nota não é permitido!');
      }
    },*/
    min: 0,
  },
  lastModified: {
    type: Date,
    default: Date.now(),
  },
});
//atribui modelo à coleção (nome da coleção, schema,nome da coleção )
const studentModel = mongoose.model('student', studentSchema, 'student');

export { studentModel };
