import { useState, useEffect } from "react";
import { Search, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";

const ADVISORY_MEMBERS = [
  {
    id: "a1",
    name: "Dr. Snehal Shah",
    department: "Computer Engineering",
    designation: "Dean, SOU",
    enrolledYear: "2015",
    image: "https://xsgames.co/randomusers/avatar.php?g=female&seed=22",
    linkedinUrl: "https://linkedin.com/in/",
    type: "advisory"
  },
  {
    id: "a2",
    name: "Prof. Mehul Shah",
    department: "IT Department",
    designation: "Associate Dean",
    enrolledYear: "2014",
    image: "https://xsgames.co/randomusers/avatar.php?g=male&seed=44",
    linkedinUrl: "https://linkedin.com/in/",
    type: "advisory"
  },
  {
    id: "a3",
    name: "Dr. Asha Desai",
    department: "Electronics Engineering",
    designation: "HOD",
    enrolledYear: "2012",
    image: "https://xsgames.co/randomusers/avatar.php?g=female&seed=33",
    linkedinUrl: "https://linkedin.com/in/",
    type: "advisory"
  },
  {
    id: "a4",
    name: "Prof. Nirav Trivedi",
    department: "Electrical Engineering",
    designation: "Senior Advisor",
    enrolledYear: "2010",
    image: "https://xsgames.co/randomusers/avatar.php?g=male&seed=77",
    linkedinUrl: "https://linkedin.com/in/",
    type: "advisory"
  }
];

export default function TeamAdvisory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(ADVISORY_MEMBERS);

  useEffect(() => {
    setFiltered(
      ADVISORY_MEMBERS.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.designation.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Advisory Board</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the esteemed advisory board of IEEE SOU Student Branch.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search advisory board..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(member => (
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
                    </div>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Department:</span> {member.department}</p>
                    <p><span className="font-medium">Designation:</span> {member.designation}</p>
                    <p><span className="font-medium">Enrolled:</span> {member.enrolledYear}</p>
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
