import { Router } from 'express'

const router = Router()
import * as skillsController from '../controllers/skills.js'

router.get('/', skillsController.index)
router.get('/new', skillsController.newSkill) //we have to put this line first so it gets triggered
router.get('/:id', skillsController.show)
router.post('/', skillsController.create)
router.delete('/:id', skillsController.deleteSkill)

export {
  router
}