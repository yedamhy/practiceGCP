const express = require('express');
const app = express();
const port = 3000;

// 정적 파일 제공을 위한 미들웨어 설정
app.use(express.static('public'));

// '/' 경로로 요청이 오면 'index.html'을 응답
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
