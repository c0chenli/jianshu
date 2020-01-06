import React, { Component } from 'react';
import Toolbar from "./components/Toolbar";
import { Main } from './style';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';

class Reheader extends Component {
    render() {
        return(
            <div style={{height: '100%'}}>
                <Toolbar/>
                <SideDrawer/>
                <Backdrop/>
                <Main>
                    <p>This is the page content</p>
                </Main>

            </div>
        )
    }
}

export default Reheader;