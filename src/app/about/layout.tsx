import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about Random Rescuer, our founder Hailey Kartash, and our origin story that began with a wounded cat named Simon on Mother's Day 2018.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
