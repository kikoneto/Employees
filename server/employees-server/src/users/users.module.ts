import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Users } from './users.entity';
import { UsersService } from 'src/users/users.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Users])],
    exports: [TypeOrmModule],
    controllers: [],
    providers: [UsersService],
})
export class UsersModule { }
