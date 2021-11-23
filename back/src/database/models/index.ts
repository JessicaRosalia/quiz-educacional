import { Sequelize } from 'sequelize';
import { User } from "./User";
import { Option } from './Option';
import { Question } from './Question';

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/database.js')[env];

const sequelize = config.url
  ? new Sequelize(config.url, config)
  : new Sequelize(config.database, config.username, config.password, config);


process.env.NODE_ENV !== "production" && sequelize.sync();

export { Sequelize, sequelize };
