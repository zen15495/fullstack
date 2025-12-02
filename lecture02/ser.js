const fullName = " Anirach  Mingkhwan  ";

const cleanedName = fullName.trim();
console.log("Trimmed Name:", {cleanedName});

const nameparts = cleanedName.split(" ");
console.log("Name Parts:", nameparts);

const finaparts = nameparts.filter(Boolean);
console.log("Filtered Name Parts:", finaparts);

const firstname = finaparts[0];
console.log("Fiest Name:", {firstname});