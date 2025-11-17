// import type { HttpContext } from '@adonisjs/core/http'

import Character from "#models/character";
import { createCharacterValidator } from "#validators/character";
import type { HttpContext } from "@adonisjs/core/http";


export default class CharactersController {

    async index(){
        const characters = await Character.query()
        return characters
    }

    async store({request}: HttpContext){
        const {image_url, name, region, resource, year, type} = await request.validateUsing(createCharacterValidator)
        const character = await Character.create({image_url, name, region, resource, year, type})
        return character
    }

    async show({params, response}: HttpContext){
        try{
            const character = await Character.findBy('name', params.name)
            if (!character){
                throw new Error("This Character doesn't exists!")
            }
            return character
        }
        catch (Error){
            return response.status(400).json({Error:
                Error.message})
        }
    }

    async update({params, request, response}: HttpContext){
        try{
            const character = await Character.findBy('id', params.id)
            if (!character){
                throw new Error("This Character doesn't exists!")
            }
            const {name, region, resource, year, type} = await request.validateUsing(createCharacterValidator)
            character.merge({name, region, resource, year, type})
            await character.save()
            return character
        }
        catch (Error){
            return response.status(200).json({Error: Error.message})
        }
    }

    async destroy({params, response}: HttpContext){
        try{
            const character = await Character.findBy('id', params.id)
            if(!character){
                throw new Error("Character doesn't exists")
            }
            await character.delete()
            return response.status(203)
        }
        catch(Error){
            return response.status(400).json({Error: Error.message})
        }
    }
}