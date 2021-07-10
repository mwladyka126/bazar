// action name creator
const reducerName = 'responsiveMode';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
const SET_RESPONSIVE_MODE = createActionName('SET_RESPONSIVE_MODE');

// action creators
export const setResponsiveMode = payload => {
  return { payload, type: SET_RESPONSIVE_MODE };
};

/* reducer */
export default function reducer(statePart = { mode: 'desktop' }, action = {}) {
  switch (action.type) {
    case SET_RESPONSIVE_MODE: {
      return {
        ...statePart,
        mode: action.payload,
      };
    }
    default:
      return statePart;
  }
}
