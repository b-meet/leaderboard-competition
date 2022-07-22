import styled from "styled-components";

export const PlayerContainer = styled.section`
	padding: 0.5rem 0;
	max-width: 87%;
	margin: auto;
	display: flex;
	border-bottom: 2px solid rgb(243, 240, 241);
	justify-content: space-between;
	align-items: center;
`;

export const PlayerInfo = styled.div`
	width: 90%;
	display: flex;
	align-items: center;
	color: rgb(58, 53, 55);
`;

export const Rank = styled.span`
	width: 30px;
	height: 30px;
	color: rgb(255, 255, 255);
	// background-color: rgb(131, 176, 243);
	background: ${({ position }) =>
		position === 0
			? "rgb(245, 59, 62)"
			: position === 1
			? "rgb(253, 123, 65)"
			: position === 2
			? "rgb(253, 161, 53)"
			: "rgb(131, 176, 243)"};
	display: grid;
	place-items: center;
	border-radius: 50%;
`;

export const Image = styled.img`
	height: 35px;
	width: 35px;
	object-fit: cover;
	border-radius: 50%;
	margin: 0 1rem;
	border: 2px solid #fff;
`;

export const Points = styled.p`
	color: rgb(175, 114, 130);
`;
