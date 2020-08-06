import Dexie from "dexie";

const db = new Dexie("memory");
db.version(1).stores({
  categories: "++id,name,description",
  cards: "++id,question,answer,categoryId",
});

export default db;
