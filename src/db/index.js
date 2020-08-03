import Dexie from "dexie";

const db = new Dexie("memory");
db.version(1).stores({
  cards: "++id,question,answer",
});

export default db;
