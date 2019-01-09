import React from 'react';
import { connect } from 'react-redux';
import { fetch } from '../redux/actions';

import { api, service } from '../commons';

import { ListItem } from './';

const mapStateToProps = ({ fetch }) => {
    const list = fetch.list;

    return{
        list
    }
};

const mapDispatchProps = dispatch => ({
    getList : (url, params) => dispatch(fetch.list(url, params))
});

class List extends React.Component {

    constructor(props) {
        super(props);

        this.getList = this.getList.bind(this);
        this.renderList = this.renderList.bind(this);
    }

    componentDidMount() {
        this.getList();
    }

    getList(){
        const obj = api.getBanners({populate : true});
        this.props.getList(obj.url, obj.params)
    }

    renderList(list){
        if(list.length){
            return list.filter(item => service.getValue(item, 'active', false))
                        .map((item, idx) => {
                            return (<ListItem key={idx} item={item} />)
                        });
        }

        return(
            <li className="list-none">
                <h4>리스트가 없습니다.</h4>
            </li>
        )
    }

    render() {
        const list = service.getValue(this.props, 'list', []);

        return (
            <ul className="list">
                {this.renderList(list)}
            </ul>
        );
    }
}

export default connect(mapStateToProps, mapDispatchProps)(List);
