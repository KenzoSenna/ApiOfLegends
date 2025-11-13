import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Character extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare image_url: string

  @column()
  declare name: string

  @column()
  declare region: string

  @column()
  declare resource: string

  @column()
  declare year: number

  @column()
  declare type: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}