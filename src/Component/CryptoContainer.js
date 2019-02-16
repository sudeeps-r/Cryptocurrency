import React,{Component} from 'react'
import {connect} from 'react-redux'
import {View,Text,ScrollView} from 'react-native'
import fetchCoinData from '../Actions/FetchCoinData'
import CoinCard from './CoinData'

class CryptoContainer extends Component{
    
    componentDidMount(){
        this.props.fetchCoinData()
    }

    render(){
        const { contentContainer } = styles;
        if(!this.props.crypto.isFetching){
            return (<View><ScrollView contentContainerStyle={contentContainer}>{this.renderCoinCard()}</ScrollView></View>)
        }else{
            return <View/>
        }
        
    }

    renderCoinCard(){
        const {crypto} = this.props
       
        return crypto.body.map((coin) => 
        <CoinCard 
            key={coin.name}
            coin_name={coin.name}
            symbol={coin.symbol}
            price_usd={coin.price_usd}
            percent_change_24h={coin.percent_change_24h}
            percent_change_7d={coin.percent_change_7d}
        />
    ) 
    }
}

const styles = {
    contentContainer: {
        marginBottom: 100,
        paddingTop: 55
    }
}

function mapStateToprops(state){
    return {crypto:state.crypto}
}

export default connect (mapStateToprops,{fetchCoinData})(CryptoContainer)