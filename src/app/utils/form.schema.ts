import * as yup from "yup"

export const loginSchema = yup.object({
  email: yup.string().email("email inválido").trim().required("El email es requerido"),
  password: yup.string().trim().min(6,"La contraseña debe tener al menos 6 carácteres").required(),
}).required();