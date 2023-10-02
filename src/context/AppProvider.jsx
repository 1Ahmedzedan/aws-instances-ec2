import { createContext, useContext, useState } from "react";

const AppContext = createContext() ; 

function AppProvider({children}){
    const [dark , setDark] = useState(false) ;

    return(
        <AppContext.Provider
        value={{
            dark,
            setDark
        }}>
            {children}
        </AppContext.Provider>
    );
}

function useApp(){
    let context = useContext(AppContext) ; 
    if(context===undefined) throw Error("provider Error") ; 
    return context ; 
}

export  {AppProvider , useApp} ; 