import { InMemoryUsersRepository } from '../repositories/in-memory/in-memory-users-repository'
import { expect, describe, it } from 'vitest'
import { RegisterUseCase } from './register'
import { compare } from 'bcryptjs'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'

describe('Register use Case', () => {

  it('should be able to register', async () => {

    const usersRepository = new InMemoryUsersRepository()
    const registerUseCase = new RegisterUseCase(usersRepository)


    const { user } = await registerUseCase.execute({
      name: 'Jonh',
      email: 'jonh@example.com.br',
      password: '123456'
    })

    expect(user.id).toEqual(expect.any(String))

  })

  it('should hash user password upon registration', async () => {

    const usersRepository = new InMemoryUsersRepository()
    const registerUseCase = new RegisterUseCase(usersRepository)


    const { user } = await registerUseCase.execute({
      name: 'Jonh',
      email: 'jonh@example.com.br',
      password: '123456'
    })

    const isPasswordCorrectHashed = await compare('123456', user.password_hash)

    expect(isPasswordCorrectHashed).toBe(true)

  })
  it('should not be able to register with same email twice', async () => {

    const usersRepository = new InMemoryUsersRepository()
    const registerUseCase = new RegisterUseCase(usersRepository)

    const email = 'jonh@example.com.br';


    await registerUseCase.execute({
      name: 'Jonh',
      email,
      password: '123456'
    })

   await expect(()=>
    registerUseCase.execute({
      name: 'Jonh',
      email,
      password: '123456'
    }),

    ).rejects.toBeInstanceOf(UserAlreadyExistsError)


  })
})


