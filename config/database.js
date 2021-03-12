// deployed on heroku
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME'),
        username: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
      },
      options: {
                authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
                ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});


// local
// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'mongoose',
//       settings: {
//         host: env('DATABASE_HOST', 'cluster0.unxws.mongodb.net'),
//         srv: env.bool('DATABASE_SRV', true),
//         port: env.int('DATABASE_PORT', 27017),
//         database: env('DATABASE_NAME', 'api'),
//         username: env('DATABASE_USERNAME', 'admin'),
//         password: env('DATABASE_PASSWORD', 'Tibebtechno@1277'),
//       },
//       options: {
//         authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
//         ssl: env.bool('DATABASE_SSL', true),
//       },
//     },
//   },
// });
