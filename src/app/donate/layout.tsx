import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Donate",
    description:
        "Support Random Rescuer with a donation. Every dollar goes directly to the care, medical treatment, and rehoming of cats in need.",
    openGraph: {
        title: "Donate to Random Rescuer",
        description: "Your generosity keeps our rescue moving forward. Every dollar makes a difference.",
    },
};

export default function DonateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
