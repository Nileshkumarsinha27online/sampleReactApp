import {FETCH_DATA} from '../../constants/List/action-types';
import {FETCH_DATA_URL} from '../../constants/List/urls';
import axios from 'axios';
export function fetchListData(){
    return ((dispatch)=> {
        axios.get(FETCH_DATA_URL).then((listResponse) => {
            dispatch({type: FETCH_DATA, listData: listResponse.data});
        }).catch((err)=>{
            console.log('The error is',err);   
        });
    });
}