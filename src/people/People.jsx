import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// ...

class People extends Component {
  static propTypes = {
  };

  renderList = () => {
    return this.props.list.map((person, index) => {
      return <div className="App-box" key={index}>{person.name}</div>
    })
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.people.peopleList
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  // ...
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(People);
