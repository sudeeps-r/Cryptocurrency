import {FETCHING_COIN_DATA,FETCHING_COIN_DATA_SUCCESSFULL,FETCHING_COIN_DATA_FAILED} from '../Actions/ActionTypes'

const initialState={
  isFetching:null,
  body:[],
  hasError:false,
  errorMessage:null
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCHING_COIN_DATA:
        return {...state,isFetching:true,body:null,hasError:false,errorMessage:null}
        case FETCHING_COIN_DATA_SUCCESSFULL:
        return {...state,isFetching:false,body:action.payload,hasError:false,errorMessage:null}
        case FETCHING_COIN_DATA_FAILED:
        return {...state,isFetching:false,body:null,hasError:true,errorMessage:action.payload}
        default:
        return state
    }
}