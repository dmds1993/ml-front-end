import React, { Component } from 'react';
import Item from '../../components/Items';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItems } from '../../redux/actions/searchItemsActions.js';


class ResultSearch extends Component {

  handleItem(objects) {
    if (objects.items) {
      return objects.items.data.results.map((element, index) => {
        if (index <= 3) {
          return (
            <Item item={element}/>
          )
        }
      })
    }
  }

  render() {
    return (
      <div>
        {this.handleItem(this.props.items)}
      </div>
    );
  }
}

const mapStateToProps = ({items}) => {
    return { items }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchItems }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultSearch);
