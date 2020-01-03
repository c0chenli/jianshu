import React, { Component } from 'react';
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends Component{
    render() {
        const { list, getMoreList, page } = this.props;
        return(
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <Link key={index} to={'/detail/' + item.get('id')}>
                                <ListItem key={index}>
                                    <img className='pic' alt='' src={item.get('imgUrl')}/>
                                    <ListInfo className='title'>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='des'>{item.get('des')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>
                    更多文字
                </LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
});

const mapDispatch = (dispatch) => ({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page))
    }
})

export default connect(mapState, mapDispatch)(List);