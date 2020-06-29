import React, { Component } from 'react'
import DefaultStyle from './style';
import Grid from '@material-ui/core/Grid';
import rightArrow from '../../images/arrow.png'

export default class DisplayContainer extends Component {
    render() {
        const {sendValue, sendValSym, receivedValue, receiveValSym} = this.props
        return (
            <DefaultStyle>
                <Grid className="sec-cont">
                    <Grid xs={12} className="send-receive">
                        <Grid xs={3} className="send-mon">
                            <p className="send-txt">You are sending</p>
                            <p className="mon-dig"><span>{sendValue}</span><span className="send-sym">{sendValSym}</span></p>
                        </Grid>
                        <Grid xs={1}>
                            <img src={rightArrow} alt="logo" className="right-arrow" />
                        </Grid>
                        <Grid xs={3}>
                            <p className="rec-txt">You may receive</p>
                            {/* <p className="rec-mon-dig">{receivedValue}</p> */}
                            <p className="rec-mon-dig"><span>{receivedValue.toFixed(4)}</span><span className="rec-sym">{receiveValSym}</span></p>
                        </Grid>
                    </Grid>
                    <Grid xs={12} className="powered-by">
                        <p>powered by ...</p>
                    </Grid>
                </Grid>
            </DefaultStyle>
        )
    }
}
