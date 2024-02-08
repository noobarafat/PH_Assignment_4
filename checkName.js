function checkName(name) {

    if (typeof name !== 'string') {
        return "Invalid input. Please enter a string.";
    }

    name = name.toLowerCase();

    const lastLetter = name[name.length - 1];
    if (lastLetter === 'a' || lastLetter === 'y' || lastLetter === 'i' || lastLetter === 'e' ||
        lastLetter === 'o' || lastLetter === 'u' || lastLetter === 'w') {
        return "Good Name";
    }
    else {
        return "Bad Name";
    }
}

console.log(checkName("Salman")); 
console.log(checkName("RAFEE"));
console.log(checkName("Jhankar")); 
console.log(checkName(["Rashed"]));
