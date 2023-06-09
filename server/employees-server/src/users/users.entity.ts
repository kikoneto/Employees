import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({ type: 'varchar', length: 255 })
    username: string;

    @Column({ type: 'varchar', length: 255 })
    password: string;

    @Column({ type: 'varchar', length: 255 })
    hashedPassword: string;

    @Column({ type: 'varchar', length: 255 })
    email: string;

    constructor(username, password, hashedPassword, email) {
        this.username = username;
        this.password = password;
        this.hashedPassword = hashedPassword;
        this.email = email;
    }
}