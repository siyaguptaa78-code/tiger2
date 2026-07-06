'use client';

import React from 'react';
import Modal from './Modal';
import { ModalType } from '@/types';

interface InfoModalsProps {
  activeModal: ModalType;
  onClose: () => void;
  domainName: string;
}

export default function InfoModals({
  activeModal,
  onClose,
  domainName,
}: InfoModalsProps) {
  return (
    <>
      {/* 1. About Us Modal */}
      <Modal
        isOpen={activeModal === 'about'}
        onClose={onClose}
        title="About Us"
        size="md"
      >
        <div className="space-y-4 text-sm leading-relaxed text-slate-300">
          <p>We aim to utilize the latest technologies to provide innovative and interactive gaming experiences in a secure environment.</p>
          <p>We have dedicated ourselves to offering our customers a seamless and thrilling gaming experience while you are on the go. We aim to provide an exceptional and fully customizable online betting experience.</p>
          <p>We are innovative, ambitious and passionate about what we do. We do it in a credible and responsible way, always aiming for the top.</p>
          <p>We only operate in regulated markets where we hold the appropriate licenses. We take our responsibilities to customers and our other stakeholders seriously and place great emphasis on working to a ‘compliance first’ model across the business.</p>
          <p>Dedicated Customer Service Team: We are here for you every step of the way with dedicated customer service managers standing by to provide you with a 24/7 top notch customer care service, handling any issues quickly and efficiently.</p>
          <p>When customers bet on our site they can rest assured that they are getting a wide variety of betting options, up to date information and the best odds available.</p>
          <p>Our customers also have peace of mind, knowing that when it’s time to collect, they are betting with a well-known reputable company.</p>
          <p>We have integrated best and secured payment methods on our site and a transaction process that is quick, easy enabling our players to cash out their winnings quickly and securely.</p>
        </div>
      </Modal>

      {/* 2. Terms & Conditions Modal */}
      <Modal
        isOpen={activeModal === 'terms'}
        onClose={onClose}
        title={`Terms & Conditions - ${domainName}`}
        size="lg"
      >
        <div className="space-y-4 text-sm leading-relaxed text-slate-300 max-h-[60vh] custom-scrollbar pr-2">
          <p className="font-bold text-amber-400">Description: Initial Terms and Conditions replacing general rules</p>
          <p className="font-bold text-white uppercase text-base border-b border-white/10 pb-1">Introduction</p>
          <p>These terms and conditions and the documents referred and linked to below (the “Terms”) set out the basis upon which the website operated under the URL <span className="text-amber-300">{domainName}</span> (the “Website”) and its related or connected services (collectively, the “Service”) will be provided to you.</p>
          <p>Please read these terms very carefully as they form a binding legal agreement between you - our customer (the “Customer”) - and us. By opening an account (the “Account”) and using the Service you agree to be bound by these terms, together with any amendment which may be published from time to time.</p>
          <p>If anything is not clear to you please contact us using the contact details below by mail only: <a href="mailto:support@tiger365official.co.in" className="text-amber-400 underline">support@tiger365official.co.in</a></p>
          
          <p className="font-bold text-white uppercase text-base border-b border-white/10 pb-1 pt-2">General Terms</p>
          <p>We reserve the right to amend the terms (including to any documents referred and linked to below) at any time. When such amendment is not substantial, we may not provide you with prior notice. You will be notified in advance for material changes to the terms and may require you to re-confirm acceptance to the updated terms before the changes come into effect. If you object to any such changes, you must immediately stop using the service and the termination provisions below will apply. Continued use of the service indicates your agreement to be bound by such changes. Any bets not settled prior to the changed terms taking effect will be subject to the pre-existing terms.</p>
          
          <p className="font-bold text-white uppercase text-base border-b border-white/10 pb-1 pt-2">Your Obligations</p>
          <p>You agree that at all times when using the Service:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>You are over 18 years of age (or over the age of majority as stipulated in the laws of the jurisdiction applicable to you) and can enter into a binding legal agreement with us.</li>
            <li>It is the User’s responsibility to check and enter this site only if the user is in a country where it is lawful to place bets on the service. It is your responsibility to ensure that your use of the service is legal.</li>
            <li>When sending money to us you are authorised to do so e.g. you are the authorised user of the debit/credit card or other payment method you use.</li>
            <li>You will not, by participating in the Services and/or placing bets be placed in a position of actual, potential or perceived conflict of interest in any manner.</li>
            <li>You have never failed to pay, or attempted to fail to pay a liability on a bet.</li>
            <li>You are acting solely on your own behalf as a private individual in a personal capacity and not on behalf of another party or for any commercial purposes.</li>
            <li>By placing bets you may lose some or all of your money lodged with us in accordance with these terms and you will be fully responsible for that loss.</li>
            <li>You must use the service for legitimate betting purposes only and must not nor attempt to manipulate any market or element within the service in bad faith.</li>
          </ul>
        </div>
      </Modal>

      {/* 3. Privacy Policy Modal */}
      <Modal
        isOpen={activeModal === 'privacy'}
        onClose={onClose}
        title="Privacy Policy"
        size="md"
      >
        <div className="space-y-4 text-sm leading-relaxed text-slate-300">
          <p>Your privacy is important to us, and we are committed to protecting your personal information. We will be clear and open about why we collect your personal information and how we use it. Where you have choices or rights, we will explain these to you.</p>
          <p>This Privacy Policy explains how <span className="text-amber-400">{domainName}</span> uses your personal information when you are using one of our website.</p>
          <p>If you do not agree with any statements contained within this Privacy Policy, please do not proceed any further on our website. Please be aware that registering an account on our website, placing bets and transferring funds will be deemed confirmation of your full agreement with our Terms and Conditions and our Privacy Policy. You have the right to cease using the website at any time; however, we may still be legally required to retain some of your personal information.</p>
          <p>We may periodically make changes to this Privacy Policy and will notify you of these changes by posting the modified terms on our platforms. We recommend that you revisit this Privacy Policy regularly.</p>
        </div>
      </Modal>

      {/* 4. Responsible Gaming Modal */}
      <Modal
        isOpen={activeModal === 'responsible'}
        onClose={onClose}
        title="Responsible Gaming"
        size="md"
      >
        <div className="space-y-4 text-sm leading-relaxed text-slate-300">
          <p><span className="text-amber-400 font-bold">{domainName}</span> is committed to endorsing responsible wagering among its customers as well as promoting the awareness of problem gambling and improving prevention, intervention and treatment.</p>
          <p><span className="text-amber-400 font-bold">{domainName}</span>’s Responsible Gambling Policy sets out its commitment to minimizing the negative effects of problem gambling and to promoting responsible gambling practices.</p>
          <p><span className="text-amber-400 font-bold">{domainName}</span> supports the generation of online gamblers offering them a wide range of games and entertainment. We also take responsibility for our product line-up.</p>
          <p>The aim of <span className="text-amber-400 font-bold">{domainName}</span> is to provide the world’s safest and most innovative gaming platform for adults. The offered clear and safe products allow each user to play within his financial means and to receive the highest quality service. Integrity, fairness and reliability are the guiding principles of <span className="text-amber-400 font-bold">{domainName}</span>’s work. It is therefore clear that <span className="text-amber-400 font-bold">{domainName}</span> should do its best to avoid and reduce the problems, which can arise from participation in gambling, particularly in cases of immoderate playing.</p>
          
          <div className="border-t border-white/10 pt-3 mt-4 space-y-2">
            <h4 className="font-bold text-white text-sm">{domainName}’s Responsible Gaming Message:</h4>
            <p className="italic text-amber-300">"Awareness Assistance Support"</p>
            <p>This is the commitment to harm minimisation and support for customers whereby:</p>
            <p><strong className="text-amber-400">. Awareness</strong> – supporting harm minimisation by building awareness of responsible gambling programs and services for staff and customers, who will be provided with contacts of organizations where they can receive professional advice and support.</p>
          </div>
        </div>
      </Modal>

      {/* 5. Rules Modal */}
      <Modal
        isOpen={activeModal === 'rules'}
        onClose={onClose}
        title="Rules"
        size="lg"
      >
        <div className="space-y-4 text-sm leading-relaxed text-slate-300 max-h-[60vh] custom-scrollbar pr-2">
          <p>• Once all session/fancy bets are completed and settled there will be no reversal even if the Match is Tied or is Abandoned.</p>
          <p>• Advance Session or Player Runs and all Fancy Bets are only valid for 20/50 overs full match each side. (Please Note this condition is applied only in case of Advance Fancy Bets only).</p>
          <p>• All advance fancy bets market will be suspended 60 mins prior to match and will be settled.</p>
          <p>• Under the rules of Session/Fancy Bets if a market gets Suspended for any reason whatsoever and does not resume then all previous Bets will remain Valid and become HAAR/JEET bets.</p>
          <p>• Incomplete Session/Fancy Bet will be cancelled but Complete Session will be settled.</p>
          <p>• In the case of Running Match getting Cancelled/ No Result/ Abandoned but the session is complete it will still be settled. Player runs / fall of wicket will be also settled at the figures where match gets stopped due to rain for the inning (D/L) , cancelled , abandoned , no result.</p>
          <p>• If a player gets Retired Hurt and one ball is completed after you place your bets then all the betting till then is and will remain valid.</p>
          <p>• Should a Technical Glitch in Software occur, we will not be held responsible for any losses.</p>
          <p>• Should there be a power failure or a problem with the Internet connection at our end and session/fancy market does not get suspended then our decision on the outcome is final.</p>
          <p>• All decisions relating to settlement of wrong market being offered will be taken by management. Management will consider all actual facts and decision taken will be full in final.</p>
          <p>• Any bets which are deemed of being suspicious, including bets which have been placed from the stadium or from a source at the stadium maybe voided at anytime. The decision of whether to void the particular bet in question or to void the entire market will remain at the discretion of Company. The final decision of whether bets are suspicious will be taken by Company and that decision will be full and final.</p>
          <p>• Any sort of cheating bet , any sort of Matching (Passing of funds), Court Siding (Ghaobaazi on commentary), Sharpening, Commission making is not allowed in Company, If any company User is caught in any of such act then all the funds belonging that account would be seized and confiscated. No argument or claim in that context would be entertained and the decision made by company management will stand as final authority.</p>
          <p>• Fluke hunting/Seeking is prohibited in Company , All the fluke bets will be reversed. Cricket commentary is just an additional feature and facility for company user but company is not responsible for any delay or mistake in commentary.</p>
        </div>
      </Modal>
    </>
  );
}
