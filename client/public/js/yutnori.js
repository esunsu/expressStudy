// 윷놀이 배열
const YUT_ARRAY = ['모', '도', '개', '걸', '윷', '백도'];
// 윷이 뒤가 나올 확률
// 윷 모양 때문에 앞면 확률 0.6 뒷면 확률 0.4로 설정
const VERSO_PROBABILITY = 0.4;
// 앞면 0 뒷면 1
const OBVERSE_STRING = '0';
const VERSO_STRING = '1';

var throwCnt = 0;

function userInit() {
    throwCnt = 1;
}

function throwYut() {
    if(throwCnt === 0) {
        alert('더 이상 던질 수 없습니다.');
        return;
    }
    let result = '';
    for(let i = 0; i < 4; i++){
        result += Math.random() < VERSO_PROBABILITY ? VERSO_STRING : OBVERSE_STRING;
    }
    throwCnt--;

    return yutBinaryToString(result);
}

function yutBinaryToString(yutBinary) {
    let splitResult = yutBinary.split('1');
    let OneCnt = yutBinary.split('1').length - 1;

    switch (OneCnt) {
        case 0:
        case 4:
            throwCnt++;
            break;
        case 1:
            splitResult[0] === '' ? (OneCnt = 5) : null; // 첫번째가 1이면 백도
            break;
    }

    return YUT_ARRAY[OneCnt];
}