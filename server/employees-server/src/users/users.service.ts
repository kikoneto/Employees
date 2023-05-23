import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

    async findByEmail(email: string): Promise<Users | undefined> {
        return this.usersRepository.findOneBy({ email });
    }

    async register(username: string, password: string, confirmPassword: string, email: string): Promise<Users | undefined> {
        if (password == confirmPassword) {
            const existingUser = await this.usersRepository.findOneBy({ email: email });
            if (existingUser) {
                throw new HttpException('User with such an email already exists.', HttpStatus.BAD_REQUEST)
            }
            const user = new Users(username, password, email);
            console.log('Successful Register')
            return await this.usersRepository.save(user);
        }
    }

}
