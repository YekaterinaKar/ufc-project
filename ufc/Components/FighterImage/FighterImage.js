import Image from "next/image";

export default function FighterImage() {
    return (
        <div>
            <Image
                src="/amanda-nunes.png"
                alt="Amanda Nunes"
                width={200}
                height={300}
            />
        </div>
    );
}
