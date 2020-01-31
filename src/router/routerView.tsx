import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

interface TypesProps {
    routes: any;
}
export default class RouterView extends Component<TypesProps> {
    render() {
        console.log(this.props.routes);
        let redirectList = this.props.routes.filter((item: any) => item.redirect);
        let routerList = this.props.routes.filter((item: any) => !item.redirect);
        return (
            <Switch>
                {routerList.map((item: any, index: any) => {
                    return (
                        <Route
                            key={index}
                            path={item.path}
                            render={props => {
                                let Item = item.component;
                                if (item.children) {
                                    return <Item {...props} routes={item.children} />;
                                } else {
                                    return <Item {...props} />;
                                }
                            }}
                        />
                    );
                })}

                {redirectList.map((item: any, index: any) => {
                    return <Redirect exact key={index} from={item.path} to={item.redirect} />;
                })}
            </Switch>
        );
    }
}
