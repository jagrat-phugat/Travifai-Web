import React from "react";
import BlogCard from "./BlogCard"; // Import the reusable component

const Blogdown = () => {
  const blogPosts = [
    {
      title: "Exploring the Wild",
      description:
        "A journey into the heart of the forest, discovering hidden trails and breathtaking landscapes.",
      image: "https://img.freepik.com/free-photo/hiker-path-forest_23-2147683099.jpg",
    },
    {
      title: "Waves & Serenity",
      description:
        "Experience the calming sound of ocean waves and the beauty of the open sea.",
      image: "https://img.freepik.com/free-photo/sunset-with-sea-beach_74190-3834.jpg",
    },
    {
      title: "The Ultimate Road Trip",
      description:
        "Hit the open road and explore scenic routes filled with adventure and memories.",
      image: "https://img.freepik.com/free-photo/females-looking-map-leaning-car-while-her-male-friend-gesturing-road_23-2147855598.jpg",
    },
    {
      title: "Camping Under the Stars",
      description:
        "Embrace nature with an unforgettable camping experience under a sky full of stars.",
      image: "https://img.freepik.com/free-photo/fathers-day-celebration-with-kid_23-2151175703.jpg",
    },
    {
      title: "Hidden Waterfalls",
      description:
        "Discover breathtaking hidden waterfalls deep within the untouched wilderness.",
      image: "https://img.freepik.com/free-photo/beautiful-waterfall-landscape_23-2150526205.jpg",
    },
    {
      title: "Golden Hour at the Beach",
      description:
        "Witness the most mesmerizing sunset while strolling along a serene beach.",
      image: "https://img.freepik.com/free-photo/sad-contemplative-person-near-lake_23-2150420701.jpg",
    },
    {
      title: "Road Trip Diaries",
      description:
        "A collection of unforgettable moments from road trips across scenic landscapes.",
      image: "https://img.freepik.com/free-photo/medium-shot-people-reading-map_23-2149004923.jpg",
    },
    {
      title: "Bonfire Tales",
      description:
        "Gather around the fire, share stories, and enjoy a cozy camping night.",
      image: "https://img.freepik.com/free-photo/photorealistic-lohri-festival-celebration-with-people_23-2151098236.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 text-center p-6">
      {/* Header Section */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
        Revolutionizing the Travel & <br />
        Hospitality Industry{" "}
        <span className="text-purple-600 bg-yellow-100 px-2 py-1 rounded-md text-[2.9rem]">
          TravifAi
        </span>
      </h1>
      <p className="mt-2 text-lg text-gray-700 max-w-2xl">
        A Commission-Free, Cloud-Based Solution Empowering Hoteliers, Travel Agencies, and Travelers with Seamless Bookings and Real-Time Business Insights
      </p>
      <div className="mt-8 flex gap-4">
        <a href="YOUR_LINK_HERE" className="mt-8">
          <button className="px-6 py-3 text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transition duration-300">
            Download Now
          </button>
        </a>
      </div>

      {/* All Blog Posts Section */}
      <p className="font-semibold mt-8 text-xl">All Blog Posts</p>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 p-4">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Blogdown;
