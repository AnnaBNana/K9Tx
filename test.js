function computeTox()
    {
        //Obtain user inputs
        var weight=Number(document.getElementById("weight").value);

        var wtOptions=document.getElementById("wtOptions").value;
 
        var mg=Number(document.getElementById("amt").value);
        
        var mg=Number(document.getElementById("amtOptions").value);
                
       if (weight < 0 || mg < 0) {
       document.getElementById("dose").textContent = "  " + "Invalid input";
       document.getElementById("sideEffects").textContent = "  " + "Please enter a valid weight and mg amount";
       };
       
       if (weight < 0 || mg < 0) return;

        //Convert all units to metric
        if (wtOptions=="lbs") {
         weight/=2.2046;
        };
         
        //perform equation 
        var toxCalc = mg/weight;
        
        //rounds mg/kg dose
        var dose = Math.round(toxCalc);
        
        //displays equation results
        document.getElementById("dose").textContent= " " + Math.round(toxCalc);

      //outcome log
      if (dose >0 && dose<=99) {
        document.getElementById("sideEffects").innerHTML = "  " + "No signs to mild GI upset";
        }
      else if (dose>=100 && dose<=174) {
        document.getElementById("sideEffects").innerHTML = "  " + "Gastro-intestinal symptoms";
        }
      else if (dose>=175 && dose<=399) {
        document.getElementById("sideEffects").innerHTML = "  " + "Risk of renal failure";
       }
      else if (dose>=400 && dose<=599) {
        document.getElementById("sideEffects").innerHTML = "  " + "Risk of CNS signs in addition to renal failure and GI signs";
       }
      else if (dose>=600) {
        document.getElementById("sideEffects").innerHTML = "  " + "Potentially Lethal"; 
       }
      
      
  };