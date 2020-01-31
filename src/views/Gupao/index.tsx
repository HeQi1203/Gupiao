import React, { Component } from 'react';
import { getGupiaoList } from '../../api/index';
import { connect } from 'react-redux';
import RouterView from '../../router/routerView';

interface TypesProps {
    routes: any;
    StockesGupiao: any;
    setGupiaoList: Function;
}
class Gupiao extends Component<TypesProps> {
    render() {
        console.log(this.props);
        return (
            <div>
                Gupiao
                <RouterView routes={this.props.routes} />
            </div>
        );
    }
    componentDidMount() {
        getGupiaoList().then(res => {
            console.log(res.data);
            console.log(this.props.setGupiaoList(res.data.result));
        });
    }
}
export default connect(
    state => {
        console.log(state);
        return state;
    },
    dispatch => {
        return {
            setGupiaoList(data: any) {
                console.log(data);
                dispatch({ type: 'SetGuPiaoList', payload: data });
            },
        };
    }
)(Gupiao);
