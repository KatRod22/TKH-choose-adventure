//start with a prompt, use an if statement to
 //show different messages based on what the user 
// enters in the prompt





let place = prompt("type 'Paris' or 'No Paris'");

if (place === 'Paris.toLowerCase()') {
    //You fly to Paris
    alert('Woo! Lets Fly To Paris!');

} else if (place === 'No Paris.toLowerCase()' ){
//You do not fly to Paris
}
else{
    alert('Well that is the end of your journey, womp womp')
}

let food = prompt("type 'croissant' or 'no croissant'");

if (food === 'croissant.toLowerCase()') {
    //Will eat croissant
    alert('yum, lets go enjoy a croissant!');
}

else if (food === 'No croissant.toLowerCase()') {
    //You do not eat a croissant
}

else{
    alert('What?! Who does not eat a croissant in paris?');
}

let attraction = prompt("type 'Eiffel' or 'no Eiffel'");

if (attraction === 'Eiffel.toLowerCase()') {
    //will visit Eiffel Tower
}

else if (attraction === 'no Eiffel.toLowerCase()') {
//will not visit Eiffel Tower
}

else{
    alert('NO EIFFEL TOWER?! SO WHY ARE WE IN PARIS?')
}

