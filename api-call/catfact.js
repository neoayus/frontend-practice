let url = "https://catfact.ninja/fact" ;  


let para = document.querySelector("#fact") ;
let button = document.querySelector("#button") ;

button.addEventListener("click", async () => {
    try{
        let res = await axios.get(url) ; 
        let catFact =  res.data.fact ; 
        console.log(catFact) ; 
        para.innerHTML = `"${catFact}"` ;   
    }catch(err){
        console.log("error is : ", err) ;
    }
})
