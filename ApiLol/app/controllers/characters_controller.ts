// import type { HttpContext } from '@adonisjs/core/http'

import Character from "#models/character";

export default class CharactersController {

    async index(){
        const characters = await Character.query()
        return characters
    }

    async store(){
        
    }

    async show(){

    }

    async update(){

    }

    async destroy(){
        
    }
}