const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 4,
    },
    email: {
      type: String,
      required: true,
    },
    // thoughts: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Thought'
    //   }
    // ],
    // friends: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    //   }
    // ]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema)

module.exports = User;
