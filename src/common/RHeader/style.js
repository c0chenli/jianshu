import styled from "styled-components";

export const HeaderWrappler = styled.div`
    position: relative;
    width: 100%;
    background: #521751;
    height: 56px;
    top: 0;
    left: 0;
    //margin-bottom: 3px;
`;

export const Nav = styled.div`
    display: flex
    height: 100%;
    align-items: center;
    padding: 0 1px;
`;

export const ImgWrapper = styled.div`
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    margin-left: 1rem;
`;

export const Space = styled.div`
    flex: 1;
`;


export const List = styled.div`
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        li {
            padding: 0 0.5rem;
            a{
                color: white;
                text-decoration: none;
            }
        }
    }
    
`;

export const Main = styled.div`
    margin-top: 4px;
`;

export const ToggleButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 24px;
    width: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    box-sizing: border-box;
    margin-left: 1rem;
    :focus{
        outline: none;
    }
`;

export const ToggleLine = styled.div`
    width: 30px;
    height: 2px;
    background: white;
`;

export const SideDrawer = styled.div`
    height: 100%;
    background: white;
    box-shadow: 2px 0px 5px rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    max-width: 300px;
    z-index: 200;
    ul{
        height: 100%;
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 100px;
        li{
            margin: 0.5rem 0;
            a{
                color: #521751;
                text-decoration: none;
                font-size: 1.8rem;
            }
        }
    }
`;

export const Backdrop = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.3);
    z-index: 100;
    
`;