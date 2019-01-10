import React, { Component } from 'react';
import { connect } from 'react-redux';

class TestComponent extends Component {
  render() {

    const { questions } = this.props;

    return(
      <p>{questions}</p>
    )
  }
}

const mapStateToProps = state => ({
  questions: state.questions
})

export default connect(mapStateToProps)(TestComponent);
