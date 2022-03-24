import { model, Schema } from "mongoose";
interface Student {
  nombre: string;
  identificacion: number;
  correo: string;
  tel: string;
}

const studentSchema = new Schema<Student>({
  nombre: {
    type: String,
  },
  identificacion: {
    type: Number,
    unique: true,
  },
  correo: {
    type: String,
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
    type: String,
    unique: true,
  },
});
const studentModel = model("student", studentSchema);

export { studentModel };
