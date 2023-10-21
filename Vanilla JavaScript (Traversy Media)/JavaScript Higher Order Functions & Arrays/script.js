const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Higher Order Functions

// forEach
// companies.forEach((eachCompany) => {
// console.log(eachCompany)
// })

// filter

// Using a for loop
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
// if (ages[i] >= 21) {
// canDrink.push(ages[i]);
// }
// }

// Using filter method, takes in each element in an array and passes through a function
// If it returns true, add to the canDrink array
// const canDrink = ages.filter((eachAge) => eachAge >= 21);
// console.log(canDrink);

// Using filter on the companies array of objects
// const retailCompanies = companies.filter(eachCompany => eachCompany.category === 'Retail');
// console.log(retailCompanies);

// Get 80s companies
// const eightiesCompanies = companies.filter(eachCompany => (eachCompany.start >= 1980 & eachCompany.start < 1990));
// console.log(eightiesCompanies);

// Get companies that lasted for 10 years or more
// const lastedTenYears = companies.filter(eachCompany => (eachCompany.end - eachCompany.start) >= 10);
// console.log(lastedTenYears);

// map
// Create array of company names
// map create a new array that has elements
// const companyNames = companies.map(eachCompany => eachCompany.name);
// console.log(companyNames);

// const testMap = companies.map((eachCompany) => `${eachCompany.name} [${eachCompany.start} - ${eachCompany.end}]`);
// console.log(testMap);

// const agesSquareRoot = ages.map((eachAge) => Math.sqrt(eachAge));
// console.log(agesSquareRoot);

// const agesTimesTwo = ages.map(eachAge => eachAge * 2);
// console.log(agesTimesTwo);

// const agesTimesTwoSquareRoot = ages
// .map(eachAge => Math.sqrt(eachAge))
// .map(eachAge => eachAge * 2);

// console.log(agesTimesTwoSquareRoot);

// sort
// const sortedCompanies = companies.sort((c1, c2) => {
// Sorts from earliest start to latest start
// if (c1.start > c2.start) {
// return 1;
// } else {
// return -1;
// }
// });

// const sortedCompanies = companies.sort((c1, c2) => (c1.start > c2.start) ? 1 : -1);
// console.log(sortedCompanies);

// Sort ages
// const sortedAges = ages.sort((a1, a2) => (a1 > a2) ? 1 : -1);
// console.log(sortedAges);

// reduce
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
// ageSum += ages[i];
// }

// ageTotal is the accumulator and eachAge is what we add to ageTotal
// const ageSum = ages.reduce((ageTotal, eachAge) => ageTotal + eachAge, 0); // 0 is the starting point of ageTotal
// console.log(ageSum);

// Get total years for each company
// const totalCompanyYears = companies.reduce((totalYears, eachCompany) => {
// return totalYears + (eachCompany.end - eachCompany.start);
// }, 0);

// const totalCompanyYears = companies.reduce((totalYears, eachCompany) => totalYears += (eachCompany.end - eachCompany.start), 0);
// console.log(totalCompanyYears);

// Combine Methods

// const combined = ages
// .map(eachAge => eachAge * 2) // multiplies each age by 2
// .filter(eachAge => eachAge >= 40) // returns ages equal or greater than 40
// .sort((a1, a2) => (a1 > a2) ? 1 : -1) // sorts from lowest to highest
// .reduce((totalAge, eachAge) => totalAge += eachAge, 0);
// console.log(combined);

/*
Multiply each age by 2
Get ages 40 and above
Sort the ages from lowest to highest
Get the total of the ages
*/

const combined = ages
    .map(eachAge => eachAge * 2)
    .filter(eachAge => eachAge >= 40)
    .sort((a1, a2) => (a1 > a2) ? 1 : -1)
    .reduce((ageTotal, eachAge) => ageTotal + eachAge, 0);

console.log(combined);