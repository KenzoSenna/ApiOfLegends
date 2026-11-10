import { HttpContext } from '@adonisjs/core/http'
import User from "#models/user"
import { createUserValidator } from '#validators/user'

export default class UsersController {
    async index(){
        const users = await User.query()
        return users
    }

    async store({request}: HttpContext){
    const {name, email, password} = await request.validateUsing(createUserValidator)
    const user = await User.create({ name, email, password})
    return user
    }
    
    async show({params, response}: HttpContext){
        try{
            const user = await User.findBy('id', params.id)
            if (!user){
                throw new Error("User not found!")
            }
            return user
        }
        catch (Error){
            return response.status(400).json({Error: Error.message})
        }
   }
   async update({params, request, response}: HttpContext){
        try{
            const user = await User.findBy('id', params.id)
            if (!user){
                throw new Error("This user doesn't exists!")
            }
            const {name,email, password } = await request.validateUsing(createUserValidator)
            user.merge({name, email, password})
            await user.save()
            return user
        }
        catch (Error){
            return response.status(400).json({Error: Error.message})
        }    
    }
    async destroy({params, response}: HttpContext){
        try{
            const user = await User.findBy('id', params.id)
            if (!user){
                throw new Error("User not found")
            }
            await user.delete()
            return response.status(203)
        }
        catch(Error){
            return response.status(400).json({Error: Error.message})
        }
    }
}