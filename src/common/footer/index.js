import React, { Component } from 'react';
import { FooterWrapper, Children } from './style';

class Footer extends Component {
    render() {
        return(
            <div>
                <FooterWrapper>
                    <Children>首页</Children>
                </FooterWrapper>
            </div>
        )
    }
}

export default Footer;