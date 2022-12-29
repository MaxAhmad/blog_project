const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    description: {
      type: String,
    },
    author: {
      type: String,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
