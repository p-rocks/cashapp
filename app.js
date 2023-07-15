const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use('/public', express.static('public'));
var date = new Date();
function timeOfRequest(date) {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
}


app.get('/', function(req, res){
   console.log('Time of request:' +timeOfRequest(date));
   res.render('home');
});
app.get('/about', function(req, res){
   console.log('Time of request:' +timeOfRequest(date));
   res.render('about');
});
app.get('/contact', function(req, res){
   console.log('Time of request:' +timeOfRequest(date));
   res.render('contact');
});

const port = 3000;
console.log('listening on '+ port);
app.listen(port);