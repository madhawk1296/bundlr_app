import Arbitrum from "../../../components/icons/Arbitrum";
import Discord from "../../../components/icons/Discord";
import Instagram from "../../../components/icons/Instagram";
import Twitter from "../../../components/icons/Twitter";
import Website from "../../../components/icons/Website";
import Link from "next/link";

export default function Social({ url, type }) {
    return (
        <Link href={url} target="_blank">
            <div className="cursor-pointer w-[25px]">
                {type == "website" ? <Website /> : type == "twitter" ? <Twitter /> : type == "discord" ? <Discord /> : type == "arbitrum" ? <Arbitrum /> : <Instagram />}
            </div>
        </Link>
    )
}