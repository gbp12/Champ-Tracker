import { H1 } from "../components/styles"
import { Link } from "react-router-dom"

export const Second = ({ state }) => {



    return (
        <div>



            <H1>
                {state.campeon.nombre}
            </H1>
            <H1>
                {state.campeon.titulo}
            </H1>
            <H1>
                {state.campeon.rol[0]}

            </H1>
            <H1>
                {state.campeon.rol[1]}

            </H1>

            <H1>

                <Link to={"/Champ-Tracker"}>
                    Volver
                </Link>
            </H1>



        </div>
    )
}