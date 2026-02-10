import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with Random Rescuer. Questions about adoption, fostering, or how to support our cat rescue mission.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
