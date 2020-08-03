import db from ".";

export const getCards = () => {
  return db.cards.toArray();
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
