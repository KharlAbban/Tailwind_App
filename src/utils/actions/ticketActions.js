// import { redirect } from "react-router-dom";
import {client} from "../../client";

export async function createNewTicketAction ({request}) {
    const {id} = JSON.parse(localStorage.getItem("user"));
    console.log(request);

    try {
        const formData = await request.formData();
        const { clientAffected, cause, outageType, impacting, openedAt, closedAt} = await Object.fromEntries(formData);
        const ticketDoc = {
            _type: "tickets",
            openedBy: {
                _type: "reference",
                _ref: id
            },
            clientAffected,
            cause,
            type: outageType,
            serviceImpacting: (impacting.toUpperCase() === "YES" ? true:false),
            dateOpened: openedAt,
            // closedAt,
        }
        const closedAtVal = formData.get("closedAt");
        alert(closedAtVal === "");
        // const newTicket = await client.create(ticketDoc);
        // console.log(newTicket);
        return null;
    } catch (err) {
        console.log(err.message);
    }
}


// In new ticket loader, get data of clients and outageTypes