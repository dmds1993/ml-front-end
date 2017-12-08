import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux';
import { fetchDetail } from '../../redux/actions/searchDetailActions.js';
import { bindActionCreators } from 'redux';

class Detail extends Component {

  contructor(props) {
    this.handleDetail = this.handleDetail.bind(this);
  }

  handleDetail(object) {
    console.log('objectobject', object)
    if (object) {
      return (
        <div className="item-in">
          <div className="row">
            <div className="col-md-7">
              <a>
                <img className="img-fluid rounded mb-3 mb-md-0" src={this.props.detail.thumbnail} alt=""/>
              </a>
            </div>
            <div className="col-md-5">
              <h3>{this.props.detail.title}</h3>
              <p>
                <NumberFormat value={this.props.detail.price} displayType={'text'} decimalSeparator={'.'} decimalScale={2} thousandSeparator={true} prefix={'R$'} />
              </p>
              <a className="btn btn-primary">Ver mais detalhes</a>
            </div>
          </div>
          <hr />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.handleDetail(this.props.detail)}
      </div>
    )
  }
}

const mapStateToProps = state => ({ detail: state.objectDetail.detail, description: state.objectDescription });

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchDetail }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
