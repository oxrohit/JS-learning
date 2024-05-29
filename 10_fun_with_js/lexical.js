function Outer(){

    let user = "Rohit";

    function inner(){
        console.log("Inner One", user);
    }
    
    function innerTwo(){
        console.log("Inner Two", user);
    }

    
    inner();
    innerTwo();
    
}

Outer();
