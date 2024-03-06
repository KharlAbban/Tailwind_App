import { redirect } from "react-router-dom";
import {client} from "../../client";
import bcrypt from "bcryptjs-react";

export async function registerAction({request}) {
    const formData = await request.formData();
    const user_name = formData.get("username");
    const user_email = formData.get("email");
    
    const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(formData.get("password"), salt);
        const doc = {
            _id: user_name,
            _type: "staff",
            email: user_email,
            userName: user_name,
            password: hashedPassword,
            image: formData.get("file")
    }
    console.log(doc);
    return null;

    // try {
    //     const formData = await request.formData();
    //     const user_name = formData.get("username");
    //     const user_email = formData.get("email");

    //     // Hash password
    //     const salt = await bcrypt.genSalt(12);
    //     const hashedPassword = await bcrypt.hash(formData.get("password"), salt);
    //     const doc = {
    //         _id: user_name,
    //         _type: "staff",
    //         email: user_email,
    //         userName: user_name,
    //         password: hashedPassword,
    //         // image: formData.get("file")
    //     }
    //     // creates a new staff if not exists, but silently fails if one exists already
    //     // Check if document with username exists. If not, then create it
    //     const query = `*[_type == "staff" && (email == "${user_email}" || userName == "${user_name}")]`;
    //     const docExists = await client.fetch(query);
    //     if (docExists.length > 0) {
    //         if (docExists[0].email == doc.email) {
    //             return {
    //                 emailMsg: "Email already exists",
    //             }
    //         } else if (docExists[0].userName == doc.userName) {
    //             return {
    //                 userNameMsg: "Username already exists"
    //             }
    //         }
    //     } else {
    //         const newStaff = await client.createIfNotExists(doc);
    //         return redirect("/");
    //     }
    // } catch (err) {
    //     if (err.message.includes(`Malformed document ID:`)) {
    //         return {
    //             userNameMsg: "Username must not contain @ or . characters",
    //         }
    //     } else if (err.message.includes(`ERR_INTERNET`)) {
    //         return {
    //             message: "Check your connection and try again!",
    //         }
    //     }
    //     return {
    //         message: "Check your connection and try again!",
    //     }
    // }
  }

  export async function loginAction({request}) {
    try {
        const formData = await request.formData();
        const username = formData.get("username");
        const pwd = formData.get("password");
        const userExists = await client.getDocument(username);

        // Return error if user does not exist
        if (userExists == null) return {userNameMsg: "No user account found with this name!"}
        // If user exists, check if usernames match
        if (userExists.userName !== username) return {userNameMsg: "No user with this name exists!"}
        // Also check if password matches
        const passwordMatches = await bcrypt.compare(pwd, userExists.password);
        if (!passwordMatches) {
            return {pwdMsg: "Incorrect password!"}
        } else {
            localStorage.setItem("user", JSON.stringify(username));
            return redirect("/home");
        }
    } catch (err) {
        if (err.message.includes(`Malformed document ID:`)) {
            return {
                userNameMsg: "Username must not contain @ or . characters",
            }
        }
        console.log(err.message);
        return {
            message: "Unknown error! Check your connection and try again",
        }
    }
}

