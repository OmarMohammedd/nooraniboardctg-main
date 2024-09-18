/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./Pages/Index"
import Book from "./Pages/Book_sell_center"
import Contact from './Pages/Contact';
import Event from './Pages/Event';
import Institute from './Pages/Institute_register_online';
import Login from './Pages/Login';
import MoallemRAF from './Pages/Moallem_registration_admin_form';
import MoallemRFF from './Pages/Moallem_registration_forgot_form';
import Moallem403 from './Pages/Moallem403';
import MoallemTC from './Pages/Moallem_training_center';
import Notice from './Pages/Notice';
import Notice1270 from './Pages/Notice1270';
import PermanentC from './Pages/Permanent_center';
import PermanentT from './Pages/Permanent_training_center';
import PhotoGallery from './Pages/Photo_gallery';
import Result from './Pages/Result';
import RetailOrder from './Pages/Retail_order';
import Transaction from './Pages/Transaction';
import VideoGallery from './Pages/Video_gallery';
import Fee from './Pages/payment/Fee';
import Samyik from './Pages/notice/Samyik';
import Hijree from './Pages/notice/Hijree';
import Hijree1445 from './Pages/notice/Hijree1445';
import Hijree1443 from './Pages/notice/Hijree1443';
import KendreeyT from './Pages/notice/KendreeyT';
import OnlaineFi from './Pages/notice/OnlaineFi';
import OnlaineBi from './Pages/notice/OnlaineBi';
import KendreeyS from './Pages/notice/KendreeyS';

import Saree from './Pages/notice/Saree';
import Ofise from './Pages/notice/Ofise';
import Snd from './Pages/notice/Snd';
import Sikshkder from './Pages/notice/Sikshkder';
import Bih from './Pages/notice/Bih';



import Message1 from './Pages/message/Message1';
import Message2 from './Pages/message/Message2';
import Bord_priciti from './Pages/page/Bord_priciti';
import Amader_karzkrm from './Pages/page/Amader_karzkrm';
import Ovivabker_dayitw from './Pages/page/Ovivabker_dayitw';
import MeneC from './Pages/page/MeneC';
import Prsikshne from './Pages/page/Prsikshne';
import Chatr from './Pages/page/Chatr';
import Belaek from './Pages/page/Belaek';
import MuyallimP from './Pages/page/MuyallimP';
import MuyallimPP from './Pages/page/MuyallimPP';

import MemberL1 from './Pages/members-list/MemberL1';
import MemberL2 from './Pages/members-list/MemberL2';
import Member1 from './Pages/members/Member1';
import Member2 from './Pages/members/Member2';
import Member3 from './Pages/members/Member3';
import Member from './Pages/members/Member';
import MadrasahR from './Pages/form/MadrasahR';
import MuallemRR from './Pages/form/MuallemRR';
import MuallemRRR from './Pages/form/MuallemRRR';
import TeacherB from './Pages/form/TeacherB';
import TeacherA from './Pages/form/TeacherA';
import Kendreey from './Pages/form/Kendreey';
import AdmitCard from './Pages/form/AdmitCard';
import Moallem1 from './Pages/moallem-training/Moallem1';
import Moallem2 from './Pages/moallem-training/Moallem2';

import Class1 from './Pages/books/Class1';
import Class2 from './Pages/books/Class2';
import Class3 from './Pages/books/Class3';
import Nursery from './Pages/books/Nursery';
import Play from './Pages/books/Play';

import Playy from './Pages/syllabus/Play';
import Nurseryy from './Pages/syllabus/Nursery';
import Class11 from './Pages/syllabus/Class1';
import Class22 from './Pages/syllabus/Class2';
import Class33 from './Pages/syllabus/Class3';

import Kendreeyy from './Pages/event/Kendreey';
import PreeksharF from './Pages/event/PreeksharF';
import PrsikshneK from './Pages/event/PrsikshneK';
import PurskarBO from './Pages/event/PurskarBO';
import PurskarBS from './Pages/event/PurskarBS';
import SerpurK from './Pages/event/SerpurK';
import ResetPassword from './Pages/ResetPassword';



