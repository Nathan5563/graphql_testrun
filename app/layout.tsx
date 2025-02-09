import type { Metadata } from "next";
import ApolloProviderWrapper from "@/components/ApolloProviderWrapper";

export const metadata: Metadata = {
  title: "GraphQL go brr",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ApolloProviderWrapper>{children}</ApolloProviderWrapper>
      </body>
    </html>
  );
}
