import { User, Sport } from '../model/user';
import {
  AuthActionTypes, All,
  LIST_SPORTS, ADD_SPORTS,
  UPDATE_SPORTS,
  DELETE_SPORTS,
  LIST_DATA_SUCCESS,
  ADD_SPORTS_SUCCESS,
  DELETE_SPORTS_SUCCESS,
  UPDATE_SPORTS_SUCCESS
} from '../actions/auth.action';

export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: User | null;
  // error message
  errorMessage: string | null;
  sports: Sport[];
  added: boolean | null;
  updated: boolean | null;
  deleted: boolean | null;
  loaded: boolean | null;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: null,
  sports: [],
  added: null,
  updated: null,
  loaded: null,
  deleted: null
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          username: action.payload.username,
          password: action.payload.password
        },
        errorMessage: null
      };
    }
    case AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        errorMessage: 'Incorrect email and/or password.'
      };
    }
    case AuthActionTypes.SIGNUP_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          username: action.payload.username
        },
        errorMessage: null
      };
    }
    case AuthActionTypes.LOGOUT: {
      return initialState;
    }
    case ADD_SPORTS: {
      return {
        ...state
      };
    }
    case LIST_SPORTS: {
      return {
        ...state
      };
    }
    case DELETE_SPORTS: {
      return {
        ...state
      };
    }
    case UPDATE_SPORTS: {
      return {
        ...state
      };
    }
    case LIST_DATA_SUCCESS: {
      return {
        ...state,
        sports: [...action.payload],
        errorMessage: null,
        loaded: true
      };
    }
    case ADD_SPORTS_SUCCESS: {
      return {
        ...state,
        errorMessage: 'The Sport is added successfully!',
        added: true
      };
    }
    case DELETE_SPORTS_SUCCESS: {
      return {
        ...state
      };
    }
    case UPDATE_SPORTS_SUCCESS: {
      return {
        ...state,
        errorMessage: 'The Sport is updated successfully!',
        added: true
      };
    }

    default: {
      return state;
    }
  }
}
