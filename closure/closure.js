1. var nonsense = function(string) {
  var blab = function() {
    alert(string);
  };
  blab();
};

1. var nonsense = function(string) {
  var blab = function() {
    alert(string);
  };
  setTimeout(blab, 2000);
};

1.  var nonsense = function(string) {
  var blab = function() {
    alert(string);
  }
  return blab;
};

var blabLater = nonsense("hello world");
var blabAgainLater = nonsense("hehehehehehe");

1.  blabLater(); 
	blabAgainLater();


1. var lastNameTrier = function(firstName){
  var first = firstName;  
  var innerFunction = function(lastName) { 
      console.log(first + ' ' + lastName);
  };
  return innerFunction;
};
var firstNameFarmer = lastNameTrier('Farmer'); 
firstNameFarmer('Brown');

1. var storyWriter = function() {
  var story = '';
  return {
    addWords: function(words) {
      story += words + " ";
      return story.trim();
    },
    erase: function() {
      story = '';
    }
  };
};

var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.');
farmLoveStory.addWords('It saw a friendly face.');

var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.'); 
storyOfMyLife.addWords('I ate some ice cream.'); 
storyOfMyLife.erase();