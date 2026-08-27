"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Legal from "@/components/Legal";
import OnlineGames from "@/components/OnlineGames";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";
import RegisterModal from "@/components/RegisterModal";
import ForgetPasswordModal from "@/components/ForgetPasswordModal";
import InfoModals from "@/components/InfoModals";
import BlogSection from "@/components/BlogSection";
import { ModalType } from "@/types";

export default function Home() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const domainName = "tiger365official.co.in";

  const handleOpenModal = (type: ModalType) => {
    if (type === "login" || type === "register") {
      window.location.href = "https://www.Gabbar247.vip";
      return;
    }
    setActiveModal(type);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#080c12] overflow-x-hidden">
      {/* Visual background vector curved designs (Home-left and Home-right) */}
      <div className="home-left-right">
        <div className="home-left">
          <Image
            src="/assets/home-left-design-DebOdF89.webp"
            alt="Decoration Left"
            width={350}
            height={600}
            priority
            className="object-contain"
          />
        </div>
        <div className="home-right">
          <Image
            src="/assets/home-left-design-DebOdF89.webp"
            alt="Decoration Right"
            width={350}
            height={600}
            priority
            className="object-contain transform scale-x-[-1]"
          />
        </div>
      </div>

      {/* 1. Header component */}
      <Header
        onOpenLogin={() => handleOpenModal("login")}
        onOpenRegister={() => handleOpenModal("register")}
      />

      {/* Main Body wrap */}
      <main className="flex-1 w-full z-10">
        {/* 2. Carousel Banner component */}
        <Banner onPlayNow={() => handleOpenModal("login")} />

        {/* 3. Live Dealer Odds divider component */}
        <Legal />

        {/* 4. Game Tiles Grid component */}
        <OnlineGames onSelectGame={() => handleOpenModal("login")} />

        {/* 5. Blog Section component */}
        <BlogSection />
      </main>

      {/* 5. Footer component */}
      <Footer onOpenModal={handleOpenModal} domainName={domainName} />

      {/* --- Action Dialog Modals --- */}

      {/* Login Modal */}
      <LoginModal
        isOpen={activeModal === "login"}
        onClose={handleCloseModal}
        onOpenRegister={() => handleOpenModal("register")}
        onOpenForgetPassword={() => handleOpenModal("forgetPassword")}
      />

      {/* Register Modal */}
      <RegisterModal
        isOpen={activeModal === "register"}
        onClose={handleCloseModal}
        onOpenLogin={() => handleOpenModal("login")}
      />

      {/* Forget Password Modal */}
      <ForgetPasswordModal
        isOpen={activeModal === "forgetPassword"}
        onClose={handleCloseModal}
        onOpenLogin={() => handleOpenModal("login")}
      />

      {/* Policy Modals */}
      <InfoModals
        activeModal={activeModal}
        onClose={handleCloseModal}
        domainName={domainName}
      />
    </div>
  );
}
