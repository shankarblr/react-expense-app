const add = (a,b) => a + b

const getGreeting =(name='Anonymous') => `Hello ${name}`

test('Add two numbers - Add method',() => {
    const result = add(4,5);
    expect(result).toBe(9)
   
})


test('Display Greetings Hello Shankar',() =>{
    expect(getGreeting('Shankar')).toBe('Hello Shankar')
});



test('Display Greetings Anonymous',() =>{
    expect(getGreeting()).toBe('Hello Anonymous')
});