import styled from 'styled-components'


/**
 * Componente para conter todos os "filhos" da tela.
 * @param {color}: Muda a cor do fundo da tela.
 */

export const MainPage = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: ${props => props.color ? props.color : '#03396C'};

`

/**
 * Navbar do sistema.
 * @param {color}: Muda a cor do fundo.
 */

export const NavbarStyled = styled.header`
    min-height: 9vh;
    width: 100vw;
    background-color: ${props => props.color ? props.color : '#fff'};

    padding: 7.5px 2%;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    .nav-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav-buttons {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

`

/**
 * Titulo com a fonte do sistema.
 * @param {color}: Muda a cor do titulo.
 */

export const TitleSystem = styled.h1`
    color: ${props => props.color ? props.color : "#fff" };
    font-family: 'Press Start 2P', cursive;
`

/**
 * Div para mostrar o dinheiro do sistema.
 */

export const DivDinheiro = styled.div`
    color: black;
    font-family: 'Roboto', cursive;
    min-width: 5rem;
    height: 1.75rem;
    background-color: #E7EFF6;

    padding: 4px;
    border-radius: 9px;
    margin-left: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
`

/**
 * Botões de navegação para a navbar.
 */

export const NavBtn = styled.button`
    color: black;
    font-family: 'Poppins', cursive;
    min-width: 100px;
    height: 1.75rem;
    background-color: #E7EFF6;

    margin: 0 7px;

    padding: 4px;
    border-radius: 9px;
    border: 1px solid transparent;
    cursor: pointer;

    &:hover {
        background-color: #B7B7B7;
    }
`