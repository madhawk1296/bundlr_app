import { useContractWrite } from "wagmi";
import prepareBuyBundle from "./prepareBuyBundle";

export default function buyBundle(bundle) {
    const config = prepareBuyBundle(bundle);
    return useContractWrite(config);
}