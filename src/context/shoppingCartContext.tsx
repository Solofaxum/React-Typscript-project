import { createContext, ReactNode, useContext } from "react";

//creating Context
const ShoppingCartContext = createContext({})

//creating custom hook
export function useShoppingCart(){
return useContext(ShoppingCartContext)
}

//Creat typescript prop types to handle the type
type ShoppingCartProviderProps = {
    children: ReactNode
}
//Creating a provider
export function ShoppingCartProvider({children}:ShoppingCartProviderProps){
    return(
        <ShoppingCartContext.Provider value={{}}>{children}</ShoppingCartContext.Provider>
    )
}

//wrap the entire app with shoppingCartProvider exported