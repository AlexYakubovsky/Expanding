import NextAuth from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"
import EmailProvider from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
// import nodemailer from "nodemailer"

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM,
    //   async sendVerificationRequest({
    //     identifier: email,
    //     url,
    //     provider: { server, from },
    //   }) {
    //     const { host } = new URL(url)
    //     const transport = nodemailer.createTransport(server)
    //     await transport.sendMail({
    //       to: email,
    //       from,
    //       subject: `Sign in to ${host}`,
    //       text: text({ url, host }),
    //       html: html({ url, host, email }),
    //     })
    //   }
    }),
    
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
  
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  // callbacks: {
  //   // async signIn({ account, profile }) {
  //   //   if (account.provider === "google") {
  //   //     console.log('232!!!!!!!!!!!')
  //   //     return profile.email_verified && profile.email.endsWith('@example.com')
  //   //   }
  //   //   return true // Do different verification for other providers that don't have `email_verified`
  //   // },
  //   async jwt(token, account) {
  //     console.log('/////////')
  //     // console.log(token)
  //     console.log('/////////')
  //
  //     if (account?.accessToken) {
  //       token.accessToken = account.accessToken;
  //     }
  //     return token;
  //   },
  // },
  session: {
    jwt: true,
    // maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  // jwt: {
  //   encryption: true,
  // },
  theme: 'light',
  secret: process.env.SECRET,
  debug: false,
})

// function html({ url, host, email }) {
//   // Insert invisible space into domains and email address to prevent both the
//   // email address and the domain from being turned into a hyperlink by email
//   // clients like Outlook and Apple mail, as this is confusing because it seems
//   // like they are supposed to click on their email address to sign in.
//   const escapedEmail = `${email.replace(/\./g, "&#8203;.")}`
//   const escapedHost = `${host.replace(/\./g, "&#8203;.")}`
//
//   // Some simple styling options
//   const backgroundColor = "#f9f9f9"
//   const textColor = "#444444"
//   const mainBackgroundColor = "#ffffff"
//   const buttonBackgroundColor = "#346df1"
//   const buttonBorderColor = "#346df1"
//   const buttonTextColor = "#ffffff"
//
//   return `
// <body style="background: ${backgroundColor};">
//   <table width="100%" border="0" cellspacing="0" cellpadding="0">
//     <tr>
//       <td align="center" style="padding: 10px 0px 20px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
//         <strong>${escapedHost}</strong>
//       </td>
//     </tr>
//   </table>
//   <table width="100%" border="0" cellspacing="20" cellpadding="0" style="background: ${mainBackgroundColor}; max-width: 600px; margin: auto; border-radius: 10px;">
//     <tr>
//       <td align="center" style="padding: 10px 0px 0px 0px; font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
//         Sign in as <strong>${escapedEmail}</strong>
//       </td>
//     </tr>
//     <tr>
//       <td align="center" style="padding: 20px 0;">
//         <table border="0" cellspacing="0" cellpadding="0">
//           <tr>
//             <td align="center" style="border-radius: 5px;" bgcolor="${buttonBackgroundColor}"><a href="${url}" target="_blank" style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${buttonTextColor}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${buttonBorderColor}; display: inline-block; font-weight: bold;">Sign in</a></td>
//           </tr>
//         </table>
//       </td>
//     </tr>
//     <tr>
//       <td align="center" style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
//         If you did not request this email you can safely ignore it.
//       </td>
//     </tr>
//   </table>
// </body>
// `
// }
//
// // Email Text body (fallback for email clients that don't render HTML, e.g. feature phones)
// function text({ url, host }) {
//   return `Sign in to ${host}\n${url}\n\n`
// }