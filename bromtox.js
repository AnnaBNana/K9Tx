function computeChoc()
    {
        //Obtain user inputs
        var weight = Number(document.getElementById("weight").value);
        
        var wtOptions = document.getElementById("wtOptions").value;
        
        var amt = Number(document.getElementById("amt").value);
        
        var amtOptions = document.getElementById("amtOptions").value;

		//Error handling
        if (weight <= 0 || amt <= 0) {
          document.getElementById("dose").textContent = "  " + "Invalid input";
          document.getElementById("sideEffects").textContent = "  " + "Please enter a valid weight and amount";
          return;
        };

        if (isNaN(weight)) {
          document.getElementById("dose").textContent = "  " + "Invalid input";
          document.getElementById("sideEffects").textContent = "  " + "Please enter a valid weight and amount";
          return;
        };

        if (isNaN(amt)) {
          document.getElementById("dose").textContent = "  " + "Invalid input";
          document.getElementById("sideEffects").textContent = "  " + "Please enter a valid weight and amount";
          return;
        };

        //Convert all units to metric
        if (wtOptions=="lbs") {
         weight/=2.2046;
        };
        
        if (amtOptions=="oz1") {
         amt*=2.8349;
        }
        else if (amtOptions=="oz2") {
          amt*=7.0875;
        }
        else if (amtOptions=="g") {
          amt*=10;
        }
        else if (amtOptions=="g2") {
          amt*=25;
        };
        
        console.log(amt);
        
        //perform equation 
        var toxCalc = amt/weight;
        
        //rounds mg/kg dose
        var dose = Math.round(toxCalc * 10) / 10;
        
         console.log(toxCalc);
        
        //displays equation results
        document.getElementById("dose").textContent= " " + dose;

      //outcome log
      if (dose >0 && dose<=1) {
        document.getElementById("sideEffects").innerHTML = "  " + "While most dogs will be asymptomatic, some animals may exhibit mild CNS signs and/or vomiting.  Young animals are more likely to be effected.";
        }
      else if (dose>=1.1 && dose<=1.5) {
        document.getElementById("sideEffects").innerHTML = "  " + "Mild CNS and GI signs more likely. 1.5mg/kg is considered the minimum toxic dose.";
        }
      else if (dose>=1.6 && dose<=2.4) {
        document.getElementById("sideEffects").innerHTML = "  " + "Mild to moderate CNS signs likely, however onset may be delayed by as much as 3-14 days.";
       }
      else if (dose>=2.5 && dose<=4.6) {
        document.getElementById("sideEffects").innerHTML = "  " + "Minimum lethal dose is usually considered to be 2.5mg/kg, while the widely accepted LD50 is 4.7mg/kg.  Onset is dose-dependant and usually occurs within 24hrs.";
       }
      else if (dose>=4.7) {
        document.getElementById("sideEffects").innerHTML = "  " + "Doses greater than or equal to 4.7mg/kg are considered lethal."; 
       }
      
      
  };


