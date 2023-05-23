import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findByUsername(username);

        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }

        const payload = { username: user.username, sub: user.userId }
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }

    async signUp(username: string, pass: string, confirmPassword: string, email: string): Promise<any> {
        if (pass == confirmPassword) {
            const newUser = await this.usersService.register(username, pass, confirmPassword, email);
            console.log('Good Password')
            if (newUser) {
                console.log('logged in')
                await this.signIn(newUser.username, newUser.password);
            } else {
                throw new HttpException('No New User', HttpStatus.BAD_REQUEST);
            }
        } else {
            console.log('Bad Password')
            throw new HttpException('Passwords do not match', HttpStatus.BAD_REQUEST);
        }
    }
}
