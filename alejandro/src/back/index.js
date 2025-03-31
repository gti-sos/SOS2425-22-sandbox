import dataStore from "nedb";
const BASE_API = "/api/v1";

let db = new dataStore();

let initialContacts = [
    {
        name: "peter",
        phone: 123456
    },
    {
        name: "pablo",
        phone: 789042
    }
];

db.find({},(err,contacts)=>{ //va a hacer find va a devolver todos por eso se pone {} y como es asincrona se pone callback y este find puede devolver un error o los objetos q esta buscando
    if (contacts.length < 1){
        db.insert(initialContacts);
    }
})

function loadBackend(app){
    
    app.get(BASE_API + "/contacts",(request,response) => {
        console.log("New GET to /contacts");

        db.find({},(err,contacts)=>{
            response.send(JSON.stringify(contacts.map((c)=>{
                delete c._id;
                return c;
            })));
        })
        
    });
    
    app.post(BASE_API + "/contacts",(request,response) => {
        console.log("POST to /contacts");
        let newContact = request.body;
        
        db.insert(newContact);
    
        response.sendStatus(201);
    });
    //Borrado de un recurso concreto
    app.delete(BASE_API + "/contacts/:name",(request,response) => {
        let name = request.params.name
        console.log(`DELETE to /contacts/${name}`);
        let newContact = request.body;
        
        db.remove({"name" : name},{},(err,numRemoved)=>{
            if(err){
                //response.sendStatus(500); Asi seria sin mensaje aparte
                response.status(500).send("Error code 01");
            }else{
                if(numRemoved >= 1){
                    response.sendStatus(200);
                }else{
                    response.sendStatus(404);
                }
            }
        });
    
        response.sendStatus(201);
    })
}

export {loadBackend};