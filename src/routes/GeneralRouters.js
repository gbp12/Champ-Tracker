import { useState, React } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Main } from "../pages/Main"
import { Second } from "../pages/Second"
import { H1 } from "../components/styles"

const Generalrouters = () => {
    const [state, setState] = useState({
        campeon: {
            nombre: "",
            titulo: "",
            imagen: "",
            rol: "",
            historia: ""
        },
        rol: " ",
    });


    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/Champ-Tracker" element={<Main setState={setState} state={state} />} />
                <Route path={`/Champ-Tracker/${state.campeon.nombre}`} element={<Second state={state} />} />
                <Route path="*" element={<Link to={"/Champ-Tracker"}><H1>Error 404, haz Click para volver</H1></Link>}></Route>


            </Routes>
        </BrowserRouter>
    )
}

export default Generalrouters
