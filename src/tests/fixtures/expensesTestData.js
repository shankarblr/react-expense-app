import moment from 'moment'
export default [
    {
        id : '1',
        description:'Rent',
        note :'',
        amount : 100,
        createdAt :0
    },
    {
        id : '2',
        description:'Gas',
        note :'',
        amount : 200,
        createdAt : moment(0).subtract(4,'days').valueOf()
    },
    {
        id : '3',
        description:'Food',
        note :'',
        amount : 400,
        createdAt :moment(0).add(8,'days').valueOf()
    }

]
