const Hapi = require('hapi')
// Create a server with a host and port
const server = Hapi.server({
    host: 'localhost',
    port: 8080
});

server.start(console.log('here the hapi server has started'))
server.route({
    method:'GET',
    path:'/',
    handler:function(request,reply){
        // reply('welcome to node connect');
        return 'welcome to node connect'
    }
})
server.register(require('vision'),function(err){
    server.views({
        engine:{
            ejs:require('ejs')
        },
        path:'views',
        relativeTo:'__dirname'
    })
})