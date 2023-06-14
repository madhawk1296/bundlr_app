import CreateListingProvider from "./CreateListingProvider";
import Steps from "./[userId]/Steps";

export default function Layout({ children }) {
    return (
        <div className="w-full h-full flex flex-col gap-2 items-center px-[40px] pb-[30px]">
            <div className="w-full h-[150px] flex items-center justify-center">
                <h1 className="text-4xl font-bold text-gray-700">Create a Listing</h1>
            </div> 
            <div className="w-full h-full flex flex-col gap-4">
                <Steps />
                <CreateListingProvider>
                    {children}
                </CreateListingProvider>
            </div>
        </div>
    )
}