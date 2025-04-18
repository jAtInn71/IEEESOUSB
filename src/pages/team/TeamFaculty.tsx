import { useState, useEffect } from "react";
import { Search, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";

const FACULTY_MEMBERS = [
  {
    id: "f1",
    name: "Prof. Digant Parmar",
    department: "Computer Engineering",
    designation: "Assistant Professor",
    enrolledYear: "2018",
    image: "https://xsgames.co/randomusers/avatar.php?g=male&seed=21",
    linkedinUrl: "https://linkedin.com/in/",
    type: "faculty"
  },
  {
    id: "f2",
    name: "Dr. Anjali Sharma",
    department: "Electronics Engineering",
    designation: "Associate Professor",
    enrolledYear: "2015",
    image: "https://xsgames.co/randomusers/avatar.php?g=female&seed=42",
    linkedinUrl: "https://linkedin.com/in/",
    type: "faculty"
  },
  {
    id: "f3",
    name: "Prof. Rajesh Mehta",
    department: "Mechanical Engineering",
    designation: "Senior Lecturer",
    enrolledYear: "2012",
    image: "https://xsgames.co/randomusers/avatar.php?g=male&seed=33",
    linkedinUrl: "https://linkedin.com/in/",
    type: "faculty"
  },
  {
    id: "f4",
    name: "Dr. Priya Nair",
    department: "Civil Engineering",
    designation: "Professor",
    enrolledYear: "2010",
    image: "https://xsgames.co/randomusers/avatar.php?g=female&seed=54",
    linkedinUrl: "https://linkedin.com/in/",
    type: "faculty"
  },
  {
    id: "f5",
    name: "Prof. Karan Patel",
    department: "Electrical Engineering",
    designation: "Assistant Professor",
    enrolledYear: "2019",
    image: "https://xsgames.co/randomusers/avatar.php?g=male&seed=65",
    linkedinUrl: "https://linkedin.com/in/",
    type: "faculty"
  }
];

export default function TeamFaculty() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(FACULTY_MEMBERS);

  useEffect(() => {
    setFiltered(
      FACULTY_MEMBERS.filter(member =>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Faculty Members</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the faculty guiding IEEE SOU Student Branch.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search faculty..."
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
