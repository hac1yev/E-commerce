"use client";

import axios from "axios";
import { Heart, LogOut, Package, ShoppingCart, User } from "lucide-react";
import { MouseEvent, useState } from "react";
import PersonalInformation from "./PersonalInformation";
import Favorites from "./Favorites";
import Orders from "./Orders";
import AddProduct from "./AddProduct";

const ProfileSidebar = () => {
    const [activeTab,setActiveTab] = useState("tab4");

    const handleChangeTab = (e: MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        setActiveTab(target.id);
    };  

    const handleLogOut = async (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();        
        await axios.post("/api/logout");
        localStorage.removeItem("accessToken");
        window.location.reload();
    };

    return (
        <div className="account-tab-area-start rts-section-gap">
            <div className="container-2">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="nav accout-dashborard-nav flex-column nav-pills me-3" onClick={handleChangeTab}>
                            <button className={activeTab === "tab1" ? "nav-link active" : "nav-link"} id="tab1">
                                <User width={18} />
                                Personal Information
                            </button>
                            <button className={activeTab === "tab2" ? "nav-link active" : "nav-link"} id="tab2">
                                <Package width={18} />
                                Orders
                            </button>
                            <button className={activeTab === "tab3" ? "nav-link active" : "nav-link"} type="button" id="tab3">
                                <Heart width={18} />
                                Favorites
                            </button>
                            <button className={activeTab === "tab4" ? "nav-link active" : "nav-link"} type="button" id="tab4">
                                <ShoppingCart width={18}/>
                                Add Product
                            </button>
                            <button className="nav-link" type="button" onClick={handleLogOut}>
                                <LogOut width={18}/>
                                Log out
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-9 pl--50 pl_md--10 pl_sm--10 pt_md--30 pt_sm--30">
                        {activeTab === 'tab1' && <PersonalInformation />}
                        {activeTab === 'tab2' && <Orders />}
                        {activeTab === 'tab3' && <Favorites />}
                        {activeTab === 'tab4' && <AddProduct />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSidebar;