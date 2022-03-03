const router = require('express').Router();
const {Post, User, Comment} = require('../models')
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    // find all posts
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['id', 'title', 'post', 'created_at'],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
      
    }).then(dbPostData => {
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        res.render('dashboard', {posts, loggedIn: req.session.loggedIn});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.get('/edit/:id', (req,res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'title', 'post', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
            model: Comment,
            attributes: ['id', 'comment', 'post_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        }
    ]
    }) .then (dbPostData => {
        if(!dbPostData) {
            res.status(404).json({ message: 'No post found with this id!' })
            return;
        }
        const post = dbPostData.get({plain: true});

        res.render('post', {post, loggedIn: req.session.loggedIn})
    }) .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.get('/newpost', (req, res) => {
    res.render('posting')
});

module.exports = router