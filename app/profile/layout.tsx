import "../plugins.css";
import "../globals.css";
import "@uploadthing/react/styles.css";
import ProfileSidebar from "@/components/Profile/ProfileSidebar";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
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
            <ProfileSidebar>
                {children}
            </ProfileSidebar>
        </>
    </>
  );
}