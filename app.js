const { App } = require('@slack/bolt');
const loadEvents = require('./events');
const loadActions = require('./actions');
require('dotenv').config();

// Slack Bolt 앱 초기화
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

// 이벤트와 액션 로드
loadEvents(app);
loadActions(app);

// 서버 실행
(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Slack Bolt 앱이 실행 중입니다!');
})();
