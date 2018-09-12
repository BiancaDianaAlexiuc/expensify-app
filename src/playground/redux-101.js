import { createStore } from 'redux';



const incrementCount = ({incrementBy = 1} = {}) => ({
        type: 'INCREMENT',
        incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

//setCount 
const setCount = ({count} = {}) => ({
    type: 'SET',
    count
});

//reset count 
const resetCount = () => ({
    type: 'RESET'
});

//Reducers
// 1. reducers are pure funtions 
// 2. mever change state or action 


const countReducer = (state = {count: 0}, action) =>{
    switch(action.type) {
        case 'INCREMENT':
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        return {
            count: state.count - action.decrementBy
        };
        case 'RESET':
        return {
            count: 0
        }
        case 'SET':
        return {
            count: action.count
        };
        default:
        return state;
    }
    console.log('running');
    return state;
};

const store = createStore(countReducer);


const unsubsribe = store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(setCount({count: 101}));



store.dispatch(resetCount());



// store.dispatch({
//     type: 'SET',
//     count: 101
// });

