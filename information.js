var gender = '';
var infoAge = '';
var a = 0;
var a = 0;
if (sexe === 'M')
  gender = "Monsieur, "

else if (sexe === 'F')
  gender = "Madame, "


if (age >= 18) {
  infoAge = "vous êtes majeur depuis "
  a = age - 18;
}
else {
  infoAge = "vous serez majeur dans "
  a = 18 - age;
}
console.log(`prenom: ${prenom}`)
console.log(`nom: ${nom}`)
console.log(`age: ${age}`)
console.log(`${gender} ${infoAge} ${a} ans`);

information('Sofiane', 'Akermoun', 39, 'M')
information('Alice', 'Liddell', 7, 'F')