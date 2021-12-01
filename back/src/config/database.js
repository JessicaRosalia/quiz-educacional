require('dotenv').config({ path: process.env.NODE_ENV === 'production' ? ".env" : ".env-dev" });

module.exports = {
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": "localhost",
        "dialect": process.env.DB_DRIVER,
        timezone: '-03:00',
        define: {
            timestamps: true,
            underscored: true,
        },
    },
    "development-docker": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": process.env.DB_DRIVER,
        timezone: '-03:00',
        define: {
            timestamps: true,
            underscored: true,
        },
    },
    "test": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": process.env.DB_DRIVER,
        timezone: '-03:00',
        define: {
            timestamps: true,
            underscored: true,
        },
    },
    "production": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": process.env.DB_DRIVER,
        timezone: '-03:00',
        define: {
            timestamps: true,
            underscored: true,
        },
    }
};