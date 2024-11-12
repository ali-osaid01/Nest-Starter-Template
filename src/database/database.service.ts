import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit{
    async onModuleInit() {
        console.log("<- PRISMA CONNECTED ->")
        
        await this.$connect();
    }
}
