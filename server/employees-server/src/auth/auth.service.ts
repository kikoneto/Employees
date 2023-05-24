import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async signIn(email: string, hashedPassword: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);
        if (user) {
            const matchingPassword = bcrypt.compareSync(user.password, hashedPassword);
            console.log(matchingPassword);
            console.log(hashedPassword)
            if (matchingPassword) {
                const payload = { email: user.email, sub: user.userId }
                return {
                    access_token: await this.jwtService.signAsync(payload)
                }
            } else {
                throw new UnauthorizedException();
            }
        } else {
            throw new UnauthorizedException('No User');
        }
    }

    async signUp(username: string, pass: string, confirmPassword: string, email: string): Promise<any> {
        if (pass == confirmPassword) {
            const saltRounds = 10;
            const hashedPassword = bcrypt.hashSync(pass, saltRounds);
            const newUser = await this.usersService.register(username, pass, confirmPassword, hashedPassword, email);
            if (newUser) {
                console.log('User Successfully')
                return this.signIn(email, hashedPassword);
            }
        } else {
            console.log('Bad Password')
            throw new HttpException('Passwords do not match', HttpStatus.BAD_REQUEST);
        }
    }
}
