import React, { Component } from 'react';
import Icon from 'react-icons/lib/fa/search';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { fetchItems } from '../../redux/actions/searchItemsActions.js';


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    console.log(this.props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    let search = event.currentTarget.value;
    this.setState({
      search
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    browserHistory.replace(`/items?search=​${this.state.search}`)
    this.props.fetchItems(this.state.search);
  }

  render() {
    return (
      <div>
        <header role="banner" className="nav-header nav-header-sticky">
        <a className="nav-logo">
        </a>
  				<form className="nav-search" onSubmit={this.handleSubmit}>
  					<input value={this.state.search} type="text" className="form-control" name="search" placeholder="Pesquisar" onChange={this.handleChange} />
            <span className="input-group-addon icon-search" id="basic-addon1"><Icon/></span>
  				</form>
  	    </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({ items: state.items });

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchItems }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
