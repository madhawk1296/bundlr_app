import condenseAddress from "../../../lib/condenseAddress";
import Nav from "./Nav";

export default function Layout({ params, children }) {
    const { userId } = params;

    return (
        <div className="relative w-full flex flex-col">
            <div className="relative w-full h-[100px] bg-white">
            </div>
            <div className="relative w-full flex flex-col gap-10 py-[40px] px-[15px] md:px-[40px]">
                <h1 className="text-xl font-bold text-gray-900">{condenseAddress(userId)}</h1>
                <Nav userId={userId} />
            </div>
            {children}
        </div>
    )
}