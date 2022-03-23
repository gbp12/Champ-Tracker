import axios from "axios"
import { useEffect, useState } from "react"
import { StyledDiv, H1, H3, Img, DivPrueba } from "./components/styles"
import { Introduccion } from "./components/Intro"
import { Header } from "./components/Header"




export const Campeones = (props) => {
	const [lista, setlista] = useState([])
	const rol = props.actualRol


	async function fetchData() {
		const response = await axios.get("https://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json")
		if (response.status === 200) {

			setlista(response.data.data)


		}
	}



	const datos = {
		nombres: [],
		titulos: [],
		imagenes: [],
		roles: [],
	}

	const initialDatos = () => {
		for (var i in lista) {
			var nombre = lista[i].name
			var titulo = lista[i].title
			var imagen = lista[i].image.full
			var Rol = lista[i].tags

			datos.nombres.push(nombre)
			datos.titulos.push(titulo)
			datos.imagenes.push(imagen)
			datos.roles.push(Rol)

		}
	}
	const filas = []
	var campeon = []


	const spliting = () => {

		if (rol === " ") {
			for (var x = 0; x < datos.nombres.length; x += 4) {
				campeon = datos.nombres.slice(x, x + 4)

				filas.push(campeon)
				campeon = []




			}
		} else {
			for (var x = 0; x < datos.nombres.length; x += 1) {
				campeon = datos.nombres.slice(x, x + 1)

				filas.push(campeon)
				campeon = []




			}
		}
	}

	initialDatos()

	spliting()


	useEffect(() => {
		fetchData()
	}, [])

	const Bloque = (props) => {
		var index = datos.nombres.indexOf(props.campeon)
		const tittle = datos.titulos.find((x) => datos.titulos.indexOf(x) === index)
		const foto = datos.imagenes.find((x) => datos.imagenes.indexOf(x) === index)
		const rolArr = datos.roles.find((x) => datos.roles.indexOf(x) === index)



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

		filtro()
		return (
			<>
				{
					filtro() ? <StyledDiv >
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
								<Bloque key={h} campeon={h} plus />
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
