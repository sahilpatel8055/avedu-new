import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import EmbeddedCounselingForm from "@/components/ui/embedded-counseling-form";
import { useCounselingForm } from "@/hooks/use-counseling-form";
import {
  Star,
  MapPin,
  Users,
  GraduationCap,
  Award,
  DollarSign,
  BookOpen,
  Clock,
  Check,
} from "lucide-react";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import UniversitySlideshow from "@/components/ui/university-slideshow";
import ignouLogo from "@/assets/ignou-logo.png";
import ignouDegreeImg from "@/assets/ignou-degree.png";

// Import course data and Link component
import { Link } from 'react-router-dom';
import courseData from '../../data/courseData.json';

// NEW: Importing all the accreditation icons
import ugcIcon from "@/assets/icons/ugc-icon.png";
import aicteIcon from "@/assets/icons/aicte-icon.png";
import wesIcon from "@/assets/icons/wes-icon.png";
import naacIcon from "@/assets/icons/naac-icon.png";
import nirfIcon from "@/assets/icons/nirf-icon.png";
import aiuIcon from "@/assets/icons/aiu-icon.png";

// Import course images
import mbaImg from "@/assets/course/mba.jpg";
import bbaImg from "@/assets/course/bba.jpg";
import mcaImg from "@/assets/course/mca.jpg";
import bcaImg from "@/assets/course/bca.jpg";
import baImg from "@/assets/course/ba.jpg";
import bcomImg from "@/assets/course/bcom.jpg";

import { MovingBorderButton } from "@/components/ui/moving-border";
import MobileStickyNav from "@/components/ui/mobile-sticky-nav";

const IGNOU = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();
  
  // Navigation sections for mobile sticky nav
  const navSections = [
    { id: "hero", label: "Overview" },
    { id: "about", label: "About IGNOU" },
    { id: "approvals", label: "Approvals" },
    { id: "degree", label: "Sample Degree" },
    { id: "courses", label: "Popular Courses" },
    { id: "features", label: "Why Choose" },
    { id: "cta", label: "Apply Now" }
  ];

  const features = [
    "42 different online courses available",
    "Flexible course duration with budget-friendly fees",
    "Experienced professors with 800+ faculty members",
    "Access to eGyankosh LMS Portal",
    "Virtual classes and interactive sessions",
    "International collaborations with overseas institutions",
    "E-IGNOU Library access",
    "Gyandhara Audio Counseling Services",
  ];

  const approvals = [
    { name: "UGC-DEB", description: "University Grants Commission - Distance Education Bureau", icon: ugcIcon },
    { name: "AICTE", description: "All India Council for Technical Education", icon: aicteIcon },
    { name: "WES", description: "World Education Services", icon: wesIcon },
    { name: "AIU", description: "Association of Indian Universities", icon: aiuIcon },
    { name: "NAAC A++", description: "National Assessment and Accreditation Council", icon: naacIcon },
    { name: "NIRF", description: "Rank 1 in Open University Category", icon: nirfIcon },
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <MobileStickyNav sections={navSections} />
      
      {/* Hero Section with Moving Border Buttons */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-6" id="hero">
        <div className="container mx-auto px-4">
          {/* Slideshow at top of section */}
          <div className="mb-8">
            <UniversitySlideshow />
          </div>
          
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <img src={ignouLogo} alt="IGNOU Logo" className="w-20 h-20 rounded-lg" />
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">IGNOU</h1>
                  <p className="text-lg text-muted-foreground">Indira Gandhi National Open University</p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="flex items-center gap-1 bg-primary/10 px-3 py-2 rounded-full">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="font-semibold text-primary">4.8</span>
                  <span className="text-muted-foreground">(146 Reviews)</span>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Rank #1 NIRF Open University
                </Badge>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 mb-8 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>New Delhi, India</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-primary" />
                  <span>4M+ Students</span>
                </div>
                <div className="flex items-center gap-1">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>270+ Programs</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <MovingBorderButton 
                  borderRadius="0.5rem"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg"
                  onClick={openForm}
                >
                  Apply Now
                </MovingBorderButton>
                <MovingBorderButton 
                  borderRadius="0.5rem"
                  className="border border-input bg-background hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg"
                  onClick={openForm}
                >
                  Download Brochure
                </MovingBorderButton>
              </div>
            </div>

            <div className="flex-1 lg:max-w-md">
              <EmbeddedCounselingForm variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About IGNOU</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                <strong className="text-foreground">Indira Gandhi National Open University (IGNOU)</strong> is one of the most trusted universities in India. It was established in 1985 by an Act of Parliament. The university is known for offering high-quality education in the online & distance learning modes. The university has served many aspiring students with its 21 Schools of Studies & 67+ regional centers.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The university has made it possible for many learners to get a degree/diploma/certificate in their choice of course through online learning, who did not get admission to regular courses or were not able to afford full-time education. The university offers 250+ options of courses under the categories of UG, PG, diploma, doctoral, & certificate programs.
              </p>
              <p className="text-lg leading-relaxed">
                The university is graded as NAAC A++ & has been recognized by the University Grants Commission (UGC), which makes it trustworthy for learners at national & international levels. The university's continuous efforts to make quality education accessible to all have led it to introduce innovative & need-based courses in its course list.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approvals Section */}
      <section className="py-16 bg-muted/30" id="approvals">
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
      
      {/* Sample Degree Section (Moved) */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-background" id="degree">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side: Description */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-foreground mb-4">Sample Degree</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-prose">
                The degrees offered by IGNOU are fully valid and recognized by various government bodies, making them suitable for all career opportunities.
              </p>
              <ul className="space-y-4 text-left mx-auto md:mx-0 max-w-sm">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">UGC-DEB Recognized & AICTE Approved</p>
                    <p className="text-sm text-muted-foreground">Fully valid for government, private, and overseas jobs or higher studies.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Includes Marksheet & Digital Verification</p>
                    <p className="text-sm text-muted-foreground">Comes with transcript, and supports online QR-code-based verification.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Signed & Officially Stamped</p>
                    <p className="text-sm text-muted-foreground">Authenticated by the Registrar/Vice Chancellor with university seal.</p>
                  </div>
                </li>
              </ul>
            </div>
            {/* Right side: Image */}
            <div className="flex-1 max-w-lg mx-auto md:max-w-none">
              <div className="relative p-4 rounded-xl shadow-2xl bg-white transition-transform duration-300 hover:scale-105">
                <img
                  src={ignouDegreeImg}
                  alt="Sample IGNOU Degree"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16" id="courses">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {Object.entries(courseData).map(([courseId, course]) => {
              // Map course IDs to images
              let courseImage = baImg; // default
              if (courseId.includes('mba')) courseImage = mbaImg;
              else if (courseId.includes('bba')) courseImage = bbaImg;
              else if (courseId.includes('mca')) courseImage = mcaImg;
              else if (courseId.includes('bca')) courseImage = bcaImg;
              else if (courseId.includes('bcom')) courseImage = bcomImg;
              else if (courseId.includes('ba') || courseId.includes('ma')) courseImage = baImg;
              
              return (
                <Card key={courseId} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-center mb-4">
                      <img src={courseImage} alt={course.name} className="w-16 h-16 object-cover rounded-lg" />
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
                      <span>?? Specializations</span>
                    </div>
                    <Link to={`/courses/${courseId}`}>
                      <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" variant="outline">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section - Changed background to sunny yellow */}
      <section className="py-16 bg-yellow-400" id="features">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose IGNOU?</h2>
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
      <section className="py-16 bg-primary/10" id="cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Educational Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join millions of students who have chosen IGNOU for quality online education.
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

export default IGNOU;
