const router = require('express').Router();
const { Blog, User,Comment } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', async (req, res) => {
	try {
		const blogData = await Blog.findAll({
			include: [{
				model: User,
				attributes: ['username'],
			},],
		});

		const blogs = blogData.map((blog) => blog.get({
			plain: true
		}));

		res.render('homepage', {
			blogs,
			logged_in: req.session.logged_in,
			user_name: req.session.user_name,
			

		});
	
	} catch (err) {
		res.status(500).json(err);
	}
});





router.get("/dashboard", withAuth,async (req, res) => {
	Blog.findAll({
		where: {
		  user_id: req.session.user_id,
		},
		attributes: ['id', 'blog_name', 'description', 'date_created'],
		include: [
		  {
			model: Comment,
			attributes: ['id', 'comment_description', 'blog_id', 'user_id', 'date_created'],
			include: {
			  model: User,
			  attributes: ['username'],
			},
		  },
		  {
			model: User,
			attributes: ['username'],
		  },
		],
	  })
		.then((dbPostData) => {
		  const blogs = dbPostData.map((post) => post.get({ plain: true }));
		  res.render('dashboard', {
			blogs,
			logged_in: true,
			user_name: req.session.user_name 
		  });
		})
		.catch((err) => {
		  console.log(err);
		  res.status(500).json(err);
		});
	});


router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
	//logged_in: req.session.logged_in

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});




module.exports = router;
