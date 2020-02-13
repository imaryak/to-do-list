//initial value of my store
const initialState=[];

//action names
const LIST_ITEM_ADD='LIST_ITEM_ADD';

//reducer logic
/*  {

        type:'LIST_ITEM_ADD';
        payload:'item-1'
    }
*/

export default function reducer(state=initialState,action){
    if(action.type === LIST_ITEM_ADD){
        return[...state, action.payload];
    }
    return state;
}

export function addItemAction(item){
    return {
        type:LIST_ITEM_ADD,
        payload:item
    }
}