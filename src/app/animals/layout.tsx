import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Adoptable Cats",
    description:
        "Meet our adoptable cats looking for forever homes. From playful kittens to gentle seniors, find your perfect feline companion at Random Rescuer.",
};

export default function AnimalsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
