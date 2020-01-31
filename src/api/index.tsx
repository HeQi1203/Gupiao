import { get } from '../utils/request';
export function getGupiaoList() {
    let url = '/finance/stock/shall?stock=&page=&type=4&key=5fdab3f67ad5d2e633505d9993f7b29e';
    return get(url);
}
