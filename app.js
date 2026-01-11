// undsen operator example  

let firstName, lastName, yearOfBirth, year;

firstName = "John";
lastName = 'Doe';
yearOfBirth = 1990;
year = 2025;

console.log(`First Name: ${firstName ?? 'No first name provided'}`);
console.log(`Last Name: ${lastName ?? 'No last name provided'}`);
yearJohn = year - yearOfBirth;
console.log(`John's Age: ${yearJohn ?? 'Year not available'}`);

// after 15 years
year += 15;
yearJohn = year - yearOfBirth;
console.log(`In 15 years, John's Age: ${yearJohn ?? 'Year not available'}`);
// after 18 years
year += 3;
yearJohn = year - yearOfBirth;
console.log(`In 18 years, John's Age: ${yearJohn ?? 'Year not available'}`);


let johndOlder = yearJohn > 18;
console.log(johndOlder ?? "Age comparison");