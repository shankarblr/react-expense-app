import moment from "moment";


const filterReducerDefault = {
    text :'',
    sortBy :'',
    startDate : moment().startOf('month'),
    endDate : moment().endOf('month')
}

const filterReducer = ( state = filterReducerDefault , action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {...state,text:action.text}
        case 'SET_SORT_BY_DATE':
                return {...state,sortBy:"date"}
        case 'SET_SORT_BY_AMOUNT':
                    return {...state,sortBy:"amount"}
        case 'SET_SORT_BY_STARTDATE':
                return {...state,startDate:action.startDate}
        case 'SET_SORT_BY_ENDDATE':
                return {...state,endDate:action.endDate}
        default:
            return state;
    }
};

export default filterReducer