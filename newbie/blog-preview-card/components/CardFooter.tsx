import Image from "next/image";
import React from "react";
import footerIcon from '@/public/assets/images/image-avatar.webp'


const CardFooter = () => {
	return <div className="flex items-center justify-start gap-3">
        <Image
            src={footerIcon}
            alt="footerIcon"
            className="w-8 h-8 rounded-full"
        />
        <span className="text-body-s-bold">Greg Hooper</span>
    </div>;
};

export default CardFooter;
