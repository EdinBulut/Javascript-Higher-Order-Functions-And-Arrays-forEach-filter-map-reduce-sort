const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2003},
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
    {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 17, 64, 32];



// ************FOREACH****************



// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i].name);
// }

// ---------------------------------------

// companies.forEach(function(company) {
//     console.log(company.name);
// })



// ************FILTER****************



// ***FILTER AGES***


// let adults = [];
// for (let i=0; i < ages.length; i++) {
//     if(ages[i]>=18) {
//         adults.push(ages[i]);
//     }
// }
// console.log(adults);

// ---------------------------------------

// const adults = ages.filter(function(age) {
//     if (age >= 18) {
//         return true;
//     }
// });
// console.log(adults);

// ---------------------------------------

// const adults = ages.filter((age) => age >=18 );
// console.log(adults);


// ***FILTER COMPANY CATEGORIES***


// const retailCompanies = companies.filter(function(company) {
//     if (company.category == 'Retail') {
//         return true;
//     }
// });
// console.log(retailCompanies);

// ---------------------------------------

// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);


// ***GET 80s COMPANIES***


// const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990);
// console.log(eightiesCompanies);


// ***GET COMPANIES THAT LASTED AT LEAST 10 YEARS***


// const lastedTenYrs = companies.filter(company => (company.end - company.start) >= 10);
// console.log(lastedTenYrs);



// ************MAP****************



// ***CREATE ARRAY OF COMPANY NAMES***


// const companyNames = companies.map(function(company) {
//     return company.name
// });
// console.log(companyNames);


// ***TEST MAP***


// const test = companies.map(function(company) {
//     return 1
// });
// console.log(test);

// const testMap = companies.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}]`
// });
// console.log(testMap);

// ---------------------------------------

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(testMap);


// ***MAP AGES***


// const agesSquare = ages.map(age => Math.sqrt(age));
// console.log(agesSquare);

// const agesTimesTwo = ages.map(age => age*2);
// console.log(agesTimesTwo);

// const ageMap = ages
// .map(age => Math.sqrt(age))
// .map(age => age*2);
// console.log(ageMap);



// ************SORT****************



// ***SORT COMPANIES BY START YEARS***


// const sortedCompanies = companies.sort(function(c1, c2) {
//     if (c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
// console.log(sortedCompanies);

// ---------------------------------------

// const sortedCompanies = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));
// console.log(sortedCompanies);


// ***SORT AGES***


// const sortAges = ages.sort((a,b) => a - b);
// console.log(sortAges);



// ************REDUCE****************



// let ageSum = 0;
// for (let i=0; i<ages.length; i++) {
//     ageSum += ages[i];
// }
// console.log(ageSum);

// ---------------------------------------

// const ageSum = ages.reduce(function(total, age) {
//     return total + age;
// }, 0);
// console.log(ageSum);

// ---------------------------------------

// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);


// ***GET TOTAL YEARS FOR ALL COMPANIES***


// const totalYears = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
// },0);
// console.log(totalYears);

// ---------------------------------------

// const totalYears = companies.reduce((total, company) => total +(company.end - company.start),0);
// console.log(totalYears);



// ************COMBINE METHODS****************



const combinedAges = ages
    .map(age => age*2)
    .filter(age => age >= 40)
    .sort((a,b) => a-b)
    .reduce((a,b) => a + b, 0);

    
console.log(combinedAges);
