/*************************************************************************
 * Copyright (c) 2016 Marc Fisher
 * MIT LICENSE
 *************************************************************************
 * @description
 * Entry point used to the ios version.
 * 
 * @author Marc Fisher <mcfisher83@gmail.com>
 *************************************************************************/
'use strict';

const {AppRegistry} = require('react-native');
const setup = require('./js/setup');

AppRegistry.registerComponent('TykeClock', setup);
