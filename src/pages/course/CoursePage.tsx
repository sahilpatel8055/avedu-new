import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, GraduationCap, Clock, IndianRupee, Users, Award, BookOpen, TrendingUp, Star } from "lucide-react";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import CounsellingSection from "@/components/ui/counselling-section";
import MobileStickyNav from "@/components/ui/mobile-sticky-nav";
import courseData from "../../data/courseData.json";

// Mapping of icon names to components for dynamic rendering
const iconMap = {
  BookOpen: BookOpen,
  Users: Users,
  TrendingUp: TrendingUp,
  Award: Award,
  Star: Star
};

const CoursePage = () => {
  const { courseId } = useParams();
  const course = courseId ? courseData[courseId] : null;

  // Navigation sections for mobile sticky nav
  const navSections = [
    { id: "hero", label: "Overview" },
    ...(course?.degreeImage ? [{ id: "degree", label: "Sample Degree" }] : []),
    ...(course?.highlights?.length ? [{ id: "highlights", label: "Program Highlights" }] : []),
    { id: "eligibility", label: "Eligibility & Fees" },
    ...(course?.specialisations?.length ? [{ id: "specializations", label: "Specializations" }] : []),
    ...(course?.keyFeatures?.length ? [{ id: "features", label: "Key Features" }] : []),
    { id: "cta", label: "Apply Now" }
  ];

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">Course not found!</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationHeader />
      <MobileStickyNav sections={navSections} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 text-white" id="hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Badge className="bg-yellow-500 text-blue-900 mb-4">IGNOU {course.name} Program</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {course.name} Admission 2025 - Online {course.name} from IGNOU
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                {course.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-yellow-300" />
                  <span>{course.duration} Duration</span>
                </div>
                <div className="flex items-center">
                  <IndianRupee className="h-5 w-5 mr-2 text-yellow-300" />
                  <span>{course.fees} Total Fee</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-yellow-300" />
                  <span>Distance Learning</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-yellow-300" />
                  <span>UGC Recognized</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-3 text-lg"
                >
                  Apply Now
                </Button>
              </div>
            </div>

            {/* Right Side - Embedded Counseling Form */}
            <div className="w-full">
              <CounsellingSection />
            </div>
          </div>
        </div>
      </section>

      {/* Sample Degree Section */}
      {course.degreeImage && (
        <section className="py-16 bg-white" id="degree">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Sample IGNOU Degree Certificate</h2>
              <p className="text-xl text-gray-600">Your IGNOU degree will look like this</p>
            </div>
            
            <div className="flex justify-center">
              <div className="max-w-md w-full">
                <img 
                  src={course.degreeImage} 
                  alt="IGNOU Sample Degree Certificate" 
                  className="w-full h-auto rounded-lg shadow-2xl border-4 border-blue-100"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Program Highlights */}
      {course.highlights && course.highlights.length > 0 && (
        <section className="py-16 bg-gray-50" id="highlights">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">IGNOU {course.name} Program Highlights</h2>
              <p className="text-xl text-gray-600">Why choose Online {course.name} from IGNOU Distance Education?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {course.highlights.map((highlight, index) => {
                const IconComponent = iconMap[highlight.icon as keyof typeof iconMap];
                return (
                  <Card key={index} className="text-center p-6">
                    {IconComponent && <IconComponent className="h-12 w-12 text-blue-600 mx-auto mb-4" />}
                    <h3 className="font-bold text-lg mb-2">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Eligibility & Fee Structure */}
      <section className="py-16 bg-white" id="eligibility">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Eligibility Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <span>{course.eligibility}</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <span>Open to all streams - no entrance exam required</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Fee Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Total Program Fee</span>
                    <span className="font-bold text-xl">{course.fees}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Per Year</span>
                    <span className="font-semibold">{/* Calculate from course.fees */}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Per Semester</span>
                    <span className="font-semibold">{/* Calculate from course.fees */}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    *Fee can be paid semester-wise. Additional charges may apply.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specializations */}
      {course.specialisations && course.specialisations.length > 0 && (
        <section className="py-16 bg-gray-50" id="specializations">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{course.name} Specializations Available</h2>
              <p className="text-xl text-gray-600">Choose your area of expertise</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {course.specialisations.map((specialization, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-blue-500 hover:border-l-yellow-500">
                  <div className="flex items-start mb-3">
                    <Star className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{specialization.name}</h3>
                      <p className="text-gray-600 text-sm">{specialization.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Features */}
      {course.keyFeatures && course.keyFeatures.length > 0 && (
        <section className="py-16 bg-white" id="features">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Why {course.name} Stands Out</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {course.keyFeatures.map((feature, index) => {
                const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
                return (
                  <div key={index} className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      {IconComponent && <IconComponent className="h-8 w-8 text-blue-600" />}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 text-white" id="cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of successful professionals who have advanced their careers with {course.name}
          </p>
          <Button 
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            Apply Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoursePage;
