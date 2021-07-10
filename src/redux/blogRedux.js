/* selectors */

export const getBlogArticles = ({ blogArticles }) => blogArticles;
// export const getFiltersCategory = ({ filterCategory }) => filterCategory;

const reducerName = 'blogFilters';
const createActionName = name => `app/${reducerName}/${name}`;

const CHOOSE_CATEGORY = createActionName('CHOOSE_CATEGORY');
const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');

export const chooseCategory = payload => ({ payload, type: CHOOSE_CATEGORY });
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHOOSE_CATEGORY:
      return {
        ...statePart,
        blogFilters: action.payload,
      };
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    default:
      return statePart;
  }
}
