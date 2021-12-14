export interface AuthState {
  token: string | null;
  user_id: string | null;
  isLoggedIn?: boolean;
}
