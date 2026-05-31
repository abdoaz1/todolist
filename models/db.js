import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./models/todo.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to SQLite');
  }
});

export default db;