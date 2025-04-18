import { useState } from "react";
import { Search, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";

const EXECUTIVE_MEMBERS = [
  {
    society: "Student Branch",
    members: [
      {
        id: "sb-1",
        name: "Ayesha Khan",
        position: "Chairperson",
        pursuing: "B.Tech in Computer Science",
        image: "https://xsgames.co/randomusers/avatar.php?g=female&seed=11",
        linkedinUrl: "https://linkedin.com/in/",
      },
      {
        id: "sb-2",
        name: "Neha Patel",
        position: "Vice Chairperson",
        pursuing: "B.Tech in Information Technology",
        image: "https://xsgames.co/randomusers/avatar.php?g=female&seed=12",
        linkedinUrl: "https://linkedin.com/in/",
      },
      {
        id: "sb-3",
        name: "Aarav Shah",
        position: "Treasurer",
        pursuing: "B.Tech in Electrical Engineering",
        image: "https://xsgames.co/randomusers/avatar.php?g=male&seed=13",
        linkedinUrl: "https://linkedin.com/in/",
      },
      {
        id: "sb-4",
        name: "Diya Joshi",
        position: "Secretary",
        pursuing: "B.Tech in Electronics Engineering",
        image: "https://xsgames.co/randomusers/avatar.php?g=female&seed=14",
        linkedinUrl: "https://linkedin.com/in/",
      },
      {
        id: "sb-5",
        name: "Jatin Kavani",
        position: "Webmaster",
        pursuing: "B.Tech in Computer Engineering",
        image: "https://xsgames.co/randomusers/avatar.php?g=male&seed=15",
        linkedinUrl: "https://linkedin.com/in/",
      },
    ],
  },
  {
    society: "Women in Engineering (WIE)",
    members: [
      {
        id: "wie-1",
        name: "Kiran Shah",
        position: "Chairperson",
        pursuing: "B.Tech in Robotics Engineering",
        image: "https://xsgames.co/randomusers/avatar.php?g=male&seed=21",
        linkedinUrl: "https://linkedin.com/in/",
      },
      {
        id: "wie-2",
        name: "Shruti Mehta",
        position: "Vice Chairperson",
        pursuing: "B.Tech in Electronics and Communication",
        image: "https://xsgames.co/randomusers/avatar.php?g=female&seed=22",
        linkedinUrl: "https://linkedin.com/in/",
      },
      {
        id: "wie-3",
        name: "Nikhil Desai",
        position: "Treasurer",
        pursuing: "B.Tech in Mechanical Engineering",
        image: "https://xsgames.co/randomusers/avatar.php?g=male&seed=23",
        linkedinUrl: "https://linkedin.com/in/",
      },
      {
        id: "wie-4",
        name: "Simran Chauhan",
        position: "Secretary",
        pursuing: "B.Tech in Civil Engineering",
        image: "https://xsgames.co/randomusers/avatar.php?g=female&seed=24",
        linkedinUrl: "https://linkedin.com/in/",
      },
      {
        id: "wie-5",
        name: "Ravi Patel",
        position: "Webmaster",
        pursuing: "B.Tech in Computer Science",
        image: "https://xsgames.co/randomusers/avatar.php?g=male&seed=25",
        linkedinUrl: "https://linkedin.com/in/",
      },
    ],
  },
  {
    society: "Signal Processing Society (SPS)",
    members: [
      {
        id: "sps-1",
        name: "Alok Kumar",
        position: "Chairperson",
        pursuing: "B.Tech in Signal Processing",
        image: "https://xsgames.co/randomusers/avatar.php?g=male&seed=31",
        linkedinUrl: "https://linkedin.com/in/",
      },
      {
        id: "sps-2",
        name: "Priya Gupta",
        position: "Vice Chairperson",
        pursuing: "B.Tech in Electronics Engineering",
        image: "https://xsgames.co/randomusers/avatar.php?g=female&seed=32",
        linkedinUrl: "https://linkedin.com/in/",
      },
      {
        id: "sps-3",
        name: "Manoj Verma",
        position: "Treasurer",
        pursuing: "B.Tech in Electrical Engineering",
        image: "https://xsgames.co/randomusers/avatar.php?g=male&seed=33",
        linkedinUrl: "https://linkedin.com/in/",
      },
      {
        id: "sps-4",
        name: "Rina Rai",
        position: "Secretary",
        pursuing: "B.Tech in Electronics and Communication",
        image: "https://xsgames.co/randomusers/avatar.php?g=female&seed=34",
        linkedinUrl: "https://linkedin.com/in/",
      },
      {
        id: "sps-5",
        name: "Pooja Sharma",
        position: "Webmaster",
        pursuing: "B.Tech in Computer Engineering",
        image: "https://xsgames.co/randomusers/avatar.php?g=female&seed=35",
        linkedinUrl: "https://linkedin.com/in/",
      },
    ],
  },
  {
    society: "Computer Science Society (CS)",
    members: [
      {
        id: "cs-1",
        name: "Saurabh Jain",
        position: "Chairperson",
        pursuing: "B.Tech in Computer Science",
        image: "https://xsgames.co/randomusers/avatar.php?g=male&seed=41",
        linkedinUrl: "https://linkedin.com/in/",
      },
      {
        id: "cs-2",
        name: "Ravi Kumar",
        position: "Vice Chairperson",
        pursuing: "B.Tech in Software Engineering",
        image: "https://xsgames.co/randomusers/avatar.php?g=male&seed=42",
        linkedinUrl: "https://linkedin.com/in/",
      },
      {
        id: "cs-3",
        name: "Sonal Mehra",
        position: "Treasurer",
        pursuing: "B.Tech in Information Technology",
        image: "https://xsgames.co/randomusers/avatar.php?g=female&seed=43",
        linkedinUrl: "https://linkedin.com/in/",
      },
      {
        id: "cs-4",
        name: "Karan Agarwal",
        position: "Secretary",
        pursuing: "B.Tech in Computer Science",
        image: "https://xsgames.co/randomusers/avatar.php?g=male&seed=44",
        linkedinUrl: "https://linkedin.com/in/",
      },
      {
        id: "cs-5",
        name: "Divya Chauhan",
        position: "Webmaster",
        pursuing: "B.Tech in Information Technology",
        image: "https://xsgames.co/randomusers/avatar.php?g=female&seed=45",
        linkedinUrl: "https://linkedin.com/in/",
      },
    ],
  },
  {
    society: "SIGHT Society",
    members: [
      {
        id: "sight-1",
        name: "Rohit Singh",
        position: "Chairperson",
        pursuing: "B.Tech in Computer Engineering",
        image: "https://xsgames.co/randomusers/avatar.php?g=male&seed=51",
        linkedinUrl: "https://linkedin.com/in/",
      },
      {
        id: "sight-2",
        name: "Anjali Reddy",
        position: "Vice Chairperson",
        pursuing: "B.Tech in Electronics Engineering",
        image: "https://xsgames.co/randomusers/avatar.php?g=female&seed=52",
        linkedinUrl: "https://linkedin.com/in/",
      },
      {
        id: "sight-3",
        name: "Nidhi Mehta",
        position: "Treasurer",
        pursuing: "B.Tech in Electrical Engineering",
        image: "https://xsgames.co/randomusers/avatar.php?g=female&seed=53",
        linkedinUrl: "https://linkedin.com/in/",
      },
      {
        id: "sight-4",
        name: "Vikram Patel",
        position: "Secretary",
        pursuing: "B.Tech in Computer Science",
        image: "https://xsgames.co/randomusers/avatar.php?g=male&seed=54",
        linkedinUrl: "https://linkedin.com/in/",
      },
      {
        id: "sight-5",
        name: "Ritika Sharma",
        position: "Webmaster",
        pursuing: "B.Tech in Information Technology",
        image: "https://xsgames.co/randomusers/avatar.php?g=female&seed=55",
        linkedinUrl: "https://linkedin.com/in/",
      },
    ],
  },
];

export default function TeamExecutive() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSocieties = EXECUTIVE_MEMBERS.map((society) => ({
    ...society,
    members: society.members.filter((member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.position.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Executive Team</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the executive members of each IEEE society.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search executive..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {filteredSocieties.map((society) =>
            society.members.length > 0 ? (
              <div key={society.society} className="mb-12">
                <h2 className="text-2xl font-bold mb-4">{society.society}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {society.members.map((member) => (
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
            ) : null
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
