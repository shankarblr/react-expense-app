import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'


export default class ExpenseForm extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
            description : props.expense ? props.expense.description : '',
            amount : props.expense ? props.expense.amount.toString() :'',
            note:props.expense ? props.expense.note :'',
            createdAt : props.expense ? moment(props.expense.createdAt) :moment(),
            calenderfocused :false,
            error:'',
            isEdit :props.expense?true:false 
        }
    }
    
    onDescriptionChange =(e) => {
        const desc = e.target.value;
        this.setState(() => (
            { 
                description :desc 
            }));
    };

    onAmountChange =(e) => {
        const amt = e.target.value
        
        if(!amt || amt.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ( {   amount : amt   }))
        }
    };

    onNoteChange =(e) => {
        const note = e.target.value
        this.setState(() => (
            {
                note
            }
        ))
        
    }
    onDateChange =(date) =>{
        if(date){
            this.setState(() => ( { createdAt : date }) )
        }
    };

    onFocusChange =({focused}) => {
        this.setState(() => ( { calenderfocused : focused }) )

    }

    onSubmit =(e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.note){
            return this.setState(() => ( { error : 'Please provied description and notes fields' }) )
        }else{
            this.setState(() => ( { error : '' }) )

            this.props.onSubmit({
                description : this.state.description ,
                amount : parseFloat(this.state.amount,10),
                note: this.state.note,
                createdAt : this.state.createdAt.valueOf()
            })

        }

    }

    render() {
        return (
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>} 
                    <input type="text" 
                        placeholder ="description" 
                        autoFocus 
                        className="text-input"
                        value = {this.state.description}
                        onChange ={this.onDescriptionChange} >
                    </input>
                    <input 
                        type="text" 
                        className="text-input"
                        placeholder="amount" 
                        value ={this.state.amount}
                        onChange ={this.onAmountChange}
                        ></input>
                    <SingleDatePicker
                        date = {this.state.createdAt}
                        focused = {this.state.calenderfocused}
                        onFocusChange ={this.onFocusChange}
                        onDateChange ={this.onDateChange}
                        numberOfMonths ={1}
                        isOutsideRange ={() => false}
                    />    
                    <textarea 
                        placeholder="Add a note to expense (optional)"
                        value = {this.state.note}
                        onChange = {this.onNoteChange}
                        className="textarea"
                    >
                    </textarea>
                    <div>
                        <button className="button">{this.state.isEdit? 'Edit Expense' : 'Add Expense' }</button>
                    </div>
                </form>
        )
    };

}