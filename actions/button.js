module.exports = (app) => {
    app.action('button_click', async ({ body, ack, say }) => {
      await ack(); // 액션 수신 확인
      await say(`<@${body.user.id}>님이 버튼을 클릭했습니다!`);
    });
  };
  