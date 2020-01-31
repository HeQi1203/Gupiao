// 收藏的股票
export default function Collect(state = [], action: any) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        default:
            return [...newState];
    }
}
