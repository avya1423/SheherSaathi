// 🏠 PG Data (Existing)
const pgData = [
  {name:"Shri Ram Boys Hostel",city:"Bhopal",price:"₹5000",contact:"8123869239",image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",gender:"Boys",address:"Near Hamidia Hospital, Bhopal",amenities:"WiFi, Meals, Laundry"},
  {name:"City Boys Hostel",city:"Bhopal",price:"₹6000",contact:"9876543210",image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511",gender:"Boys",address:"MP Nagar Zone 1, Bhopal",amenities:"WiFi, Parking, Security"},
  {name:"Lake View Girls PG",city:"Bhopal",price:"₹6500",contact:"9111111111",image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",gender:"Girls",address:"Near Upper Lake, Bhopal",amenities:"WiFi, Meals, AC, Security"},
  {name:"MP Nagar Comfort PG",city:"Bhopal",price:"₹5500",contact:"9222222222",image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",gender:"Boys",address:"MP Nagar Zone 2, Bhopal",amenities:"WiFi, Meals, Laundry"},
  {name:"Arera Colony PG",city:"Bhopal",price:"₹7000",contact:"9300011122",image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",gender:"Both",address:"Arera Colony E-7, Bhopal",amenities:"WiFi, AC, Meals, Gym"},
  {name:"Patna City Boys PG",city:"Patna",price:"₹5000",contact:"9333333333",image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511",gender:"Boys",address:"Fraser Road, Patna",amenities:"WiFi, Meals, Security"},
  {name:"Girls Comfort Patna",city:"Patna",price:"₹6000",contact:"9444444444",image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",gender:"Girls",address:"Bailey Road, Patna",amenities:"WiFi, Meals, AC, Laundry"},
  {name:"Kankarbagh Hostel",city:"Patna",price:"₹5500",contact:"9555555555",image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",gender:"Boys",address:"Kankarbagh Colony, Patna",amenities:"WiFi, Parking, Security"},
  {name:"Patna Premium PG",city:"Patna",price:"₹7000",contact:"9666666666",image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",gender:"Girls",address:"Rajendra Nagar, Patna",amenities:"WiFi, AC, Meals, CCTV"},
  {name:"Delhi Comfort PG",city:"Delhi",price:"₹8000",contact:"9812345678",image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",gender:"Boys",address:"Karol Bagh, New Delhi",amenities:"WiFi, AC, Meals, Laundry"},
  {name:"North Delhi Boys Hostel",city:"Delhi",price:"₹7000",contact:"9898989898",image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",gender:"Boys",address:"Paharganj, New Delhi",amenities:"WiFi, Meals, Security"},
  {name:"Lajpat Nagar Girls PG",city:"Delhi",price:"₹9000",contact:"9711223344",image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",gender:"Girls",address:"Lajpat Nagar Part 2, Delhi",amenities:"WiFi, AC, Meals, CCTV, Laundry"},
  {name:"Mumbai Stay PG",city:"Mumbai",price:"₹10000",contact:"9765432109",image:"https://images.unsplash.com/photo-1493809842364-78817add7ffb",gender:"Boys",address:"Andheri West, Mumbai",amenities:"WiFi, AC, Meals, Gym"},
  {name:"Andheri Girls PG",city:"Mumbai",price:"₹9000",contact:"9988776655",image:"https://images.unsplash.com/photo-1555854877-bab0e564b8d5",gender:"Girls",address:"Andheri East, Mumbai",amenities:"WiFi, AC, Meals, Security, CCTV"},
  {name:"Dadar Boys Hostel",city:"Mumbai",price:"₹8500",contact:"9870011223",image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",gender:"Boys",address:"Dadar West, Mumbai",amenities:"WiFi, Meals, Parking"},
  {name:"Pune City Hostel",city:"Pune",price:"₹7000",contact:"8877665544",image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",gender:"Boys",address:"Shivajinagar, Pune",amenities:"WiFi, Meals, Laundry"},
  {name:"Girls Comfort PG Pune",city:"Pune",price:"₹8000",contact:"7766554433",image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511",gender:"Girls",address:"Koregaon Park, Pune",amenities:"WiFi, AC, Meals, CCTV"},
  {name:"Hinjawadi Tech PG",city:"Pune",price:"₹9000",contact:"9922334455",image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",gender:"Both",address:"Hinjawadi Phase 1, Pune",amenities:"WiFi, AC, Meals, Gym, Parking"},
];

// 🍲 Tiffin & Mess Tracker Data (NEW)
const tiffinData = [
  { id: 1, name: "Annapurna Shudh Shakahari", city: "Bhopal", price: 2800, type: "Veg", meals: "Lunch & Dinner", rating: 4.8, contact: "9876500001", area: "MP Nagar" },
  { id: 2, name: "Ghar Jaisa Tiffin", city: "Bhopal", price: 3200, type: "Both", meals: "Breakfast, Lunch, Dinner", rating: 4.5, contact: "9876500002", area: "Indrapuri" },
  { id: 3, name: "Student Diet Hub", city: "Delhi", price: 4000, type: "Veg", meals: "Lunch & Dinner", rating: 4.2, contact: "9876500003", area: "Mukherjee Nagar" },
  { id: 4, name: "Maa Ki Rasoi", city: "Patna", price: 2500, type: "Veg", meals: "Lunch & Dinner", rating: 4.9, contact: "9876500004", area: "Boring Road" },
  { id: 5, name: "Pune Dabba Wala", city: "Pune", price: 3500, type: "Both", meals: "Breakfast & Dinner", rating: 4.6, contact: "9876500005", area: "Kothrud" }
];

// 🛍️ Student Marketplace Data (NEW)
const marketData = [
  { id: 101, title: "Study Table & Chair", city: "Bhopal", price: 1200, category: "Furniture", condition: "Like New", postedBy: "Rahul M.", contact: "9123456780" },
  { id: 102, title: "Bajaj Room Cooler", city: "Delhi", price: 2500, category: "Electronics", condition: "Good", postedBy: "Aman S.", contact: "9123456781" },
  { id: 103, title: "Engineering Books (1st Year)", city: "Pune", price: 800, category: "Books", condition: "Used", postedBy: "Sneha P.", contact: "9123456782" },
  { id: 104, title: "Single Bed Mattress", city: "Patna", price: 900, category: "Furniture", condition: "Fair", postedBy: "Vikash K.", contact: "9123456783" }
];

// 🚌 Transit Routes Data (NEW)
const transitData = [
  { city: "Bhopal", type: "BRTS Bus", route: "SR1", from: "Bairagarh", to: "Misrod", freq: "Every 15 mins" },
  { city: "Bhopal", type: "BRTS Bus", route: "TR2", from: "Nadra Bus Stand", to: "BHEL", freq: "Every 20 mins" },
  { city: "Delhi", type: "Metro", route: "Yellow Line", from: "Samaypur Badli", to: "Millennium City Centre", freq: "Every 3-5 mins" },
  { city: "Delhi", type: "Metro", route: "Blue Line", from: "Dwarka Sector 21", to: "Noida Electronic City", freq: "Every 5 mins" },
  { city: "Pune", type: "Local Bus", route: "114", from: "Swargate", to: "Hinjawadi", freq: "Every 30 mins" },
  { city: "Patna", type: "City Bus", route: "111", from: "Gandhi Maidan", to: "Danapur", freq: "Every 20 mins" }
];
