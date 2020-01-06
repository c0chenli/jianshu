import React, { Component } from 'react';
import { ComWrapper, ComItem } from './style';

class Community extends Component {
    render() {
        return(
            <div>
                <ComWrapper>
                    <ComItem className="a">A</ComItem>
                    <ComItem className="b">B</ComItem>
                    <ComItem className="c">C</ComItem>
                    <ComItem className="d">D</ComItem>
                    <ComItem className="e">E</ComItem>
                    <ComItem className="f">F</ComItem>
                    <ComItem className="g">G</ComItem>
                    <ComItem className="h">H</ComItem>
                    <ComItem className="i">I</ComItem>
                    <ComItem className="j">J</ComItem>
                </ComWrapper>
            </div>
        )
    }
}

export default Community;