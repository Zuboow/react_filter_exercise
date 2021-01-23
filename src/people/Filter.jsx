import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterPeople } from '../actions/people';

class Filter extends Component {
  static propTypes = {
  };

  handleChange = (event) => {
    this.props.filterPeople(event.target.value);
  }

  render() {
    return (
      <div className='App-box'>
        <input type='text' onChange={this.handleChange} placeholder="Filter"></input>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
  filterPeople
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
