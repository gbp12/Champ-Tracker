import { H1 } from "../components/styles"
import { Link } from "react-router-dom"
import { Img } from "../components/styles"

export const Second = ({ state }) => {
    var newFoto = state.campeon.imagen.replace(".png", "")
    var splash = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${newFoto}_0.jpg`




    return (
        <div>



            <H1>
                {state.campeon.nombre.replace("%20", " ")}
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
            <Img src={splash} />


            <H1>

                <Link to={"/Champ-Tracker"}>
                    Volver
                </Link>
            </H1>



        </div>
    )
}