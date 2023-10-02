import { createContext, useContext, useState } from "react";

const AppContext = createContext() ; 

function AppProvider({children}){
    const BASE_URL = "http://ec2-51-20-78-156.eu-north-1.compute.amazonaws.com:8080" ;
    const [dark , setDark] = useState(false) ;

    return(
        <AppContext.Provider
        value={{
            dark,
            setDark,
            BASE_URL,
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