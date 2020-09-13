import express from 'express';
import {Request, Response, NextFunction} from 'express'

import mongoose from 'mongoose';

function logger(req: Request, res: Response, next:NextFunction) {
    console.log(`[${req.method}] ${req.baseUrl}`)
    next()
}

mongoose.connect("mongodb://localhost:27017/acme", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
)

const testSchema = new mongoose.Schema({
    name: String
})

const teste = mongoose.model("teste", testSchema)


//new test({name:"teste"}).save();

const app = express();

//test.deleteMany({name: "teste"});
//console.log()
app.get("/p/:stuff", logger, (req, res) => {
    new teste({
        name: req.params.stuff
    })
        .save();

        //Sem o ".save(), o registro não é feito no banco"

    return res.send({ message: ` ${req.params.stuff} created` })
})


app.get("/", logger, (req, res) => {

    teste.find({}).then(item => {
                console.log(item)
                return res.send(item)})   
                
                //Sem o ".then(return ...), ele não traz as info do branco"
})

app.get("/d/:name", logger, (req, res) => {
    const{name} = req.params
    teste.deleteMany({name}).then()
    //Sem o ".then() não o delete funciona"
    return res.send({ message: `All ${name} has removed` })
})

app.use(express.json())

app.listen(4001, () => console.log("Server running on port 4001"))