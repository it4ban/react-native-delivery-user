import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { PrismaService } from 'src/prisma.service';
import { faker } from '@faker-js/faker';
import { hash } from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async login(dto: AuthDto) {}

  async getNewTokens(token: string) {
    const result = await this.jwt.verifyAsync(token);
    if (!result) throw new UnauthorizedException('Не удалось расшифровать токен');

    const user = await this.prisma.user.findUnique({
      where: {
        id: result.id,
      },
    });

    const tokens = await this.issueTokens(user.id);

    return { ...this.returnUserFields(user), ...tokens };
  }

  async register(dto: AuthDto) {
    const oldUser = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (oldUser) {
      throw new BadRequestException('Пользователь с таким email уже существует');
    }

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        phone: dto.phone,
        password: await hash(dto.password),
        lastName: dto.lastName,
        firstName: dto.firstName,
        surname: dto.surname,
        avatarUrl: faker.image.avatar(),
      },
    });

    const tokens = await this.issueTokens(user.id);

    return { ...this.returnUserFields(user), ...tokens };
  }

  private async issueTokens(userId: string) {
    const data = { id: userId };

    const accessToken = await this.jwt.sign(data, {
      expiresIn: '1h',
    });

    const refreshToken = await this.jwt.sign(data, {
      expiresIn: '7d',
    });

    return { accessToken, refreshToken };
  }

  private returnUserFields(user: User) {
    return {
      id: user.id,
      email: user.email,
    };
  }

  private;
}
