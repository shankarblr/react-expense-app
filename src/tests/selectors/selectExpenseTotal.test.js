import selectExpenseTotal from '../../selectors/selectExpenseTotal';
import testData from '../fixtures/expensesTestData';

test('Testing the sum total of exepense with empty array',() =>{
    const expenses = [];
    const sumTotal = selectExpenseTotal(expenses);
    expect(sumTotal).toBe(0);
});


test('Testing the sum total of exepense with with single array',() =>{
    const sumTotal = selectExpenseTotal([testData[0]]);
    expect(sumTotal).toBe(100);
});

test('Testing the sum total of exepense multiple',() =>{

    const sumTotal = selectExpenseTotal(testData);
    expect(sumTotal).toBe(700);
});

