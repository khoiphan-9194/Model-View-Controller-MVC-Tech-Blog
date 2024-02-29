const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/edit/:id', withAuth, async(req, res) => {
  try {
		const blogData = await Blog.findByPk(req.params.id, {
      //        where: {
      //   id: req.params.id,
      //   user_id: req.session.user_id,
      
      // },
     // attributes: ['id', 'blog_name', 'description', 'date_created','user_id'],
			include: [
  
				{
					model: User,
					attributes: ['username'],
				}, {
					model: Comment,
					include: [
						User
					]
				}
			],
		});

		const blog = blogData.get({
			plain: true
		});

		res.render('editBlog', {
      blog,
			logged_in: req.session.logged_in,
	  	user_name: req.session.user_name,
     
   
     // logged_in: true,
			
		});

	} catch (err) {
		res.status(500).json(err);	
	}
  });


router.get('/:id',withAuth ,async (req, res) => {
	try {
		const blogData = await Blog.findByPk(req.params.id, {
			include: [
				{
					model: User,
					attributes: ['username','id'],
				}, {
					model: Comment,
					include: [
						User
					]
				}
			],
		});

		const blog = blogData.get({
			plain: true
		});

		res.render('blogView', {
			...blog,
			logged_in: req.session.logged_in,
			user_name: req.session.user_name,
      user_id:req.session.user_id,
    
		});

	} catch (err) {
		res.status(500).json(err);
		
	}
});



router.post('/',withAuth,async (req, res) => {
  try {
    const blogData = await Blog.create({
     
      blog_name: req.body.blog_name,
      description: req.body.description,
      user_id: req.session.user_id
    });


    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.put('/edit/:id',withAuth,async (req, res) => {
  try {
    const updatedBlog = await Blog.update(
      {
        //blog_name: req.body.blog_name,
        description: req.body.description,
      
      },
      {
        where: {
            id: req.params.id,
        },
    })
    if (!updatedBlog) {
      res
        .status(404)
        .json({ message: `No comment found with id = ${req.params.id}` });
      return;
    }
    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
