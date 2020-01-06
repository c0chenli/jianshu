import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition} from "react-transition-group";
import { actionCreators } from './store';
import { Link } from "react-router-dom";
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {
    HeaderWrappler,
    Logo,
    ImgWrapper,
    Nav,
    NavItem,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    // Addition,
    // Button,
    SearchWrapper,
    LanguageWrapper
} from "./style";

class Header extends Component {

    getListArea() {
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;

        const newList = list.toJS();
        const pageList = [];
        if (newList.length){
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        {/*热门搜索*/}
                        Popular
                        <SearchInfoSwitch onClick={ () =>  handleChangePage(page, totalPage, this.spinIcon) }>
                            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                            {/*换一批*/}
                            Refresh
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }

    render() {
        const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
        return (
            <HeaderWrappler>

                <Nav>
                    <ImgWrapper>
                        <Link to={'/'}>
                            <Logo />
                        </Link>
                    </ImgWrapper>

                    <Link to={'/mainpage'}>
                        <NavItem className='left active'>首页</NavItem>
                    </Link>
                    <Link to={'/home'}>
                        <NavItem className='left active'>创业博客</NavItem>
                    </Link>
                    <Link to={'/toolbar'}>
                        <NavItem className='left active'>创业公司</NavItem>
                    </Link>
                    <Link to={'/community'}>
                        <NavItem className='left active'>全球社区</NavItem>
                    </Link>
                    <NavItem className='right register'>注册</NavItem>
                    {
                        login ?
                            <NavItem onClick={logout} className='right'>退出</NavItem> :
                            <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
                    }
                    {/*<NavItem className='right'>*/}
                    {/*    <i className="iconfont">&#xe636;</i>*/}
                    {/*</NavItem>*/}
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className = { focused ? 'focused' : ''}
                                onFocus={ () => handleInputFocus(list) }
                                onBlur={ handleInputBlur }
                            ></NavSearch>
                        </CSSTransition>
                        <i className = {focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
                            &#xe64d;
                        </i>
                        {this.getListArea()}
                    </SearchWrapper>
                    <LanguageWrapper>
                        <select
                            name="language"
                            style={{ backgroundColor: "#eb6f5a",
                                border: "1px",
                                marginTop: "10px",
                                color: "white"
                            }}
                        >
                            <option value="zh-CN">中文</option>
                            <option value="en-US">English</option>
                        </select>
                    </LanguageWrapper>


                </Nav>

            {/*    <Addition>*/}
            {/*        <Link to='/write'>*/}
            {/*            <Button className='writting'>*/}
            {/*                <i className="iconfont">&#xe615;</i>*/}
            {/*                写文章*/}
            {/*            </Button>*/}
            {/*        </Link>*/}
            {/*        <Button className='reg'>注册</Button>*/}
            {/*    </Addition>*/}
            </HeaderWrappler>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        //focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus (list) {
            if (list.size === 0){
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle){
                originAngle = parseInt(originAngle, 10);
            }else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

            if(page < totalPage){
                dispatch(actionCreators.changePage(page + 1));
            }else {
                dispatch(actionCreators.changePage(1));
            }
        },
        logout(){
          dispatch(loginActionCreators.logout())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);