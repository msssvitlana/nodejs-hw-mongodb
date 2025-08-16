// За бажанням додайте можливість фільтрації контактів за типом, властивістю isFavourite у відповіді для маршруту GET /contacts. Для цього використовуйте такі query параметри запиту:

// type - відображає тип контакту, значення властивості contactType
// isFavourite - відображає чи є контакт обраним
const parseType = (type) => {
  const isString = typeof type === 'string';

  if (!isString) return;
  const isType = (type) => ['work', 'home', 'personal'].includes(type);

  if (isType(type)) return type;
};

export const parseFilterParams = (query) => {
  const { type } = query;

  const parsedType = parseType(type);

  return {
    type: parsedType,
  };
};
