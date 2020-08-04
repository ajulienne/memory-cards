import db from ".";

export const getCards = async () => {
  const cards = shuffle(await db.cards.toArray());

  const ids = cards.map((c) => c.id);
  return {
    cards,
    ids,
  };
};

export const createCard = (card) => {
  return db.cards.add(card);
};

export const deleteCard = (id) => {
  return db.cards.delete(id);
};

export const updateCard = (id, props) => {
  return db.cards.update(id, props);
};

const shuffle = (a) => {
  const arr = a.slice();
  let j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }
  return arr;
};
