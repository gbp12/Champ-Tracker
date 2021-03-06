import { useEffect, useState } from "react"
import { StyledDiv, H1, H3, Img, DivPrueba } from "./styles"
import { StyledCampeones } from "./styles"
import styled from "styled-components"
import { Link } from "react-router-dom"
import fetchData from "./fetchData"
const StyledLink = styled(Link)`
text-decoration: none;
height: 100%;
`
export const Campeones = ({ setState, state }) => {
	const [lista, setlista] = useState({})



	const datos = {
		nombres: [],
		titulos: [],
		imagenes: [],
		roles: [],
		historias: [],
	}

	const initialDatos = () => {


		if (state.rol !== " ") {
			for (var i in lista) {
				var nombre = lista[i].name
				var titulo = lista[i].title
				var imagen = lista[i].image.full
				var Rol = lista[i].tags
				var historia = lista[i].blurb
				if (lista[i].tags[0] === state.rol) {
					datos.nombres.push(nombre)
					datos.titulos.push(titulo)
					datos.imagenes.push(imagen)
					datos.roles.push(Rol)
					datos.historias.push(historia)
				}


			}


		} else {
			for (var i in lista) {
				var nombre = lista[i].name
				var titulo = lista[i].title
				var imagen = lista[i].image.full
				var Rol = lista[i].tags
				var historia = lista[i].blurb


				datos.nombres.push(nombre)
				datos.titulos.push(titulo)
				datos.imagenes.push(imagen)
				datos.roles.push(Rol)
				datos.historias.push(historia)


			}
		}


	}

	const filas = []
	var campeon = []


	const spliting = () => {

		if (state.rol === " ") {
			for (var x = 0; x < datos.nombres.length; x += 3) {
				campeon = datos.nombres.slice(x, x + 3)

				filas.push(campeon)
				campeon = []




			}
		} else {
			for (var x = 0; x < datos.nombres.length; x += 2) {
				campeon = datos.nombres.slice(x, x + 2)

				filas.push(campeon)
				campeon = []




			}
		}
	}

	initialDatos()

	spliting()


	useEffect(async () => {
		const llamada = await fetchData()
		setlista(llamada)



	}, [])

	const Bloque = (props) => {
		var index = datos.nombres.indexOf(props.campeon)
		const tittle = datos.titulos.find((x) => datos.titulos.indexOf(x) === index)
		const foto = datos.imagenes.find((x) => datos.imagenes.indexOf(x) === index)
		const rolArr = datos.roles.find((x) => datos.roles.indexOf(x) === index)
		const historia = datos.historias.find((x) => datos.historias.indexOf(x) === index)





		var newFoto = foto.replace(".png", "")
		var splash = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${newFoto}_0.jpg`

		return (
			<StyledLink to={`/Champ-Tracker/${props.campeon}`}>

				<StyledDiv onClick={() => {
					setState({
						rol: state.rol,
						campeon: {
							nombre: props.campeon.replace(" ", "%20"),
							titulo: tittle,
							imagen: foto,
							rol: rolArr,
							historia: historia

						},
					})

				}}>
					<H1>
						{props.campeon}
					</H1>

					<Img src={splash} />

					< H3 >
						{tittle}
					</H3 >

				</StyledDiv >

			</StyledLink>

		)
	}

	return (
		<div>


			<StyledCampeones>

				{
					filas.map((x) => (
						<DivPrueba key={x} >
							{
								x.map((h) => (
									<Bloque key={h} campeon={h} />
								))
							}
						</DivPrueba>
					))
				}
			</StyledCampeones>
		</div>
	)
}

