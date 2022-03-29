import { Header } from "../components/Header"
import { Introduccion } from "../components/Intro"
import { Campeones } from "../components/Campeones"


export const Main = ({ state, setState }) => {
    return (
        <>
            <Header setState={setState} />
            <Introduccion />
            <Campeones setState={setState} state={state} />
        </>)
}