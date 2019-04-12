import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

export default function Header(props) {
	const style = {textDecoration: "none", color: "black"}
	return (
		<Styled>
			<NavLink style={style} exact to="/">Home</NavLink>
			<NavLink style={style} to="/smurf-form">Add Smurf</NavLink>
		</Styled>
	)
}

const Styled = styled.div`
	display: flex;
	justify-content: space-around;
`
