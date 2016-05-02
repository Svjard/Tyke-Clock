/*************************************************************************
 * Copyright (c) 2016 Marc Fisher
 * MIT LICENSE
 *************************************************************************
 * @description
 * Flow setup
 * 
 * @author Marc Fisher <mcfisher83@gmail.com>
 *************************************************************************
 * @flow
 */

'use strict';

/* eslint no-unused-vars:0 */
declare var jest: any;
declare var jasmine: any;
declare var describe: (name: string, callback: () => void) => void;
declare var it: (name: string, callback: () => void) => void;
declare var expect: any;

declare module 'react-native-linear-gradient' {
  declare var exports: any;
}

declare module 'react-native-push-notification' {
  declare var exports: any;
}

declare var requestAnimationFrame: (callback: () => void) => number;
