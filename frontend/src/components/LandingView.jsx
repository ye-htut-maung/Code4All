import LandingImg from "./img/landing_img.png";
import Referral from "./referral";

export default function LandingView() {
    return (
        <div>
            <div className="border flex flex-row text-center rounded-md overflow:hidden bg-white p-5 justify-around items-center">
                <div className="flex-row gap-2 items-center">
                    <p className="font-bold">
                        Focus on learning, we’ll handle the rest
                    </p>
                    <button className="w-3/4 border-4 border-black p-1 rounded-full text-primary">
                        See How
                    </button>
                </div>
                <div className="flex-row gap-2">
                    <p className="font-bold">Not sure what you need?</p>
                    <button className="border-4 border-black p-1 rounded-full text-primary">
                        Chat with our chat bot
                    </button>
                </div>
            </div>
            <div className="relative h-[85vh] bg-primary flex flex-row items-center justify-center gap-16">
                <Referral />

                <div className="w-4/6">
                    <img src={LandingImg} alt="Landing Image" className="" />
                </div>
            </div>
        </div>
    );
}
