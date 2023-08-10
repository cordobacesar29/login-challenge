import * as yup from "yup"

export const loginSchema = yup.object({
  email: yup.string().email().trim().required("El email es requerido"),
  password: yup.string().trim().min(6).required("El debe tener al menos 6 caracteres"),
}).required();