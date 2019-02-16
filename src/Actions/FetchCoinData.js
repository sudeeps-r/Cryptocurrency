import axios from 'axios'
import apiBaseUrl from '../Utils/Constants'
import {FETCHING_COIN_DATA,FETCHING_COIN_DATA_SUCCESSFULL,FETCHING_COIN_DATA_FAILED} from './ActionTypes'

export default function fetchCoinData(){
    return dispatch=>{

        dispatch({type: FETCHING_COIN_DATA})
        return axios.get(`${apiBaseUrl}/v1/ticker?limit=10`)
        .then(res=>{
            dispatch({type:FETCHING_COIN_DATA_SUCCESSFULL,payload:res.data})
        })
        .catch(err=>{
            dispatch({type:FETCHING_COIN_DATA_FAILED,payload:err.data})
        })
    }
}