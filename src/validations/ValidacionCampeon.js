import * as yup from "yup"

export const userSchema = yup.object().shape({
	nombre: yup.string().min(3).max(15),
})
