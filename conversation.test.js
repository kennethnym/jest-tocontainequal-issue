const mongoose = require('mongoose');

const Conversation = require('./conversation');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(() => {
  mongoose.connection.close();
});

describe('Conversation', () => {
  it('should be able to create a document', async () => {
    const conversationId = mongoose.Types.ObjectId();
    const messageId = mongoose.Types.ObjectId();

    const testConversation = {
      _id: conversationId,
      messages: [
        {
          _id: messageId,
          type: 'TEXT',
          content: 'test message',
        },
      ],
    };

    await Conversation.create(testConversation);

    const createdConversation = await Conversation.findById(conversationId);

    expect(createdConversation.messages).toContainEqual({
      _id: messageId,
      type: 'TEXT',
      content: 'test message',
    });
  });
});
