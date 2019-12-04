

// const fs = require('fs');
// const http = require('http');

// function sendData(res, data, statusCode=500){
//      res.writeHead(statusCode,{
//         'Content-Type': 'text/html'
//     });
//     res.write(data);
//     res.end();

//  }

//  function senddatatoclient(res, filename = 'index.html', statusCode = 200){
//      fs.readFile(filename, 'utf-8',(err, data) => {
//     if(err){
//         return sendData(res, '<h1>500</h1>')

//     }sendData(res, data,statusCode)
//       });
//      }

//  http.createServer((req,res)=>{
//      switch(req.url){
//          case '/?page=home':
//          senddatatoclient(res);
//              break;
//               case '/?page=contact':
//               senddatatoclient(res,'news.html');
//               break;
//               case '/?page=news':
//               senddatatoclient(res,'contact.html');
//  break;
//  default:
//         senddatatoclient(res,'404.html', 404);

//     }
 
  
  
    
   
// }).listen(8082);


const http = require('http'); 
const url = require('url');
const fs = require('fs');
const sendData = (filename, res) => {
    fs.readFile(`${filename}.html`,'utf-8', (err,data) => {
        if(err){
            if (err.code === 'ENOENT'){

            }
        }else{
            res.write(data);
        }
        res.end();
    
    });
};


http.createServer((req,res) => {
    res.writeHead(200);
const { query:{page}} = url.parse(req.url,true);
switch (page){
    case 'home':sendData('index', res); break;
    case 'contact':sendData('contact', res); break;
    case 'news':sendData('news', res); break;
    default: sendData('404', res); break;
}



   
}).listen(8081);