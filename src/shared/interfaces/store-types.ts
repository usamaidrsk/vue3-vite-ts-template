export interface AuthState {
  isAuthenticated: boolean;
}

export interface State {
  count: number;
  auth: AuthState;
  spinner: { isSpinning: boolean };
}
