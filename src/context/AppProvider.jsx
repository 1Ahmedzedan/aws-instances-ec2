import { createContext, useContext, useState } from "react";

const AppContext = createContext() ; 

function AppProvider({children}){
    const BASE_URL = "http://ec2-51-20-78-156.eu-north-1.compute.amazonaws.com:8080" ;
    const [dark , setDark] = useState(false) ;
    const DEFAULT_MESSAGE = "😊 start by searching for an instance." ; 
    const [msg , setMsg] = useState(DEFAULT_MESSAGE) ; 
    const [isLoading , setIsLoading] = useState(false) ; 

    return(
        <AppContext.Provider
        value={{
            dark,
            setDark,
            BASE_URL,
            DEFAULT_MESSAGE,
            msg,
            setMsg,
            isLoading,
            setIsLoading,
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