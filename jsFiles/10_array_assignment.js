const arrayOfNames=['Kamat','Memon','Nashpati','Taimur','Menon','Kamat','Andy','Taimur'];
console.log(`step-a : Given array = `,arrayOfNames);
let uniqueArrayOfNames=new Set(arrayOfNames);
console.log(`step-b : Array arrayOfNames after removing duplicate elements = `,[...uniqueArrayOfNames]);
console.log(`step-c :  Count of removed duplicate elements from arrayOfNames = `,(arrayOfNames.length-uniqueArrayOfNames.size));
console.log(`step-d : Count of unique element after remove duplicate elements from arrayOfNames = `,uniqueArrayOfNames.size);
