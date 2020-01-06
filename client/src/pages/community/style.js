import styled from "styled-components";

export const ComWrapper = styled.div`
    box-sizing: border-box;
    width: 960px;
    //height: 240px;
    //border: 1px solid #c3c3c3;
    display: -webkit-flex; /* Safari */
    -webkit-flex-wrap: wrap; /* Safari 6.1+ */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export const ComItem = styled.div`
    flex: 25%;
    max-width: 25%;
    height: 240px;
    //padding: 0 4px;
    &.a {
        background: red;
    }
    &.b {
        background: yellow;
    }
    &.c {
        background: green;
    }
    &.d {
        background: black;
    }
    &.e {
        background: purple;
    }
    &.f {
        background: red;
    }
    &.g {
        background: yellow;
    }
    &.h {
        background: green;
    }
    &.i {
        background: black;
    }
    &.j {
        background: purple;
    }
`;


