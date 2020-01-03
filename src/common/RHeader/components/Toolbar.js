import React, { Component } from 'react';
import { HeaderWrappler, ImgWrapper, Nav, List, Space } from "../style";
import DrawerToggleButton from '../components/DrawerToggleButton';

class toolbar extends Component{
    render() {
        return(
            <HeaderWrappler>
                <Nav>
                    <div>
                        <DrawerToggleButton/>
                    </div>
                    <ImgWrapper>The Logo</ImgWrapper>
                    <Space/>
                    <List>
                        <ul>
                            <li><a href="/"> Contact </a></li>
                            <li><a href="/"> team </a></li>
                        </ul>
                    </List>
                </Nav>
            </HeaderWrappler>
        )
    }
}

export default toolbar;