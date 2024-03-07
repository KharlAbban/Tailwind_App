import {client} from "../../client";
import bcrypt from "bcryptjs-react";

async function profileAction({request}) {
    const formData = await request.formData();
    const user_name = formData.get("username");
    const user_email = formData.get("email");
    const image = formData.get("file");
    // const stream = await createReadStream(image);
    
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

    console.log(image);
    const response = await client.assets.upload("image", image , {preserveFilename: true});
    console.log(response);
    
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

{/* <label htmlFor="profile">Profile Picture</label>
        <input type="file" accept='image/*' id="file" name='file' className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:bg-slate-50 block w-full ps-4 p-2" placeholder="Unique password" required /> */}