import Application from './Pages/Application';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/application",
    element: <Application />,
  },
  {
    path: "/event/kendreey-snd-preekshar-kendr-pridrsn-2020ing",
    element: <Kendreeyy />,
  },
  {
    path: "/event/preekshar-fl-prkas",
    element: <PreeksharF />,
  },
  {
    path: "/event/prsikshne-kuran",
    element: <PrsikshneK />,
  },
  {
    path: "/event/purskar-bitrn-onushtan-2020",
    element: <PurskarBO />,
  },
  {
    path: "/event/purskar-bitrnee-sva-2020ing",
    element: <PurskarBS />,
  },
  {
    path: "/event/serpur-kendreey-karzzalyer-doya-oo-iftar-mahfile-ekangs",
    element: <SerpurK />,
  },
  {
    path: "/book-sell-center",
    element: <Book />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },


  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "/institute-register-online",
    element: <Institute />,
  },


  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/password/reset",
    element: <ResetPassword />,
  },
  {
    path: "/moallem-registration-admin-form",
    element: <MoallemRAF />,
  },
  {
    path: "/moallem-registration-forgot-form",
    element: <MoallemRFF />,
  },
  {
    path: "/moallem-registration/:id",
    element: <Moallem403 />,
  },
  {
    path: "/moallem-training-center",
    element: <MoallemTC />,
  },
  {
    path: "/notice",
    element: <Notice />,
  },



  {
    path: "/notice/ofise-fon-krar-smy-smyer-prti-lksh-rakhar-onurudh-ril-hisab-bivag-01771-55500001322-891050snd-01322-89102001322-891040bi-bitrn-bivag-01322-891005-bi-bitrn-khucra-01322-891020",
    element: <Ofise />,
  },
  {
    path: "/notice/snd-preekshar-uttrptr-pun-nireekshner-abedn-frmet",
    element: <Snd />,
  },
  {
    path: "/notice/sikshkder-prti-jruree-hedayat-nama",
    element: <Sikshkder />,
  },
  {
    path: "/notice/bi-oo-stesnaree-samgree-khucra-kryer-jnz-zogazog-krun-01991990453",
    element: <Bih />,
  },
  {
    path: "/notice1270",
    element: <Notice1270 />,
  },
  {
    path: "/permanent-center",
    element: <PermanentC />,
  },
  {
    path: "/permanent-training-center",
    element: <PermanentT />,
  },
  {
    path: "/photo-gallery",
    element: <PhotoGallery />,
  },
  {
    path: "/result",
    element: <Result />,
  },
  {
    path: "/retail-order",
    element: <RetailOrder />,
  },
  {
    path: "/transaction",
    element: <Transaction />,
  },
  {
    path: "/video-gallery",
    element: <VideoGallery />,
  },
  {
    path: "/payment-fee",
    element: <Fee />,
  },
  {
    path: "/notice/1m-samyik-preeksha-rutin-2023ing",
    element: <Samyik />,
  },
  {
    path: "notice/1443-hijree-trriteey-srenir-preekshar-rutin",
    element: <Hijree />,
  },


  {
    path: "notice/hijree-1445-sner-ple-narsaree-prthm-oo-dwiteey-srenir-preekshar-rutin",
    element: <Hijree1445 />,
  },
  {
    path: "notice/1443-hijree-preekshar-fi-sngkrant",
    element: <Hijree1443 />,
  },
  {
    path: "notice/kendreey-snd-trriteey-preekshar-rutin",
    element: <KendreeyT />,
  },  
  {
    path: "notice/onlaine-fi-prisodher-pddhti",
    element: <OnlaineFi />,
  },
  {
    path: "notice/onlaine-bi-oo-shtesnaree-pnz-kryer-pddhti",
    element: <OnlaineBi />,
  },
  {
    path: "notice/kendreey-snd-preeksha-2023-er-cithi",
    element: <KendreeyS />,
  },



  {
    path: "notice/2023-saler-ple-narsaree-prthm-oo-dwiteey-srenir-preekshar-rutin",
    element: <Saree />,
  },
  {
    path: "message/1",
    element: <Message1 />,
  },
  {
    path: "page/bord-priciti",
    element: <Bord_priciti />,
  },
  {
    path: "page/muyallim-prsikshn-arbee",
    element: <MuyallimP />,
  },
  {
    path: "page/muyallim-prsikshn-bangla",
    element: <MuyallimPP />,
  },
  {
    path: "page/amader-karzkrm",
    element: <Amader_karzkrm />,
  },
  {
    path: "page/ovivabker-dayitw",
    element: <Ovivabker_dayitw />,
  },
  {
    path: "page/mene-clte-pari",
    element: <MeneC />,
  },
  {
    path: "page/chatr-chatreeder-krneey",
    element: <Chatr />,
  },
  {
    path: "page/bisesh-jruree-pramrs-madrasa-dui-belaek-bela-prsngoe",
    element: <Belaek />,
  },
  {
    path: "message/2",
    element: <Message2 />,
  },
  {
    path: "members-list/1",
    element: <MemberL1 />,
  },
  {
    path: "members-list/2",
    element: <MemberL2 />,
  },
  {
    path: "members/প্রশিক্ষক-পরিদর্শক",
    element: <Member1 />,
  },
  {
    path: "member/:id",
    element: <Member />,
  },
  {
    path: "members/অফিস-কর্মকর্তা",
    element: <Member2 />,
  },
  {
    path: "members/কর্মচারীবৃন্দ",
    element: <Member3 />,
  },
  {
    path: "form/madrasah-registration-form",
    element: <MadrasahR />,
  },
  {
    path: "form/muallem-recruitment-application-form",
    element: <MuallemRR />,
  },
  {
    path: "form/muallem-registration-form",
    element: <MuallemRRR />,
  },
  {
    path: "form/teacher-certificate-application-form-bangla",
    element: <TeacherB />,
  },
  {
    path: "form/teacher-certificate-application-form-arabic",
    element: <TeacherA />,
  },
  {
    path: "form/kendreey-snd-preekshar-uttrptr-pun-nireekshner-abedn-frm",
    element: <Kendreey />,
  },
  {
    path: "form/admit-card",
    element: <AdmitCard />,
  },



  {
    path: "moallem-training/আরবী",
    element: <Moallem1 />,
  },
  {
    path: "moallem-training/বাংলা",
    element: <Moallem2 />,
  },
  {
    path: "page/prsikshne-ongsgrhner-niymablee",
    element: <Prsikshne />,
  },
  {
    path: "books/play",
    element: <Play />,
  },
  {
    path: "books/nursery",
    element: <Nursery />,
  },
  {
    path: "books/class-1",
    element: <Class1 />,
  },
  {
    path: "books/class-2",
    element: <Class2 />,
  },
  {
    path: "books/class-3",
    element: <Class3 />,
  },
  {
    path: "syllabus/nursery",
    element: <Nurseryy />,
  },
  {
    path: "syllabus/play",
    element: <Playy />,
  },
  {
    path: "syllabus/class-1",
    element: <Class11 />,
  },
  {
    path: "syllabus/class-2",
    element: <Class22 />,
  },
  {
    path: "syllabus/class-3",
    element: <Class33 />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

     
       <RouterProvider router={router} />
    
   
  </React.StrictMode>
);


