const config = require("../../config/config");

homeController = function (req, res, next) {
    res.render('index.html', {
        config:config
    });
}

module.exports = {
    homeController: homeController
}

// todo 게임 참여 인원, 각각의 이름 받아 오는 페이지 만들기
// 저장은 필요 없을 듯 그냥 서버에서 데이터 가지고 rendering
// 혼자일 경우 대전 상대 봇 만들기 -- 여러명 이전에 이거 먼저
// 여러명일 경우 팀 설정? 누구끼리 팀할지도 필요하겠다
// 받아오는 페이지에서 팀 설정할 수 있도록 하면 되겠다
// 페이지 home 저거 그냥 써도 될듯? css 좀 손보자