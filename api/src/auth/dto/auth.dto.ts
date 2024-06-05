import { MinLength, IsEmail, IsString, IsMobilePhone } from 'class-validator';

export class AuthDto {
  @IsEmail()
  email: string;

  @MinLength(6, {
    message: 'Длина пароля должна быть не менее 6 символов',
  })
  @IsString()
  password: string;

  @IsMobilePhone('ru-RU')
  @IsString()
  phone: string;

  @MinLength(6, {
    message: 'Длина данного поля должна быть не менее 6 символов',
  })
  @IsString()
  lastName: string;
  firstName: string;
  surname: string;
}
