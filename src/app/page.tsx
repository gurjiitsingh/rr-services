"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWrench,
} from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { UseSiteContext } from "@/SiteContext/SiteContext";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  const { bargerMenuToggle } = UseSiteContext();

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="container mx-auto">
        <div className="bg-amber-300 text-white  py-2 px-2 flex  items-center justify-between text-2xl font-bold">
       <div className="">RRS</div>
       <div>
        <button
          onClick={() => {
            bargerMenuToggle(true);
          }}
          className="size-lg px-3 block lg:hidden"
          aria-label="toggle burger menu"
        >
          <FaBars className="hidden md:block" size={40} />
          <FaBars className="md:hidden" size={32} />
        </button>
        </div>
        </div>
      </header>

      <section id="home" className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-top flex-justify-center bg-blue-500 md:w-1/2">
            <img src="/towing-14-copy-1-l.jpg" alt="Car Towing" />
          </div>

          <div
            style={{
              backgroundImage: "url('/towing-14-copy-1-re.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
              backgroundSize: "fit",
            }}
            className="flex items-center min-h-[380px] justify-start md:w-1/2"
          >
            <div className="pl-3 h-[340px] flex flex-col  justify-start text-white">
              <h1 className="text-2xl text-slate-50 p-4">Why choose us</h1>
              <div
                className="hero_text aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                Looking for qualified professionals towing service.
              </div>
              <div
                data-aos="fade-left"
                className="max-w-md mx-auto p-4 space-y-4"
              >
                {/* Line 1 */}
                <div className="flex items-center space-x-4">
                  <img src="/check.png" alt="Check icon" className="w-6 h-6" />
                  <span
                    data-aos="fade-left"
                    data-aos-duration="3000"
                    className="aos-animate text-lg"
                  >
                    24/7 Roadside Assistance
                  </span>
                </div>

                {/* Line 2 */}
                <div
                  data-aos="fade-left"
                  className="flex items-center space-x-4"
                >
                  <img src="/check.png" alt="Wrench icon" className="w-6 h-6" />
                  <span className="text-lg">Expert Technicians</span>
                </div>

                {/* Line 3 */}
                <div
                  data-aos="fade-left"
                  className="flex items-center space-x-4"
                >
                  <img src="/check.png" alt="Clock icon" className="w-6 h-6" />
                  <span className="text-lg">Fast Response Time</span>
                </div>
              </div>
              <h2
                data-aos="flip-left"
                className="text-2xl rounded-2xl border text-slate-50 px-4 py-1"
              >
                Call 609-456-6373
              </h2>
            </div>
          </div>
        </div>
        {/* <h1 className="text-4xl font-bold text-blue-900">Fast & Reliable Roadside Assistance</h1>
        <p className="mt-4 text-lg text-gray-700">We provide quick and efficient towing and roadside assistance services to get you back on the road.</p> */}
      </section>

      {/* Our Services */}
      <section id="services" className=" container mx-auto">
        <div className="bg-amber-300 text-slate-700 py-10 px-5 text-center">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="mt-2 text-lg text-slate-700">
            We offer 24/7 roadside assistance, towing, battery jump-starts, and
            more.
          </p>

          <div className="flex flex-col justify-between md:flex-row mx-auto  ">
            <div className="flex flex-col">
              <div className="flex flex-wrap justify-center mt-6">
                <div className="bg-white text-blue-900 m-3 p-5 rounded-lg shadow-lg w-60">
                  <FaWrench className="text-4xl mx-auto" />
                  <h3 className="font-bold mt-2">Towing</h3>
                </div>
                <div className="bg-white text-blue-900 m-3 p-5 rounded-lg shadow-lg w-60">
                  <FaPhoneAlt className="text-4xl mx-auto" />
                  <h3 className="font-bold mt-2">Emergency Assistance</h3>
                </div>
              </div>
              <div className="">
                <ul className="space-y-6 p-6 text-white">
                  <li
                    data-aos="fade-down"
                    className="bg-[#133C72] flex items-center space-x-4  px-4 py-1 rounded-2xl shadow"
                  >
                    <div className="w-5 h-5 relative flex-shrink-0">
                      <Image
                        src="/check.png"
                        alt="Check icon"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <span className="text-lg font-medium">
                      Tow Truck Services
                    </span>
                  </li>

                  <li
                    data-aos="fade-down"
                    className="bg-[#133C72] flex items-center space-x-4  px-4 py-1 rounded-2xl shadow"
                  >
                    <div className="w-5 h-5 relative flex-shrink-0">
                      <Image
                        src="/check.png"
                        alt="Check icon"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <span className="text-lg font-medium">
                      Mechanical Breakdowns & Engine Issues
                    </span>
                  </li>
                  <li
                    data-aos="fade-down"
                    className="bg-[#133C72] flex items-center space-x-4  px-4 py-1 rounded-2xl shadow"
                  >
                    <div className="w-5 h-5 relative flex-shrink-0">
                      <Image
                        src="/check.png"
                        alt="Check icon"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <span className="text-lg font-medium">
                      Ignition or Battery Troubles
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <ul className="space-y-6 px-6 py-0 md:py-6 text-white">
                <li
                  data-aos="fade-down"
                  className="bg-[#133C72] flex items-center space-x-4  px-4 py-1 rounded-2xl shadow"
                >
                  <div className="w-5 h-5 relative flex-shrink-0">
                    <Image
                      src="/check.png"
                      alt="Check icon"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className="text-lg font-medium">
                    Battery Jump-Start Assistance
                  </span>
                </li>

                <li
                  data-aos="fade-down"
                  className="bg-[#133C72] flex items-center space-x-4  px-4 py-1 rounded-2xl shadow"
                >
                  <div className="w-5 h-5 relative flex-shrink-0">
                    <Image
                      src="/check.png"
                      alt="Check icon"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className="text-lg font-medium">
                    Accident Recovery Support
                  </span>
                </li>

                <li
                  data-aos="fade-down"
                  className="bg-[#133C72] flex items-center space-x-4  px-4 py-1 rounded-2xl shadow"
                >
                  <div className="w-5 h-5 relative flex-shrink-0">
                    <Image
                      src="/check.png"
                      alt="Check icon"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className="text-lg font-medium">
                    Brake Inspection & Repair Services
                  </span>
                </li>

                <li
                  data-aos="fade-down"
                  className="bg-[#133C72] flex items-center space-x-4  px-4 py-1 rounded-2xl shadow"
                >
                  <div className="w-5 h-5 relative flex-shrink-0">
                    <Image
                      src="/check.png"
                      alt="Check icon"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className="text-lg font-medium">
                    Safe Drive-Home Service (If Intoxicated)
                  </span>
                </li>

                <li
                  data-aos="fade-down"
                  className="bg-[#133C72] flex items-center space-x-4  px-4 py-1 rounded-2xl shadow"
                >
                  <div className="w-5 h-5 relative flex-shrink-0">
                    <Image
                      src="/check.png"
                      alt="Check icon"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className="text-lg font-medium">
                    On-Site Mobile Tire Repairs
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="text-slate-700  text-center">
        <div className="bg-[#133C72] py-10 container mx-auto min-h-[300px] text-white">
          <h2 className="text-3xl font-bold ">Contact Us</h2>
          <p className="mt-2">Reliable Roadside Services</p>
          <p className="flex justify-center items-center mt-2">
            <FaMapMarkerAlt className="mr-2" /> 3 Florence Tollgate Pl Unit 6,
            Florence, NJ 08518
          </p>
          <p className="flex justify-center items-center mt-2">
            <FaPhoneAlt className="mr-2" /> 609-456-6373
          </p>
          <p className="flex justify-center items-center mt-2">
            <FaEnvelope className="mr-2" /> reliableroadsideservicesnj@gmail.com
          </p>
        </div>
      </section>

      <section className="" id="about-us">
        <div className="container text-slate-700 mx-auto  bg-amber-300 py-10 px-6  text-center">
          <h2 className="text-3xl font-bold  mb-6">About Us</h2>
          <p className="text-lg  mb-6">
            At <strong>Reliable Roadside Services</strong>, we pride ourselves
            on delivering fast, dependable, and professional roadside assistance
            when you need it most. Whether you're stuck with a flat tire, locked
            out of your car, or in need of a tow — our team is just one call
            away.
          </p>
          <p className="text-lg  mb-6">
            Conveniently located at{" "}
            <strong>3 Florence Tollgate Pl Unit 6, Florence, NJ 08518</strong>,
            we serve Florence and surrounding areas with 24/7 service you can
            count on. With years of experience and a commitment to customer
            satisfaction, we aim to get you back on the road safely and swiftly.
          </p>
          <p className="text-lg ">
          <div className="flex gap-2 items-center">
          <FaPhoneAlt className="mr-2" /> <strong>Call us anytime:</strong>{" "}
            <a href="tel:6094566373" className="text-blue-600 hover:underline">
              609-456-6373
            </a>
            </div>
            <br />
            <div className="flex gap-2 items-center">
            <FaEnvelope className="mr-2" /> <strong>Email:</strong>{" "}
            <a
              href="mailto:reliableroadsideservicesnj@gmail.com"
              className="text-blue-600 hover:underline"
            >
              reliableroadsideservicesnj@gmail.com
            </a>
            </div>
          </p>
        </div>
      </section>

      {/* Google Map */}
      <div className="container mx-auto">
        <div className="w-full h-80">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.632637760872!2d-74.80572268464999!3d40.11260797940106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c154f1c88831b7%3A0x18d52456d5bb97b5!2s3%20Florence%20Tollgate%20Pl%20Unit%206%2C%20Florence%2C%20NJ%2008518%2C%20USA!5e0!3m2!1sen!2sus!4v1648703211736!5m2!1sen!2sus"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-[#133C72] container mx-auto text-white text-center py-4">
        <p>
          &copy; {new Date().getFullYear()} Reliable Roadside Services. All
          Rights Reserved.
        </p>
        <p className="text-sm">
          Developed by{" "}
          <a href="https://gstadeveloper.com" className="underline">
            Gstadeveloper.com
          </a>
        </p>
      </footer>
    </div>
  );
}
