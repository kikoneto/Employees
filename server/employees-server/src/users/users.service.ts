import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/users/users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>
    ) { }

    allUsers(): Promise<Users[]> {
        return this.usersRepository.find({
            select: ['userId', 'username', 'password', 'email'],
        });
    }

    async findByUsername(username: string): Promise<Users | undefined> {
        return this.usersRepository.findOneBy({ username });
    }
}
