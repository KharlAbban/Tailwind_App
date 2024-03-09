import { SlCalender } from "react-icons/sl";
import { useUserContext } from "../utils/contexts/UserContext";
import { FaCircle, FaRegCircleQuestion } from "react-icons/fa6";
import { GoAlert } from "react-icons/go";

const Dashboard = () => {
    const {name} = useUserContext();

    return (
        <>
            <h2 className="flex justify-between font-semibold text-lg">
                <span>
                    Welcome back, {name}
                </span>
                <span className="flex items-center max-md:hidden">
                    Monday - 2nd March, 2024
                    <SlCalender className="ml-2"/>
                </span>
            </h2>
            {/* Status Cards */}
            <div className="grid xl:grid-cols-5 grid-cols-3 gap-4 my-4">
                <div className="flex flex-col py-2 justify-start pl-4 h-32 rounded bg-stone-300">
                    <p className="text-2xl pr-2">
                    <FaRegCircleQuestion className="float-end" />
                    </p>
                    <p className="flex font-semibold gap-2 text-lg items-center">
                        <FaCircle className="text-stone-800" />
                        Total Tickets
                    </p>
                    <p className="text-5xl">2350</p>
                </div>
                <div className="flex flex-col py-2 justify-start pl-4 h-32 rounded bg-green-300">
                    <p className="text-2xl pr-2">
                    <FaRegCircleQuestion className="float-end" />
                    </p>
                    <p className="flex font-semibold gap-2 text-lg items-center">
                        <FaCircle className="text-green-800" />
                        Closed
                    </p>
                    <p className="text-5xl">2350</p>
                </div>
                <div className="flex flex-col py-2 justify-start pl-4 h-32 rounded bg-blue-300">
                    <p className="text-2xl pr-2">
                    <FaRegCircleQuestion className="float-end" />
                    </p>
                    <p className="flex font-semibold gap-2 text-lg items-center">
                        <FaCircle className="text-blue-800" />
                        In Progress
                    </p>
                    <p className="text-5xl">2350</p>
                </div>
                <div className="max-xl:hidden flex flex-col py-2 justify-start pl-4 h-32 rounded bg-stone-300">
                </div>
                <div className="max-xl:hidden flex flex-col py-2 justify-start pl-4 h-32 rounded bg-stone-300">
                </div>
            </div>
            {/* No Tickets Div */}
            <div className="w-full">
                <div className="flex flex-col gap-3 items-center justify-center min-h-[27rem] mb-4 rounded bg-gray-100">
                    <GoAlert className="text-5xl" />
                    <p className="text-2xl font-semibold flex gap-2 items-center">
                        No tickets to show!
                    </p>
                    <a href="/home/tickets/new" className="standard-btn gap-3">
                        Create A New Ticket
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Dashboard;