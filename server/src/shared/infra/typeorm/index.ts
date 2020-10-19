import { createConnection, getConnectionOptions, Connection } from 'typeorm';

const startConnection = async (name = 'default'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      name,
      database: defaultOptions.database,
    }),
  );
};

startConnection();
