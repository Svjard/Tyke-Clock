/*************************************************************************
 * Copyright (c) 2016 Marc Fisher
 * MIT LICENSE
 *************************************************************************
 * @description
 * Start of the tyke clock application.
 * 
 * @author Marc Fisher <mcfisher83@gmail.com>
 *************************************************************************
 * @providesModule TykeClockApp
 * @flow
 */

'use strict';

var React = require('React');
var AppState = require('AppState');
var LoginScreen = require('./login/LoginScreen');
var PushNotificationsController = require('./PushNotificationsController');
var StyleSheet = require('StyleSheet');
var TykeClockNavigator = require('TykeClockNavigator');
var CodePush = require('react-native-code-push');
var View = require('View');
var StatusBar = require('StatusBar');
var {
  loadConfig,
  loadMaps,
  loadNotifications,
  loadSessions,
  loadFriendsSchedules,
  loadSurveys,
} = require('./actions');
var { updateInstallation } = require('./actions/installation');
var { connect } = require('react-redux');

var { version } = require('./env.js');

var TykeClockApp = React.createClass({
  componentDidMount: function() {
    AppState.addEventListener('change', this.handleAppStateChange);

    // TODO: Make this list smaller, we basically download the whole internet
    this.props.dispatch(loadNotifications());
    this.props.dispatch(loadMaps());
    this.props.dispatch(loadConfig());
    this.props.dispatch(loadSessions());
    this.props.dispatch(loadFriendsSchedules());
    this.props.dispatch(loadSurveys());

    updateInstallation({version});
    CodePush.sync({installMode: CodePush.InstallMode.ON_NEXT_RESUME});
  },

  componentWillUnmount: function() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  },

  handleAppStateChange: function(appState) {
    if (appState === 'active') {
      this.props.dispatch(loadSessions());
      this.props.dispatch(loadNotifications());
      this.props.dispatch(loadSurveys());
      CodePush.sync({installMode: CodePush.InstallMode.ON_NEXT_RESUME});
    }
  },

  render: function() {
    if (!this.props.isLoggedIn) {
      return <LoginScreen />;
    }
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0.2)"
          barStyle="light-content"
         />
        <TykeClockNavigator />
        <PushNotificationsController />
      </View>
    );
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function select(store) {
  return {
    isLoggedIn: store.user.isLoggedIn || store.user.hasSkippedLogin,
  };
}

module.exports = connect(select)(TykeClockApp);
