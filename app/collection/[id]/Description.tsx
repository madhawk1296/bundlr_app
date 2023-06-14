'use client';

import Markdown from 'markdown-to-jsx';
import { createRef, useEffect, useState } from "react";
import Link from 'next/link';

export default function Description({ description }) {
    const [expanded, setExpanded] = useState(false);
    const [isTruncated, setIsTruncated] = useState(true);
    const descriptionRef: any = createRef();

    useEffect(() => {
        const node: any = descriptionRef.current;
        if (node.scrollHeight > 30) {
          setIsTruncated(true);
        } else {
            setIsTruncated(false);
        }
      }, [descriptionRef]);


    const toggleExpand = () => {
        setExpanded(!expanded);
    }

    const CustomLink = ({ children, ...props }) => (
        <Link href={props.href} {...props}>{children}</Link>
    );

    return (
        <div className="relative flex flex-col gap-2">
            <div className={`relative overflow-hidden ${expanded ? "h-fit" : "h-[45px]"}`}>
                <h1 ref={descriptionRef} className={`text-lg font-medium text-gray-700 overflow-hidden ${expanded && "pb-[15px]"}`} >
                    <Markdown options={{
                        overrides: {
                            a: {
                                component: CustomLink,
                                props: {
                                    className: "cursor-pointer inline w-fit text-blue-500 hover:underline",
                                    target: "_blank"
                                }
                            }
                        }
                    }}>{description}</Markdown>
                </h1>
                <div className="absolute bottom-[0px] w-full h-[20px] bg-white opacity-90"></div>
            </div>
            {isTruncated && <div onClick={toggleExpand} className="w-full flex justify-center items-center py-[8px] cursor-pointer rounded-xl transition-all duration-200 hover:bg-gray-200">
                <h1 className="w-fit font-semibold text-gray-700">Show {expanded ? "Less" : "More"}</h1>
            </div>}
        </div>

    )
}