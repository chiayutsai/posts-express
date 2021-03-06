const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name 為必填欄位'],
    },
    content: {
      type: String,
      required: [true, 'content 為必填欄位'],
    },
    image: {
      type: String,
      default: '',
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false }
)

const Post = mongoose.model('Post', postSchema)

module.exports = Post