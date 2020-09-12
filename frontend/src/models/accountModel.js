import { thunk, action } from "easy-peasy";
import axios from "axios";
export default {
  //STORE
  user_logged_in: false,
  user_data: {},
  is_user_admin: false,

  //THUNKS
  login_user: thunk(async (actions, { email, password }) => {
    try {
      console.log("is this working ? ");
      const res = await axios.post(
        "/api/auth/login",
        { email: email, password: password },
        {
          withCredentials: true,
        }
      );
      //   await actions.setToken(res.data.token);
    } catch (err) {
      console.log("login user is not working");
    }
  }),

  register_user: thunk(async (actions, { name, email, password }) => {
    try {
      console.log("is this working ? ");
      const res = await axios.post(
        "/api/v1/auth/register",
        { email: email, password: password, name: name },
        {
          withCredentials: true,
        }
      );

      console.log(res);

      // actions.setToken(res.data["token"]);
    } catch (err) {
      console.log("this is not working");
    }
  }),

  logout_user: thunk(async (actions) => {
    try {
      console.log("is this working");
      await axios.get("/api/auth/logout", {
        withCredentials: true,
      });

      actions.setLogout();
    } catch (err) {
      console.log("this is not working");
    }
  }),

  get_user_data: thunk(async (actions) => {
    try {
      // console.log("is this working ? ");
      const res = await axios.get("/api/v1/auth/me", {
        withCredentials: true,
      });
      // actions.getUserData(res.data.data);
      if (res.data === "") {
        actions.setLoggedIn(false);
      } else {
        if (res.data.role === "admin") {
          actions.setLoggedIn(res.data, true);
          actions.setAdmin(true);
        } else {
          actions.setLoggedIn(res.data, true);
          actions.setAdmin(false);
        }
      }
      console.log(res.data);
    } catch (err) {
      console.log("Getting logged in user data is not working");
    }
  }),

  //ACTIONS
  setLoggedIn: action(async (state, userData, flag) => {
    state.user_logged_in = flag;
    state.user_data = userData;
  }),
  setAdmin: action(async (state, flag) => {
    state.is_user_admin = flag;
  }),
  setLogout: action(async (state) => {
    state.user_logged_in = false;
    state.is_user_admin = false;
    state.user_data = null;
  }),
};
