const istatus = "200";

if (istatus === "200") {
    console.log("OK");
} else if (istatus === "400") {
    console.log("Bad Request"); 
} else {
    console.log("Unknown Status");  
}

switch (istatus) {
    case "200": 
        console.log("OK");  
        break;
    case "400":
        console.log("Bad Request");
        break;
    default:
        console.log("Unknown Status");
        break;
}

const statusMessage = istatus === "200" ? "OK" :"Bad Request";
console.log(statusMessage);