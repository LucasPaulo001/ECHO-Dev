import { EchoCard } from "@/components/EchoCard/EchoCard";
import { Navbar } from "@/components/Navbar/Navbar";
import ProjectFeed from "@/components/ProjectFeed/ProjectFeed";
import { ProjectSidebar } from "@/components/ProjectSidebar/ProjectSidebar";
import { HomePage } from "@/pages/Home/Home";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  );
}
