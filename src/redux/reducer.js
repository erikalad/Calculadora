import { CAMBIO_COLOR } from './actions'

const initialState = {
    color: true
}


const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case CAMBIO_COLOR:{
            return{
                color: !state.color
            }
        }

      default: return state 
    };
};
  

  export default rootReducer;