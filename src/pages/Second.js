import { Link } from "react-router-dom"
import { ImgFondo, H1, P2, H1Second } from "../components/styles"
import styled from "styled-components"

const StyledLink = styled(Link)`
	text-decoration: none;
	color: #000;
	border: 1px solid #000;
	border-width: 2px 4px 6px 4px;
	padding: 10px 20px 10px 20px;
	:hover {
		transition: transform 0.2s linear;
		transform: scale(4.04);
	}
`

export const Second = ({ state }) => {
	var newFoto = state.campeon.imagen.replace(".png", "")
	var splash = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${newFoto}_0.jpg`

	return (
		<div>
			<H1Second intro negro className="animate__animated animate__zoomIn animate__fast">
				{state.campeon.nombre.replace("%20", " ")}
			</H1Second>
			<H1Second intro negro className="animate__animated animate__zoomIn animate__fast">
				{state.campeon.titulo}
			</H1Second>
			<ImgFondo src={splash} className="animate__animated animate__fadeIn animate__slow" />
			<P2 className="animate__animated animate__fadeIn animate__slow">{state.campeon.historia}</P2>

			<H1>
				<StyledLink to={"/Champ-Tracker"} className="animate__animated animate__fadeIn animate__faster animate__delay-1s">
					Go Back
				</StyledLink>
			</H1>
		</div>
	)
}
