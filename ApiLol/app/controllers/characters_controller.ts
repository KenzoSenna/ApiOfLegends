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
        const {name, region, resource, year, type} = await request.validateUsing(createCharacterValidator)
        const character = await Character.create({name, region, resource, year, type})
        return character
    }

    async show({params, response}: HttpContext){
        try{
            const character = await Character.findBy('id', params.id)
            return character
        }
        catch (Error){
            return response.status(400).json({Error:
                'O joão é tão, mas tão feio, que a Api falhou.'})
        }
    }

    async update(){

    }

    async destroy(){

    }
}