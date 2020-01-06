import React, { Component } from 'react';
import { ToggleButton, ToggleLine  } from "../style";

class drawerToggleButton extends Component{
    render() {
        return(
            <ToggleButton>
                <ToggleLine />
                <ToggleLine />
                <ToggleLine />
            </ToggleButton>
        )
    }
}

export default drawerToggleButton;