import * as SQLite from 'expo-sqlite';

export const DatabaseConnection = {
    getConnetion: () => SQLite.openDatabase("database.db"),
};
