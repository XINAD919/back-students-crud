import { model, Schema } from "mongoose";
interface Student {
  nombre: string;
  identificacion: string;
  correo: string;
  tel: number;
}

const studentSchema = new Schema<Student>({
  nombre: {
    type: String,
    required: true,
  },
  identificacion: {
    type: String,
    required: true,
    unique:true,
  },
  correo: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value: string) => {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
          value
        );
      },
      message: "ingresa un correo valido",
    },
  },
  tel: {
    type: Number,
    required: true,
    unique: true,
  },
});
const studentModel=model("student",studentSchema);

export {studentModel};
