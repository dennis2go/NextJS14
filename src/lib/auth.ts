import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connect } from "mongoose";
import { connectToDb } from "./connectToDb";
import { User } from "./models";
import bcrypt from "bcryptjs";

const login = async(credentials:any) => {
    try{
        connectToDb();
        const user = await User.findOne({ username: credentials.username });
        if(!user) throw new Error("Wrong credentials!");
        const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
        );
    if(!isPasswordCorrect) throw new Error("Wrong credentials!");
    return user;
    }catch(err){
        throw new Error("Failed to login");
    }
};

export const{ handlers, auth} = NextAuth({providers: [GitHub]});


// export const {
//     handlers: { GET, POST },
//     auth,
//     signIn,
//     signOut,
//   } = NextAuth({
//     providers: [
//       GitHub({
//         clientId: process.env.GITHUB_ID,
//         clientSecret: process.env.GITHUB_SECRET,
//       }),
//       CredentialsProvider({
//         async authorize(credentials) {
//           try {
//             const user = await login(credentials);
//             return user;
//           } catch (err) {
//             return null;
//           }
//         },
//       }),
//     ],
//     callbacks: {
//     },
//   });   