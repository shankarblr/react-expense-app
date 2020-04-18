export default (state = {} ,action) =>{
    switch (action.type) {
        case 'LOGIN':
            return {
                uid : action.uid
            }
        case 'LOGIN_OUT':
            return { }
        default:
            return state;
    }

}