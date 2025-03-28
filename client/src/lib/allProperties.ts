import { Property } from "@/types";

export const propertyData: Property[] = [
  // Existing properties 1-24
  {
    id: 1,
    title: 'Luxury Beachfront Villa',
    location: 'Goa, India',
    price: 95000000, // 9.5 crore INR
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Stunning beachfront property in Goa with panoramic ocean views, modern architecture, and luxury finishes throughout. Features include a private pool, outdoor kitchen, and direct beach access. The property includes a separate guest house and beautifully landscaped gardens with tropical plants.',
    coordinates: { lat: 15.2993, lng: 74.1240 }
  },
  {
    id: 2,
    title: 'Premium High-Rise Apartment',
    location: 'Mumbai, Maharashtra',
    price: 125000000, // 12.5 crore INR
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 2200,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Exclusive apartment in the heart of Mumbai with floor-to-ceiling windows, Italian marble flooring, and private terrace offering breathtaking sea views. Building amenities include 24/7 security, fitness center, swimming pool, and roof deck with panoramic city views. Located near premium shopping malls and restaurants.',
    coordinates: { lat: 19.0760, lng: 72.8777 }
  },
  {
    id: 3,
    title: 'Modern Independent House',
    location: 'Bangalore, Karnataka',
    price: 65000000, // 6.5 crore INR
    bedrooms: 4,
    bathrooms: 2.5,
    sqft: 2500,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Beautifully designed contemporary home in a family-friendly gated community in Bangalore. Features include an open floor plan, modular kitchen with imported appliances, home office, spacious backyard with covered patio, and rooftop terrace. Excellent proximity to IT parks and international schools.',
    coordinates: { lat: 12.9716, lng: 77.5946 }
  },
  {
    id: 4,
    title: 'Modern Apartment in IT Hub',
    location: 'Hyderabad, Telangana',
    price: 45000, // 45,000 INR/month
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1050,
    type: 'rent',
    images: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Stylish apartment in HITEC City with modern finishes, balcony with city views, and fully equipped kitchen. Amenities include 24/7 security, power backup, covered parking, clubhouse with gym, swimming pool, and children\'s play area. Minutes away from major IT companies, shopping malls, and restaurants.',
    coordinates: { lat: 17.4410, lng: 78.3781 }
  },
  {
    id: 5,
    title: 'Hill View Cottage',
    location: 'Shimla, Himachal Pradesh',
    price: 38000000, // 3.8 crore INR
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1200,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563720223185-11069f619acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Charming cottage with breathtaking Himalayan views, traditional wooden architecture with modern interiors, and cozy fireplace. Located in a peaceful area with apple orchards nearby. Perfect weekend getaway, vacation home, or rental property with high tourism potential.',
    coordinates: { lat: 31.1048, lng: 77.1734 }
  },
  {
    id: 6,
    title: 'Luxury Apartment with Lake View',
    location: 'Udaipur, Rajasthan',
    price: 65000, // 65,000 INR/month
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1500,
    type: 'rent',
    images: [
      'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Premium apartment with stunning views of Lake Pichola. Features include gourmet kitchen, private balcony, and elegant furnishings. Community amenities include pool, spa, and fitness center. Located in a heritage-rich area with easy access to restaurants, shopping, and cultural attractions.',
    coordinates: { lat: 24.5854, lng: 73.7125 }
  },
  {
    id: 7,
    title: 'Colonial Heritage Bungalow',
    location: 'Kolkata, West Bengal',
    price: 75000000, // 7.5 crore INR
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3300,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580216643062-cf460548a66a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Meticulously restored colonial bungalow in historic district with original architectural details, modern updates, and lush private garden. High ceilings, teakwood floors, and wraparound verandah. Located in a prestigious neighborhood with proximity to parks, schools, and cultural landmarks.',
    coordinates: { lat: 22.5726, lng: 88.3639 }
  },
  {
    id: 8,
    title: 'Modern Studio Apartment',
    location: 'Delhi, India',
    price: 30000, // 30,000 INR/month
    bedrooms: 1,
    bathrooms: 1,
    sqft: 600,
    type: 'rent',
    images: [
      'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464890100898-a385f744067f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Efficient studio apartment in South Delhi with smart home features, premium finishes, and city views. Building includes co-working space, rooftop lounge, and bike storage. Well-connected location with metro station nearby and walking distance to major markets, restaurants, and entertainment options.',
    coordinates: { lat: 28.6139, lng: 77.2090 }
  },
  {
    id: 9,
    title: 'Spacious Family Villa',
    location: 'Pune, Maharashtra',
    price: 58000000, // 5.8 crore INR
    bedrooms: 5,
    bathrooms: 3,
    sqft: 3200,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Ideal family home in a quiet residential area of Pune with large garden, renovated kitchen, finished basement, and two-car garage. Features include solar panels, rainwater harvesting system, and home automation. Excellent school district and proximity to IT parks and healthcare facilities.',
    coordinates: { lat: 18.5204, lng: 73.8567 }
  },
  {
    id: 10,
    title: 'Urban Apartment in City Center',
    location: 'Chennai, Tamil Nadu',
    price: 35000, // 35,000 INR/month
    bedrooms: 2,
    bathrooms: 1,
    sqft: 850,
    type: 'rent',
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1585128792020-803d29415281?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Charming apartment in the heart of Chennai with hardwood floors, designer lighting, and private balcony. Walking distance to shopping centers, restaurants, cinemas, and public transit. Building amenities include elevator, 24/7 security, power backup, and covered parking.',
    coordinates: { lat: 13.0827, lng: 80.2707 }
  },
  {
    id: 11,
    title: 'Contemporary Garden Villa',
    location: 'Jaipur, Rajasthan',
    price: 45000000, // 4.5 crore INR
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2100,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Contemporary Rajasthani-style home with resort-like backyard, private pool, outdoor entertainment area, and stunning city views. Energy-efficient design with solar panels and beautiful Jaipuri stone work. Located in a prestigious neighborhood with proximity to tourist attractions and modern conveniences.',
    coordinates: { lat: 26.9124, lng: 75.7873 }
  },
  {
    id: 12,
    title: 'Riverside Luxury Villa',
    location: 'Kochi, Kerala',
    price: 85000000, // 8.5 crore INR
    bedrooms: 5,
    bathrooms: 4.5,
    sqft: 4800,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584738766473-61c083514bf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Luxurious waterfront property with private dock, infinity pool, theater room, wine cellar, and guest quarters. Traditional Kerala architecture with modern amenities. Gated community with 24-hour security and breathtaking views of the backwaters. Perfect for luxury living or high-end hospitality ventures.',
    coordinates: { lat: 9.9312, lng: 76.2673 }
  },
  {
    id: 13,
    title: 'Premium Waterfront Apartment',
    location: 'Mumbai, Maharashtra',
    price: 92000000, // 9.2 crore INR
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1850,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Elegant apartment in Worli with panoramic sea views, designer interiors, and premium fixtures. Features include smart home automation, imported kitchen appliances, and expansive living areas. Located in a prestigious tower with concierge services, infinity pool, and exclusive residents-only club.',
    coordinates: { lat: 19.0178, lng: 72.8478 }
  },
  {
    id: 14,
    title: 'Tech Park Adjacent Apartment',
    location: 'Bangalore, Karnataka',
    price: 28000, // 28,000 INR/month
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1100,
    type: 'rent',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Modern apartment in Electronic City with contemporary finishes, open-concept layout, and dedicated work-from-home space. Amenities include swimming pool, fitness center, and landscaped gardens. Located within walking distance to major tech parks and convenient access to city transportation.',
    coordinates: { lat: 12.8399, lng: 77.6770 }
  },
  {
    id: 15,
    title: 'Heritage Haveli',
    location: 'Jaipur, Rajasthan',
    price: 72000000, // 7.2 crore INR
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3800,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Exquisite restored haveli in the heart of Jaipur with historical architectural features, intricate frescoes, and courtyard with fountain. Modern conveniences include updated plumbing, electrical systems, and climate control. Perfect for discerning buyers looking for authentic Rajasthani heritage with luxury comforts.',
    coordinates: { lat: 26.9239, lng: 75.8267 }
  },
  {
    id: 16,
    title: 'Golf Course Villa',
    location: 'Noida, Uttar Pradesh',
    price: 115000000, // 11.5 crore INR
    bedrooms: 5,
    bathrooms: 5.5,
    sqft: 6000,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Prestigious villa with panoramic golf course views in an exclusive gated community. Features include double-height living room, home theater, infinity pool, and landscaped garden. Includes separate staff quarters, 4-car garage, and advanced security systems. Close to international schools and premium shopping centers.',
    coordinates: { lat: 28.5355, lng: 77.3910 }
  },
  {
    id: 17,
    title: 'Executive Apartment',
    location: 'Gurgaon, Haryana',
    price: 55000, // 55,000 INR/month
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1600,
    type: 'rent',
    images: [
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-61dc36dc98c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Luxurious corporate apartment in Cyber City with premium furnishings, high-end appliances, and city views. Building features include concierge service, business center, and rooftop lounge. Ideally located near major multinational companies, shopping malls, and expressway access.',
    coordinates: { lat: 28.4595, lng: 77.0266 }
  },
  {
    id: 18,
    title: 'Seafront Penthouse',
    location: 'Kochi, Kerala',
    price: 115000000, // 11.5 crore INR
    bedrooms: 4,
    bathrooms: 3.5,
    sqft: 2900,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Exclusive penthouse overlooking the Arabian Sea with private rooftop pool, entertainment deck, and panoramic views. Designer interiors with imported materials, home automation system, and private elevator access. Located in an exclusive community with marina access and premium amenities.',
    coordinates: { lat: 9.9671, lng: 76.2497 }
  },
  {
    id: 19,
    title: 'Mountain Eco Resort',
    location: 'Manali, Himachal Pradesh',
    price: 48000000, // 4.8 crore INR
    bedrooms: 6,
    bathrooms: 4,
    sqft: 3500,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Boutique eco-resort nestled in the Himalayas with stunning mountain views, sustainable architecture, and self-sufficient systems. Features include solar power, organic garden, natural spring water, and meditation spaces. Perfect for retreat center, boutique hotel, or exclusive private estate.',
    coordinates: { lat: 32.2432, lng: 77.1892 }
  },
  {
    id: 20,
    title: 'Victorian Heritage Home',
    location: 'Shimla, Himachal Pradesh',
    price: 56000000, // 5.6 crore INR
    bedrooms: 4,
    bathrooms: 2,
    sqft: 2700,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Historic Victorian-era home with original period features, hand-carved woodwork, and antique fireplaces. Set on a hillside with panoramic views of the Himalayan range. Carefully restored with modern amenities while preserving historical significance. Includes landscaped gardens and servant quarters.',
    coordinates: { lat: 31.1045, lng: 77.1709 }
  },
  {
    id: 21,
    title: 'Valley View Farmhouse',
    location: 'Dehradun, Uttarakhand',
    price: 32000000, // 3.2 crore INR
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2000,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab8e917e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Charming farmhouse set on 2 acres of land with fruit orchards, organic vegetable garden, and mountain views. Features include wood-burning fireplace, country-style kitchen, and spacious verandah. Perfect balance of rustic charm and modern comfort, just a short drive from city conveniences.',
    coordinates: { lat: 30.3165, lng: 78.0322 }
  },
  {
    id: 22,
    title: 'Modern Minimalist Bungalow',
    location: 'Ahmedabad, Gujarat',
    price: 26000000, // 2.6 crore INR
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566752229-250ed79470f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Award-winning architectural design with clean lines, open spaces, and abundant natural light. Features include smart home technology, energy-efficient systems, and minimalist landscaping. Located in an upscale neighborhood with easy access to city amenities and cultural attractions.',
    coordinates: { lat: 23.0225, lng: 72.5714 }
  },
  {
    id: 23,
    title: 'Luxury Riverside Apartment',
    location: 'Chandigarh, India',
    price: 40000, // 40,000 INR/month
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1600,
    type: 'rent',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Upscale apartment with premium finishes, floor-to-ceiling windows, and scenic views of Sukhna Lake. Building offers 24/7 security, fitness center, and landscaped gardens. Located in Sector 8, renowned for its well-planned layout, green spaces, and proximity to major city landmarks.',
    coordinates: { lat: 30.7333, lng: 76.7794 }
  },
  {
    id: 24,
    title: 'Stylish Town House',
    location: 'Hyderabad, Telangana',
    price: 26000000, // 2.6 crore INR
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1750,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1600607687644-c7171b41572b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687126-a2f1a551a3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Modern townhouse in Jubilee Hills with designer interiors, private garden, and rooftop terrace. Features include smart home technology, custom cabinetry, and premium finishes. Located in a gated community with 24/7 security and easy access to city attractions.',
    coordinates: { lat: 17.4522, lng: 78.3831 }
  },
  
  // More properties from various states and districts
  {
    id: 25,
    title: 'Elegant Penthouse with City Views',
    location: 'Lucknow, Uttar Pradesh',
    price: 45000000, // 4.5 crore INR
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Luxury penthouse in central Lucknow with panoramic views of Gomti River and city skyline. Features include premium Italian marble flooring, designer lighting, and wraparound terrace. Building amenities include infinity pool, spa, and private theater. Historic Hazratganj shopping district nearby.',
    coordinates: { lat: 26.8467, lng: 80.9462 }
  },
  {
    id: 26,
    title: 'Coastal Vacation Villa',
    location: 'Pondicherry, India',
    price: 65000000, // 6.5 crore INR
    bedrooms: 4,
    bathrooms: 3.5,
    sqft: 3000,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607686527-a4535505384e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Stunning beach villa with French colonial architecture and modern amenities. Features include private pool, expansive outdoor entertaining areas, and seaside garden. Located in serene surroundings with easy access to Pondicherry\'s famous French Quarter, boutiques, and restaurants.',
    coordinates: { lat: 11.9416, lng: 79.8083 }
  },
  {
    id: 27,
    title: 'Luxury Farmhouse with Private Lake',
    location: 'Lonavala, Maharashtra',
    price: 135000000, // 13.5 crore INR
    bedrooms: 5,
    bathrooms: 5,
    sqft: 5000,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566669437687-7040a6c79235?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Exclusive 5-acre hill station property with private lake, lush landscaping, and mountain views. Features include resort-style swimming pool, tennis court, home theater, and guest house. Perfect weekend getaway from Mumbai/Pune or year-round luxury residence with excellent investment potential.',
    coordinates: { lat: 18.7546, lng: 73.4012 }
  },
  {
    id: 28,
    title: 'Heritage Plantation House',
    location: 'Coorg, Karnataka',
    price: 78000000, // 7.8 crore INR
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3500,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599618795545-wakbfsG2t3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1574731579719-d04959907d8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Historic plantation bungalow set on 15 acres of active coffee estate with spice gardens and fruit orchards. Traditional architecture with modern updates, wraparound verandah, and antique furnishings. Includes separate manager\'s quarters, processing facilities, and panoramic valley views.',
    coordinates: { lat: 12.4244, lng: 75.7382 }
  },
  {
    id: 29,
    title: 'Luxurious Apartment in Diplomatic Enclave',
    location: 'Delhi, India',
    price: 95000000, // 9.5 crore INR
    bedrooms: 4,
    bathrooms: 3.5,
    sqft: 2700,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1600563438938-a9a27216b200?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Exclusive apartment in New Delhi\'s prestigious diplomatic area with high-security features, imported marble flooring, and designer fixtures. Building includes concierge services, rooftop pool, and multiple terraces with Lodi Garden views. Proximity to embassies, international schools, and premium shopping.',
    coordinates: { lat: 28.5920, lng: 77.1909 }
  },
  {
    id: 30,
    title: 'Modern Duplex in Tech Hub',
    location: 'Pune, Maharashtra',
    price: 42000, // 42,000 INR/month
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1800,
    type: 'rent',
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600047509736-9d4d17be90ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Contemporary duplex near Hinjewadi IT Park with open concept living space, premium kitchen, and dedicated home office. Building features include 24/7 security, indoor sports facilities, and walking paths. Conveniently located near major IT companies, shopping malls, and international dining options.',
    coordinates: { lat: 18.5913, lng: 73.7368 }
  },
  {
    id: 31,
    title: 'Hillside Retreat',
    location: 'Mussoorie, Uttarakhand',
    price: 47000000, // 4.7 crore INR
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2200,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Charming hillside home with panoramic Himalayan views, stone fireplaces, and exposed wooden beams. Features sprawling garden terraces, meditation pavilion, and outdoor hot tub. Located in secluded area with privacy yet close to Mall Road amenities. Perfect vacation home or boutique B&B opportunity.',
    coordinates: { lat: 30.4598, lng: 78.0644 }
  },
  {
    id: 32,
    title: 'Luxury Desert Resort Villa',
    location: 'Jaisalmer, Rajasthan',
    price: 55000000, // 5.5 crore INR
    bedrooms: 4,
    bathrooms: 4,
    sqft: 3200,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Spectacular desert retreat with traditional Rajasthani architecture, luxury amenities, and panoramic dune views. Features private pool, rooftop observatory, and outdoor entertainment spaces. Located near Sam Sand Dunes with excellent tourism potential. Turnkey property with established hospitality business possibility.',
    coordinates: { lat: 26.9157, lng: 70.9083 }
  },
  {
    id: 33,
    title: 'Tea Estate Bungalow',
    location: 'Darjeeling, West Bengal',
    price: 42000000, // 4.2 crore INR
    bedrooms: 4,
    bathrooms: 2,
    sqft: 2800,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1587582345426-bf9b121e032d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595877244574-e90ce41ce089?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Historic colonial bungalow situated on working tea estate with breathtaking Kanchenjunga views. Original woodwork, period details, and wrap-around verandah. Includes 5 acres of premium tea gardens with production facilities. Perfect for boutique tourism venture combining heritage stay with tea experiences.',
    coordinates: { lat: 27.0380, lng: 88.2626 }
  },
  {
    id: 34,
    title: 'Backwater Houseboat',
    location: 'Alleppey, Kerala',
    price: 18000000, // 1.8 crore INR
    bedrooms: 2,
    bathrooms: 2,
    sqft: 900,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1571254100803-cb20fcdf389f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687126-a2f1a551a3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1602343168117-bb8a12d7c180?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Luxurious permanently docked houseboat with premium finishes and modern amenities while maintaining traditional Kerala craftsmanship. Features air-conditioned bedrooms, gourmet kitchen, and panoramic deck. Established tourism business with staff quarters and operational licenses. Prime location on Kerala\'s famous backwaters.',
    coordinates: { lat: 9.4981, lng: 76.3388 }
  },
  {
    id: 35,
    title: 'Heritage Mansion',
    location: 'Chettinad, Tamil Nadu',
    price: 82000000, // 8.2 crore INR
    bedrooms: 7,
    bathrooms: 5,
    sqft: 8500,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Majestic Chettinad mansion with over 100 years of history, featuring intricate woodwork, Belgian glass, Italian marble, and traditional courtyards. Meticulously restored with modern amenities while preserving heritage elements. Includes antique furniture collection and ancestral artifacts. Perfect for heritage hotel or cultural center.',
    coordinates: { lat: 10.6033, lng: 78.7742 }
  },
  {
    id: 36,
    title: 'Urban Micro-Apartment',
    location: 'Mumbai, Maharashtra',
    price: 27000, // 27,000 INR/month
    bedrooms: 1,
    bathrooms: 1,
    sqft: 450,
    type: 'rent',
    images: [
      'https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Innovative studio apartment with smart space-saving solutions, including hidden storage, convertible furniture, and modern amenities. Building includes co-working spaces, rooftop garden, and fitness center. Located in Bandra with excellent connectivity and walkable lifestyle. Perfect for young professionals or digital nomads.',
    coordinates: { lat: 19.0596, lng: 72.8295 }
  },
  {
    id: 37,
    title: 'Valley View Cottage',
    location: 'Kasauli, Himachal Pradesh',
    price: 36000, // 36,000 INR/month
    bedrooms: 2,
    bathrooms: 1,
    sqft: 850,
    type: 'rent',
    images: [
      'https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Peaceful mountain cottage with exposed stone walls, wood-burning fireplace, and expansive valley views. Features organic garden, meditation deck, and nature trails on property. Located in tranquil area but with easy access to Kasauli\'s attractions. Perfect for writers, artists, or remote workers seeking inspiration.',
    coordinates: { lat: 30.9010, lng: 76.9651 }
  },
  {
    id: 38,
    title: 'Restored Haveli Suite',
    location: 'Jodhpur, Rajasthan',
    price: 45000, // 45,000 INR/month
    bedrooms: 2,
    bathrooms: 1,
    sqft: 950,
    type: 'rent',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Elegant suite in historic Blue City haveli with views of Mehrangarh Fort, hand-painted frescoes, and traditional Rajasthani furnishings. Property features tranquil courtyard, rooftop dining, and cultural experiences. Located in the heart of old city with walking access to markets, restaurants, and historical sites.',
    coordinates: { lat: 26.2918, lng: 73.0168 }
  },
  {
    id: 39,
    title: 'Island Beachfront Property',
    location: 'Andaman Islands, India',
    price: 120000000, // 12 crore INR
    bedrooms: 5,
    bathrooms: 5,
    sqft: 3800,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab8e917e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Rare beachfront property in the pristine Andaman Islands with private beach access, tropical gardens, and panoramic sea views. Modern design with indoor-outdoor living spaces, infinity pool, and guest bungalows. Approved for resort development with permits in place. Exceptional investment opportunity in India\'s most exclusive island destination.',
    coordinates: { lat: 11.7401, lng: 92.6586 }
  },
  {
    id: 40,
    title: 'Smart City Apartment',
    location: 'Indore, Madhya Pradesh',
    price: 15000000, // 1.5 crore INR
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1600,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1545083036-3a03c78d30a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Contemporary apartment in Indore\'s Smart City development featuring cutting-edge home automation, energy-efficient systems, and modern open-concept design. Community includes electric car charging, solar power, rainwater harvesting, and smart waste management. Located in a rapidly developing city with excellent investment potential.',
    coordinates: { lat: 22.7196, lng: 75.8577 }
  },
  {
    id: 41,
    title: 'Countryside Modern Farmhouse',
    location: 'Nashik, Maharashtra',
    price: 28000000, // 2.8 crore INR
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2600,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1556911220-bda9f7b24446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1574731579719-d04959907d8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Modern farmhouse set on 5 acres of vineyard with panoramic mountain views, open-plan living space, and gourmet kitchen. Property includes wine cellar, outdoor entertainment area, and guest cottage. Located in India\'s premier wine region with established vineyards. Excellent opportunity for agri-tourism or boutique wine venture.',
    coordinates: { lat: 19.9975, lng: 73.7898 }
  },
  {
    id: 42,
    title: 'Forest Eco Retreat',
    location: 'Coorg, Karnataka',
    price: 29000000, // 2.9 crore INR
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2100,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Sustainable forest retreat built with eco-friendly materials, off-grid capabilities, and organic design. Features include living roof, rainwater harvesting, solar power, and natural cooling systems. Set on 3 acres of coffee plantation with diverse fruit trees and spice gardens. Perfect for eco-tourism or sustainable living.',
    coordinates: { lat: 12.3375, lng: 75.8069 }
  },
  {
    id: 43,
    title: 'Historic Portuguese Villa',
    location: 'Goa, India',
    price: 72000000, // 7.2 crore INR
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: '400-year-old Portuguese villa meticulously restored with original azulejo tiles, teak wood beams, and period furniture. Features include inner courtyard, antique well, and library. Located in heritage village of Fontainhas with walking distance to galleries, cafes, and the Mandovi River.',
    coordinates: { lat: 15.5005, lng: 73.8333 }
  },
  {
    id: 44,
    title: 'Riverside Eco Cottage',
    location: 'Rishikesh, Uttarakhand',
    price: 25000, // 25,000 INR/month
    bedrooms: 1,
    bathrooms: 1,
    sqft: 650,
    type: 'rent',
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571254100803-cb20fcdf389f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Peaceful riverside cottage with yoga deck, meditation space, and organic garden. Sustainable design with natural materials, solar power, and composting systems. Located in quiet area near Rishikesh with Ganges river views and walking distance to ashrams. Perfect for spiritual retreats, yoga enthusiasts, or remote workers.',
    coordinates: { lat: 30.1086, lng: 78.2932 }
  },
  {
    id: 45,
    title: 'Luxury Lake View Villa',
    location: 'Nainital, Uttarakhand',
    price: 65000000, // 6.5 crore INR
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4000,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580216643062-cf460548a66a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Magnificent hill station villa with panoramic views of Naini Lake and surrounding Kumaon mountains. Features include glass-fronted living areas, multiple fireplaces, entertainment room, and heated floors. Expansive terraced gardens with gazebo and outdoor dining. Prime location with privacy yet walking distance to the Mall Road.',
    coordinates: { lat: 29.3919, lng: 79.4542 }
  },
  {
    id: 46,
    title: 'Serene Forest Cottage',
    location: 'Munnar, Kerala',
    price: 28000000, // 2.8 crore INR
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587582345426-bf9b121e032d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1605630933954-8f7c708ee3bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Tranquil cottage surrounded by cardamom plantations and pristine forests. Traditional Kerala architecture with modern comforts, featuring rain showers, floor heating, and panoramic windows. Property includes organic kitchen garden and walking trails. Perfect mountain retreat or boutique hospitality venture.',
    coordinates: { lat: 10.0889, lng: 77.0595 }
  },
  {
    id: 47,
    title: 'Premium Apartment with River View',
    location: 'Ahmedabad, Gujarat',
    price: 32000, // 32,000 INR/month
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1700,
    type: 'rent',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-61dc36dc98c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Contemporary luxury apartment overlooking Sabarmati Riverfront with floor-to-ceiling windows, designer finishes, and smart home features. Building amenities include infinity pool, yoga studio, business center, and children\'s play area. Central location with easy access to cultural sites, education institutions, and business districts.',
    coordinates: { lat: 23.0225, lng: 72.5714 }
  },
  {
    id: 48,
    title: 'Palatial Haveli',
    location: 'Lucknow, Uttar Pradesh',
    price: 62000000, // 6.2 crore INR
    bedrooms: 6,
    bathrooms: 5,
    sqft: 7500,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Magnificent Nawabi-era mansion featuring intricate jali work, chikan embroidery-inspired details, and formal gardens. Includes grand reception halls, multiple courtyards, and heritage library. Meticulously restored with modern amenities while preserving historical significance. Perfect for cultural institution, boutique hotel, or prestigious residence.',
    coordinates: { lat: 26.8467, lng: 80.9462 }
  },
  {
    id: 49,
    title: 'Himalayan Adventure Lodge',
    location: 'Leh, Ladakh',
    price: 32000000, // 3.2 crore INR
    bedrooms: 5,
    bathrooms: 3,
    sqft: 2800,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1573790387438-4da905039392?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566669437687-7040a6c79235?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Traditional Ladakhi lodge built with sustainable materials and passive solar design for extreme mountain climate. Features include meditation room, library, and observation deck with panoramic Himalayan views. Established tourism business with permits and local staff. Perfect adventure tourism base or spiritual retreat center.',
    coordinates: { lat: 34.1526, lng: 77.5771 }
  },
  {
    id: 50,
    title: 'Luxury Beach Villa',
    location: 'Kovalam, Kerala',
    price: 75000000, // 7.5 crore INR
    bedrooms: 4,
    bathrooms: 4.5,
    sqft: 3500,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Stunning beachfront villa with direct access to Kovalam Beach, combining traditional Kerala architecture with modern luxury. Features infinity pool, home theater, gourmet kitchen, and expansive outdoor entertaining areas. Lush tropical landscaping with fruit trees and herb gardens. Turnkey property with tourism permits and established rental history.',
    coordinates: { lat: 8.3988, lng: 76.9826 }
  },
  {
    id: 51,
    title: 'Cultural Heritage Haveli',
    location: 'Pushkar, Rajasthan',
    price: 38000000, // 3.8 crore INR
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Historic Rajasthani haveli near sacred Pushkar Lake with traditional architecture, central courtyard, and rooftop terrace offering panoramic views. Features include ornate doorways, hand-painted murals, and antique furniture. Currently operating as successful heritage hotel with excellent reviews and established clientele.',
    coordinates: { lat: 26.4902, lng: 74.5508 }
  },
  {
    id: 52,
    title: 'Contemporary City Apartment',
    location: 'Bhopal, Madhya Pradesh',
    price: 18000, // 18,000 INR/month
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1100,
    type: 'rent',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Modern apartment in Bhopal\'s upscale Arera Colony with open floor plan, balcony with lake views, and contemporary finishes. Building amenities include 24/7 security, covered parking, and community garden. Conveniently located near shopping centers, restaurants, and Van Vihar National Park.',
    coordinates: { lat: 23.2599, lng: 77.4126 }
  },
  {
    id: 53,
    title: 'Elegant Colonial Bungalow',
    location: 'Dehradun, Uttarakhand',
    price: 54000000, // 5.4 crore INR
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Gracious colonial-era bungalow in Dehradun\'s prestigious Dalanwala area with traditional architecture and modern conveniences. Features spacious rooms with high ceilings, wraparound verandah, and mature garden with fruit trees. Located near quality schools, Rajpur Road, and Paltan Bazaar, offering the perfect balance of privacy and accessibility.',
    coordinates: { lat: 30.3345, lng: 78.0537 }
  },
  {
    id: 54,
    title: 'Beach Resort Property',
    location: 'Puri, Odisha',
    price: 42000000, // 4.2 crore INR
    bedrooms: 8,
    bathrooms: 8,
    sqft: 5500,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1571263801056-d5c7b92b4dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571263801056-d5c7b92b4dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Established beach resort property on Puri\'s famous coastline with direct beach access, swimming pool, restaurant, and eight guest cottages. Traditional Odisha architecture with modern amenities and tropical landscaping. Operational business with licenses, staff quarters, and excellent online presence. Outstanding investment opportunity in growing tourist destination.',
    coordinates: { lat: 19.8133, lng: 85.8314 }
  },
  {
    id: 55,
    title: 'Artistic Studio Apartment',
    location: 'Pondicherry, India',
    price: 22000, // 22,000 INR/month
    bedrooms: 1,
    bathrooms: 1,
    sqft: 750,
    type: 'rent',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Charming studio apartment in Pondicherry\'s French Quarter with unique architectural details, high ceilings, and private balcony. Creative space with artist-friendly features, abundant natural light, and custom built-ins. Located in vibrant neighborhood with galleries, cafes, and walking distance to Promenade Beach.',
    coordinates: { lat: 11.9339, lng: 79.8354 }
  },
  {
    id: 56,
    title: 'Modern Townhouse in Tech Hub',
    location: 'Pune, Maharashtra',
    price: 46000000, // 4.6 crore INR
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 2200,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1600566753151-76d8c402c1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1545083036-3a03c78d30a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Contemporary townhouse in Pune\'s Magarpatta City with sleek design, private terrace, and smart home features. Open concept living with premium finishes, chef\'s kitchen, and home office. Located in self-contained township with schools, shopping, parks, and medical facilities. Perfect for IT professionals seeking upscale urban lifestyle.',
    coordinates: { lat: 18.5204, lng: 73.9236 }
  },
  {
    id: 57,
    title: 'Hill Station Weekend Home',
    location: 'Ooty, Tamil Nadu',
    price: 42000000, // 4.2 crore INR
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Charming cottage in Ooty\'s exclusive Fern Hill area with traditional colonial architecture and panoramic Nilgiri mountain views. Features include fireplaces, English garden, tea lounge, and outdoor entertaining areas. Walking distance to Ooty Lake with easy access to botanical gardens and heritage train station. Ideal vacation home or boutique hospitality venture.',
    coordinates: { lat: 11.4102, lng: 76.6950 }
  },
  {
    id: 58,
    title: 'Downtown Urban Loft',
    location: 'Kolkata, West Bengal',
    price: 24000, // 24,000 INR/month
    bedrooms: 1,
    bathrooms: 1,
    sqft: 850,
    type: 'rent',
    images: [
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Stylish converted loft in historic Park Street building with exposed brick walls, industrial design elements, and contemporary comforts. Open plan layout with dedicated work space, modern kitchen, and urban views. Central location in Kolkata\'s entertainment and cultural district with countless dining options, galleries, and theaters just steps away.',
    coordinates: { lat: 22.5548, lng: 88.3526 }
  },
  {
    id: 59,
    title: 'Suburban Family Home',
    location: 'Chandigarh, India',
    price: 35000000, // 3.5 crore INR
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Spacious family home in Chandigarh\'s Sector 8 with landscaped garden, covered patio, and finished basement. Modern kitchen with island, formal dining room, and family living spaces. Located in premier residential area with excellent schools, parks, and community facilities nearby. Perfect for professionals with families.',
    coordinates: { lat: 30.7343, lng: 76.7933 }
  },
  {
    id: 60,
    title: 'Riverside Meditation Retreat',
    location: 'Haridwar, Uttarakhand',
    price: 35000000, // 3.5 crore INR
    bedrooms: 5,
    bathrooms: 5,
    sqft: 2800,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Spiritual retreat center near the sacred Ganges River with 5 meditation rooms, yoga shala, communal dining, and guest accommodations. Traditional architecture with modern amenities, surrounded by lush gardens and fruit trees. Established wellness business with international clientele. Peaceful setting yet accessible to city center.',
    coordinates: { lat: 29.9457, lng: 78.1642 }
  },
  {
    id: 61,
    title: 'Beachfront Apartment',
    location: 'Varkala, Kerala',
    price: 28000, // 28,000 INR/month
    bedrooms: 2,
    bathrooms: 2,
    sqft: 950,
    type: 'rent',
    images: [
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Stylish apartment with panoramic Arabian Sea views from private balcony. Contemporary interiors with local artisanal touches, fully equipped kitchen, and dedicated work space. Located on Varkala Cliff with direct beach access and walking distance to restaurants, yoga centers, and Ayurvedic spas.',
    coordinates: { lat: 8.7378, lng: 76.7063 }
  },
  {
    id: 62,
    title: 'Mountain Trek Base Camp',
    location: 'Dharamshala, Himachal Pradesh',
    price: 32000000, // 3.2 crore INR
    bedrooms: 6,
    bathrooms: 6,
    sqft: 3600,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587582345426-bf9b121e032d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1602343168117-bb8a12d7c180?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Established trekking lodge in the Dhauladhar range with six en-suite guest rooms, communal dining hall, equipment room, and staff quarters. Property includes apple orchard, vegetable gardens, and panoramic mountain views. Operating business with permits, trained staff, and international clientele. Perfect opportunity for adventure tourism entrepreneurs.',
    coordinates: { lat: 32.2143, lng: 76.3196 }
  },
  {
    id: 63,
    title: 'Luxury Desert Tent Resort',
    location: 'Jaisalmer, Rajasthan',
    price: 48000000, // 4.8 crore INR
    bedrooms: 15,
    bathrooms: 15,
    sqft: 8500,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1573790387438-4da905039392?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Luxury desert camp with 15 air-conditioned luxury tents, restaurant pavilion, spa facilities, and entertainment areas. Set on 5 acres with desert views and traditional Rajasthani design elements. Operational tourism business with excellent ratings, permits, staff accommodations, and established client base. Prime location near Sam Sand Dunes.',
    coordinates: { lat: 26.9124, lng: 70.9122 }
  },
  {
    id: 64,
    title: 'Waterfront Commercial Building',
    location: 'Mumbai, Maharashtra',
    price: 350000000, // 35 crore INR
    bedrooms: 0,
    bathrooms: 8,
    sqft: 12000,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Prime commercial property in Mumbai\'s Bandra Kurla Complex with panoramic views of the Arabian Sea. Modern glass and steel construction with flexible floor plans, premium finishes, and state-of-the-art systems. Features include underground parking, rooftop helipad, and security facilities. Excellent investment with high rental yield potential.',
    coordinates: { lat: 19.0544, lng: 72.8623 }
  },
  {
    id: 65,
    title: 'Artist Colony Bungalow',
    location: 'Auroville, Tamil Nadu',
    price: 22000000, // 2.2 crore INR
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Eco-friendly bungalow in Auroville\'s artistic community with sustainable design, solar power, and rainwater harvesting. Features include artist studio with northern light, organic garden, and meditation space. Built with natural materials following sacred geometry principles. Perfect for creatives seeking international community and sustainable lifestyle.',
    coordinates: { lat: 12.0052, lng: 79.8120 }
  },
  {
    id: 66,
    title: 'Himalayan Adventure Base',
    location: 'Kaza, Himachal Pradesh',
    price: 18000000, // 1.8 crore INR
    bedrooms: 6,
    bathrooms: 4,
    sqft: 3200,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1498888695617-027c4e7d6c93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Adventure tourism lodge in the remote Spiti Valley with 6 guest rooms, communal dining hall, equipment storage, and staff quarters. Traditional architecture with modern amenities, passive solar heating, and spectacular mountain views. Licensed tour operation business with established trekking routes, local guides, and international client base.',
    coordinates: { lat: 32.2277, lng: 78.0727 }
  },
  {
    id: 67,
    title: 'Urban Co-Working Space',
    location: 'Bangalore, Karnataka',
    price: 175000000, // 17.5 crore INR
    bedrooms: 0,
    bathrooms: 6,
    sqft: 8000,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Modern co-working facility in Bangalore\'s Indiranagar district with open work areas, private offices, conference rooms, and event space. Industrial-chic design with exposed services, flexible layouts, and tech infrastructure. Currently operated as successful membership-based workspace with established clientele. Prime location near metro station, cafes, and tech parks.',
    coordinates: { lat: 12.9784, lng: 77.6408 }
  },
  {
    id: 68,
    title: 'Lakeside Villa with Boat Dock',
    location: 'Udaipur, Rajasthan',
    price: 95000000, // 9.5 crore INR
    bedrooms: 4,
    bathrooms: 4.5,
    sqft: 4200,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab8e917e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Luxurious lakefront villa with private boat dock, infinity pool, and panoramic views of Lake Pichola and the City Palace. Blend of traditional Rajasthani architecture with modern luxury, featuring hand-carved details, marble floors, and custom finishes. Includes staff quarters, 4-car garage, and landscaped gardens. One of Udaipur\'s most prestigious properties.',
    coordinates: { lat: 24.5711, lng: 73.6886 }
  },
  {
    id: 69,
    title: 'Office Space in Commercial Hub',
    location: 'Gurgaon, Haryana',
    price: 85000, // 85,000 INR/month
    bedrooms: 0,
    bathrooms: 2,
    sqft: 1800,
    type: 'rent',
    images: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Premium office space in Cyber City with flexible layout, meeting rooms, pantry, and reception area. Contemporary design with floor-to-ceiling windows, raised flooring, and modern fixtures. Building includes 24/7 security, backup power, parking, and common areas. Prime location in Delhi NCR\'s business district with excellent connectivity.',
    coordinates: { lat: 28.4961, lng: 77.0898 }
  },
  {
    id: 70,
    title: 'Coastal Fisherman\'s Cottage',
    location: 'Diu, India',
    price: 15000000, // 1.5 crore INR
    bedrooms: 2,
    bathrooms: 1,
    sqft: 950,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571254100803-cb20fcdf389f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Charming Portuguese-style cottage in coastal Diu with traditional architecture, colorful tiles, and private courtyard. Walking distance to Nagoa Beach with sea views and cooling breezes. Recently renovated with modern amenities while preserving historic character. Perfect vacation home or boutique guest house in this unique beach town with Portuguese heritage.',
    coordinates: { lat: 20.7144, lng: 70.9874 }
  },
  {
    id: 71,
    title: 'Heritage Building Apartment',
    location: 'New Delhi, India',
    price: 85000000, // 8.5 crore INR
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2200,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580216643062-cf460548a66a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Elegant apartment in Lutyens Delhi\'s heritage building with high ceilings, original moldings, and parquet flooring. Renovated with modern amenities while preserving historic character. Features include formal dining room, library, and spacious living areas. Located in central Delhi with proximity to embassies, cultural institutions, and premium shopping.',
    coordinates: { lat: 28.6126, lng: 77.2290 }
  },
  {
    id: 72,
    title: 'Beach Shack Retreat',
    location: 'Gokarna, Karnataka',
    price: 15000, // 15,000 INR/month
    bedrooms: 1,
    bathrooms: 1,
    sqft: 600,
    type: 'rent',
    images: [
      'https://images.unsplash.com/photo-1499602211854-122b9afe6c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571254100803-cb20fcdf389f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Rustic beach cottage steps from Om Beach with panoramic sea views, private deck, and outdoor shower. Simple, comfortable living with eco-friendly features and natural ventilation. Perfect writer\'s retreat or digital nomad base in this laid-back coastal town known for its pristine beaches, yoga centers, and bohemian atmosphere.',
    coordinates: { lat: 14.5339, lng: 74.3184 }
  },
  {
    id: 73,
    title: 'Riverfront Farming Property',
    location: 'Allahabad, Uttar Pradesh',
    price: 28000000, // 2.8 crore INR
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595877244574-e90ce41ce089?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566669437687-7040a6c79235?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Productive agricultural property along the Yamuna River with 10 acres of fertile farmland, irrigation systems, and mango orchard. Includes 3-bedroom farmhouse with verandah and traditional features. Excellent opportunity for organic farming, agritourism, or sustainable living within easy reach of Prayagraj city.',
    coordinates: { lat: 25.4358, lng: 81.8463 }
  },
  {
    id: 74,
    title: 'Contemporary Hillside Villa',
    location: 'Kodaikanal, Tamil Nadu',
    price: 58000000, // 5.8 crore INR
    bedrooms: 4,
    bathrooms: 3.5,
    sqft: 3200,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Striking modern villa in Kodaikanal\'s exclusive Fern Hill area with floor-to-ceiling windows, multiple viewing decks, and panoramic valley views. Architectural masterpiece featuring local stone, sustainable materials, and energy-efficient systems. Landscaped gardens with native plants, meditation pavilion, and outdoor entertaining areas. Perfect luxury retreat in this popular hill station.',
    coordinates: { lat: 10.2381, lng: 77.4892 }
  },
  {
    id: 75,
    title: 'Restored Maratha Wada',
    location: 'Kolhapur, Maharashtra',
    price: 42000000, // 4.2 crore INR
    bedrooms: 5,
    bathrooms: 3,
    sqft: 4500,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Magnificent Maratha-era mansion with traditional courtyard layout, intricate woodwork, and period features. Meticulously restored with modern conveniences while preserving architectural heritage. Features include formal reception halls, family temple, and rooftop terrace. Located in historic district with easy access to Kolhapur\'s cultural attractions.',
    coordinates: { lat: 16.7050, lng: 74.2433 }
  },
  {
    id: 76,
    title: 'Mountain Agricultural Estate',
    location: 'Palampur, Himachal Pradesh',
    price: 55000000, // 5.5 crore INR
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Established tea estate in the Kangra Valley with 15 acres of productive tea gardens, processing facilities, and panoramic Dhauladhar range views. Includes charming colonial-style residence, manager\'s cottage, and staff quarters. Operating business with established distribution channels and tourism components. Perfect agricultural investment with hospitality potential.',
    coordinates: { lat: 32.1109, lng: 76.5340 }
  },
  {
    id: 77,
    title: 'Boutique Hotel Property',
    location: 'Varanasi, Uttar Pradesh',
    price: 125000000, // 12.5 crore INR
    bedrooms: 12,
    bathrooms: 14,
    sqft: 8500,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Historic riverside property in Varanasi with Ganges views, private ghats, and rooftop restaurant. Operating as successful heritage hotel with 12 luxury rooms, spa, yoga studio, and cultural performance space. Authentic architectural details beautifully preserved with tasteful modern updates. Excellent investment opportunity in India\'s oldest and most sacred city.',
    coordinates: { lat: 25.3176, lng: 83.0064 }
  },
  {
    id: 78,
    title: 'Modern Apartment with City View',
    location: 'Surat, Gujarat',
    price: 20000, // 20,000 INR/month
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1400,
    type: 'rent',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Contemporary apartment in Surat\'s upscale Vesu area with city views, modern finishes, and open floor plan. Features include modular kitchen, balcony, and dedicated work space. Building amenities include swimming pool, fitness center, and children\'s play area. Located in thriving neighborhood near Diamond Bourse, shopping malls, and educational institutions.',
    coordinates: { lat: 21.1702, lng: 72.8311 }
  },
  {
    id: 79,
    title: 'Wildlife Safari Resort',
    location: 'Bandhavgarh, Madhya Pradesh',
    price: 85000000, // 8.5 crore INR
    bedrooms: 10,
    bathrooms: 12,
    sqft: 7500,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566669437687-7040a6c79235?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Established wildlife resort near Bandhavgarh National Park with 10 luxury cottages, restaurant, reception area, and safari facilities. Set on 8 acres with forest views, organic gardens, and nature trails. Operating business with safari permits, trained staff, and excellent online presence. Prime investment in India\'s growing eco-tourism sector.',
    coordinates: { lat: 23.6307, lng: 81.0315 }
  },
  {
    id: 80,
    title: 'Historic Fort Conversion',
    location: 'Alwar, Rajasthan',
    price: 250000000, // 25 crore INR
    bedrooms: 15,
    bathrooms: 16,
    sqft: 25000,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1573790387438-4da905039392?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Extraordinary opportunity to own a converted fort in Alwar with panoramic views of the Aravalli Hills. Currently operating as exclusive heritage hotel with 15 suites, multiple dining venues, event spaces, and swimming pool. Authentic architecture with centuries of history combined with world-class luxury amenities. Significant national monument with lucrative hospitality business.',
    coordinates: { lat: 27.5530, lng: 76.6346 }
  },
  {
    id: 81,
    title: 'Himalayan Riverfront Cottage',
    location: 'Kullu, Himachal Pradesh',
    price: 38000000, // 3.8 crore INR
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Charming cottage along the Beas River with private access to river, mountain views, and apple orchard. Traditional Himachali architecture with modern comforts, featuring cedar wood interiors, stone fireplace, and panoramic windows. Located in tranquil area yet close to Kullu attractions and adventure activities.',
    coordinates: { lat: 31.9621, lng: 77.1089 }
  },
  {
    id: 82,
    title: 'Coffee Estate Homestay',
    location: 'Chikmagalur, Karnataka',
    price: 45000000, // 4.5 crore INR
    bedrooms: 4,
    bathrooms: 4,
    sqft: 2800,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Working coffee plantation with 20 acres of arabica and robusta varieties, processing facilities, and successful homestay business. Colonial-style bungalow with 4 guest rooms, dining hall, and panoramic Western Ghats views. Includes staff quarters, farm equipment, and established distribution channels. Excellent opportunity in India\'s coffee heartland.',
    coordinates: { lat: 13.3155, lng: 75.7755 }
  },
  {
    id: 83,
    title: 'Modern Desert Home',
    location: 'Jodhpur, Rajasthan',
    price: 32000000, // 3.2 crore INR
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 2400,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Contemporary desert home with Mehrangarh Fort views, combining traditional Rajasthani elements with modern architectural design. Features include courtyard with plunge pool, roof terrace, and passive cooling systems. Award-winning architecture utilizing local materials, solar power, and rainwater harvesting. Located in upscale neighborhood with excellent amenities.',
    coordinates: { lat: 26.2967, lng: 73.0351 }
  },
  {
    id: 84,
    title: 'Urban Penthouse with Rooftop Pool',
    location: 'Kolkata, West Bengal',
    price: 72000000, // 7.2 crore INR
    bedrooms: 4,
    bathrooms: 4.5,
    sqft: 3800,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Luxurious penthouse in Alipore with private rooftop infinity pool, 360-degree city views, and spacious entertaining areas. Features include Italian marble flooring, designer kitchen, home automation, and private elevator access. Building amenities include concierge, spa, fitness center, and valet parking. One of Kolkata\'s most prestigious addresses.',
    coordinates: { lat: 22.5196, lng: 88.3424 }
  },
  {
    id: 85,
    title: 'Business Center Office Suite',
    location: 'Chennai, Tamil Nadu',
    price: 75000, // 75,000 INR/month
    bedrooms: 0,
    bathrooms: 1,
    sqft: 1200,
    type: 'rent',
    images: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Premium office suite in Chennai\'s Central Business District with modern design, meeting rooms, and reception area. Building amenities include business center services, conference facilities, parking, and 24/7 security. Excellent location near financial institutions, tech companies, and transportation hubs. Flexible terms available for growing businesses.',
    coordinates: { lat: 13.0622, lng: 80.2332 }
  },
  {
    id: 86,
    title: 'Beachfront Restaurant Property',
    location: 'Goa, India',
    price: 65000000, // 6.5 crore INR
    bedrooms: 0,
    bathrooms: 4,
    sqft: 3200,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1571263801056-d5c7b92b4dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Established beachfront restaurant business with prime Candolim Beach location, outdoor dining deck, and panoramic sea views. Fully equipped commercial kitchen, bar area, dining hall, and guest facilities. Operating business with licenses, staff infrastructure, and excellent reviews. Outstanding opportunity in Goa\'s thriving tourism and hospitality market.',
    coordinates: { lat: 15.5165, lng: 73.7637 }
  },
  {
    id: 87,
    title: 'Suburban Family Apartment',
    location: 'Navi Mumbai, Maharashtra',
    price: 18000000, // 1.8 crore INR
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1500,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Modern family apartment in Kharghar with open floor plan, balcony with hill views, and contemporary finishes. Building amenities include swimming pool, children\'s play area, fitness center, and landscaped gardens. Located in family-friendly neighborhood with excellent schools, parks, and shopping centers nearby.',
    coordinates: { lat: 19.0469, lng: 73.0676 }
  },
  {
    id: 88,
    title: 'Wellness Center Property',
    location: 'Mysore, Karnataka',
    price: 52000000, // 5.2 crore INR
    bedrooms: 8,
    bathrooms: 9,
    sqft: 5500,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Established yoga and wellness center in Mysore with main building, guest cottages, yoga shala, and ayurvedic treatment rooms. Set on 3 acres with organic gardens, meditation spaces, and peaceful surroundings. Operating business with international clientele, trained staff, and excellent reputation. Perfect for wellness entrepreneurs or retreat center operators.',
    coordinates: { lat: 12.2958, lng: 76.6394 }
  },
  {
    id: 89,
    title: 'Traditional Village Home',
    location: 'Kutch, Gujarat',
    price: 8500000, // 85 lakh INR
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1000,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1574731579719-d04959907d8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Authentic Kutchi home with traditional mud and mirror work architecture, artisanal details, and courtyard design. Recently renovated with modern amenities while preserving cultural craftsmanship. Located in historic village with vibrant artisan community and access to the stunning White Rann salt desert. Perfect cultural immersion or boutique homestay opportunity.',
    coordinates: { lat: 23.2420, lng: 69.6669 }
  },
  {
    id: 90,
    title: 'Smart Co-Living Apartment',
    location: 'Bangalore, Karnataka',
    price: 20000, // 20,000 INR/month
    bedrooms: 1,
    bathrooms: 1,
    sqft: 650,
    type: 'rent',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Modern co-living space in Koramangala with private bedroom suite and shared common areas. Smart home features, contemporary design, and all-inclusive utilities. Community amenities include co-working spaces, fitness center, game room, and regular social events. Perfect for young professionals and digital nomads in Bangalore\'s tech hub.',
    coordinates: { lat: 12.9279, lng: 77.6271 }
  },
  {
    id: 91,
    title: 'Lakeview Apartment',
    location: 'Bhopal, Madhya Pradesh',
    price: 14500000, // 1.45 crore INR
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1250,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Contemporary apartment overlooking Upper Lake with panoramic water views, modern interiors, and private balcony. Building amenities include landscaped gardens, fitness center, and covered parking. Located in the City of Lakes\' most desirable neighborhood, close to VIP Road, restaurants, and cultural attractions.',
    coordinates: { lat: 23.2507, lng: 77.4112 }
  },
  {
    id: 92,
    title: 'Business Park Office Building',
    location: 'Noida, Uttar Pradesh',
    price: 280000000, // 28 crore INR
    bedrooms: 0,
    bathrooms: 10,
    sqft: 18000,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Modern commercial building in Noida\'s Sector 62 IT corridor with flexible floor plans, premium finishes, and excellent connectivity. Features include underground parking, advanced security systems, and energy-efficient design. Ideal for corporate headquarters, tech companies, or multi-tenant investment. Prime location in Delhi NCR\'s fastest-growing commercial hub.',
    coordinates: { lat: 28.5983, lng: 77.3159 }
  },
  {
    id: 93,
    title: 'Beach Club Property',
    location: 'Alibaug, Maharashtra',
    price: 165000000, // 16.5 crore INR
    bedrooms: 5,
    bathrooms: 6,
    sqft: 12000,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571263801056-d5c7b92b4dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Exclusive beachfront club with restaurant, bar, swimming pool, and guest accommodations. Set on 2 acres with private beach access, tropical landscaping, and panoramic Arabian Sea views. Operating business with licenses, staff quarters, and established Mumbai clientele. Outstanding investment in this premium weekend destination just a ferry ride from Mumbai.',
    coordinates: { lat: 18.6555, lng: 72.8777 }
  },
  {
    id: 94,
    title: 'Downtown Retail Space',
    location: 'Indore, Madhya Pradesh',
    price: 95000, // 95,000 INR/month
    bedrooms: 0,
    bathrooms: 1,
    sqft: 1800,
    type: 'rent',
    images: [
      'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Prime retail space in Indore\'s vibrant commercial district with street frontage, display windows, and modern utilities. Open floor plan with storage area and staff facilities. High foot traffic location on MG Road near major shopping centers, restaurants, and entertainment venues. Perfect for retail, showroom, or service business.',
    coordinates: { lat: 22.7239, lng: 75.8675 }
  },
  {
    id: 95,
    title: 'Riverside Luxury Villa',
    location: 'Srinagar, Jammu & Kashmir',
    price: 85000000, // 8.5 crore INR
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1613977257592-4a9a32f9141e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Exquisite wooden villa on Dal Lake with private boat dock, landscaped gardens, and panoramic mountain views. Traditional Kashmiri architecture with hand-carved walnut woodwork, khatamband ceiling, and papier-mâché details. Modern luxury amenities including spa bathroom, gourmet kitchen, and home theater. Paradise in the Valley of Kashmir.',
    coordinates: { lat: 34.0836, lng: 74.7973 }
  },
  {
    id: 96,
    title: 'Remote Mountain Retreat',
    location: 'Tawang, Arunachal Pradesh',
    price: 18000000, // 1.8 crore INR
    bedrooms: 4,
    bathrooms: 2,
    sqft: 2000,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1605630933954-8f7c708ee3bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Secluded mountain home in the Eastern Himalayas with panoramic views, traditional Monpa architecture, and modern comforts. Features include wood stoves, meditation room, and expansive viewing decks. Set on 1 acre with native landscaping and pristine natural surroundings. Perfect spiritual retreat or adventure tourism base in India\'s remote Northeast.',
    coordinates: { lat: 27.5859, lng: 91.8594 }
  },
  {
    id: 97,
    title: 'Boutique Guest House',
    location: 'Hampi, Karnataka',
    price: 32000000, // 3.2 crore INR
    bedrooms: 6,
    bathrooms: 6,
    sqft: 3200,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Established guest house in UNESCO World Heritage site with 6 en-suite rooms, restaurant, and rooftop yoga space. Constructed of local granite with traditional design elements and modern amenities. Panoramic views of ancient temple ruins and boulder-strewn landscape. Profitable tourism business in one of India\'s most fascinating historical destinations.',
    coordinates: { lat: 15.3350, lng: 76.4600 }
  },
  {
    id: 98,
    title: 'Waterfront Commercial Complex',
    location: 'Kochi, Kerala',
    price: 220000000, // 22 crore INR
    bedrooms: 0,
    bathrooms: 12,
    sqft: 15000,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Prime commercial property in Kochi\'s Marine Drive with waterfront location, flexible configurations, and excellent connectivity. Currently configured with retail spaces, office suites, and restaurant venues. Features include secure parking, backup power, and advanced building management systems. High-yielding investment in Kerala\'s commercial and tourism hub.',
    coordinates: { lat: 9.9771, lng: 76.2754 }
  },
  {
    id: 99,
    title: 'Urban Compact Studio',
    location: 'Delhi, India',
    price: 12000, // 12,000 INR/month
    bedrooms: 1,
    bathrooms: 1,
    sqft: 350,
    type: 'rent',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Cleverly designed micro-apartment in Karol Bagh with space-saving furniture, multifunctional areas, and contemporary finishes. Building includes rooftop terrace, laundry facilities, and security services. Central location with excellent connectivity via metro and walking distance to markets, restaurants, and entertainment venues.',
    coordinates: { lat: 28.6430, lng: 77.1892 }
  },
  {
    id: 100,
    title: 'Historic Temple View Haveli',
    location: 'Varanasi, Uttar Pradesh',
    price: 45000000, // 4.5 crore INR
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3800,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Extraordinary heritage property in Varanasi\'s spiritual heart with views of ancient temples and the sacred Ganges. Centuries-old haveli with traditional architecture, inner courtyard, and rooftop terrace. Restored with historical sensitivity and modern conveniences. Perfect for spiritual seekers, cultural enthusiasts, or boutique heritage hotel venture.',
    coordinates: { lat: 25.3080, lng: 83.0093 }
  }
];