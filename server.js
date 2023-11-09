const express = require('express');
const app = express();

// 환경 변수에서 제공된 포트 또는 8080 포트를 사용합니다.
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World from App Engine!');
});

// 지정된 포트에서 서버를 시작합니다.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
