import { authConfig } from "@/lib/auth";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// const handler = NextAuth(authConfig);
// export { handler as GET, handler as POST };

export const {
    auth,
    signOut,
    signIn,
    handlers: { GET, POST },
} = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
        }),
    ],
    secret: process.env.AUTH_SECRET,
});