import { redirect } from "react-router-dom";
import {client} from "../../client";

export async function createNewTicketAction ({request}) {
    try {
        setTimeout(() => console.log("Hello"), 1000);
        const formData = await request.formData();
        console.log(formData.get("openedAt"));
        return null;
    } catch (err) {
        console.log(err.message);
    }
}