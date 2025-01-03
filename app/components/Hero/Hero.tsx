import Image from "next/image";
import Herobox from "../Herobox/Herobox";

export default function Hero() {
    return (
        <div className="w-full flex flex-col items-center relative">
            <Image
                src="/images/hero.png"
                width={600}
                height={200}
                alt="unable to load"
                className="w-full object-cover md:w-[70%]"
            />
            <span className="absolute w-full bottom-[-80%] md:bottom-[-10%] md:left-8 lg:bottom-8 lg:left-8 px-4">
                <Herobox />
            </span>
        </div>
    );
}
