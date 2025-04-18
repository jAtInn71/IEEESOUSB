import { useState } from "react";
import { Search, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";

const CORE_MEMBERS = [
  {
    id: "core-1",
    name: "Ananya Mehta",
    position: "Chairperson",
    pursuing: "B.Tech in Computer Science",
    image: "https://xsgames.co/randomusers/avatar.php?g=female&seed=61",
    linkedinUrl: "https://linkedin.com/in/",
  },
  {
    id: "core-2",
    name: "Rohit Singh",
    position: "Interim Chairperson",
    pursuing: "B.Tech in Electrical Engineering",
    image: "https://xsgames.co/randomusers/avatar.php?g=male&seed=62",
    linkedinUrl: "https://linkedin.com/in/",
  },
  {
    id: "core-3",
    name: "Sanya Kapoor",
    position: "Vice Chairperson",
    pursuing: "B.Tech in Information Technology",
    image: "https://xsgames.co/randomusers/avatar.php?g=female&seed=63",
    linkedinUrl: "https://linkedin.com/in/",
  },
  {
    id: "core-4",
    name: "Karan Patel",
    position: "Interim Vice Chairperson",
    pursuing: "B.Tech in Mechanical Engineering",
    image: "https://xsgames.co/randomusers/avatar.php?g=male&seed=64",
    linkedinUrl: "https://linkedin.com/in/",
  },
];
export default function TeamCore() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCoreMembers = CORE_MEMBERS.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Core Team</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the core members who drive the initiatives of the IEEE SOU Student Branch.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search core members..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCoreMembers.map((member) => (
              <div key={member.id} className="glass rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-bold text-lg">{member.name}</h3>
                        <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="ml-2 text-primary hover:text-primary/80">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </div>
                      <p className="text-sm text-muted-foreground">{member.position}</p>
                      <p className="text-sm text-muted-foreground">{member.pursuing}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
