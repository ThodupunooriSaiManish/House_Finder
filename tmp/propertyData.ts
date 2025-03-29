import { Property } from "@/types";

export const propertyData: Property[] = [
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
    location: 'Mumbai, India',
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
    location: 'Bangalore, India',
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
    location: 'Hyderabad, India',
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
    location: 'Shimla, India',
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
    location: 'Udaipur, India',
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
    location: 'Kolkata, India',
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
    location: 'Pune, India',
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
    location: 'Chennai, India',
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
    location: 'Jaipur, India',
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
    location: 'Kochi, India',
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
    location: 'Mumbai, India',
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
    location: 'Bangalore, India',
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
    location: 'Jaipur, India',
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
    location: 'Noida, India',
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
    location: 'Gurgaon, India',
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
    location: 'Chennai, India',
    price: 105000000, // 10.5 crore INR
    bedrooms: 4,
    bathrooms: 4,
    sqft: 3700,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566752806-b2f11f82b64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Luxurious penthouse with 270-degree views of the Bay of Bengal. Features include wraparound terrace, private pool, and designer interiors. Building amenities include private elevator access, 24/7 security, and exclusive beach access. One of the most prestigious addresses in Chennai.',
    coordinates: { lat: 13.0500, lng: 80.2800 }
  },
  {
    id: 19,
    title: 'Himalayan Retreat',
    location: 'Manali, India',
    price: 42000000, // 4.2 crore INR
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2000,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Spectacular mountain home with unobstructed views of the Himalayas. Cedar wood construction with stone accents, floor-to-ceiling windows, and central fireplace. Includes spacious deck, fruit orchard, and natural spring on property. Perfect for nature lovers seeking tranquility with modern comforts.',
    coordinates: { lat: 32.2396, lng: 77.1887 }
  },
  {
    id: 20,
    title: 'Luxury Apartment',
    location: 'Ahmedabad, India',
    price: 47000000, // 4.7 crore INR
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1850,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Premium apartment in a prestigious neighborhood with contemporary design, imported marble flooring, and designer lighting. Features include chef\'s kitchen, home automation system, and spacious balconies. Located in a luxury community with clubhouse, swimming pool, and landscaped gardens.',
    coordinates: { lat: 23.0225, lng: 72.5714 }
  },
  {
    id: 21,
    title: 'Elegant Bungalow',
    location: 'Lucknow, India',
    price: 35000000, // 3.5 crore INR
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1597047084897-51e81819a499?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Charming bungalow with Nawabi-style architecture in a prestigious neighborhood. Features include courtyards, high ceilings, and traditional elements blended with modern amenities. Landscaped garden with mature trees and covered parking for 3 vehicles. Located near historical landmarks and city conveniences.',
    coordinates: { lat: 26.8467, lng: 80.9462 }
  },
  {
    id: 22,
    title: 'Luxury Apartment',
    location: 'Pune, India',
    price: 32000, // 32,000 INR/month
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1400,
    type: 'rent',
    images: [
      'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560185127-95789419ffe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Upscale apartment in Koregaon Park with modern amenities, designer kitchen, and spacious balcony. Community features include swimming pool, landscaped gardens, and fitness center. Located in a vibrant neighborhood with premium dining, shopping, and entertainment options within walking distance.',
    coordinates: { lat: 18.5308, lng: 73.8975 }
  },
  {
    id: 23,
    title: 'Spacious Family Home',
    location: 'Chandigarh, India',
    price: 42000000, // 4.2 crore INR
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2600,
    type: 'sale',
    images: [
      'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Beautiful family home in Sector 8 with open floor plan, updated kitchen, and landscaped garden. Features home office, entertainment room, and outdoor dining area. Located in a tree-lined neighborhood with excellent access to schools, parks, and shopping centers.',
    coordinates: { lat: 30.7333, lng: 76.7794 }
  },
  {
    id: 24,
    title: 'Stylish Town House',
    location: 'Hyderabad, India',
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
  }
];
