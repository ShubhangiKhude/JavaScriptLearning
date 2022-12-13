function stringtemplateAssig() {
  console.log(`My dream company name is: "Infosys"\n`);

  var myHobby1 = "Learning New Technologies";
  var myHobby2 = "Spending time with Friends";
  var myHobby3 = "Listening Music";

  console.log(`My Hobbies are (Using Variable substitution): ${myHobby1}, ${myHobby2}, ${myHobby3}..`);
  var myHobbies= myHobby1.concat(", ",myHobby2).concat(", ", myHobby3);
  console.log(`My Hobbies are (Concate by using String Template): ${myHobbies}..`);
}
stringtemplateAssig();
