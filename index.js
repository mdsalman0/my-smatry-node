const express = require('express')
const app = express();
const cors = require('cors')
const port = process.nextTick.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Hello hero smart lager tomare')
})

const users = [
    {id:1, name:'akbor',job:'khay shudhu',email:'akbor@gmail.com'},
    {id:2, name:'japor',job:'khay shudhu',email:'japorr@gmail.com'},
    {id:3, name:'shahadat',job:'khay shudhu',email:'shahadat@gmail.com'},
    {id:4, name:'nurul islam',job:'khay shudhu',email:'nurul@gmail.com'},
    {id:5, name:'mamun',job:'khay shudhu',email:'mamun@gmail.com'},
]

app.get('/users',(req,res)=>{
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const metch = users.map(user => user.name.toLowerCase().includes(search))
        res.send(metch)
    }
    else{
        res.send(users)
    }
})

app.get('/user/:id',(req,res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u=>u.id == id)
    res.send(user)
})

app.post('/user',(req,res)=>{
    console.log('request',req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.get('/fruits',(req,res)=>{
    res.send(['mango','apple','orange'])
})

app.get('/fruits/mango/fazle',(req,res)=>{
    res.send('sur surd fzli')
})

app.listen(port,()=>{
    console.log('Hello Bangladesh',port);
})