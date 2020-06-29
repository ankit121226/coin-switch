import React, { Component } from 'react';
import DefaultStyle from './style'
export default class SideBarMenus extends Component {
    render() {
        const {title, path} = this.props
        return (
            <DefaultStyle>
                <img src={path} className="icon" alt="sidelogo"/>
                <p className="name">{title}</p>
            </DefaultStyle>
        )
    }
}
