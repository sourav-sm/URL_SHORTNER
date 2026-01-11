import { PiShootingStarDuotone } from "react-icons/pi";
import { LuLink } from "react-icons/lu";
import { PiScissorsFill } from "react-icons/pi";
import { Box } from "./box";

export const Body=()=>{
    return (
        <div className="mt-10 mx-10">
            <div className="flex justify-center space-x-1.5 py-10">
                <div className="flex bg-gray-300 text-indigo-600 px-3 py-1 rounded-2xl">
                    <PiShootingStarDuotone className="h-5 mt-1"/>
                    <div>Simple. Fast. Secure.</div>
                </div>
            </div>
            <div className="flex justify-center text-3xl sm:text-4xl md:text-6xl font-extrabold pb-5 px-4">
                Shorten Your Link
            </div>
            <div className="flex justify-center text-gray-500 px-4 sm:px-10 text-center">
                Transform long, ugly URLs into short, shareable links. Track clicks and optimize your marketing campaigns.
            </div>
            <div className="flex justify-center shadow-lg mx-4 sm:mx-10 rounded-2xl mt-10 border border-gray-200">
                <div className="flex flex-col sm:flex-row gap-3 py-4 w-full max-w-xl">
                    <div className="flex items-center w-full px-4 gap-3 text-gray-700 py-5 rounded-2xl border border-gray-200">
                        <LuLink className="flex-shrink-0 text-lg" />
                        <input
                             type="text"
                             placeholder="Paste your long URL here..."
                             className="flex-1 bg-transparent outline-none"
                        />
                    </div>


                    <div className="flex justify-center items-center px-6 py-5 gap-2 bg-purple-400 text-white rounded-2xl w-full sm:w-auto cursor-pointer">
                        <PiScissorsFill className="mt-1"/>
                        <div>Shorten</div>
                    </div>
                </div>
            </div>

            

            <div className="flex justify-center mt-20 gap-6">
                <Box heading={"Instant Shortening"} description={"Our service is lightning fast. Paste your link and get a short URL in milliseconds."}/>
                <Box heading={"Reliable Redirects"} description={"We ensure your visitors always land on the correct destination page without delays."}/>
            </div>

        </div>
    )
}


