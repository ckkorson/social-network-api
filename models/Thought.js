const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    // username: {

    // },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model('thought', thoughtSchema)

module.exports = Thought;
