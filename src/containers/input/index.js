import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import DefaultStyle from './style'

export default class Input extends Component {
    handleChnage = (e)=>{
      this.props.getInputVal(e.target.value)
    }
    render() {
        const {initilaVal, disable }= this.props
        return (
                <DefaultStyle>
                    <TextField
                    id="filled-number"
                    label={this.props.label}
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                    onChange={this.handleChnage}
                    value={initilaVal}
                    disabled= {disable}
                    />
                </DefaultStyle>
        )
    }
}
