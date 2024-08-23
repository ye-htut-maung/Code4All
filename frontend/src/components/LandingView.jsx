import LandingImg from "./img/landing_img.png";
import Referral from "./referral";

export default function LandingView({userId}) {
    return (
        <div>
            <div className="relative h-[85vh] bg-primary flex flex-row items-center justify-center gap-16">
                <Referral userId={userId}/>

                <div className="w-4/6">
                    <img src={LandingImg} alt="Landing Image" className="" />
                </div>
            </div>
        </div>
    );
}
