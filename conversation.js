const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
  messages: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      type: { type: String },
      content: String,
    },
  ],
});

const Conversation = mongoose.model('conversations', conversationSchema);

module.exports = Conversation;
