import {client} from "../../client";

export default async function dashboardLoader () {
    const query = `*[_type == "tickets"]`;
    try {
        const response = await client.fetch(query);
        console.log(response);
        return null;
    } catch (err) {
        console.log(err.message);
    }
}