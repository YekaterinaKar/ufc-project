import Image from "next/image";

export default function FighterImage() {
    return (
        <div>
            <Image
                src="/amanda-nunes.png"
                alt="Amanda Nunes"
                width={100}
                height={150}
            />
        </div>
    );
}
