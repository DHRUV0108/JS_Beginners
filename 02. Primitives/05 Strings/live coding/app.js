let firstName = "Dhruv";
let lastName = "Singh";
let fullName = firstName + lastName;
console.log(fullName);

// 1. CONCATENATION
fullName = firstName + " " + lastName
console.log(fullName);
fullName = firstName.concat(lastName);
console.log(fullName);

// 2. APPEND
firstName += " something else"
console.log("string method append",firstName);

// 3. LENGTH
console.log("string method lenght",firstName.length);

// 4. CASES
console.log("string method toUpperCase",firstName.toUpperCase());
console.log("string method toLowerCase",firstName.toLowerCase());

// 5. SLICE
console.log("string method slice",fullName.slice(0, 3));

// 6. SPLIT & JOIN
console.log("string method spilt ",fullName.split(""));
console.log("string method split & Join",fullName.split("").join("-"));

// 7. INCLUDES
console.log("string method Include",fullName.includes("Dhruv"));

// 8. TRIM
console.log("string method trim",fullName.trim());
