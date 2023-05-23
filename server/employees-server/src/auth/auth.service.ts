import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async signIn(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);
        console.log(user)

        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }

        const payload = { email: user.email, sub: user.userId }
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }

    async signUp(username: string, pass: string, confirmPassword: string, email: string): Promise<any> {
        if (pass == confirmPassword) {
            const newUser = await this.usersService.register(username, pass, confirmPassword, email);
            if (newUser) {
                console.log('User Successfully')
                return await this.signIn(email, pass);
            }
        } else {
            console.log('Bad Password')
            throw new HttpException('Passwords do not match', HttpStatus.BAD_REQUEST);
        }
    }
}
