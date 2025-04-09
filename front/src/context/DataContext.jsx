import { createContext, useContext, useState } from "react";
import { images } from "../utils/images.js";

const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);

const DataProvider = ({ children }) => {

    const [datas, setDatas] = useState({
        name: 'CataWeb',
        logo: images.logoCata,
    });

    return (
        <DataContext.Provider
            value={{datas}}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;