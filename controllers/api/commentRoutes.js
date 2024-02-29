const router = require('express').Router();
const {
    User,
    Blog,
    Comment
} = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
  try{ 
   const commentData = await Comment.findAll({
     include: [{model: User,
                attributes: { exclude: ['password']},
              }],
   });
 // serialize the data
   const comments = commentData.map((comment) => comment.get({ plain: true }));
 
   res.status(200).json(comments);
   
   //res.render('single-post', {comments, loggedIn: req.session.loggedIn});
 } catch(err) {
     res.status(500).json(err);
 }
 });

//Create a comment


router.post("/", withAuth, async (req, res) => {
  try {
    
    const comment = await Comment.create({
      comment_description: req.body.comment_description,
      blog_id: req.body.blog_id,
      user_id: req.session.user_id,
    });

    res.status(200).json(comment);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


module.exports = router;