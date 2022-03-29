import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import { H1 } from "../components/styles"
import { Main } from "../pages/Main"
import { Second } from "../pages/Second"

const Generalrouters = () => {
    const [state, setState] = useState({
        campeon: "void",
        rol: " "
    });


    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/Champ-Tracker" element={<Main setState={setState} state={state} />} />
                <Route path={`/Champ-Tracker/${state.campeon}`} element={<Second state={state} />} />
                <Route path="*" element={<div><H1>ERROR 404</H1></div>}></Route>


            </Routes>
        </BrowserRouter>
    )
}

export default Generalrouters
