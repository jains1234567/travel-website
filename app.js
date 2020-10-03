const express=require("express");
const path=require("path");
const fs=require("fs");
const app=express();
const port=8000;

app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))


app.get('/',(req,res)=>{
  const prm = { }
  res.status(200).render('home.pug',prm);
})
app.get('/tours',(req,res)=>{
  res.status(200).render('tours.pug');
})
app.get('/about',(req,res)=>{
  res.status(200).render('about.pug');
})
app.get('/gallery',(req,res)=>{
  res.status(200).render('gallery.pug');
})
app.get('/contact',(req,res)=>{
  res.status(200).render('contact.pug');
})


app.get('/co',(req,res)=>{
  res.status(200).render('contact.pug');
})
app.post('/co',(req,res)=>{
  first=req.body.name
  last=req.body.age
  email=req.body.email
  phn=req.body.phone
  
let outputToWrite=`name=${first} ${last},email=${email},phone no.=${phn}`
    fs.writeFileSync('output.txt',outputToWrite)
    const prm={
      'message':'Your form has been submitted sucessfully'}
  res.status(200).render('contact.pug',prm);
})


app.listen(port,()=>{
    console.log(`applicatin start on port${port}`);
});