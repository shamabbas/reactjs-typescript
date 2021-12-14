import {ProfileState} from '../reducers/profile';
import {Action} from 'redux';

export const SET_PROFILE = 'SET_PROFILE';

interface SetProfile extends Action {
  type: typeof SET_PROFILE;
  payload: ProfileState | null;
}

export type ProfileActionType = SetProfile;
