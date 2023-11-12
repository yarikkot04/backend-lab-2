const { Router } = require('express')
const router = Router()

router.get('/user', (req, res) => {
    res.render('user-delete', {
        title: 'Delete user'
    })
})

router.get('/user/error', (req, res) => {
    res.status(404).json({ error: 'The user with this id does not exist' })
})

module.exports = router