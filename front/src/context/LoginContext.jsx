import { useAlertContext } from "./AlertContext";
import { createContext, useContext, useState } from "react";
import { userCurrentApi } from "../helpers/user/userCurrent.api.js";
import { userRegisterApi } from "../helpers/user/userRegister.api.js";
import { userLoginApi } from "../helpers/user/userLogin.api.js";
import { userUpdateApi } from "../helpers/user/userUpdate.api.js";

const LoginContext = createContext();
export const useLoginContext = () => useContext(LoginContext);

const LoginProvider = ({ children }) => {

    const { showAlert, setLoading } = useAlertContext();
    const [user, setUser] = useState({ data: null, logged: false });

    const register = async (user) => {
        setLoading(true);
        const response = await userRegisterApi(user);
        if (response.status === 'success') {
            localStorage.setItem('token', response.accesToken);
            await current();
            showAlert('Registro exitoso');
        } else {
            showAlert(response.error, 'error');
            setUser({ data: null, logged: false });
        };
        setLoading(false);
    };

    const current = async () => {
        const response = await userCurrentApi();
        if (response) {
            if (!response.active) {
                showAlert('Error de permisos, comunicate con nosotros', 'error');
                localStorage.removeItem('token');
                setUser({ data: null, logged: false });
            } else setUser({ data: response, logged: true });
        };
    };

    const logout = () => {
        setUser({ data: null, logged: false });
        localStorage.removeItem('token');
        localStorage.removeItem('path');
        showAlert('Cerraste sesión, nos vemos pronto !!!!', 'info');
    };

    const login = async (user) => {
        setLoading(true);
        const response = await userLoginApi(user);
        if (response.status === 'success') {
            localStorage.setItem('token', response.accesToken);
            await current();
            showAlert('Iniciaste sessión !!!');
        } else {
            showAlert(response.error, 'error');
            setUser({ ...user, error: response.error });
        };
        setLoading(false);
    };

    const update = async (user) => {
        setLoading(true);        
        const response = await userUpdateApi(user);
        if (response.status === 'success') {
            if (response?.accesToken) {
                localStorage.setItem('token', response.accesToken);
                await current();
            } else showAlert('Actulizaste con exito los datos del usuario');
        } else {
            showAlert(response.error, 'error');
            setUser({ ...user, error: response.error });
        };
        setLoading(false);
    };

    return (
        <LoginContext.Provider
            value={{ user, register, current, logout, login, update }}
        >
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;