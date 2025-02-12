import React from "react";

const Abouthero = () => {
  return (
    <div className="flex flex-col items-start min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-purple-200 text-left p-6 ">

      {/* Recent Images Section */}
      <div className="mt-8 w-4/4 mx-auto">
  <p className="font-semibold text-xl mb-4">Recent Blog Posts</p>
  <div className="flex gap-6">
    {/* Left Side: Large Image + Two Stacked Images */}
    <div className="flex">
      <img
        src="https://img.freepik.com/free-photo/paragliding-mountains_23-2151944774.jpg?uid=R182444438&ga=GA1.1.1229225594.1724508897&semt=ais_authors_boost"
        alt="Recent Blog 1"
        className="w-72 h-96 object-cover rounded-lg shadow-lg"
      />
      <div className="flex flex-col justify-between ml-4">
        <img
          src="https://img.freepik.com/premium-photo/collage-with-people-hiking-full-shot_23-2150385890.jpg?uid=R182444438&ga=GA1.1.1229225594.1724508897&semt=ais_authors_boost"
          alt="Recent Blog 2"
          className="w-72 h-48 object-cover rounded-lg shadow-lg"
        />
        <img
          src="https://img.freepik.com/free-photo/traveling-with-off-road-car_23-2151473063.jpg?uid=R182444438&ga=GA1.1.1229225594.1724508897&semt=ais_authors_boost"
          alt="Recent Blog 3"
          className="w-72 h-48 object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>

    {/* Right Side: Text Content (Starts from 1/2 Page) */}
    <div className="w-1/2">
  <div className="mb-6">
    <p className="text-sm text-gray-500">Tanisha • 12 Feb 2025</p>
    <h3 className="font-semibold text-2xl">
      Beyond Limits: The Ultimate Adventure Travel Guide
    </h3>
    <p className="text-gray-700 text-sm mt-2">
      Step out of your comfort zone and dive into the world of adrenaline-fueled adventures! 
      From scaling towering peaks to diving into the deep blue, this blog is your gateway 
      to the most thrilling experiences around the globe. Get expert tips, destination 
      guides, and firsthand adventure stories that will inspire your next daring journey.
    </p>
    <div className="flex gap-2 mt-2">
      <span className="bg-gray-200 px-2 py-1 text-xs rounded">Adventure</span>
      <span className="bg-gray-200 px-2 py-1 text-xs rounded">Travel</span>
      <span className="bg-gray-200 px-2 py-1 text-xs rounded">Exploration</span>
    </div>
  </div>

  <div>
    <p className="text-sm text-gray-500">Bhanu Pande • 10 Feb 2025</p>
    <h3 className="font-semibold text-2xl">
      Conquering the Uncharted: Top 5 Hidden Adventure Destinations
    </h3>
    <p className="text-gray-700 text-sm mt-2">
      Discover untouched landscapes, remote hiking trails, and secret diving spots 
      that promise an adventure like no other. These hidden gems are waiting to be explored!
    </p>
    <div className="flex gap-2 mt-2">
      <span className="bg-gray-200 px-2 py-1 text-xs rounded">Hidden Gems</span>
      <span className="bg-gray-200 px-2 py-1 text-xs rounded">Adventure Travel</span>
    </div>
  </div>
</div>

  </div>


      </div>

{/* All Blog Posts Section */}
<p className="font-semibold mt-8 text-xl">All Blog Posts</p>
<div className="grid grid-cols-4 gap-6 mt-4 p-4">
  {/* First Row */}
  <div className="w-72">
    <img
      src="https://img.freepik.com/free-photo/hiker-path-forest_23-2147683099.jpg"
      alt="Blog Post 1"
      className="w-72 h-48 object-cover rounded-lg shadow-lg"
    />
    <h3 className="mt-2 text-lg font-bold">Exploring the Wild</h3>
    <p className="text-sm text-gray-600">
      A journey into the heart of the forest, discovering hidden trails and breathtaking landscapes.
    </p>
  </div>

  <div className="w-72">
    <img
      src="https://img.freepik.com/free-photo/sunset-with-sea-beach_74190-3834.jpg"
      alt="Blog Post 2"
      className="w-72 h-48 object-cover rounded-lg shadow-lg"
    />
    <h3 className="mt-2 text-lg font-bold">Waves & Serenity</h3>
    <p className="text-sm text-gray-600">
      Experience the calming sound of ocean waves and the beauty of the open sea.
    </p>
  </div>

  <div className="w-72">
    <img
      src="https://img.freepik.com/free-photo/females-looking-map-leaning-car-while-her-male-friend-gesturing-road_23-2147855598.jpg"
      alt="Blog Post 3"
      className="w-72 h-48 object-cover rounded-lg shadow-lg"
    />
    <h3 className="mt-2 text-lg font-bold">The Ultimate Road Trip</h3>
    <p className="text-sm text-gray-600">
      Hit the open road and explore scenic routes filled with adventure and memories.
    </p>
  </div>

  <div className="w-72">
    <img
      src="https://img.freepik.com/free-photo/fathers-day-celebration-with-kid_23-2151175703.jpg?uid=R182444438&ga=GA1.1.1229225594.1724508897&semt=ais_authors_boost"
      alt="Blog Post 4"
      className="w-72 h-48 object-cover rounded-lg shadow-lg"
    />
    <h3 className="mt-2 text-lg font-bold">Camping Under the Stars</h3>
    <p className="text-sm text-gray-600">
      Embrace nature with an unforgettable camping experience under a sky full of stars.
    </p>
  </div>

  {/* Second Row */}
  <div className="w-72">
    <img
      src="https://img.freepik.com/free-photo/beautiful-waterfall-landscape_23-2150526205.jpg?uid=R182444438&ga=GA1.1.1229225594.1724508897&semt=ais_authors_boost"
      alt="Blog Post 5"
      className="w-72 h-48 object-cover rounded-lg shadow-lg"
    />
    <h3 className="mt-2 text-lg font-bold">Hidden Waterfalls</h3>
    <p className="text-sm text-gray-600">
      Discover breathtaking hidden waterfalls deep within the untouched wilderness.
    </p>
  </div>

  <div className="w-72">
    <img
      src="https://img.freepik.com/free-photo/sad-contemplative-person-near-lake_23-2150420701.jpg?uid=R182444438&ga=GA1.1.1229225594.1724508897&semt=ais_authors_boost"
      alt="Blog Post 6"
      className="w-72 h-48 object-cover rounded-lg shadow-lg"
    />
    <h3 className="mt-2 text-lg font-bold">Golden Hour at the Beach</h3>
    <p className="text-sm text-gray-600">
      Witness the most mesmerizing sunset while strolling along a serene beach.
    </p>
  </div>

  <div className="w-72">
    <img
      src="https://img.freepik.com/free-photo/medium-shot-people-reading-map_23-2149004923.jpg?uid=R182444438&ga=GA1.1.1229225594.1724508897&semt=ais_authors_boost"
      alt="Blog Post 7"
      className="w-72 h-48 object-cover rounded-lg shadow-lg"
    />
    <h3 className="mt-2 text-lg font-bold">Road Trip Diaries</h3>
    <p className="text-sm text-gray-600">
      A collection of unforgettable moments from road trips across scenic landscapes.
    </p>
  </div>

  <div className="w-72">
    <img
      src="https://img.freepik.com/free-photo/photorealistic-lohri-festival-celebration-with-people_23-2151098236.jpg?uid=R182444438&ga=GA1.1.1229225594.1724508897&semt=ais_authors_boost"
      alt="Blog Post 8"
      className="w-72 h-48 object-cover rounded-lg shadow-lg"
    />
    <h3 className="mt-2 text-lg font-bold">Bonfire Tales</h3>
    <p className="text-sm text-gray-600">
      Gather around the fire, share stories, and enjoy a cozy camping night.
    </p>
  </div>
</div>
</div>
  );
};

export default Abouthero;
