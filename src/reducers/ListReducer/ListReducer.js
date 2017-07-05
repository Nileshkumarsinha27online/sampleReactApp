export default function Listreducer(state = {listData:{}}, action) {
    switch(action.type){
        case 'FETCH_DATA':
            return Object.assign({},state,{listData:action.listData});
        default:return state;
    }
}