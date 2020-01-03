import React, { Component } from 'react';
import { SideDrawer } from '../style';

class sideDrawer extends Component{
    render() {
        return(
            <SideDrawer>
                <ul>
                    <li><a href="/"> Contact </a></li>
                    <li><a href="/"> team </a></li>
                </ul>
            </SideDrawer>
        )
    }
}

export default sideDrawer;