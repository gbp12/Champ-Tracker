import { H1 } from "../components/styles"
import { useEffect } from "react"
import fetchData from "../components/fetchData"
export const Second = () => {

    var llamada = {}
    useEffect(async () => {
        llamada = await fetchData()
        console.log(llamada.Aatrox.name)

    }, [])



    return (
        <H1>

            jsjsjsjs
            {llamada.Aatrox.name}

        </H1>
    )
}