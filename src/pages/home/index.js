import React, { Component } from 'react';
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import List from "./components/List";
import Recommend from "./components/Recommend";
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import { BackTop } from './style';


class Home extends Component{

    handleScrollTop(){
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <HomeWrapper>
                <HomeLeft>
                    {/*<img alt='top-right' src='//upload-images.jianshu.io/upload_images/3301720-db890fabf626e0ac.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'/>*/}
                    <Topic/>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer/>
                </HomeRight>
                { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null }

            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)

    }

    bindEvents(){
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatch = (dispatch) => ({
    changeHomeData(){
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow(e){
        if (document.documentElement.scrollTop > 100){
            dispatch(actionCreators.toggleTopShow(true))
        }else {
            dispatch(actionCreators.toggleTopShow(false))
        }
        console.log(document.documentElement.scrollTop);
    }
});

export default connect(mapState, mapDispatch)(Home);