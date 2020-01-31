// 全部股票列表
export default function GupiaoList(state = [], action: any) {
    let newState = JSON.parse(JSON.stringify(state));
    console.log(action.payload, action.type);
    switch (action.type) {
        case 'SetGuPiaoList':
            newState = action.payload;
            return newState;
        default:
            return [...newState];
    }
}
