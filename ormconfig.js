module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'db1234',
  database: 'coffees-db-dev',
  entities: [],
  synchronize: true,
  autoLoadEntities: true,
  logging: true,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migration/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
