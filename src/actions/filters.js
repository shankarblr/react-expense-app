
export const setTextFilter = (text='') =>({
    type :'SET_TEXT_FILTER',
    text
});

export const sortByDate = () =>({
        type:'SET_SORT_BY_DATE'
});

export const sortByAmount = () =>({
    type:'SET_SORT_BY_AMOUNT'
});

export const setStartDate = (startDate = 0) => ({
        type : 'SET_SORT_BY_STARTDATE',
        startDate
});

export const setEndDate = (endDate = 0) =>({
        type : 'SET_SORT_BY_ENDDATE',
        endDate
}); 
