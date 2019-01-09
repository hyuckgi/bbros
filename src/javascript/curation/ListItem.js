import React from 'react';
import { Link } from 'react-router-dom';
import { service, path } from '../commons';

class ListItem extends React.Component {

    constructor(props) {
        super(props);

        this.renderItem = this.renderItem.bind(this);
        this.renderImg = this.renderImg.bind(this);
    }

    renderItem(){
        const item = service.getValue(this.props, 'item', {});
        const id = service.getValue(item, 'groupId._id', false);

        if(!Object.keys(item).length){
            return null;
        }

        return(
            <li className="list-item">
                <Link to={id ? path.moveItem(path.curation, id) : path.home}>
                    <div className="img-area">
                        {this.renderImg(item)}
                    </div>
                    <div className="text-area">
                        <h4 className="title">{service.getValue(item, 'title', '')}</h4>
                        <p className="description"><strong>기획전</strong>{service.getValue(item, 'groupId.description', '')}</p>
                    </div>
                </Link>
            </li>
        )
    }

    renderImg(item){
        const src = service.getValue(item, 'mainImage.url', false);

        if(!src){
            return(<img src="http://placehold.jp/800x320.png?text=Blank" alt="blank" />);
        }

        return(<img src={src} alt={item.title || src}/>)
    }

    render() {
        return this.renderItem()
    }

}

export default ListItem;
