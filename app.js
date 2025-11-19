document.addEventListener("DOMContentLoaded",function(){
    let button = document.querySelector(".btn");

    button.addEventListener("click", function(event){
        const httpRequest = new XMLHttpRequest(); 
        let url = "http://localhost/info2180-lab4/superheroes.php";

        function doSomething(){
            if(httpRequest.readyState===XMLHttpRequest.DONE){
             if(httpRequest.status===200){
                 alert(httpRequest.responseText); 
                
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