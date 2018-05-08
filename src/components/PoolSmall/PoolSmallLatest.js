import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPoolsLatest } from '../state/actions/PoolLatestActions';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';
import { PoolSmallList } from './PoolSmallList';

class PoolSmallLatest extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPoolsLatest();
  }

  render() {
    return (
      <div className="m-1">
        {
          this.props.poolLatestFetched && <PoolSmallList pools={this.props.poolsLatest} />
        }
        {
          <LoadingIndicator busy={this.props.poolLatestFetching} />
        }
        {
          this.props.poolLatestFailed && <Error message="Failed to fetch list of pools" />
        }
      </div>
    );
  }
}

PoolSmallLatest.propTypes = {
  fetchPoolsLatest: PropTypes.func.isRequired,
  poolLatestFetched: PropTypes.bool.isRequired,
  poolLatestFetching: PropTypes.bool.isRequired,
  poolLatestFailed: PropTypes.bool,
  poolsLatest: PropTypes.array.isRequired
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
  const { poolLatestFetching, poolLatestFetched, poolLatestFailed, poolsLatest } = state.poolsLatest;

  return { poolLatestFetching, poolLatestFetched, poolLatestFailed, poolsLatest };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchPoolsLatest }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(PoolSmallLatest);


// EXPORT COMPONENT

export { hoc as PoolSmallLatest };