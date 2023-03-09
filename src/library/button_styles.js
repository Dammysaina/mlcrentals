import Styled from "styled-components";

const Button = Styled.button`
background: ${(props) => props.buttonColor};
border: none;
border-radius: 5px;
// box-shadow: 0px 4px 8px rgba(50, 50, 71, 0.06), 0px 4px 4px rgba(50, 50, 71, 0.08);
height: ${(props) => props.buttonHeight};
width: ${(props) => props.buttonWidth};
color: #ffffff;
font-weight: bold;
font-size: 1rem;
line-height: 22px;
cursor:pointer;
span {
    display: flex;
}
img {
    height: 30px;
    width: 30px;
}
`;

export default Button;