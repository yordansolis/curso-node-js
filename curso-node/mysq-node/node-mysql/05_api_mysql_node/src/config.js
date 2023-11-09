import {config} from 'dotenv';


config();

console.log(process.env.PORT);
console.log(process.env.DB_HOST);
console.log(process.env.DB_PORT);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_DATABASE);

console.log(process.env.MSJ);
console.log(process.env.SEPUEDE);


//ASI SE USAN:
export const PORT = process.env.PORT



