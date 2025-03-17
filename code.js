function greetUser ({ name, age, gender}){
    var title = {male: "Mr.", female: "Ms", other: "Mx."};
    var title = title[gender.toLowerCase()] || "Mr.";
  //  console.log('Hi ${title} ${name}, your age is ${age}');
    
}
    greetUser({ name: "Nitish", age: 20, gender: "male"});
    console.log("hi" + greetUser.male + greetUser.name + "," + "Your age is" + greetUser.age);
    