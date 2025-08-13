import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import EmbeddedCounselingForm from "@/components/ui/embedded-counseling-form";
import { useCounselingForm } from "@/hooks/use-counseling-form";
import { Star, MapPin, Users, GraduationCap, Award, DollarSign, Clock, Check } from "lucide-react";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import UniversitySlideshow from "@/components/ui/university-slideshow";
import amityLogo from "@/assets/amity-logo.jpg";
import ProgramChoiceSlider from "@/components/ui/program-choice-slider";

// Import the specific icons for approvals
import ugcIcon from "@/assets/icons/ugc-icon.png";
import aicteIcon from "@/assets/icons/aicte-icon.png";
import naacIcon from "@/assets/icons/naac-icon.png";
import nirfIcon from "@/assets/icons/nirf-icon.png";
import aiuIcon from "@/assets/icons/aiu-icon.png";

// Import course images
import mbaImg from "@/assets/course/mba.jpg";
import bbaImg from "@/assets/course/bba.jpg";
import mcaImg from "@/assets/course/mca.jpg";
import bcaImg from "@/assets/course/bca.jpg";
import baImg from "@/assets/course/ba.jpg";

const Amity = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();
  
  const courses = [
    { name: "Online MBA", id: "online-mba", fees: "₹1,99,000", duration: "2 Years", specializations: 12, image: mbaImg },
    { name: "Online BBA", id: "online-bba", fees: "₹1,65,000", duration: "3 Years", specializations: 8, image: bbaImg },
    { name: "Online MCA", id: "online-mca", fees: "₹1,70,000", duration: "2 Years", specializations: 4, image: mcaImg },
    { name: "Online BCA", id: "online-bca", fees: "₹1,50,000", duration: "3 Years", specializations: 4, image: bcaImg },
    { name: "Online MA", id: "online-ma", fees: "₹1,30,000", duration: "2 Years", specializations: 3, image: baImg },
    { name: "Online BA", id: "online-ba", fees: "₹99,000", duration: "3 Years", specializations: 5, image: baImg }
  ];

  const features = [
    "NIRF Ranked University",
    "Industry-Aligned Curriculum",
    "World-Class Faculty",
    "Global Recognition",
    "Comprehensive Learning Resources",
    "Career Support Services",
    "Flexible Payment Options",
    "International Collaborations"
  ];

  const approvals = [
    { name: "UGC-DEB", description: "University Grants Commission - Distance Education Bureau", icon: ugcIcon },
    { name: "AICTE", description: "All India Council for Technical Education", icon: aicteIcon },
    { name: "AIU", description: "Association of Indian Universities", icon: aiuIcon },
    { name: "NAAC A+", description: "National Assessment and Accreditation Council", icon: naacIcon },
    { name: "NIRF", description: "National Institutional Ranking Framework", icon: nirfIcon }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      
      {/* Hero Section with Integrated Slideshow */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-6" id="top">
        <div className="container mx-auto px-4">
          {/* Slideshow at top of section */}
          <div className="mb-8">
            <UniversitySlideshow />
          </div>
          
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <img src={amityLogo} alt="Amity Logo" className="w-20 h-20 rounded-lg object-contain" />
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">Amity University Online</h1>
                  <p className="text-lg text-muted-foreground">NIRF Ranked Premium University</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="flex items-center gap-1 bg-primary/10 px-3 py-2 rounded-full">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="font-semibold text-primary">4.3</span>
                  <span className="text-muted-foreground">(800+ Reviews)</span>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  NIRF Ranked
                </Badge>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-6 mb-8 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Noida, UP</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-primary" />
                  <span>30K+ Students</span>
                </div>
                <div className="flex items-center gap-1">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>25+ Programs</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={openForm}>
                  Apply Now
                </Button>
                <Button variant="outline" size="lg" onClick={openForm}>
                  Download Brochure
                </Button>
              </div>
            </div>
            
            <div className="flex-1 lg:max-w-md">
              <EmbeddedCounselingForm variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About Amity University Online</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                <strong className="text-foreground">Amity University</strong> is one of India's leading private universities, consistently ranked among the top institutions by NIRF. Established in 2005, Amity has built a reputation for academic excellence, innovation, and industry integration. The online division of Amity University brings the same quality education to students worldwide.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Amity University Online offers a wide range of undergraduate and postgraduate programs across various disciplines including Business Administration, Computer Applications, and Liberal Arts. The programs are designed with a focus on practical learning, industry relevance, and global best practices.
              </p>
              <p className="text-lg leading-relaxed">
                The university's online platform provides an immersive learning experience with live sessions, recorded lectures, interactive assignments, and comprehensive support systems. Amity's strong industry partnerships ensure that students receive exposure to real-world scenarios and career opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Choice Slider */}
      <ProgramChoiceSlider />

      {/* Approvals Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Approvals & Accreditations</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {approvals.map((approval, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center mb-4">
                    <img src={approval.icon} alt={`${approval.name} Icon`} className="w-24 h-24 object-contain" />
                  </div>
                  <CardTitle className="text-lg text-primary">{approval.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{approval.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Courses</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center mb-4">
                    <img src={course.image} alt={course.name} className="w-16 h-16 object-cover rounded-lg" />
                  </div>
                  <CardTitle className="text-lg text-center">{course.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span className="font-semibold">{course.fees}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span>{course.specializations} Specializations</span>
                  </div>
                  <Link to={`/university/amity/${course.id}`}>
                    <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" variant="outline">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Why Say Yes To Amity Online Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Say <span className="text-primary">Yes</span> To <span className="text-blue-600">Amity Online</span></h2>
            <p className="text-lg text-muted-foreground">Globally recognised | Digitally advanced | Deeply personalised</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">WASC Accreditation (USA)</h3>
              <p className="text-sm text-muted-foreground">Amity Online is India's only university accredited by the Western Association of Schools and Colleges — a distinguished recognition of global academic excellence.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold mb-2">WES Recognition</h3>
              <p className="text-sm text-muted-foreground">Degrees recognised by World Education Services (WES) Canada & USA, enabling smoother pathways for higher studies and global career mobility.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold mb-2">QS Ranked Online MBA</h3>
              <p className="text-sm text-muted-foreground">Amity Online offers India's only Online MBA ranked by QS under Asia Pacific Top 10 - a global recognition for academic strength, learner outcomes, and digital innovation.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold mb-2">QAA (UK) Accreditation</h3>
              <p className="text-sm text-muted-foreground">Accredited by the UK's Quality Assurance Agency (QAA), assuring students of globally benchmarked academic quality.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-bold mb-2">Times Higher Education Employability Rankings</h3>
              <p className="text-sm text-muted-foreground">Amity University is ranked among the best globally for graduate employability and employer reputation by Times Higher Education.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Pan-India Campus Access & Offline Events</h3>
              <p className="text-sm text-muted-foreground">Enjoy access to all Amity campuses for events like orientation, mid-year meetups, on-campus connect and convocation - blending digital convenience with real-world connection.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold mb-2">Amigo: Learning on-the-Go</h3>
              <p className="text-sm text-muted-foreground">The Amigo app makes learning seamless and mobile — attend live classes, track progress, access materials, and more on your schedule.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold mb-2">Prof. Ami: Your AI-Powered Personal Tutor</h3>
              <p className="text-sm text-muted-foreground">Meet Prof Ami — your always-on AI mentor for instant doubt-solving, personalised learning tips, and smart academic support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Changed background to sunny yellow */}
      <section className="py-16 bg-yellow-400">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose Amity University Online?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white/90 rounded-lg border border-yellow-300">
                <div className="flex-shrink-0 w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
                <p className="text-sm text-gray-800">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Educational Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who have chosen Amity University Online for premium quality education. 
            Apply now and take the first step towards your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={openForm}>
              Apply for Admission
            </Button>
            <Button variant="outline" size="lg" onClick={openForm}>
              Talk to Counselor
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <CounselingFormComponent />
    </div>
  );
};

export default Amity;
