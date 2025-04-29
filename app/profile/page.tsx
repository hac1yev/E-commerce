import ProfileSidebar from "@/components/Profile/ProfileSidebar";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const ProfilePage = () => {
    return (
        <>
            <div className="rts-navigation-area-breadcrumb bg_light-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="navigator-breadcrumb-wrapper">
                                <Link href="/">Home</Link>
                                <ChevronRight width={18} />
                                <Link className="current" href="/login">Profile</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProfileSidebar />
        </>
    );
};

export default ProfilePage;