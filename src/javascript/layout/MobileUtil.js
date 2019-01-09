import React from 'react';
import { Link } from 'react-router-dom';

import { path } from '../commons';

class MobileUtil extends React.Component {

    onClickBtn(){
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="mobile-util">
                <Link
                    to={path.promo}
                    target="_blank"
                    className="promo img-area"
                    onClick={(event) => {
                        event.preventDefault();
                        window.open(path.promo);
                    }}
                >
                    <img src="https://cdn.ddocdoc.com/_beauty/contents/m-smart-btn.png" alt="promo"/>
                </Link>
                <a className="btn-top" onClick={this.onClickBtn.bind(this)}>top</a>
            </div>
        );
    }

}

export default MobileUtil;
