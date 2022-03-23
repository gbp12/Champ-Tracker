import axios from "axios"
import { useEffect, useState } from "react"
import { StyledDiv, H1, H3, Img, DivPrueba } from "./components/styles"
import { Introduccion } from "./components/Intro"
import { Header } from "./components/Header"




export const Campeones = (props) => {
	const [lista, setlista] = useState([])
	const rol = props.actualRol


	async function fetchData() {
		const response = await axios.get("http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json")
		if (response.status === 200) {

			setlista(response.data.data)


		}
	}

	const nombres = []
	const titulos = []
	const imagenes = []
	const roles = []
	for (var i in lista) {
		var nombre = lista[i].name
		var titulo = lista[i].title
		var imagen = lista[i].image.full
		var Rol = lista[i].tags



		nombres.push(nombre)
		titulos.push(titulo)
		imagenes.push(imagen)
		roles.push(Rol)


	}
	const filas = []
	var campeon = []

	for (var x = 0; x < nombres.length; x += 3) {
		campeon = nombres.slice(x, x + 3)

		filas.push(campeon)
		campeon = []



	}




	useEffect(() => {
		fetchData()
	}, [])

	const Bloque = (props) => {
		var index = nombres.indexOf(props.campeon)
		const tittle = titulos.find((x) => titulos.indexOf(x) === index)
		const foto = imagenes.find((x) => imagenes.indexOf(x) === index)
		const rolArr = roles.find((x) => roles.indexOf(x) === index)

		const filtro = () => {
			if (rol !== " ") {
				if (rolArr[0] === rol) {
					return true
				} else {
					return false
				}

			} else {
				return true
			}

		}

		var newFoto = foto.replace(".png", "")

		var splash = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${newFoto}_0.jpg`




		return (
			<>
				{
					filtro() ? <StyledDiv>
						<H1>
							{props.campeon}
						</H1>
						<Img src={splash} />





						< H3 >
							{tittle}
							<br />
							It is a {rolArr[0]}

						</H3 >


					</StyledDiv > : null
				}
			</>

		)
	}


	return (
		<>

			{
				filas.map((x) => (
					<DivPrueba key={Math.random()} >
						{
							x.map((h) => (
								<Bloque key={h} campeon={h} />
							))
						}
					</DivPrueba>
				))
			}





		</>
	)
}


function App() {
	const [actualRol, setactualRol] = useState(" ");



	return (
		<>
			<Header setactualRol={setactualRol} />
			<Introduccion />

			<Campeones actualRol={actualRol} />

		</>

	)


}

export default App
