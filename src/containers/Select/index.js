import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import CoinResponse from '../../Response';
// import DefaultStyle from './style';

export default class SelectComp extends Component {
    handleChange = (e, type) => {
        this.props.handleCoinSymbol(e.target.value, type)
    }
    render() {
        const { initilaCoinSym } = this.props
        return (
            <React.Fragment>
                 <FormControl>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={initilaCoinSym}
                        onChange={(e,type)=>this.handleChange(e,this.props.type)}
                    >
                        {CoinResponse.data.map((val, ind)=>{
                            return (
                            <MenuItem value={val.symbol}> {<img src={val.logoUrl}  classname= "image" style={{height: '16px',marginRight: '10px' }} alt="logo" />} {val.symbol}</MenuItem>
                            )
                        }) }
                    </Select>
                </FormControl>
            </React.Fragment>
        )
    }
}
