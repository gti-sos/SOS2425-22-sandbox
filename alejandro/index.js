const express = require("express");
const app = express();
const PORT = process.env.PORT || 16078;
const BASE_API = "/api/v1";
app.use(express.json());

app.use("/",express.static("./public"));

let contacts = [
    {
        name: "peter",
        phone: 123456
    },
    {
        name: "pablo",
        phone: 789042
    }
];

app.get(BASE_API + "/contacts",(request,response) => {
    console.log("New GET to /contacts");
    response.send(JSON.stringify(contacts));
});

app.post(BASE_API + "/contacts",(request,response) => {
    console.log("POST to /contacts");
    let newContact = request.body;
    
    contacts.push(newContact);

    response.sendStatus(201);
});

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}!`);
});