const incrementCount = ({incrementBy = 1 } = {}) => ({
    type :'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
        type:'DECREMENT',
        decrementBy
});

const reset = () => ({ 
    type:'RESET'
});

const store = createStore((state = { count : 0 },action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count +  action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count -  action.decrementBy
            };
        case 'RESET' :
            return {
                count :0
            };
        default:
            return state;    
        
    }
}); 


store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(incrementCount({incrementBy :41}))
store.dispatch(incrementCount())
//store.dispatch({type:'INCREMENT'})
store.dispatch(reset())
store.dispatch(decrementCount())
store.dispatch(decrementCount({decrementBy : 2343}))

