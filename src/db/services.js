import db from ".";

/** CARDS **/

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

export const getCard = (id) => {
  return db.cards.where({ id: id }).first();
};

export const getRandomCard = async (categoryId, currentId = null) => {
  const cards = await db.cards.where({ categoryId }).toArray();
  const index = randomCardId(cards, currentId);
  return cards[index];
};

/** CATEGORIES **/

export const getCategories = () => {
  return db.categories.toArray();
};

export const createCategory = (category) => {
  return db.categories.add(category);
};

export const deleteCategory = async (id) => {
  await db.cards.where({ categoryId: id }).delete();
  return db.categories.delete(id);
};

/** UTILS **/

/**
 * Find a random card ID
 * @param {*} list the list of ID
 * @param {*} current the current ID, to not randomly select the same one
 */
const randomCardId = (list, current = null) => {
  if (list.length === 1) return 0;
  const index = Math.floor(Math.random() * list.length);
  const indexOfCurrent = list.findIndex((c) => +c.id === +current);
  if (current && indexOfCurrent === index) {
    return randomCardId(list, current);
  } else {
    return index;
  }
};

/**
 * Shuffle an array
 * @param {Array} a the array to shuffle
 */
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
