document.addEventListener("DOMContentLoaded",function(){
    let button = document.querySelector(".btn");
    let searchIN= document.getElementById("searchbar");

    button.addEventListener("click", function(event){
        const httpRequest = new XMLHttpRequest(); 
        let qText=searchIN.value;
        let url = "http://localhost/info2180-lab4/superheroes.php?query="+qText;
        
        
        
        function doSomething(){
            if(httpRequest.readyState===XMLHttpRequest.DONE){
                if(httpRequest.status===200){
                
                  document.getElementById("result").innerHTML=httpRequest.responseText
                } 

                else{
                    alert('There is something wrong');
                }

            }
        }
        
     httpRequest.onreadystatechange=doSomething;
     httpRequest.open('GET', url); 
     httpRequest.send();

    });
    
});