import React from 'react';
import { connect } from 'react-redux';
import { fetch } from '../redux/actions';

import { api, service } from '../commons';

const mapStateToProps = ({ fetch }) => {
    const list = fetch.list;

    return{
        list
    }
};

const mapDispatchProps = dispatch => ({
    getList : (url, params) => dispatch(fetch.list(url, params))
});

class Item extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            item : {}
        }

        this.getList = this.getList.bind(this);
        this.findItem = this.findItem.bind(this);
        this.renderImg = this.renderImg.bind(this);
    }

    componentDidMount() {
        const list = service.getValue(this.props, 'list');
        if(!list.length){
            return this.getList();
        }

        return this.findItem();
    }

    findItem(){
        const { match, list } = this.props;
        const id = service.getValue(match, 'params.id', false);

        if(!id || !list.length){
            return;
        }

        const item = list.filter(item => service.getValue(item, 'groupId._id', false) === id).find(item => item);

        return this.setState({
            item : item
        });
    }

    getList(){
        const obj = api.getBanners({populate : true});
        return this.props.getList(obj.url, obj.params)
            .then(() => {
                return this.findItem();
            })
    }

    renderImg(item){
        const src = service.getValue(item, 'mainImage.url', false);

        if(!src){
            return(<img src="http://placehold.jp/800x320.png?text={blank}" alt="blank" />);
        }

        return(<img src={src} alt={item.title || src}/>)
    }

    render() {
        const { item } = this.state;

        return (
            <div className="item">
                <div className="img-area">
                    {this.renderImg(item)}
                </div>
            </div>
        );
    }

}

export default connect(mapStateToProps, mapDispatchProps)(Item);
