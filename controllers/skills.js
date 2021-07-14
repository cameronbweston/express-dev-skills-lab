import * as skillsDB from '../data/skills-db.js'

export {
    index,
    show,
    newSkill,
    create,
    deleteSkill
}

function index(req, res) {
    skillsDB.find({}, function(error, skills) {
      res.render('skills/index', {
        skills,
        error,
        time: req.time
      })
    })
  }
  
  function show(req, res) {
    skillsDB.findById(req.params.id, function(error, skills) {
      res.render('skills/show', {
        skill,
        error
      })
    })
  }
  
  function newSkill(req, res) {
      res.render('skills/new');
  }
  
  function create(req, res) {
      skillsDB.create(req.body, function(error, skill) {
          res.redirect('/skills')
      })
  }
  
  function deleteSkill(req, res) {
      skillsDB.findByIdAndDelete(req.params.id, function(error, skill) {
        res.redirect('/skills')
      })
    }