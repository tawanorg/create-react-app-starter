import AppView from 'views/App';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectorApp,
} from './selectors';
import * as appActions from './actions';

const mapStateToProps = createStructuredSelector({
  app: makeSelectorApp(),
});
 
export function mapDispatchToProps(dispatch) {
  return {
    request: () => dispatch(appActions.appRequest()),
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(AppView);
