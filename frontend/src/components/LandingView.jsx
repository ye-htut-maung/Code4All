import LandingImg from "./img/landing_img.png";

export default function LandingView() {
    return (
        <div>
            <div className="relative h-[85vh] bg-primary flex flex-row items-center justify-center gap-16">
                <div className="text-center rounded-md top-50 right-60 overflow-hidden bg-white h-80 w-60 p-5 flex flex-col justify-around items-center">
                    <div className="flex flex-col gap-2 items-center">
                        <p className="font-bold">
                            Focus on learning, we’ll handle the rest
                        </p>
                        <button className="w-3/4 border-4 border-black p-1 rounded-full text-primary">
                            See How
                        </button>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold">Not sure what you need?</p>
                        <button className="border-4 border-black p-1 rounded-full text-primary">
                            Chat with our chat bot
                        </button>
                    </div>
                </div>
                <div className="w-4/6">
                    <img src={LandingImg} alt="Landing Image" className="" />
                </div>
            </div>
        </div>
    );
}
