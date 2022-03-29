import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Main } from "../pages/Main"
import { Second } from "../pages/Second"

const Generalrouters = () => {
    const [state, setState] = useState({
        campeon: {
            nombre: "",
            titulo: "",
            imagen: "",
            rol: ""
        },
        rol: " ",
    });


    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/Champ-Tracker" element={<Main setState={setState} state={state} />} />
                <Route path={`/Champ-Tracker/${state.campeon.nombre}`} element={<Second state={state} />} />
                <Route path="*" element={<Link to={"/Champ-Tracker"}>Volver</Link>}></Route>


            </Routes>
        </BrowserRouter>
    )
}

export default Generalrouters
