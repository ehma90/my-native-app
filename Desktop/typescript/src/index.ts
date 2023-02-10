// let sale: number = 123_456_789;
// let topic = 'typscript';


// function mainFolder(document: any){
//     console.log(document);
// }


//Enums
// const small = 1
// const medium = 2
// const large = 3

//Pascal naming
// const enum Size {Small = 1, Medium, Large}
// let mySize: Size = Size.Medium
// console.log(mySize);



// Functions
// function collectTax(income: number, taxYear = 2022): number{
//     if(taxYear < 2022){
//         return income * 1.2
//     }
//     return income * 1.3
// }

// collectTax(10_000, 2023)



//Object
// let employee: {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = {
//     id: 1,
//     name: '',
//     retire: (date: Date) => {console.log(date)}
// }



// Type aliase
// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// }

// let employee: Employee = {
//     id: 1,
//     name: 'ehma',
//     retire: (date: Date) => {console.log(date)}
// }



//Union type 
// function kgToLbs(weight: number | string): number{
//     // narrowing
//     if(typeof weight === 'number')
//     return weight * 2.2
//     else
//     return parseInt(weight) * 2.2
// }



//Intersection type
// type Draggable = {
//     drag: () => void
// }

// type Resizable = {
//     resize: () => void
// }

// type UIWidget = Draggable & Resizable

// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {}
// }



// Literal type
// type Quantity = 50 | 100
// let quantity: Quantity = 50;



//Nullable type
// function greet(name: string | null){
//     if(name)
//     console.log(name.toLocaleUpperCase);
//     else
//     console.log(null);
// }

// greet(null)



//Optional /chaining
type Customer = {
    birthday: Date,
}

function getCustomer(id: number): Customer | null | undefined{
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(1)
// Optional property access operator
console.log(customer?.birthday);

//  Optional element access operator
// Customer?.[0]