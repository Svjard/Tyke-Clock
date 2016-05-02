/*************************************************************************
 * Copyright (c) 2016 Marc Fisher
 * MIT LICENSE
 *************************************************************************
 * @description
 * Start of express backend server
 * 
 * @author Marc Fisher <mcfisher83@gmail.com>
 *************************************************************************
 * @providesModule TykeClockApp
 * @flow
 */

import path from 'path';
import express from 'express';

const SERVER_PORT = process.env.PORT || 8080;
const SERVER_HOST = process.env.HOST || 'localhost';
const APP_ID = process.env.APP_ID || 'tyke-clock-2016';
const MASTER_KEY = process.env.MASTER_KEY || '70c6093dba5a7e55968a1c7ad3dd3e5a74ef5cac';
const DATABASE_URI = process.env.DATABASE_URI || 'mongodb://localhost:27017/dev';
const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production';
const DASHBOARD_AUTH = process.env.DASHBOARD_AUTH;

const server = express();

server.listen(SERVER_PORT, () => console.log(
  `Server is now running in ${process.env.NODE_ENV || 'development'} mode on http://localhost:${SERVER_PORT}`
));
