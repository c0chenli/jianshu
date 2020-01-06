import styled from "styled-components";
import logoPic from '../../statics/logo.png';

export const HeaderWrappler = styled.div`
    z-index: 1;
    position: relative;
    height: 58px;
    // border-bottom: 1px solid #f0f0f0;
`;

export const ImgWrapper = styled.div`
    position: relative;
    float: left
    width: 80px;
    height: 40px;
    top: 9px;
    left: 2px;
`;

export const Logo = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    background: url(${logoPic});
    background-size: contain;   
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    //padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;   
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left{
        float: left;
        margin-left: 8px;
        //border-left: 1px solid #eb6f5a;

    } 
    &.right {
        float: right;
        color: #ea6f5a;
        margin-top: 9px;
        margin-right: 9px;
        padding: 0 20px;
        line-height:38px;
        border-radius: 19px;
        border: 1px solid #eb6f5a;
        font-size: 14px;
        &.register {
            color: #fff;
            background: #eb6f5a;
        }
    }
    &.active {
        color: #eb6f5a;
    } 
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    margin-top: 9px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
    &.slide-enter {
        width: 160px;
        transition: all .2s ease-out;   
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .2s ease-out;   
    }
    &.slide-exit-active {
        width: 160px;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background: white;
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin{
        display: block;
        float: left;
        font-size: 13px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transform: rotate(0deg);
        transform-origin: center center;
    }
`;

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 15px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #969696;
    border-radius: 3px;
`;

export const SearchInfoList = styled.div`
    overflow: hidden;
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height:38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    };
    &.writting {
        color: #fff;
        background: #ec6149;
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .zoom {
        position: absolute;
        right: 5px;
        bottom:5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`;

export const LanguageWrapper = styled.div`
    position: relative;
    float: right;
    width: 80px;
    height: 40px;
    top: 9px;
    right: 15px;
`;