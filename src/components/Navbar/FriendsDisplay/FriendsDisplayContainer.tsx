import StoreContext from "../../../StoreContext";
import React from "react";
import {FriendsDisplay} from "./FriendsDisplay";

export const FriendsDisplayContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                if (store) {
                    return <FriendsDisplay friends={store.getState().navBar.friends}/>
                }
            }
        }
    </StoreContext.Consumer>
}