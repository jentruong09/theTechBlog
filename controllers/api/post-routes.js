// where all the post routes are
const router = require('express').Router();
const {Post, User, Comment} = require('../../models')
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
    // find all posts
    Post.findAll({
        attributes: ['id', 'title', 'post', 'user_id', 'created_at'],
        order: [['created_at', 'ASC']],
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
      
    }).then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});


// issue with this?
// getting one post with comments
router.get('/:id', (req,res) => {
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
        res.json(dbPostData)

    }) .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// router.post('/', withAuth, async (req, res) => {
//     const post = req.body.post;
  
//     try {
//       const newPost = await Post.create({...post, user_id: req.session.user_id});
//       res.json(newPost);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });


router.post('/', withAuth, (req, res) => {
    Post.create({
        title: req.body.title,
        post: req.body.post,
        user_id: req.session.user_id
    }) .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});


router.put('/:id', withAuth, (req, res) => {
    Post.update({
        title: req.body.title,
        post: req.body.post
    },
    {
        where: {
            id: req.params.id
        }
    }).then (dbPostData => {
        if(!dbPostData) {
            res.status(404).json({ message: 'No post found with this id!' })
            return;
        } res.json(dbPostData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })    
});

router.post('/', withAuth, async (req, res) => {
    const body = req.body;
  
    try {
      const newPost = await Post.create({ ...body, user_id: req.session.user_id });
      res.json(newPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    }) .then (dbPostData => {
        if(!dbPostData) {
            res.status(404).json({ message: 'No post found with this id!' })
            return;
        } res.json(dbPostData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })    
});

module.exports = router