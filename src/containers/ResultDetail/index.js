import React, { Component } from 'react';
import DetailComponents from '../../components/Detail'
import { connect } from 'react-redux';
import { fetchDetail } from '../../redux/actions/searchDetailActions.js';
import { fetchDescription } from '../../redux/actions/searchDescriptionActions.js';

import { bindActionCreators } from 'redux';

class Detail extends Component {

  componentWillMount() {
    console.log('this.props', this.props.params.id)
    let id = this.props.params.id
    this.props.fetchDetail(id);
    this.props.fetchDescription(id);

  }

  render() {
    return (
      <div className="Concluirprocesso_container">
  			<DetailComponents/>
  		</div>
    );
  }
}

const mapStateToProps = state => ({ detail: state.objectDetail, description: state.objectDescription });

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchDetail, fetchDescription }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
