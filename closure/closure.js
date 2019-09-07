1. var string = 'Hello Hack Reactor';
  
	function nonsense(string) {	 
	  var blab = function(){
	   alert(string);
	  };
	  setTimeout(function(){ blab(); }, 2000);
  }
  
  nonsense(string);

1. var string = 'Hello Hack Reactor';
  
	function nonsense(string) {	 
	  var blab = function(){
	   alert(string);
	  };
	  setTimeout(function(){ blab(); }, 2000);
  }
  
  nonsense(string);

1.  var string = 'Hello Hack Reactor';
  AnotherString = 'Welcome to JS';
  
	function nonsense(string) {	 
	  var blab = function(){
      alert(string);
	  };
	  return blab();
  }

  var blabLater = nonsense(string);
  var blabAgainLater = nonsense(AnotherString);

1. console.log(blabLater);
   console.log(blabAgainLater);

1. var firstNameTrier = function(firstName){
	   
	    var innerFunction = function(lastName) {
	      console.log(firstName + " " + lastName);
	    };
	    
	    return innerFunction;
	}
	var firstNameFarmer = lastNameTrier('Farmer');
	firstNameFarmer('Brown'); 