"use strict";
		 
                  function myFunction() {
                    document.getElementById("myDropdown").classList.toggle("show");
                  }
                   
                  window.onclick = function(e) {
                    if (!e.target.matches('.dropbtn')) {
                    var myDropdown = document.getElementById("myDropdown");
                      if (myDropdown.classList.contains('show')) {
                        myDropdown.classList.remove('show');
                      }
                    }
                  }
              

                  function togglePopup(){
                  document.getElementById("popup-1").classList.toggle("active");    
                  }
                  function togglePopup2(){
                    document.getElementById("popup-2").classList.toggle("active");
                    document.getElementById("popup-1").classList.toggle("active");
                  }


                  function togglePopup3(){
                    document.getElementById("popup-3").classList.toggle("active");

                    document.getElementById("popup-2").classList.toggle("active");
                  }



                  function togglePopup4(){
                    document.getElementById("popup-4").classList.toggle("active");

                    document.getElementById("popup-3").classList.toggle("active");
                  }



                  function togglePopup5(){
                    document.getElementById("popup-5").classList.toggle("active");

                    document.getElementById("popup-4").classList.toggle("active");
                  }
                  function togglePopup6(){
                    document.getElementById("popup-6").classList.toggle("active");
                    document.getElementById("popup-5").classList.toggle("active");
                  }
                  function togglePopup7(){
                    document.getElementById("popup-7").classList.toggle("active");
                    document.getElementById("popup-6").classList.toggle("active");
                  }
                


                  let points=0; //points are higher--> more stereotype
function addstereotype(){
  points++;
} 
function togglePopupSee(){
  document.getElementById("popup-7").classList.toggle("active");
               
 
  
if (points ==1 || points==0 ){
  document.getElementById("popup-01").classList.toggle("active");  
}
if (points ==2 ){ 
  document.getElementById("popup-02").classList.toggle("active"); 
     }
if (points ==3 ){  document.getElementById("popup-03").classList.toggle("active"); 
        }
if (points ==4){   document.getElementById("popup-04").classList.toggle("active"); 
                   
}
if (points ==5){   document.getElementById("popup-05").classList.toggle("active"); 
} 
 
} 



function togglePopupall(){

  
     if (points ==1 || points==0 ){
      document.getElementById("popup-01").classList.toggle("active"); 
    }
    if (points ==2 ){ 
      document.getElementById("popup-02").classList.toggle("active");
         }
    if (points ==3 ){  document.getElementById("popup-03").classList.toggle("active");
            }
    if (points ==4){   document.getElementById("popup-04").classList.toggle("active");
                       
    }
    if (points ==5){   document.getElementById("popup-05").classList.toggle("active");
    }
    
   }
 
  


 