const http = require('http');
const fs = require('fs')
const dateModule = require('./customModule')
const url = require('url');
const server = http.createServer(function (req, res) {
    res.writeHead(200,'Content-Type','Text/html')
    let error = 'No err'
    /*fs.open('example1.html','w',function (err) {
        if(err){
            console.log('here the file is not found hence creating the new one')
            error = err
        }
    })*/
    /*
    fs.readFile('example.html',function (err,data) {
        res.write(data + error)
        res.end()
    })*/
    /*fs.appendFile('example.html','appended text ',function (err) {
        if(err){
            error=err
            console.log(`couldn't append text`)
        }
    })*/
    /*fs.writeFile('createdFile.html','new data in the file',function (err) {
        if(err){
            console.log('error in creating the new file')
            error=err
        }
    })*/
   /* fs.unlink('example1.html',function (err) {
        if(err){
            console.log('here example 1 is not there')
            error=err
        }
    })*/
   /*fs.rename('createdFile.html','renamedFile.html',function (err) {
       if(err){
           console.log(`'couldn't rename`)
           error=err
       }
   })*/
    /*var readFileSync = fs.readFileSync('example.html',{'encoding':'utf-8'})

    console.log('here readFileSync is ',readFileSync)

    var readFile= fs.readFile('example.html',{'encoding':'utf-8'},function (err,data) {
        console.log('here asynchronously reading file ',data)
    })
    var readStream = fs.createReadStream('data.txt')

    readStream.on('data',function (data) {
        console.log('data is loaded'+ data)
    })
    readStream.on('open',function () {
        console.log('file is opened')
    })
    readStream.pipe(fs.createWriteStream('writeStreamData.txt'))*/
    // res.end(error)
   /****************************************************** URL Module *********************/
   /*var month = url.parse(req.url,true).query
    console.log(month)
   res.end(month.month)*/
    res.end(dateModule.add(4,5).toString())
})
server.listen(8080)