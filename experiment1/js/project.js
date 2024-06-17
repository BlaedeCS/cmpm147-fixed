// project.js - purpose and description here
// Author: Your Name
// Date:

// NOTE: This is how we might start a basic JavaaScript OOP project

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file

// define a class
class MyProjectClass {
  // constructor function
  constructor(param1, param2) {
    // set properties using 'this' keyword
    this.property1 = param1;
    this.property2 = param2;
  }
  
  // define a method
  myMethod() {
    // code to run when method is called
  }
}

function main() {
  const fillers = {
    opening: ["a crack","a rusted door", "what looks like an unlit hallway", "a door", "a plus symbol protruding from the wall", "a slidable window"],
    position: ["the corner of the room", "a crevice behind a $material pillar", "between two paintings on the wall", "the brightly lit hallway leading from the room"],
    detail: ["the bright lights", "the candles along the walls", "the reflections in a big mirror facing you","cobwebs from the ceiling", "dust particles in the air"],
    action: ["cause you to cough", "illuminate the room before you", "produce an electric atmosphere", "distract you or something"],
    color: ["green", "blue", "dusty", "beige", "red", "purple", "black", "brown", "silver", "mossy", "warm"],
    material: ["concrete", "wooden", "tiled", "painted", "stone", "variegated"],
    shape: ["square", "rectangular", "octagonal", "slanted", "narrow L", "round"],
    size: ["Wide", "Tall ceiling", "Very large in size"],
    furniture: ["$color table with four chairs", "dresser containing $item", "cabinet containing $item", "podium, with $item on it", "chair"],
    item: ["a book", "two books", "a fork", "someone's skull", "your keys somehow"],
    
  };
  
  const template = `You see $opening in $position...
  
  You creep through...
  
  And then $detail $action!
  
  Look at this room! It has $color, $material walls and a $shape shape. $size, and there seems to be a $furniture.
  
  I wonder what else is in this room...
  `;
  
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    $("#box").text(story);
  }
  
  /* global clicker */
  $("#clicker").click(generate);
  
  generate();
  
}

// let's get this party started - uncomment me
//main();