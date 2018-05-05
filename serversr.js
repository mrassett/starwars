let http = require("http");

let PORTONE = 7000; 
let PORTTWO = 7500;

function handleRequests(request, response){ 
    response.end("You are beautiful")
}
function handleotherRequest(request, response){ 
    response.end("You are nast af")
}

let server = http.createServer(handleRequests);
let servers = http.createServer(handleotherRequest);
server.listen(PORTONE, function(){
    console.log("Server listening on http://localhost:" + PORTONE)
});

servers.listen(PORTTWO, function(){
    console.log("Server listening on http://localhost:" + PORTTWO)
});