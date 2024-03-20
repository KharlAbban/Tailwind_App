import { redirect } from "react-router-dom";

export async function logoutAction () {
    try {
        localStorage.clear();
        return redirect("/");
    } catch (err) {
        console.log(err.message);
        throw new Error(err.message);
    } 
}