import store, { AppDispatch, RootState } from "./ui/redux";
import { login, logout } from "./ui/userSlice";

export {
    store,
    RootState,
    AppDispatch,
    login,
    logout,
}