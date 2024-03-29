const router = require('express').Router();
const { User, Blog,Comment } = require('../../models');




router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
    });
    const users = userData.map((user) => user.get({
      plain: true
    }));
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err);
  }
});







router.get('/:id', (req, res) => {
  User.findOne({
      attributes: { exclude: ['password'] },
      where: {
          id: req.params.id
      },
      include: [
          {
              model: Blog,
              attributes: ['id', 'blog_name', 'description', 'date_created']
          },
          {
              model: Comment,
              attributes: ['id', 'comment_description', 'date_created'],
              include: {
                  model: Blog,
                  attributes: ['blog_name']
              }
          },
      ]
  })
      .then(dbUserData => {
          if (!dbUserData) {
              res.status(404).json({ message: 'No user found with this id' });
              return;
          }
          res.json(dbUserData);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ 
			where: { username: req.body.username } 
		});

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

      req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.user_name = userData.username;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});



//create user
router.post('/signup', async (req, res) => {
  // create a new user
  try { 
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password
  });
  

    req.session.save(() => {
    req.session.user_id = userData.id;
    req.session.logged_in = true;

    res.status(200).json(userData);
  });

} catch (err) {
  res.status(400).json(err);
}
});




router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;