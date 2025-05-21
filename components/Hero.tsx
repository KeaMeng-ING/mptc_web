"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Clock4,
  Eye,
  User,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: "/hero.png",
      title:
        "ឯកឧត្តមបណ្ឌិត សោម ពិសិដ្ឋ អភិបាល នៃគណៈ អភិបាលខេត្តកែប និងលោកជំទាវ ស ម៉ាលីដា សោម ពិសិដ្ឋ អញ្ជើញជាអធិបតីភាពក្នុង​ពិធីបេីក​ការដ្ឋាន​សាងសង់គម្រោងវិនិយោគ​ផ្សារក្ដាម​ ស្ថិត នៅ​ភូមិថ្មី​ សង្កាត់ព្រៃធំ ក្រុងកែប​ ខេត្តកែប​ ។",
      timeAgo: "២ ថ្ងៃមុន",
      views: "247",
      author: "Admin",
    },
    {
      id: 2,
      image: "/hero2.jpg",
      title:
        "កិច្ចប្រជុំពិភាក្សាលើគម្រោងអភិវឌ្ឍន៍ហេដ្ឋារចនាសម្ព័ន្ធក្នុងខេត្តកែប និងការលើកកម្ពស់សេវាកម្មទេសចរណ៍ក្នុងតំបន់",
      timeAgo: "១ សប្តាហ៍មុន",
      views: "183",
      author: "Editor",
    },
    {
      id: 3,
      image: "/hero3.jpg",
      title:
        "ពិធីចុះកិច្ចព្រមព្រៀងសហប្រតិបត្តិការអភិវឌ្ឍន៍វិស័យកសិកម្មនិងធនធានធម្មជាតិក្នុងខេត្តកែប",
      timeAgo: "២ សប្តាហ៍មុន",
      views: "196",
      author: "Admin",
    },
  ];

  // State for current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    let slideInterval: NodeJS.Timeout | undefined;

    if (isAutoPlaying) {
      slideInterval = setInterval(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };
  }, [isAutoPlaying, slides.length]);

  // Navigation functions
  const goToPrevSlide = () => {
    setIsAutoPlaying(false); // Pause auto-play when manually navigating
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setIsAutoPlaying(false); // Pause auto-play when manually navigating
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false); // Pause auto-play when manually navigating
    setCurrentSlide(index);
  };

  return (
    <div className="relative">
      <section className="bg-primary min-h-[300px] grid grid-cols-1 md:grid-cols-2 items-center relative">
        {/* Left Arrow */}
        <button
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-button/70 hover:bg-blue-500 rounded-lg p-2 shadow"
          aria-label="Previous"
          onClick={goToPrevSlide}
        >
          <ChevronLeft className="w-6 h-6 text-white" strokeWidth={1.5} />
        </button>
        {/* Right Arrow */}
        <button
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-button/70 hover:bg-secondary rounded-lg p-2 shadow"
          aria-label="Next"
          onClick={goToNextSlide}
        >
          <ChevronRight className="w-6 h-6 text-white" strokeWidth={1.5} />
        </button>

        {/* Image */}
        <div className="relative w-full h-[220px] md:h-[400px]">
          <Image
            src={slides[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Mobile arrows */}
          <div className="flex md:hidden absolute inset-x-0 bottom-2 justify-between px-4 z-10">
            <button
              className="bg-button/70 hover:bg-blue-500 rounded-lg p-2 shadow"
              aria-label="Previous"
              onClick={goToPrevSlide}
            >
              <ChevronLeft className="w-6 h-6 text-white" strokeWidth={1.5} />
            </button>
            <button
              className="bg-button/70 hover:bg-secondary rounded-lg p-2 shadow"
              aria-label="Next"
              onClick={goToNextSlide}
            >
              <ChevronRight className="w-6 h-6 text-white" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Slide Content */}
        <div className="flex flex-col items-start gap-5 justify-between h-full px-4 py-6 md:px-10 md:py-0">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                <Clock4 className="text-white w-4" />
                <p className="text-xs md:text-base font-primary font-bold ">
                  {slides[currentSlide].timeAgo}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="text-white w-4" />
                <p className="text-xs md:text-base font-primary font-extrabold ">
                  {slides[currentSlide].views}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <User className="text-white w-4" />
                <p className="text-xs md:text-base font-primary font-extrabold">
                  {slides[currentSlide].author}
                </p>
              </div>
            </div>
            <div className="w-full md:w-131">
              <p className="text-lg md:text-3xl mb-4 font-primary">
                {slides[currentSlide].title}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4.5 mb-4">
            <div className="flex gap-3 md:gap-7 flex-wrap">
              <button className="bg-button text-white px-3 md:px-4 py-2 rounded-[10px] hover:bg-orange-500 w-auto font-primary text-base md:text-lg">
                ព័ត៌មានទូទៅ
              </button>
              <button className="bg-button text-white px-3 md:px-4 py-2 rounded-[10px] hover:bg-orange-500 w-auto font-primary text-base md:text-lg">
                ព្រឹត្តិការណ៍សំខាន់ៗ
              </button>
            </div>
            <div className="flex gap-1.5 items-center cursor-pointer">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary">
                <ArrowRight strokeWidth={1} className="text-white" />
              </span>
              <p className="text-base md:text-lg font-primary font-bold text-secondary ">
                ចុចអាន​បន្ថែម
              </p>
            </div>
          </div>
        </div>
        {/* Dots navigation */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
                index === currentSlide
                  ? "bg-[#1C4076] "
                  : "bg-[#1C4076] opacity-40"
              } transition-opacity duration-300`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
