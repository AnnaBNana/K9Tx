

function computeChoc()
    {
        //Obtain user inputs
        var weight = Number(document.getElementById("weight").value);
        
        var wtOptions = document.getElementById("wtOptions").value;
        
        var amt = Number(document.getElementById("amt").value);
        
        var amtOptions = document.getElementById("amtOptions").value;
        
        var chocOptions = document.getElementById("chocOptions").value;
        
        var percCocoa = Number(document.getElementById("percCocoa").value);
        

		//Error handling
		if (weight < 0 || amt < 0) {
       		document.getElementById("dose").textContent = "  " + "Invalid input";
       		document.getElementById("sideEffects").textContent = "  " + "Please enter a valid weight and mg amount";
       };
       
       if (weight < 0 || amt < 0) return;
       
       
       if (isNaN(weight)) {
       		document.getElementById("dose").textContent = "  " + "Invalid input";
       		document.getElementById("sideEffects").textContent = "  " + "Please enter a valid weight and mg amount";
	   };
	   
	   if (isNaN(weight)) {
       		return;
	   };
	   
	   
	   if (isNaN(amt)) {
       		document.getElementById("dose").textContent = "  " + "Invalid input";
			document.getElementById("sideEffects").textContent = "  " + "Please enter a valid weight and mg amount";
	   };
	   
	   if (isNaN(amt)) {
       		return;
	   };

		if (chocOptions === "blnk") {
       		document.getElementById("dose").textContent = "  " + "Invalid input";
       		document.getElementById("sideEffects").textContent = "  " + "Please select type of chocolate";
       };

		if (chocOptions === "blnk") {
			return;
		}

        //Convert all units to metric
        if (wtOptions=="lbs") {
         weight/=2.2046;
        };
        
        if (amtOptions=="oz") {
         amt*=28.3495;
        };
        
        console.log(amt);
        
        
        //calculation for type of chocolate
        if (chocOptions=="cocoPow") {
         amt*=28.5;
        }
        
        else if (chocOptions=="bakeChoc") {
         amt*=16;
        }
        
        else if (chocOptions=="semSweet") {
         amt*=5.7;
        }
        
        else if (chocOptions=="dkChoc") {
         amt*=5.7;
        }
        
        else if (chocOptions=="mlkChoc") {
         amt*=2.3;
        };
        
        
      
        console.log(amt);
        
        //perform equation 
        var toxCalc = amt/weight;
        
        //rounds mg/kg dose
        var dose = Math.round(toxCalc);
        
         console.log(toxCalc);
        
        //displays equation results
        document.getElementById("dose").textContent= " " + Math.round(toxCalc);

      //outcome log
      if (dose >0 && dose<=19) {
        document.getElementById("sideEffects").innerHTML = "  " + "No signs to mild GI upset";
        }
      else if (dose>=20 && dose<=39) {
        document.getElementById("sideEffects").innerHTML = "  " + "Gastro-intestinal symptoms";
        }
      else if (dose>=40 && dose<=59) {
        document.getElementById("sideEffects").innerHTML = "  " + "Cardiotoxic signs";
       }
      else if (dose>=60 && dose<=69) {
        document.getElementById("sideEffects").innerHTML = "  " + "Risk of seizures";
       }
      else if (dose>=70) {
        document.getElementById("sideEffects").innerHTML = "  " + "Potentially Lethal"; 
       }
      
      
  };