const pgDataRaw = [
  // ==========================================
  // BHOPAL
  // ==========================================
  { name:"Shri Ram Boys Hostel", city:"Bhopal", price:"₹5000", contact:"8123869239", image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600", gender:"Boys", address:"Near Hamidia Hospital, Bhopal", amenities:"WiFi, Meals, Laundry, Security" },
  { name:"City Boys Hostel", city:"Bhopal", price:"₹6000", contact:"9876543210", image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600", gender:"Boys", address:"MP Nagar Zone 1, Bhopal", amenities:"WiFi, Parking, Security, 24x7 Water" },
  { name:"Lake View Girls PG", city:"Bhopal", price:"₹6500", contact:"9111111111", image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600", gender:"Girls", address:"Near Upper Lake, Bhopal", amenities:"WiFi, Meals, AC, Security, CCTV" },
  { name:"MP Nagar Comfort PG", city:"Bhopal", price:"₹5500", contact:"9222222222", image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600", gender:"Boys", address:"MP Nagar Zone 2, Bhopal", amenities:"WiFi, Meals, Laundry, Gym" },
  { name:"Arera Colony Premium PG", city:"Bhopal", price:"₹7000", contact:"9300011122", image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600", gender:"Both", address:"Arera Colony E-7, Bhopal", amenities:"WiFi, AC, Meals, Gym, Parking" },
  { name:"Indrapuri Student Hub", city:"Bhopal", price:"₹4500", contact:"9584214578", image:"https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600", gender:"Boys", address:"Indrapuri C-Sector, Near LNCT, Bhopal", amenities:"WiFi, Tiffin, Power Backup" },
  { name:"Saket Nagar Girls Residency", city:"Bhopal", price:"₹5800", contact:"7000148965", image:"https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600", gender:"Girls", address:"Saket Nagar, Near AIIMS, Bhopal", amenities:"WiFi, RO Water, Self Cooking, CCTV" },
  { name:"Ayodhya Bypass Boys PG", city:"Bhopal", price:"₹4800", contact:"9179541254", image:"https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600", gender:"Boys", address:"Minal Residency, Ayodhya Bypass, Bhopal", amenities:"WiFi, Parking, Single Room, Wardrobe" },

  // ==========================================
  // DELHI
  // ==========================================
  { name:"Delhi Comfort PG", city:"Delhi", price:"₹8000", contact:"9812345678", image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600", gender:"Boys", address:"Karol Bagh, New Delhi", amenities:"WiFi, AC, Meals, Laundry, Security" },
  { name:"North Delhi Boys Hostel", city:"Delhi", price:"₹7000", contact:"9898989898", image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600", gender:"Boys", address:"Paharganj, New Delhi", amenities:"WiFi, Meals, Security, Parking" },
  { name:"Lajpat Nagar Girls PG", city:"Delhi", price:"₹9000", contact:"9711223344", image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600", gender:"Girls", address:"Lajpat Nagar Part 2, Delhi", amenities:"WiFi, AC, Meals, CCTV, Laundry" },
  { name:"GTB Nagar DU Special PG", city:"Delhi", price:"₹8500", contact:"8800112233", image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600", gender:"Both", address:"Hudson Lane, GTB Nagar, Delhi", amenities:"WiFi, Study Table, AC, 3 Meals, Library Access" },
  { name:"Satya Niketan Elite Boys", city:"Delhi", price:"₹9500", contact:"9910234567", image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600", gender:"Boys", address:"South Campus, Satya Niketan, Delhi", amenities:"WiFi, AC, Attached Washroom, Gym" },
  { name:"Mukherjee Nagar IAS Hub", city:"Delhi", price:"₹6500", contact:"9810876543", image:"https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600", gender:"Boys", address:"Main Market, Mukherjee Nagar, Delhi", amenities:"WiFi, Quiet Environment, Power Backup, RO Water" },
  { name:"Noida Sec-62 Tech PG", city:"Delhi", price:"₹7500", contact:"9560123456", image:"https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600", gender:"Both", address:"Near Sector 62 Metro, Noida (NCR)", amenities:"WiFi, Lift, Power Backup, Geyser, Security" },

  // ==========================================
  // MUMBAI
  // ==========================================
  { name:"Mumbai Stay PG", city:"Mumbai", price:"₹10000", contact:"9765432109", image:"https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600", gender:"Boys", address:"Andheri West, Mumbai", amenities:"WiFi, AC, Meals, Gym, Security" },
  { name:"Andheri Girls PG", city:"Mumbai", price:"₹9000", contact:"9988776655", image:"https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600", gender:"Girls", address:"Andheri East, Mumbai", amenities:"WiFi, AC, Meals, Security, CCTV" },
  { name:"Dadar Boys Hostel", city:"Mumbai", price:"₹8500", contact:"9870011223", image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600", gender:"Boys", address:"Dadar West, Mumbai", amenities:"WiFi, Meals, Parking, Laundry" },
  { name:"Powai Tech Residency", city:"Mumbai", price:"₹12000", contact:"9167001122", image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600", gender:"Both", address:"Near IIT Bombay, Powai, Mumbai", amenities:"WiFi, AC, Washing Machine, Housekeeping, Security" },
  { name:"Vile Parle Student Living", city:"Mumbai", price:"₹11000", contact:"9820123456", image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600", gender:"Girls", address:"Near Mithibai College, Vile Parle, Mumbai", amenities:"WiFi, AC, Security, Daily Cleaning" },
  { name:"Thane Budget PG", city:"Mumbai", price:"₹6500", contact:"9930456789", image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600", gender:"Boys", address:"Thane West, Near Station, Mumbai", amenities:"WiFi, Water Filter, Locker, Bedding" },

  // ==========================================
  // PUNE
  // ==========================================
  { name:"Pune City Hostel", city:"Pune", price:"₹7000", contact:"8877665544", image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600", gender:"Boys", address:"Shivajinagar, Pune", amenities:"WiFi, Meals, Laundry, Security" },
  { name:"Koregaon Park Girls PG", city:"Pune", price:"₹8000", contact:"7766554433", image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600", gender:"Girls", address:"Koregaon Park, Pune", amenities:"WiFi, AC, Meals, CCTV, Gym" },
  { name:"Hinjawadi Tech PG", city:"Pune", price:"₹9000", contact:"9922334455", image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600", gender:"Both", address:"Hinjawadi Phase 1, Pune", amenities:"WiFi, AC, Meals, Gym, Parking" },
  { name:"Viman Nagar Symbiosis Special", city:"Pune", price:"₹8500", contact:"9049123456", image:"https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600", gender:"Girls", address:"Viman Nagar, Near Symbiosis, Pune", amenities:"WiFi, 3 Meals, Security, Induction Cooker" },
  { name:"Katraj Student Zone", city:"Pune", price:"₹5500", contact:"7350112233", image:"https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600", gender:"Boys", address:"Katraj, Near Bharati Vidyapeeth, Pune", amenities:"WiFi, Hot Water, Parking, Mess Attached" },
  { name:"Wakad Professional Living", city:"Pune", price:"₹7500", contact:"9850654321", image:"https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600", gender:"Boys", address:"Dange Chowk, Wakad, Pune", amenities:"WiFi, Gym, Laundry, Power Backup" },

  // ==========================================
  // PATNA
  // ==========================================
  { name:"Patna City Boys PG", city:"Patna", price:"₹5000", contact:"9333333333", image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600", gender:"Boys", address:"Fraser Road, Patna", amenities:"WiFi, Meals, Security, Laundry" },
  { name:"Girls Comfort PG Patna", city:"Patna", price:"₹6000", contact:"9444444444", image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600", gender:"Girls", address:"Bailey Road, Patna", amenities:"WiFi, Meals, AC, Laundry, CCTV" },
  { name:"Kankarbagh Hostel", city:"Patna", price:"₹5500", contact:"9555555555", image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600", gender:"Boys", address:"Kankarbagh Colony, Patna", amenities:"WiFi, Parking, Security, Water" },
  { name:"Patna Premium PG", city:"Patna", price:"₹7000", contact:"9666666666", image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600", gender:"Girls", address:"Rajendra Nagar, Patna", amenities:"WiFi, AC, Meals, CCTV, Security" },
  { name:"Boring Road Premium Boys", city:"Patna", price:"₹6500", contact:"7250894512", image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600", gender:"Boys", address:"Boring Road, Near Chauraha, Patna", amenities:"WiFi, North-Indian Meals, RO Water, Study Room" },
  { name:"Ashiana Girls Residency", city:"Patna", price:"₹5800", contact:"9122334455", image:"https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600", gender:"Girls", address:"Ashiana-Digha Road, Patna", amenities:"WiFi, Library Room, Guard Security, Meals" },
  { name:"Mahendru Student Complex", city:"Patna", price:"₹4000", contact:"9304125478", image:"https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600", gender:"Boys", address:"Mahendru, Near Patna University, Patna", amenities:"WiFi, Self-Cooking Option, Cheap Tiffin Near Market" }
];

// Automatically generate unique IDs and structured nested database for script.js
const pg_database = {
  "Bhopal": [],
  "Delhi": [],
  "Mumbai": [],
  "Pune": [],
  "Patna": []
};

pgDataRaw.forEach((item, index) => {
  const structuredItem = {
    id: `pg_${item.city.toLowerCase()}_${index + 1}`,
    name: item.name,
    price: parseInt(item.price.replace(/[₹,]/g, '')), // converts "₹6500" into 6500 number
    gender: item.gender,
    address: item.address,
    contact: item.contact,
    image: item.image,
    amenities: item.amenities,
    rating: parseFloat((4 + Math.random() * 1).toFixed(1)) // generates a realistic rating between 4.0 and 5.0
  };
  
  if (pg_database[item.city]) {
    pg_database[item.city].push(structuredItem);
  }
});

// Backward compatibility backup for array rendering
const pgData = pgDataRaw;
