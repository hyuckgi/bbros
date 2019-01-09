import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { path } from '../commons';

import { List, Item } from './';

class CurationContainer extends React.Component {

    render() {
        return (
            <div className="curation-wrapper">
                <Switch>
                    <Route exact path={path.curation} component={List} />
                    <Route path={path.item(path.curation)} component={Item} />
                </Switch>
            </div>
        );
    }

}

export default CurationContainer;
