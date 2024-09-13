import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import "@uploadthing/react/styles.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { extractRouterConfig } from "uploadthing/server";
import "~/styles/globals.css";
import { TopNav } from "./_components/topnav";
import { ourFileRouter } from "./api/uploadthing/core";

export const metadata: Metadata = {
  title: "CAT_AI",
  description: "Generated by CAT_AI",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={GeistSans.variable}>
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <body className="flex flex-col gap-4 font-sans">
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
