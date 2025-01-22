module.exports = (app) => {
    app.command('/hello', async ({ command, ack, respond }) => {
      await ack(); // 명령어 수신 확인
      await respond(`안녕하세요, <@${command.user_id}>님!`);
    });
  };
  