const Post = require("../models/instaCloneModel");

const createPost = (req, res) => {
  let d = new Date().toDateString().split(" ").splice(1, 3);
  let newDate = `${d[1]} ${d[0]} ${d[2]}`;
  const newPost = new Post({
    name: req.body.name,
    location: req.body.location,
    likes: Math.floor(Math.random() * 1000),
    description: req.body.description,
    postImage:
      "https://images.pexels.com/photos/14270861/pexels-photo-14270861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: newDate,
  });

  newPost
    .save()
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
};

const getPosts = (req, res) => {
  Post.find()
    .sort({ createdAt: -1 })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};

module.exports = {
  getPosts,
  createPost,
};
