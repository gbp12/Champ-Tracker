import { Formik, Field, Form } from "formik"




export const Formulario = () => {
    return (

        <Formik
            initialValues={{ nombre: "", rol: "" }}
            onSubmit={(values) => {
                createChamp(values)
                document.getElementById("formulario").reset()
            }}>
            <Form id="formulario">
                <Field type="text" name="nombre" placeholder="nombre" required />
                <br />
                <Field as="select" name="rol" placeholder="rol" required>
                    <option value="" disabled hidden>
                        rol
                    </option>

                    <option value="guerrero">guerrero</option>
                    <option value="tanque">tanque</option>
                    <option value="asesino">asesino</option>
                    <option value="mago">mago</option>
                    <option value="tirador">tirador</option>
                </Field>

                <button type="submit" value="submit">
                    enviar
                </button>
            </Form>
        </Formik>
    )
}