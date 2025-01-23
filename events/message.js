module.exports = (app) => {
    app.message('안녕', async ({ message, say }) => {
      console.log("hello detected");
      await say(`안녕하세요, <@${message.user}>님!`);
    });
  
    app.message('저리가', async ({ message, say }) => {
      console.log("bye detected");
      await say('안녕히 가세요!');
    });
  };
  