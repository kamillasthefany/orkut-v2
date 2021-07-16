module.exports = {
  dialect: 'postgres',
  // host: 'ec2-3-89-0-52.compute-1.amazonaws.com',
  // username: 'gximzoytciikji',
  // password: 'd77d2d583db21d3c641cb5c09c6c2c343b940c34e29cd21c59b7ae74ea708b43',
  // database: 'ddju5l1lr9v7it',
  // pool: {
  //   max: 5,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000
  // },
  // port: 5432,
  host: process.env.REACT_APP_HOST,
  //host: 'localhost',
  username: 'postgres',
  password: '123',
  database: 'orkut',
  define: {
    timestamps: true,
    underscored: true,
  },
};