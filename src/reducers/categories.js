import * as constants from '../constants';

const categories = (state = {}, action) => {
  switch (action.type) {
    case constants.GET_CATEGORIES:
      const categories = {};
      action.categories.forEach((category) => {
        category.name && (categories[category.name] = category);
      });
      return {
        ...state,
        ...categories,
      };
    default:
      return state;
  }
};

export default categories;
