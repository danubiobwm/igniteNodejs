import { InMemoryUsersRepository } from '../repositories/in-memory/in-memory-users-repository'
import { expect, describe, it } from 'vitest'
import { AuthenticateUseCase } from './authenticate'
import { hash } from 'bcryptjs'
import { InvalidCredentialsErrors } from './errors/invalid-credentials-errors'

describe('Authenticate use Case', () => {

  it('should be able to Authenticate', async () => {

    const usersRepository = new InMemoryUsersRepository()
    const sut = new AuthenticateUseCase(usersRepository)

    await usersRepository.create({
      name: 'Jonh Doe',
      email: 'jonh@teste.com',
      password_hash: await hash('123456', 6)
    })


    const { user } = await sut.execute({
      email: 'jonh@example.com.br',
      password: '123456'
    })

    expect(user.id).toEqual(expect.any(String))

  })

  it('should not be able to Authenticate with wrong email', async () => {

    const usersRepository = new InMemoryUsersRepository()
    const sut = new AuthenticateUseCase(usersRepository)

    expect(()=>
       sut.execute({
        email: 'jonhDoe@example.com.br',
        password: '123456'
      })
    ).rejects.toBeInstanceOf(InvalidCredentialsErrors)

  })

  it('should not be able to Authenticate with wrong password', async () => {

    const usersRepository = new InMemoryUsersRepository()
    const sut = new AuthenticateUseCase(usersRepository)

    await usersRepository.create({
      name: 'Jonh Doe',
      email: 'jonh@teste.com',
      password_hash: await hash('123456', 6)
    })

    expect(()=>
       sut.execute({
        email: 'jonhDoe@example.com.br',
        password: '2233366'
      })
    ).rejects.toBeInstanceOf(InvalidCredentialsErrors)

  })

})