let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

// Removing last item in the myArray
myArray.pop();

// Adding 2 new item (Aco and Aaron) in the Array
myArray.push("Aco", "Aaron");

// Adding the index number of each item after the name with parenthesis.
for(var i=0;i<myArray.length;i++){
    myArray[i]=myArray[i] + "("+ i+ ")";
}

// joining the array items together in a single string called myString, with a separator of " - "
let myString = myArray.join('-');

alert(myString);