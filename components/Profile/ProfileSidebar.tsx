"use client";

import axios from "axios";
import { Heart, LogOut, Package, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { MouseEvent, useState } from "react";

const ProfileSidebar = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
    const [activeTab,setActiveTab] = useState("tab1");

    const handleChangeTab = (e: MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        console.log(target);
        
        setActiveTab(target.id);
    };  

    const handleLogOut = async (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();        
        await axios.post("/api/logout");
        localStorage.removeItem("userInfo");
        window.location.reload();
    };

    return (
        <div className="account-tab-area-start rts-section-gap">
            <div className="container-2">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="nav accout-dashborard-nav flex-column nav-pills me-3" onClick={handleChangeTab}>
                            <Link href="/profile" className={activeTab === "tab1" ? "nav-link active" : "nav-link"} id={"tab1"}>
                                <User width={18} />
                                Personal Information
                            </Link>
                            <Link href="/profile/orders" className={activeTab === "tab2" ? "nav-link active" : "nav-link"} id={"tab2"}>
                                <Package width={18} />
                                Orders
                            </Link>
                            <Link href="/profile/favorites" className={activeTab === "tab3" ? "nav-link active" : "nav-link"} id={"tab3"}>
                                <Heart width={18} />
                                Favorites
                            </Link>
                            <Link href="/profile/add-product" className={activeTab === "tab4" ? "nav-link active" : "nav-link"} id={"tab4"}>
                                <ShoppingCart width={18}/>
                                Add Product
                            </Link>
                            <button className="nav-link" onClick={handleLogOut}>
                                <LogOut width={18}/>
                                Log out
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-9 pt_md--30 pt_sm--30">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSidebar;