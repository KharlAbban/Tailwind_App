import { createContext, useContext } from "react";
import { redirect } from "react-router-dom";

// Create userContext
export const UserContext = createContext(undefined);

// Custom hook to check value of UserContext
export function useUserContext () {
    const user = useContext(UserContext);

    // If user is undefined, throw an error
    if (user === undefined) {
        throw new Error("No UserContext defined");
    }

    return user;
}

// Explanation of the Code above
// This file houses everything related to the userContex
// First we create the user context and allow the parent component to provide  it with a value
// Then we create a custom hook, or function that checks to see that the userContext !== undefined
// If it is, throw an error
// Else, return the user
// This custom hook is used by the component consuming the context
// Import only the custom hook and use it just like useContext()

// FLOW
// Context is created with default undefined value
// Parent must provide value
// Component consuming context calls custom hook
// Custom hook checks the current value of context(global) to make sure it has a value
// If parent hasset a value, it returns the value,
// If not, perform some action