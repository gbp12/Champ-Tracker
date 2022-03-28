import { StyledHeader, H3, DivFilter, Rol } from "./styles"
import { useState } from "react";
export const Header = ({ setState }) => {
    const [mostrar, setmostrar] = useState(false);

    const roles = ["Fighter", "Tank", "Mage", "Assassin", "Marksman", "Support"]




    return (
        <>
            <StyledHeader>

                <H3 cabecera> GB</H3>

                <H3 cabecera>
                    Champ Tracker
                </H3>

                <H3 filter="true" cabecera onClick={() => {
                    setmostrar(!mostrar)
                }}>
                    Filtrar por rol

                </H3>
            </StyledHeader>
            <DivFilter mostrar={mostrar} className="animate__animated animate__slideInRight animate__faster" >
                {
                    roles.map((x) => (
                        <Rol cabecera key={x} onClick={() => {
                            setState(
                                {
                                    campeon: "",
                                    rol: x
                                }
                            )
                        }}

                        >
                            {x}
                        </Rol>
                    ))
                }
                <Rol cabecera onClick={() => {
                    setState({
                        campeon: "",
                        rol: " "
                    })
                }}>
                    Reset
                </Rol>

            </DivFilter>
        </>

    )
}