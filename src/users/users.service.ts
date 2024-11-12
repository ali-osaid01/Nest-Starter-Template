import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            name: 'John Doe',
            email: 'johndoe@example.com',
            age: 30,
            address: '123 Main St, Anytown, USA'
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'janesmith@example.com',
            age: 28,
            address: '456 Maple Ave, Othertown, USA'
        },
        {
            id: 3,
            name: 'Robert Johnson',
            email: 'robertjohnson@example.com',
            age: 45,
            address: '789 Elm St, Newcity, USA'
        },
        {
            id: 4,
            name: 'Emily Davis',
            email: 'emilydavis@example.com',
            age: 35,
            address: '101 Oak St, Newplace, USA'
        },
        {
            id: 5,
            name: 'Michael Brown',
            email: 'michaelbrown@example.com',
            age: 40,
            address: '202 Pine St, Oldtown, USA'
        }
    ];

    findAll(){
        return this.users;
    }

    findOne(id:number){
        return this.users.find((users)=>users.id === id);
    }

    createUser(payload:any){
        this.users.push(payload);
        return payload;
    }
}
