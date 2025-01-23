module.exports = (app) => {
    app.command('/테스트', async ({ command, ack, say }) => {
      await ack(); // 명령어 수신 확인
      await say(`안녕하세요, <@${command.user_id}>님!`);
    });
  };
  