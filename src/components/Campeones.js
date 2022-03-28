import axios from "axios"
import { useEffect, useState } from "react"
import { StyledDiv, H1, H3, Img, DivPrueba } from "./styles"
import { StyledCampeones } from "./styles"
import styled from "styled-components"
import { Link } from "react-router-dom"
const StyledLink = styled(Link)`
text-decoration: none;
height: 100%;
`
export const Campeones = ({ setState, state }) => {
	const [lista, setlista] = useState([])
	const rol = state.rol
	var prueba = setState


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
			for (var x = 0; x < datos.nombres.length; x += 3) {
				campeon = datos.nombres.slice(x, x + 3)

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
			<StyledLink to={`/Champ-Tracker/${props.campeon}`}>
				{
					filtro() ? <StyledDiv onClick={() => {
						setState({
							rol: rol,
							campeon: props.campeon.replace(" ", "%20")
						})
					}}>
						<H1>
							{props.campeon}
						</H1>

						<Img src={splash} />

						< H3 >
							{tittle}
						</H3 >

					</StyledDiv > : null
				}
			</StyledLink>

		)
	}

	return (
		<StyledCampeones>

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
		</StyledCampeones>
	)
}

