import type { launchType } from '../types/launchTypes';

type State = {
  data: launchType[];
  isOpenModal: boolean;
  currentLaunch: launchType | null;
};

type Action =
  | { type: 'data'; payload: launchType[] }
  | { type: 'isOpenModal'; payload: boolean }
  | { type: 'currentLaunch'; payload: launchType | null };

export const initialState = {
  data: [],
  isOpenModal: false,
  currentLaunch: null,
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'data':
      return {
        ...state,
        data: action.payload,
      };
    case 'isOpenModal':
      return {
        ...state,
        isOpenModal: action.payload,
      };
    case 'currentLaunch':
      return {
        ...state,
        currentLaunch: action.payload,
      };
    default:
      return state;
  }
}
