const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given array = `,fruits_seasonal);
// Step-1: log the first and last element on console
console.log(`\nStep-1.a : First element from array fruits_seasonal = `,fruits_seasonal[0]);
console.log(`Step-1.b : Last element from array fruits_seasonal = `,fruits_seasonal[fruits_seasonal.length-1]);
console.log(`---------------------------------------------------------------------------------------------------`);

//step-2:add element -> Papaya before the element 'Banana' and then log array on console
fruits_seasonal.unshift('Papaya');
console.log(`Step-2 : Array fruits_seasonal after add papaya before element Banana :\n\t `,fruits_seasonal);
console.log(`---------------------------------------------------------------------------------------------------`);

//step-3:remove mango from the array
fruits_seasonal.splice(4,1);
console.log(`Step-3 : Array fruits_seasonal after remove Mango from array list :\n\t `,fruits_seasonal);
console.log(`---------------------------------------------------------------------------------------------------`);

//step-4: add element or insert an element 'Pineapple' at the last position
fruits_seasonal.push('Pineapple');
console.log(`Step-4 : Array fruits_seasonal after insert Pineapple at last position :\n\t `,fruits_seasonal);
console.log(`---------------------------------------------------------------------------------------------------`);

//step-5: insert an element-'Dragon Fruit' before "Water Melon"
fruits_seasonal.splice(4,0,'Dragon Fruit');
console.log(`Step-5 : Array fruits_seasonal after insert Dragon Fruit before Water Melon : \n\t`,fruits_seasonal);
console.log(`---------------------------------------------------------------------------------------------------`);

//step-6: replace an element 'Orange with 'Kiwi'
fruits_seasonal.splice(2,1,'Kiwi');
console.log(`Step-6 : Array fruits_seasonal after replace Orange with Kiwi : \n\t`,fruits_seasonal);
console.log(`---------------------------------------------------------------------------------------------------`);

//step-7:Log the elements starting from 1 to 4

console.log(`Step-7 : Array fruits_seasonal from index 1 to 4 : \n\t`,fruits_seasonal.splice(1,4));
console.log(`---------------------------------------------------------------------------------------------------`);

//step-8: Only select last 3 elements and log on console:Use the length property

let result='';
for (let index = 0; index <=fruits_seasonal.length-1; index++) {
    //const element = array[index];
    result+=fruits_seasonal[index]+" , ";
}
console.log(`Array fruits_seasonal after performing all steps up to 7 : `,fruits_seasonal);

console.log(`Step-8 : Last 3 elements from array fruits_seasonal : \n\t`,result);

