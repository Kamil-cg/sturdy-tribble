// // srv/CustomerService.ts

// import cds from "@sap/cds";
// import { Person } from "#cds-models/btp/starterkit/index"; // this path changes depending on where you declare your type

// export class CustomerService extends cds.ApplicationService {
//   init() {
//     // other code

//     const person: Person = {
//       ID: "1cd91ef2-d104-484c-82bb-646dfd74859f",
//       name: "Arthur",
//       surname: "Morgan",
//     };

//     //? we also have all ts types powers available such as unions and intersections etc.
//     // intersection to enchance Person type (note, this will not be visible in cds type)
//     type Hero = Person & {
//       superpower: String;
//     };

//     const hero: Hero = {
//       ...person,
//       superpower: "TypeScript",
//     };

//     // union (in some usecases is very useful)
//     type Developer = Person | Hero;

//     const greet = (individual: Developer) => {
//       console.log(`Welcome, ${individual.name}!`);
//     };

//     greet(person); // accepts Person type
//     greet(hero); // accepts also Hero type!

//     return super.init();
//   }
// }