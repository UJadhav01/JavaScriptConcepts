class Bank{
    bank_name;
    location;
    account_no;
    ifsc_code;
    interest_rate;
    constructor(bank_name,location,account_no,ifsc_code,interest_rate){
        this.bank_name=bank_name;
        this.location=location;
        this.account_no=account_no;
        this.ifsc_code=ifsc_code;
        this.interest_rate=interest_rate;
    }

}
let axis_bank=new Bank('Axis Bank','pandhapur',123456789,'AXIS0004','14% p.a');
let sbi_bank=new Bank('SBI Bank','pune',123456789,'SBIN0003','14% p.a');
let kotak_bank=new Bank('Kotak Bank','solapur',123456789,'KOTAK0006','14% p.a');
let hdfc_bank=new Bank('HDFC Bank','mumbai',123456789,'HDFC0065','14% p.a');
let punjab_bank=new Bank('Punjab Bank','karmala',123456789,'PUNJAB0034','14% p.a');

const array=[axis_bank,sbi_bank,kotak_bank,hdfc_bank,punjab_bank];
for (const element of array) {
    console.log(`Bank Name = ${element.bank_name}   Location(City)=${element.location} `);
}
console.log(`\nBank details of bank which having name as kotak bank : \n`);
for (const iterator of array) {
    if(iterator.bank_name=='Kotak Bank'){
        console.table(iterator);
    }
}
console.log(`\nAll bank details after performing all steps :`);
for (const iterator of array) {
    console.log(iterator);
}