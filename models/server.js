const express = require('express')

class Server {
    
    
    constructor(){
        this.port = process.env.PORT||3000
    
        this.app = express()

        this.routers()
    }

    routers(){
        this.app.get('/',(req, res) => {
            res.send('Hello Emanuel')
        })

        this.app.get('/PP',(req, res) => {
            res.send('Hello Miguel')

        })

    }
    listen(){
        this.app.listen(this.port,() => {
            console.log(`Example app listening on port ${this.port}`)

        })
    }

 }
module.exports = Server;
