import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { menus } from '../commons';
import { CurationContainer } from '../curation';


class Wrapper extends React.Component {

    constructor(props) {
        super(props);

        this.renderOther = this.renderOther.bind(this);
    }

    renderOther(props){
        const cTarget = menus.filter((menu) => menu.path === props.location.pathname).find(item => item) || {name : '홈'};

        return (
            <div className="contents-other">
                <h1>{cTarget.name}</h1>
            </div>
        )
    }

    render() {
        return (
            <Switch>
                <Route children={(props) => {
                    const isCuration = props.location.pathname.indexOf('/curation') === 0;

                    return(
                        <div className="contents">
                            {isCuration ? <CurationContainer /> : this.renderOther(props)}
                        </div>
                    )
                }}/>
            </Switch>
        );
    }

}

export default Wrapper;
