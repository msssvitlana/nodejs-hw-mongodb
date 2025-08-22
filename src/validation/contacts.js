import Joi from 'joi';
import { isValidObjectId } from 'mongoose';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  phoneNumber: Joi.string().min(6).max(12).required(),
  email: Joi.string().min(6).max(30).required(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal').required(),
  contactId: Joi.string()
    .required()
    .custom((value, helper) => {
      if (value && !isValidObjectId(value)) {
        return helper.message('User id should be a valid mongo id');
      }
      return true;
    }),
});

// const validationResult = createContactSchema.validate(userData, {
//   abortEarly: false,
// });

// if (validationResult.error) {
//   console.error(validationResult.error.message);
// } else {
//   console.log('Data is valid!');
// }

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().min(3).max(20),
  email: Joi.string().min(3).max(20),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal'),
});
