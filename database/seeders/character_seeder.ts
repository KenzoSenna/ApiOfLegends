import Character from '#models/character'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Character.createMany([
      {
      }
    ])
  }
}