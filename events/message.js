module.exports = (app) => {
    app.message(/hello/i, async ({ message, say }) => {
      await say(`안녕하세요, <@${message.user}>님!`);
    });
  
    app.message(/bye/i, async ({ message, say }) => {
      await say('안녕히 가세요!');
    });
  };
  