import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { fetchDetail } from '../../redux/actions/searchDetailActions.js';

class Items extends Component {

  contructor(props) {
    this.handleDetail = this.handleDetail.bind(this);
  }

  handleDetail(item) {
    browserHistory.replace(`/items/${item.id}`)
    this.props.fetchDetail(item.id);
  }

  render() {
    return (
      <div className="item-in">
        <div className="row">
          <div className="col-md-7">
            <a>
              <img className="img-fluid rounded mb-3 mb-md-0" src={this.props.item.thumbnail} alt=""/>
            </a>
          </div>
          <div className="col-md-5">
            <h3>{this.props.item.title}</h3>
            <p>
              <NumberFormat value={this.props.item.price} displayType={'text'} decimalSeparator={'.'} decimalScale={2} thousandSeparator={true} prefix={'R$'} />
            </p>
            <a className="btn btn-primary" onClick={() => this.handleDetail(this.props.item)}>Ver mais detalhes</a>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => ({ items: state.items });

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchDetail }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);
