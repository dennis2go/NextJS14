import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDb } from "@/lib/connectToDb"
import { User } from "@/lib/models"
import bcrypt from "bcryptjs";

export const authOptions = {
  // Configure one or more authentication providers
    providers: [
    CredentialsProvider({
        id: "credentials",
        name: "Credentials",
        credentials: {
            username:{label:"Username", type:"text"},
            password:{label:"Password", type:"password"}
        },
        async authorize(credentials: any){
            await connectToDb();
            try{
                const user = await User.findOne({username: credentials.username});
                if(user) {
                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
                    if(isPasswordCorrect) {
                        return user;
                    }
                }
            }catch(err:any){
                throw new Error(err);
            }
        }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    ],
}

export const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}