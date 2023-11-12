const { Router } = require('express')
const router = Router()

router.get('/user', (req, res) => {
    res.render('user-find', {
        title: 'Find user'
    })
})

router.post('/user', (req, res) => {
    res.redirect(`/user/${req.body.id}`)
})

module.exports = router