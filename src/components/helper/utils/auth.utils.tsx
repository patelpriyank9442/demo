import localStore from "./localstorage.utils"
interface UserDataable {
    email?: string;
    password?: string;
    userName?: string;
    contactNo?: string;
}
export const getUserInfo = () => localStore.get_data("userData") as UserDataable;

export const setUserInfo = (data: any) => localStore.store_data("userData", data);

export const getUserLogin = () => localStore.get_data("islogin") as boolean | false;

export const userLogin = (data: UserDataable) => localStore.store_data("islogin", data);

export const logout = () => {
    localStore.remove_all();
    return true;
};

export const isLoggedIn = () => {
    const islogin = getUserLogin();
    return islogin ? true : false;
};