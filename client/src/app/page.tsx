import HouseCard from "@/components/HouseCard";
import HouseCardHori from "@/components/HouseCardHori";
import Navbar from "@/components/Navbar";
import ParticularLandCard from "@/components/ParticularLandCard";
import ParticularLandDesc from "@/components/ParticularLandDesc";
import ParticularLandGallery from "@/components/ParticularLandGallery";
import ProfileCard from "@/components/ProfileCard";
import Image from "next/image";

const dummyDataArray: Iproperty[] = [
  {
    id: 1,
    name: "Property 1",
    imageUrl:
      "https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI=",
    location: "Location 1",
    description: "Description for property 1",
    area: 750,
    amount: 75000,
    percentage: 3.5,
    equity: 64, // Random value between 0-100
  },
  {
    id: 2,
    name: "Property 2",
    imageUrl:
      "https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI=",
    location: "Location 2",
    description: "Description for property 2",
    area: 800,
    amount: 120000,
    percentage: 7.2,
    equity: 12, // Random value between 0-100
  },
  {
    id: 3,
    name: "Property 3",
    imageUrl:
      "https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI=",
    location: "Location 3",
    description: "Description for property 3",
    area: 900,
    amount: 80000,
    percentage: 19.8,
    equity: 91, // Random value between 0-100
  },
  {
    id: 4,
    name: "Property 4",
    imageUrl:
      "https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI=",
    location: "Location 4",
    description: "Description for property 4",
    area: 950,
    amount: 90000,
    percentage: 5.5,
    equity: 35, // Random value between 0-100
  },
  {
    id: 5,
    name: "Property 5",
    imageUrl:
      "https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI=",
    location: "Location 5",
    description:
      "Description for property 5Description for property 5Description for property 5Description for property 5Description for property 5Description for property 5Description for property 5Description for property 5Description for property 5Description for property 5Description for property 5Description for property 5.",
    area: 600,
    amount: 70000,
    percentage: 2.3,
    equity: 78, // Random value between 0-100
  },
];

const userData = {
  name: "Yash Agarwal",
  walletAddress: "0vctftvcdftyyftytybunyunnnnnnn4e",
};

const defaultLandDesc: ILandDescProps = {
  name: "IIIT Lucknow Gomti Nagar",
  location: "Chak Ganjaria, C.G. City, Uttar Pradesh, 226002",
  room: 3,
  bathroom: 2,
  area: 2500,
  parking: "Indoor",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing.",
};

const imageGallery: string[] = [
  "https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI=",
  "https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI=",
  "https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI=",
  "https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI=",
  "https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI=",
];

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#C44816] to-[#F8EC7D] max-w-[1660px] mx-auto flex min-h-screen flex-col items-center justify-between p-2 sm:p-6 lg:p-8">
      <div className="flex flex-wrap sm:grid gap-6 grid-cols-2 sm:grid-cols-3 place-items-center m-4">
        {dummyDataArray.map((item, ind) => {
          return <HouseCard key={ind} property={item} />;
        })}
      </div>
      <ParticularLandCard />
      <div className="w-full m-8 p-2">
        <ParticularLandDesc land={defaultLandDesc} />
      </div>
      <div className="w-full m-8 p-2">
        <ParticularLandGallery gallery={imageGallery} />
      </div>
      <ProfileCard userData={userData} activeTab="On Sale" />
      <Navbar />
      <div className="flex flex-col gap-4 m-4">
        {dummyDataArray.map((item, ind) => {
          return <HouseCardHori key={ind} property={item} />;
        })}
      </div>
    </main>
  );
}
