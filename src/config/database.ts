export const databaseProductConfig = {
  type: 'postgres',
  host: 'ec2-34-224-226-38.compute-1.amazonaws.com',
  port: 5432,
  database: 'd6c12302u7odrb',
  username: 'wsepqxkksddnvg',
  password: '7701481aa895b871bc8c861edbb953fd08dafa9b261efbd5a3cffffdead28f05',

  ssl: {
    rejectUnauthorized: false,
  },
  entities: [
    'dist/entities/**/*.entity{.ts,.js}',
  ],
  migrations: ['src/migration/*.ts'],
  synchronize: true,
  autoLoadEntities: true,
};
