// all comment routes
const router = require('express').Router();
const {Comment} = require('../../models')
const withAuth = require('../../utils/auth');

router.get('/', (req,res) => {
    Comment.findAll({
        // attributes: ['id', 'comment', 'post_id', 'user_id', 'created_at'],
        // order: [['created_at', 'DESC']],
        // include: [
        //     {
        //         model: User,
        //         as: 'user',
        //         attributes: ['username']
        //     }
        // ]
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// Don't need to find only one comment??
// router.get('/:id', (req, res) => {
//     Comment.findOne({
//         where: {
//             id: req.params.id
//         },
//         attributes: ['id', 'comment', 'post_id', 'user_id', 'created_at'],
//         order: [['created_at', 'DESC']],
//         include: [
//             {
//                 model: User,
//                 as: 'user',
//                 attributes: ['username']
//             }
//         ]
//     }) .then(dbCommentData => res.json(dbCommentData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     })
// });

router.post('/', withAuth, (req, res) => {
    Comment.create({
        comment: req.body.comment,
        post_id: req.body.post_id,
        user_id: req.session.user_id
    }) 
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


// No need to update a comment
// router.put('/:id', withAuth, (req, res) => {
//     Comment.update({
//         comment: req.body.comment,
//     },
//     {
//         where: {
//             id: req.params.id
//         }
//     }).then(dbCommentData => {
//         if(!dbCommentData) {
//             res.status(404).json({ message: 'No comment found with this id!' })
//             return;
//         }
//         res.json(dbCommentData)
//     }).catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     })
// });


router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbCommentData => {
        if(!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id!' })
            return;
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;