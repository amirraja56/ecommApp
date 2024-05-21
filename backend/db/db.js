const mongoose= require('mongoose');

const url="mongodb+srv://amirraja56:raza@cluster0.vjl3pqj.mongodb.net/students?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url).then(()=>{
    console.log('DataBase connected');
}).catch((err)=>{
    console.log(`db connection failed---${err}`)
});
