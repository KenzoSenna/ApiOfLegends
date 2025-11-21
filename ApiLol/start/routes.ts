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

router.resource('user', UsersController).apiOnly() // todos os métodos de crud pra user
router.resource('characters', CharactersController).apiOnly() // todos os métodos de crud pra chars
router.on('/').render("homepage") // Sempre que rodar o server, já vai bater de cara com a pagininha
router.on('/leaderboard').render("leaderboard") // sempre que o usuário chegar nessa url, ele vai deparar com o quadro de líderes
