console.log('Hello world!');

console.log(2+2);

var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html","<h1>HTML is GREAT!</h1>",function(error){
    if(error){
        return console.log(error);
    }
    else {
        return console.log("Congrats");
    }
});

var myPhotoLocation ='https://nodejs.org/static/images/logo.svg';
https.get(myPhotoLocation,function(response){
    response.pipe(fs.createWriteStream(__dirname+"/myLogo.svg"));
});