// index.ts
// defining a user type

// type User = {
//     id: number;
//     name: string;
//     role: string;
// }

import type {User} from './types';

const welcomeUser = (user: User) : string => {
    return `Welcome ${user.name} you are ${user.role}`;
}

const newUser: User = {
    id: 2,
    name: "John",
    role: "Admin"
}

console.log(welcomeUser(newUser));