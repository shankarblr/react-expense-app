import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter,setStartDate,setEndDate,sortByDate,sortByAmount} from './../actions/filters'
import { DateRangePicker  } from "react-dates";


class ExpenseListFilter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            calenderfocused :null
        }
    }
    onDatesChange =({startDate,endDate}) =>{
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    };
    onFocusChange =(focusedInput) =>{
        this.setState(() => ( { calenderfocused :focusedInput }) )
    };
    onTextFilter = (e) =>{
        this.props.setTextFilter(e.target.value)    
    }
    onSortBy = (e) => {
        e.target.value ==='date' ? this.props.sortByDate() : this.props.sortByAmount()
    }
    render() {
        return (
            <div>
                <input type="text" value ={this.props.filter.text} onChange ={this.onTextFilter}></input>
                <select value ={this.props.filter.sortBy}  onChange = {this.onSortBy} >
                    <option value = "date">Date</option>
                    <option value ="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate = {this.props.filter.startDate}
                    endDate = {this.props.filter.endDate}
                    onDatesChange ={this.onDatesChange}
                    focusedInput={this.state.calenderfocused} 
                    onFocusChange ={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange = {() => false}
                    showClearDates={true}
                />
            </div>
        )
    };
}

const mapStateToExpenseListFilter = (state) => {
    return {
        filter : state.filter
    } 
};

const mapDispatchToProps =(dispatch) => {
    return {
        setTextFilter : (text) => dispatch(setTextFilter(text)),
        sortByDate : () => dispatch(sortByDate()),
        sortByAmount :() => dispatch(sortByAmount()),
        setStartDate : (startDate) => dispatch(setStartDate(startDate)),
        setEndDate : (endDate) => dispatch(setEndDate(endDate))
    };
};

export default connect(mapStateToExpenseListFilter,mapDispatchToProps)(ExpenseListFilter)