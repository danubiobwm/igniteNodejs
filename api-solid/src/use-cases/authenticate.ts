import { compare } from 'bcryptjs';
import { User } from '@prisma/client';
import { UsersRepository } from '@/repositories/users-repository';
import { InvalidCredentialsErrors } from './errors/invalid-credentials-errors';

interface AuthenticationUseCaseRequest {
  email: string;
  password: string;
}

interface AuthenticationUseCaseResponse {
  user: User
}

export class AuthenticateUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    email,
    password,
  }: AuthenticationUseCaseRequest): Promise<AuthenticationUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new InvalidCredentialsErrors();
    }

    const doesPasswordMatch = await compare(password, user.password_hash);

    if (!doesPasswordMatch) {
      throw new InvalidCredentialsErrors();
    }

    return{
      user
    }

  }
}
