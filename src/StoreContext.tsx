import React, {ReactNode} from "react";
import {StoreType} from "./redux/redux-store";

export type ProviderType = {
    store: StoreType
    children?: ReactNode
}

const StoreContext = React.createContext<StoreType | null>(null)

export const Provider = (props: ProviderType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext