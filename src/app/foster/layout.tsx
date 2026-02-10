import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Become a Foster Parent",
    description:
        "Open your home to a cat in need. Random Rescuer provides all supplies and medical care—you provide the love.",
};

export default function FosterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
