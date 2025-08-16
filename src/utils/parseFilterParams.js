// За бажанням додайте можливість фільтрації контактів за типом, властивістю isFavourite у відповіді для маршруту GET /contacts. Для цього використовуйте такі query параметри запиту:

// type - відображає тип контакту, значення властивості contactType
// isFavourite - відображає чи є контакт обраним
const parseType = (type) => {
  const isString = typeof type === 'string';

  if (!isString) return;
  const isType = (type) => ['work', 'home', 'personal'].includes(type);

  if (isType(type)) return type;
};


const parseIsFavourite = (isFavourite) => {
  if (typeof isFavourite !== 'string') return;
  if (isFavourite === 'true') return true;
  if (isFavourite === 'false') return false;
};
export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  const parsedType = parseType(type);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    contactType: parsedType,
    isFavourite: parsedIsFavourite,

  };
};
