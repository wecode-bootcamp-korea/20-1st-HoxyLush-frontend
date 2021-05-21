import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { exchangeCurrency } from '../../../utilityFunc';
import { PRODUCT_API } from '../../../config';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
import './Card.scss';

class Card extends Component {
  state = {
    isModalLikeOpen: false,
  };

  toggleModalLike = () => {
    const { isModalLikeOpen } = this.state;
    this.setState({
      isModalLikeOpen: !isModalLikeOpen,
    });
  };

  thisProductLike = e => {
    fetch(`${PRODUCT_API}/products/like`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
      body: JSON.stringify({
        product_id: this.props.list.id,
      }),
    });
    this.toggleModalLike();
  };

  render() {
    const { isModalLikeOpen } = this.state;
    const { list, toggleModalCart } = this.props;
    const tagArr = list.tag.map(item => item.tag);
    const showTagList = tagArr.map(tag => {
      return <span className={tag.toLowerCase()}>{tag}</span>;
    });
    const showSoldOut = <span className="soldOut">Sold Out</span>;

    return (
      <div className="card">
        <li className="cardWrapper" data-num={list.id}>
          <Link to={`/products/${list.id}`}>
            <img
              src={list.image_url}
              alt="러쉬"
              className={list.option[0].quantity ? '' : 'opacity'}
            />
            <div className="tags">
              {list.option[0].quantity ? showTagList : showSoldOut}
            </div>
            <h2 className="title">{list.name}</h2>
            <div className="hashTags small">{list.hashtag}</div>
            <div className="price">
              {exchangeCurrency(list.option[0].price)}
            </div>
          </Link>
        </li>
        <div className="cardIcons">
          <i className="far fa-heart" onClick={this.thisProductLike}></i>
          <i
            className="fas fa-cart-arrow-down"
            onClick={() => toggleModalCart(list.id)}
          ></i>
        </div>

        {isModalLikeOpen && (
          <Modal onClose={this.toggleModalLike} type="AddToCart">
            <div className="outOfStockModal">
              <i
                className="fas fa-times modalClose"
                onClick={this.toggleModalLike}
              ></i>
              <h1>상품이 찜 리스트에 담겼습니다.</h1>
              <p>바로 확인하시겠습니까?</p>
              <Button
                name="취소하기"
                info="cancel"
                event={this.toggleModalLike}
              />
              <Link to="/order">
                <Button name="확인하기" info="putInCart" />
              </Link>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export default Card;
