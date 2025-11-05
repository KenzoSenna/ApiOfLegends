/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
const UsersController = () => import('#controllers/users_controller')
import CharactersController from '#controllers/characters_controller'
import router from '@adonisjs/core/services/router'
// import { middleware } from './kernel.js'

router.resource('user', UsersController).apiOnly()
router.resource('characters', CharactersController).apiOnly()