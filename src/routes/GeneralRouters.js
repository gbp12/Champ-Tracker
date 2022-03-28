import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "../components/Header"
import { Introduccion } from "../components/Intro"
import { Campeones } from "../components/Campeones"
import { useState } from "react"
import { H1 } from "../components/styles"

const Generalrouters = () => {
    const [state, setState] = useState({
        campeon: "void",
        rol: " "
    });


    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/Champ-Tracker" element={<div>
                    <Header setState={setState} />
                    <Introduccion />
                    <Campeones setState={setState} state={state} />
                </div>} />
                <Route path={`/Champ-Tracker/${state.campeon}`} element={<div><H1>Esto es un campeon</H1></div>}></Route>
                <Route path="*" element={<div><H1>ERROR 404</H1></div>}></Route>


            </Routes>
        </BrowserRouter>
    )
}

export default Generalrouters
