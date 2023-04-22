import Image from "next/image";

export default function FighterImage({image}) {
    return (
        <div>
            <Image
                src={image}
                alt="Holly Holm"
                width={200}
                height={300}
            />
        </div>
    );
}
