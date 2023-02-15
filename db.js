const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://harsh_4385:Ra4385@cluster0.2irydqa.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('connection success')
}).catch((err)=>{
    console.log('not conected');
})
