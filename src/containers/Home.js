import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import DefaultStyle from './style'
import SideBarMenus from './SidebarMenus'
import auto from '../images/auto.png';
import track from '../images/track.png';
import refer from '../images/refer.png';
import product from '../images/product.png';
import Input from './input';
import DisplayContainer from './DisplayContainer';
import SelectComp from './Select';
import dottie from 'dottie'


export default class Home extends Component {
    state = {
        isLoading: false,
        sendCoin: 23,
        coinSymVal: 'btc',
        rateValue: 0,
        coinSymGetVal: 'eth',
        errorMsg: ''
    }
    SideBarsMenusData = [{
        title: 'Exchange',
        path: auto,
    },
    {
        title: 'My Orders',
        path: product,
    },
    {
        title: 'Track Orders',
        path: track,
    },
    {
        title: 'Product',
        path: refer,
    },
    {
        title: 'Refer and Earn',
        path: refer,
    },
    {
        title: 'Login Now',
        path: refer,
    }]
    fetchLiteCoins() { // appended https://cors-anywhere.herokuapp.com due to cors issue by browser
        const {coinSymVal, coinSymGetVal} = this.state
        fetch('https://cors-anywhere.herokuapp.com/https://api.coinswitch.co/v2/rate', {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 't41E6v16mG6xqOUK74E2F7Py6UVng4K6n1pO3Jig',
                'x-user-ip': '1.1.1.1',
            },
            method: 'POST',
            body: JSON.stringify({
                'depositCoin': coinSymVal,
                'destinationCoin': coinSymGetVal,
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.msg === '') {
                    this.setState({
                        rateValue: dottie.get(responseJson, 'data.rate'),
                        errorMsg: responseJson.msg
                    })
                } else {
                    this.setState({
                        // handled scenerio when no rate is found
                        errorMsg: responseJson.msg
                    })
                }
            }).catch(err => console.log(err))
    }
    componentDidMount() {
        this.fetchLiteCoins();
    }
    getInputVal = (inputVal) => {
        this.setState({
            sendCoin: inputVal,
        }, () => {
            this.fetchLiteCoins();
        })
    }
    handleCoinSymbol = (coinSym, type) => {
        if (type === 'Send') {
            this.setState({
                coinSymVal: coinSym,
            }, () => {
                this.fetchLiteCoins();
            })
        } else {
            this.setState({
                coinSymGetVal: coinSym,
            }, () => {
                this.fetchLiteCoins();
            })
        }
    }
    render() {
        const { sendCoin, coinSymVal, rateValue, coinSymGetVal } = this.state
        return (
            <DefaultStyle className='parent'>
                <Grid container>
                    <Grid xs={3} className="left-sidebar">
                        <Grid xs={12} className="logo-sec">
                            <img src={'https://files.coinswitch.co/ui/public/images/cspro-sprite-v1.png'} className="logo" alt="logo" />
                        </Grid>
                        <Grid xs={12}>
                            {this.SideBarsMenusData.map((val, ind) => {
                                return (
                                    <div key={ind}>
                                      <SideBarMenus title={val.title} path={val.path} />
                                    </div>
                                )
                            })}
                        </Grid>
                    </Grid>
                    <Grid item xs={9} className="right-sidebar">
                        <Grid xs={12} className="sub-parent">
                            <Grid xs={12} className="first-cont">
                                <Grid xs={10} className="first-cont-sub">
                                    <Grid xs={12} className="rater">
                                        <Grid xs={9}>
                                            <div className="market-fixed">
                                                <p className="market">Market Rate</p>
                                                <p>Fixed Rate</p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12}>
                                        <Grid xs={12} className="send-coin">
                                            <Grid xs={3} className="send-input">
                                                <Input getInputVal={this.getInputVal} initilaVal={sendCoin} disable={false} label={`Send ${coinSymVal}`} />
                                            </Grid>
                                            <Grid xs={2} className="send-select">
                                                <SelectComp initilaCoinSym={coinSymVal} handleCoinSymbol={(e, type) => this.handleCoinSymbol(e, type)} type="Send" />
                                            </Grid>
                                            <Grid xs={1} />
                                            <Grid xs={3} className="get-input">
                                                <Input initilaVal={sendCoin * rateValue} disable={true} label={`Get ${coinSymGetVal}`} />
                                            </Grid>
                                            <Grid xs={2} className="get-select">
                                                <SelectComp initilaCoinSym={coinSymGetVal} handleCoinSymbol={(e, type) => this.handleCoinSymbol(e, type)} type="Get" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {/* Error Sec Start */}
                            {this.state.errorMsg === '' ? ('') : (
                                <Grid xs={12} className='msg'>
                                    <Grid xs={8} className="error-msg">
                                        {this.state.errorMsg}
                                    </Grid>
                                </Grid>)}
                            {/* Error Sec End */}
                            <Grid xs={12}>
                                <Grid xs={12}>
                                    <DisplayContainer sendValue={sendCoin} sendValSym={coinSymVal} receivedValue={sendCoin * rateValue} receiveValSym={coinSymGetVal} />
                                </Grid>
                            </Grid>
                            <Grid xs={12}>
                                <Grid xs={12} className="terms-and-cond">
                                    <p>I agree to the <span className="terms">terms</span> & <span className="pol">privacy policy</span></p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </DefaultStyle>
        )
    }
}
