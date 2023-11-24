import Dashboard from "../Screens/Dashboard/Dashboard";
import { Actions, SomeActions, Screens, Navigate } from "../types/store";

  export const navigate = (screen: Dashboard): Navigate => {
    return {
      action: SomeActions.NAVIGATE,
      payload: Screens,
    };
  };
  