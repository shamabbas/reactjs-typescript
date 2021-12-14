import {AuthState} from '../reducers/auth';

import {ProfileState} from '../reducers/profile';

export interface RootState {
  auth: AuthState;
  profile: ProfileState;
}
