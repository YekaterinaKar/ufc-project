import Image from "next/image"
export default function Flag(){
    return (
        <div>
            <Image
                src="/kyrgyzstan.png"
                alt="flad_image"
                width={100}
                height={50}
            />
        </div>
    );
}