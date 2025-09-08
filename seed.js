const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// 📦 Models import
const Faq = require("./models/Faq");
const Testimonial = require("./models/Testimonial");
const Blog = require("./models/Blog");
const Service = require("./models/Service");
const Contact = require("./models/Contact");
const HomeSection = require("./models/HomeSection");
const Setting = require("./models/Setting");
const User = require("./models/User");
const Shop = require("./models/shop");
const PrivacyPolicy = require("./models/PrivacyPolicy");

const bcrypt = require("bcryptjs");

// 🧠 MongoDB connection string
const mongoURI = "mongodb+srv://parwinderkaur385:0SYLwbGaoEFzO1LK@sanchitwebapp.eaptc00.mongodb.net/PoojaMohata?retryWrites=true&w=majority&appName=SanchitWebApp";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log("✅ MongoDB connected for seeding.");

  // Clean old data
  await Faq.deleteMany({});
  await Testimonial.deleteMany({});
  await Blog.deleteMany({});
  await Service.deleteMany({});
  await Contact.deleteMany({});
  await HomeSection.deleteMany({});
  await Setting.deleteMany({});
  await User.deleteMany({});
  await Shop.deleteMany({});
  await PrivacyPolicy.deleteMany({});
console.log("🧹 Old data cleared.");

  // 👉 FAQ
  await Faq.insertMany([
    {
      title: "What is Vaastu and how does it help?",
      description: "Vaastu is an ancient science of architecture and energy alignment. By balancing the five elements—earth, water, fire, air, and space—it enhances harmony, prosperity, and well-being in your home or workplace."
    },
    {
      title: "Do you provide services for both homes and businesses?",
      description: "Yes. We offer Vaastu and interior consultations for residential, commercial, and industrial projects, ensuring every space is aligned with positive energy and functionality."
    },
    {
      title: "Are consultations available online?",
      description: "Yes, you can book online consultations from anywhere in India. We also conduct virtual sessions for astrology, numerology, tarot, and mobile numerology."
    },
    {
      title: "Do I need structural changes to apply Vaastu?",
      description: "Not always. In most cases, small corrections, placements, and energy remedies can bring balance without major renovations."
    },
    {
      title: "Do you offer training or classes?",
      description: "Yes, we provide online classes in Vaastu Shastra, Astrology, Numerology, and Tarot for beginners as well as advanced learners."
    }
  ]);

  // 👉 Testimonials
  await Testimonial.insertMany([
    { userName: "Anjali Mehra", description: "Her Vaastu guidance transformed the energy of my home. Truly life-changing experience!" },
    { userName: "Rohit Sharma", description: "Professional and accurate consultation. My office started performing better after her inputs." },
    { userName: "Neetu Kapoor", description: "Astrology and numerology insights were spot on. Helped me take key life decisions." },
    { userName: "Suresh Jain", description: "Excellent knowledge of both interior design and Vaastu. Highly recommend." },
    { userName: "Priya Singh", description: "The tarot reading gave me clarity and confidence. Thank you for your guidance!" }
  ]);

  // 👉 Blogs
  await Blog.insertMany([
  {
    title: "Why Vaastu is Essential for Modern Homes",
    image: "/images/content/blog1.jpg",
    dateOfPost: new Date("2025-01-12"),
    description: "Vaastu Shastra is not merely about directions, it is a deep science of harmonizing energy in the spaces where we live and work. In today’s modern lifestyle, homes are often designed keeping luxury and aesthetics in mind, but somewhere the natural balance is ignored. This imbalance creates unseen disturbances in health, wealth, and relationships. Vaastu helps to integrate both comfort and harmony by aligning your home with the five natural elements – earth, water, fire, air, and space. A home aligned with Vaastu principles allows natural energy to flow smoothly, ensuring positivity and prosperity. Small changes, like placing mirrors correctly, positioning the kitchen in the right direction, or arranging the furniture according to the elements, can bring remarkable results without heavy expenses. Vaastu for modern homes is not about superstition but about science and practicality. When sunlight, ventilation, and layout are balanced, the home feels more peaceful and welcoming. Families often report improved relationships, reduced stress, and enhanced productivity when their houses follow Vaastu guidelines. In urban apartments where structural changes are difficult, even simple remedies like using specific colors, plants, or crystals can bring big energy shifts. Modern architects and interior designers are now realizing the importance of Vaastu as it adds more value to both the property and the life of residents. By blending technology and tradition, Vaastu ensures that your modern lifestyle remains luxurious yet energetically balanced. A Vaastu-compliant home is not just a living space, it becomes a source of health, happiness, and long-term success."
  },
  {
    title: "Numerology and Your Home Number",
    image: "/images/content/blog2.jpg",
    dateOfPost: new Date("2025-02-20"),
    description: "Numerology is the mystical study of numbers and their impact on human life. Did you know that even the number of your home carries vibrations that directly influence your family’s health, relationships, and financial stability? Every house has a number, and that number resonates with a certain frequency that attracts or repels specific energies. For example, a home with the number 1 may encourage independence and leadership, while a number 6 home radiates harmony and family love. The process begins by calculating your house number – adding up all digits until you get a single number. Once you know the number, you can decode the qualities it brings into your life. If your home number clashes with your personal life path number, you may face unnecessary struggles. But numerology offers easy remedies. From placing certain crystals to adjusting the nameplate, small corrections can shift the energy of your home. A numerologically aligned home number helps attract positivity, opportunities, and mental peace. Many families have noticed that after applying numerology remedies, relationships improve, financial flow stabilizes, and the house feels lighter and happier. Numerology is not about changing your address but about harmonizing the energy of your current home with your destiny. In today’s fast life, where stress and conflicts are common, having a home that vibrates with the right energy is essential. Numerology empowers you to create a space where every member feels aligned, supported, and uplifted by the unseen yet powerful force of numbers."
  },
  {
    title: "Vaastu for Industrial Success",
    image: "/images/content/blog3.jpg",
    dateOfPost: new Date("2025-03-10"),
    description: "Industries are not just about machines, workers, and raw materials—they are living ecosystems where energy flow directly impacts production, profit, and growth. Vaastu for industries is designed to align factories, warehouses, and plants with the universal principles of energy balance. When heavy machinery is placed in the wrong zone or the main gate faces an unfavorable direction, it can cause repeated breakdowns, financial losses, or worker unrest. By applying Vaastu, industries can correct these imbalances and channelize positive energy into their operations. For example, placing water sources like tanks in the northeast ensures financial stability, while locating heavy machinery in the southwest brings strength and long-term growth. Similarly, the office cabin of the owner must be placed in the right direction to enhance decision-making and leadership. Many successful industries follow Vaastu principles to ensure smooth operations, harmony among employees, and steady expansion. Even if a factory is already built, small modifications and remedies can improve the flow of energy without major construction changes. Industrial Vaastu is not a superstition but a strategic tool that helps businesses function in alignment with natural laws. It minimizes risks, prevents accidents, and improves the morale of workers. In today’s competitive world, where industries are under constant pressure to perform, applying Vaastu provides a hidden yet powerful advantage. It creates an invisible shield of protection and prosperity, ensuring long-term stability and success."
  },
  {
    title: "How Tarot Complements Astrology",
    image: "/images/content/blog4.jpg",
    dateOfPost: new Date("2025-03-25"),
    description: "Astrology and Tarot are two ancient systems of divination and guidance, each with its unique strengths. Astrology is based on the movement of planets and their influence on human life, providing a long-term roadmap of destiny. It reveals patterns, cycles, and timings, helping you understand major life events and the right periods for important decisions. Tarot, on the other hand, offers immediate clarity through symbolic cards that reflect your subconscious mind and present situation. When used together, they complement each other beautifully. For example, astrology might show that you are entering a favorable period for career growth, but tarot can answer whether you should accept a specific job offer right now. Astrology is like a map of your journey, while tarot is like a mirror reflecting the present moment. Together, they offer holistic guidance—astrology gives the big picture, and tarot provides real-time advice. Many people find that combining these tools helps them make better choices in love, career, business, and spirituality. Tarot also brings emotional healing, while astrology gives logical explanations. Both connect you with universal energy, ensuring that your decisions are not only practical but also aligned with higher guidance. This powerful combination is widely used by counselors, spiritual coaches, and seekers worldwide. By blending astrology’s precision with tarot’s intuition, you gain the best of both worlds—clarity, confidence, and a sense of purpose in every step of your life."
  }
]);


  // 👉 Services
  await Service.insertMany([
  { 
    title: "Vaastushastra Consultation", 
    description: "Vaastushastra Consultation is a comprehensive service designed to harmonize the energy of your living or working space. By analyzing the structure, directions, placement of rooms, and flow of natural elements, we provide remedies that align with universal energies. This consultation is not limited to houses but extends to offices, shops, commercial complexes, and industrial sites. Our expert approach blends ancient wisdom with modern practicality, so you don’t always need structural changes. Small corrections like placing mirrors, plants, or energy tools can bring big positive shifts. Clients have reported improvement in peace, prosperity, and family harmony. Whether you’re building a new property or seeking corrections in an existing one, Vaastushastra consultation helps attract success, wealth, and well-being for everyone in the space. A balanced environment brings clarity of mind, better decision-making, and holistic growth, making it an essential service for anyone who values both material success and spiritual alignment.", 
    price: 1999, 
    image: "/images/content/services/vastu.png" 
  },
  { 
    title: "Industrial Vaastu", 
    description: "Industrial Vaastu focuses on aligning large-scale factories, warehouses, and industrial setups with positive energy flow. In industries, placement of heavy machinery, direction of entry gates, water flow, positioning of raw materials, and even staff seating play a crucial role in productivity and profitability. With our customized Industrial Vaastu consultation, we identify energy blockages that may be causing delays, losses, or conflicts. Through strategic corrections—without major demolition—we help create an environment where production efficiency improves, workers feel motivated, and the company attracts prosperity. Clients have experienced smoother operations, faster growth, and expansion after implementing Industrial Vaastu principles. This service is highly recommended for entrepreneurs setting up new industries as well as established factories facing stagnation. Industrial Vaastu ensures that the company’s energy aligns with growth, harmony, and long-term sustainability.", 
    price: 2999, 
    image: "/images/content/services/industraial.png" 
  },
  { 
    title: "Commercial Vaastu", 
    description: "Commercial Vaastu consultation helps businesses like shops, offices, restaurants, showrooms, and clinics attract more customers, build trust, and boost sales. The energy of a commercial space strongly influences customer behavior, employee performance, and overall business success. With our guidance, you’ll know the best direction for entrances, seating, billing counters, product displays, and even lighting to maximize positive vibrations. For shops, proper placement attracts more footfall and repeat customers. Offices benefit from improved teamwork, focus, and leadership energy. Our consultation is flexible—you don’t always need renovations; sometimes simple adjustments bring visible results. Commercial Vaastu ensures that the business environment radiates positivity, attracts wealth, and builds a strong brand presence. Whether you’re launching a startup or running an established firm, this service provides clarity and energy balance for long-term business growth.", 
    price: 2499, 
    image: "/images/content/services/commercial.jpg" 
  },
  { 
    title: "Residential Vaastu", 
    description: "Residential Vaastu consultation brings peace, prosperity, and happiness to your home. A house is not just a physical structure—it’s an energy center that deeply affects the lives of its residents. Through this service, we assess the placement of bedrooms, kitchen, bathrooms, entrance, and living areas to ensure harmony among the five elements: earth, water, fire, air, and space. Even minor misalignments can create conflicts, health issues, or financial struggles. By suggesting corrections like rearranging furniture, using specific colors, or placing remedies, we help restore positive vibrations. Families who follow Residential Vaastu experience better relationships, improved health, and a calm atmosphere. This service is perfect for both new home buyers and existing homeowners. A well-aligned home invites peace, growth, and blessings, ensuring the family lives in harmony with nature and universal energies.", 
    price: 1499, 
    image: "/images/content/services/residential.jpg" 
  },
  { 
    title: "Astrology Consultation", 
    description: "Astrology Consultation is designed to give you clarity about your life path using your birth chart. By studying planetary positions and their impact, we provide guidance on career, relationships, finance, education, health, and marriage. Astrology doesn’t just predict—it reveals opportunities, challenges, and timings for important life decisions. Our consultation includes analyzing your Dasha (planetary periods), transits, and yogas to guide you in making informed choices. Whether you are facing confusion about career, waiting for the right time to marry, or struggling with financial decisions, astrology provides a roadmap. We also suggest remedies like gemstones, mantras, or lifestyle changes for balancing planetary energies. Clients have found this service extremely helpful in gaining confidence and moving forward in life with clarity. Astrology consultation is like a guiding light in the journey of life.", 
    price: 999, 
    image: "/images/content/vdk_kndl.png" 
  },
  { 
    title: "Numerology Consultation", 
    description: "Numerology Consultation helps you understand the hidden power of numbers in your life. Every name and date of birth vibrates with a unique frequency that shapes your personality, opportunities, and challenges. With this service, we analyze your life path number, destiny number, and name vibrations to align you with success. Many clients have discovered how simple changes, like modifying their signature or adjusting their brand name, brought major positive results. Numerology is especially powerful for entrepreneurs, students, and professionals who want to unlock hidden potential. It also helps in understanding compatibility in relationships and decision-making. Remedies are simple yet effective, involving changes in names, numbers, or daily practices. Numerology brings self-awareness and guidance, ensuring that your actions are aligned with universal energies for better outcomes.", 
    price: 999, 
    image: "/images/content/index/numerology.jpg" 
  },
  { 
    title: "Mobile Numerology", 
    description: "Mobile Numerology focuses on the vibration of your mobile number and how it influences your personal and professional life. Since we spend most of our day communicating through phones, the number we use regularly holds great energy. A wrong mobile number can attract unnecessary stress, miscommunication, and delays, while a supportive number enhances luck, business growth, and harmony. In this consultation, we analyze your existing mobile number with your birth details and suggest whether it supports you or needs a change. Many clients have reported better opportunities, smoother communication, and improved confidence after aligning their mobile number. It’s a simple yet powerful way to attract positivity in daily life, especially for professionals, entrepreneurs, and those facing delays in career or personal matters. Mobile Numerology ensures your daily communication tool becomes a magnet for success and luck.", 
    price: 599, 
    image: "/images/content/services/mobile.jpg" 
  },
  { 
    title: "Tarot Reading", 
    description: "Tarot Reading is a powerful tool for immediate clarity and guidance in life. Unlike astrology which is long-term, tarot answers your present questions with accuracy and intuition. Through cards, we uncover hidden truths, challenges, and possible outcomes in areas like love, career, relationships, and decision-making. Tarot doesn’t control your destiny—it gives you the insight needed to make empowered choices. Many clients use tarot as a regular guidance tool before making key moves. It also helps in understanding subconscious fears and desires. The reading is interactive, allowing you to ask questions and receive guidance in real-time. Whether you are stuck in confusion, seeking clarity about the future, or needing spiritual reassurance, tarot provides direct answers. It is a quick yet deep way to gain confidence and direction in life.", 
    price: 799, 
    image: "/images/content/index/Tarot-Card.jpg" 
  },
  { 
    title: "Spell Casting", 
    description: "Spell Casting is a personalized energy service where rituals, affirmations, and tools are used to manifest your goals and remove blockages. Unlike myths, spell casting is not about superstition—it is about channeling focused intention with universal energies. Depending on your need—love, career, business growth, or protection—we design customized rituals. These may include candles, affirmations, energy circles, or spiritual remedies that align your vibrations with your desires. Many clients have experienced shifts in relationships, opportunities, and confidence after spell casting. It works like a spiritual push that removes negative blocks and clears the path for success. Spell casting is safe, personalized, and deeply empowering. It brings transformation in subtle yet powerful ways, ensuring your life moves in the right direction with positivity and strength.", 
    price: 1999, 
    image: "/images/content/services/spell.png" 
  },
  { 
    title: "Online Classes", 
    description: "Our Online Classes are structured programs where you can learn Vaastu, Astrology, Numerology, and Tarot from experts. These classes are designed for both beginners and advanced learners. With easy-to-follow modules, practical exercises, and personalized guidance, you gain hands-on knowledge that you can apply in real life. Classes are conducted through live sessions, recorded lectures, and study material. Many students have successfully started their own consultation services after completing our training. Online learning allows you to study from anywhere at your own pace while still receiving expert mentorship. Whether you want to build a professional career in spiritual sciences or simply gain personal knowledge, our courses provide the perfect balance of theory and practice. By the end of the training, you’ll have the confidence to guide others and make a positive difference using these ancient sciences.", 
    price: 4999, 
    image: "/images/content/services/online-learning.jpg" 
  }
]);


  // 👉 Home Sections
await HomeSection.insertMany([ 
  {
    title: "KNOW THE DIRECTIONS",
    paragraphNo: 1,
    description: "Vastu for the house is important than geography.",
    image: "/images/content/index/Vastu-shashtra1-.jpg"
  },{
    title: "Vaastu and Interior Expertise Since 2010",
    paragraphNo: 2,
    description: "Our journey began in 2010 with a deep passion for blending traditional wisdom with modern design. With an academic foundation in BSc Interior Design, an MBA in Project Management, and a PGDM in Vastushastra, we bring a strong mix of creativity and science to every project. Over the years, we have helped countless families and businesses design spaces that are not just beautiful but also energetically aligned. Our expertise ensures that every corner of a house or office resonates with positive vibrations. Interior design often focuses on beauty, but when combined with Vaastu principles, it becomes a holistic process that improves health, wealth, and harmony. Clients have experienced better concentration, improved relationships, and increased opportunities after aligning their interiors with Vaastu. Our long-standing experience allows us to identify even the smallest energy imbalances and provide practical solutions. From furniture placement to wall colors, we customize every detail according to energy flow. The result is a space that looks stunning and feels peaceful at the same time. This expertise, gained over more than a decade, sets us apart in the field of Vaastu-based interior design.",
    image: "/images/content/service_single.jpg"
  },
  {
    title: "Transforming Spaces with Science and Spirituality",
    paragraphNo: 3,
    description: "Since 2016, Vaastu Interio has been dedicated to combining modern architectural science with the spiritual wisdom of Vaastu. We believe that every space has its own energy, and when it is properly balanced, it supports success, health, and happiness. Our approach is not about superstition—it is about scientific alignment and practical solutions. By analyzing directions, energy points, and element balance, we design environments that naturally support human well-being. At the same time, we integrate spirituality into our work by recommending simple remedies like crystals, plants, and natural light adjustments. This fusion of science and spirituality ensures that you do not need to choose between modernity and tradition—you can enjoy both in harmony. Many of our clients have shared stories of improved finances, better health, and greater peace of mind after applying our suggestions. Our mission is to transform spaces into positive ecosystems where every person feels uplifted. Whether it’s a home, an office, or a large project, we focus on energy alignment that is both practical and deeply spiritual.",
    image: "/images/content/about/hr-abt2.jpg"
  },
  {
    title: "Wide Range of Services",
    paragraphNo: 4,
    description: "One of our strengths is the diversity of services we provide under one roof. We understand that every individual has different needs—some may seek Vaastu solutions, while others are curious about Astrology, Numerology, or Tarot guidance. That is why we created a holistic platform that caters to all these areas. Our Vaastu services help balance spaces, our Astrology sessions provide long-term clarity, Numerology reveals hidden influences of numbers, while Tarot gives instant guidance for everyday decisions. Along with these, we also offer Spell Casting and healing sessions for those who want to remove blockages and manifest success. For learners, our structured online training programs make it easy to study Vaastu, Astrology, Numerology, and Tarot from the comfort of home. This wide variety ensures that no matter what area of life you want to improve—career, health, love, or finances—you will find the right guidance here. Our integrated services save time and provide complete clarity, making us a one-stop solution for all spiritual and energetic needs.",
    image: "/images/content/about/vastu_abt.jpg"
  },
  {
    title: "KNOW THE DIRECTIONS",
    paragraphNo: 5,
    description: "Directions play a vital role in Vaastu because each one holds unique energies that influence specific aspects of life. For example, the northeast is connected to prosperity and clarity, the southeast is linked to fire and energy, while the southwest governs stability and strength. Many people design homes without considering these energies, which creates imbalance. Knowing the directions allows us to place rooms, furniture, and utilities in the most beneficial zones. For instance, having a bedroom in the southwest ensures long-term stability in relationships, while placing a study room in the northeast improves focus and concentration. Even small corrections, like shifting the position of a desk or placing a water element in the right corner, can create powerful shifts. Vaastu is not about rebuilding your house from scratch but about making intelligent choices with the directions already available. By understanding and respecting the directions, you can create a home or office that works with you instead of against you. This simple awareness can transform the way energy flows in your life.",
    image: "/images/content/about/hr-abt1.jpg"
  },
  {
    title: "Easy Online Consultation",
    paragraphNo: 6,
    description: "We understand that not everyone can travel to meet a consultant, which is why we offer easy and effective online consultations. Whether you live in India or abroad, you can connect with us through a video call or phone call and receive accurate guidance. Our process is simple—you share your property layout or birth details (for Astrology and Numerology), and we analyze them thoroughly. Within a short time, you get personalized remedies and action steps that you can apply immediately. Online consultations save time, are cost-effective, and allow you to get expert advice from the comfort of your home. Many clients who live in metro cities or outside India rely on our online consultations for regular guidance. We also provide follow-up support to ensure that you get clarity even after the session. Whether you want Vaastu corrections, a Numerology report, or a Tarot reading, everything can be managed online with equal accuracy. This flexibility ensures that help is always just a call or message away, making spiritual and energy guidance accessible to everyone.",
    image: "/images/content/services/online-learning.jpg"
  }
]);


  // 👉 Shop
  await Shop.insertMany([
    { title: "Vaastu Book", image: "/images/content/Products/Navgrah.jpg", description: "Comprehensive guide to Vaastu principles for beginners and experts.", price: 499 },
    { title: "Crystal Pyramid", image: "/images/content/Products/Gemstone.jpg", description: "Energy balancing crystal pyramid to harmonize your space.", price: 799 },
    { title: "Astrology Chart Report", image: "/images/content/Products/Rudhrakhsa.jpg", description: "Detailed astrological birth chart and predictions.", price: 999 },
    { title: "Numerology Name Report", image: "/images/content/Products/Jadi-Buti.jpg", description: "Personalized name and number compatibility analysis.", price: 599 },
    { title: "Tarot Deck", image: "/images/content/Products/Girft-Item.jpg", description: "High quality tarot deck for readings and self-guidance.", price: 1499 },
    { title: "Yantra for Prosperity", image: "/images/content/Products/Fengshui.jpg", description: "Sacred yantra energised for wealth and abundance.", price: 1299 },
    { title: "Meditation Kit", image: "/images/content/Products/thumb1.jpg", description: "Complete kit with incense, crystals, and guidebook for daily meditation.", price: 899 },
    { title: "Online Course Access", image: "/images/content/Products/slide1.jpg", description: "Lifetime access to Vaastu & Astrology fundamentals online course.", price: 4999 },
    { title: "Online Course", image: "", description: "Lifetime access to Vaastu & Astrology fundamentals online course.", price: 4999 }
  ]);


  // 👉 Privacy Policy
  await PrivacyPolicy.insertMany([
    { title: "Introduction", description: "We value your privacy and are committed to protecting your personal data when you use our website and services." },
    { title: "Information Collection", description: "We collect personal details such as name, email, and phone number only when voluntarily provided during booking or purchases." },
    { title: "Use of Data", description: "Collected information is used to provide consultations, process payments, and deliver purchased products or services." },
    { title: "Payment Security", description: "All payment transactions are encrypted and processed through secure gateways. We do not store card or banking details." },
    { title: "Cookies Policy", description: "Our website uses cookies to improve user experience and analyze site traffic. You can disable cookies in your browser settings." },
    { title: "Third Party Sharing", description: "We never sell or share personal data with third parties, except when required by law or essential for service delivery." },
    { title: "User Rights", description: "You have the right to request access, update, or deletion of your personal data stored with us at any time." },
    { title: "Policy Updates", description: "We may update this Privacy Policy periodically. Users will be notified of major changes via email or website notice." }
  ]);

  await Contact.insertMany([
    { name: "Anjali Mehra", email: "anjali@gmail.com", contact: "9876543210", message: "I want a Vaastu consultation for my new flat." },
    { name: "Rohit Sharma", email: "rohit@gmail.com", contact: "9876501234", message: "Looking for astrology guidance for career." },
    { name: "Priya Singh", email: "priya@gmail.com", contact: "8765432109", message: "Interested in numerology consultation." },
    { name: "Aman Verma", email: "aman@gmail.com", contact: "7654321098", message: "Need tarot reading for relationship guidance." },
    { name: "Neha Kapoor", email: "neha@gmail.com", contact: "9876123450", message: "Do you provide online classes for Vaastu?" },
    { name: "Suresh Jain", email: "suresh@gmail.com", contact: "9898123456", message: "I want help with industrial Vaastu." },
    { name: "Kavita Arora", email: "kavita@gmail.com", contact: "9765432109", message: "Looking for spell casting service." },
    { name: "Deepak Yadav", email: "deepak@gmail.com", contact: "9897654321", message: "Need guidance on my horoscope." },
    { name: "Simran Kaur", email: "simran@gmail.com", contact: "9767895432", message: "Can you suggest name correction with numerology?" },
    { name: "Pooja Bansal", email: "pooja@gmail.com", contact: "9898001122", message: "Do you provide consultation for commercial shops?" },
    { name: "Arjun Malhotra", email: "arjun@gmail.com", contact: "9876009988", message: "I want to join your astrology course." },
    { name: "Meena Joshi", email: "meena@gmail.com", contact: "9898223344", message: "Please suggest remedies for health through Vaastu." }
  ]);

  // 👉 Settings
  await Setting.create({
    logoImage: '/images/header/logo.png',
    email: "pooja.mohta2288@gmail.com",
    number: "+91-9743721222",
    address: "Hiranandani Estate, Thane, Mumbai",
    instagramLink: "https://www.instagram.com/vaastuinterio",
    whatsappLink: "https://wa.me/919743721222",
    facebookLink: "https://www.facebook.com/vaastuinterio",
    whatWeProvide: "At Vaastu Interio, we blend the science of Vaastu with modern interior design. With over 15 years of expertise, we help you create spaces that radiate balance, prosperity, and well-being.",
    aboutImage: "/images/content/about/hr-abt2.jpg",
    aboutMe: "Pooja Mohta",
    aboutDescription: "With expertise in Interior Design, MBA Project Management, and PGDM in Vaastu Shastra, Pooja Mohta brings a holistic approach to space design and energy alignment."
  });

  // 👉 Admin User
  const hashedPassword = await bcrypt.hash("vaastu@1234", 10);
  await User.create({
    name: "Pooja Mohta",
    email: "pooja.mohta2288@gmail.com",
    password: hashedPassword
  });
  console.log("✅ Admin user created: Email - pooja.mohta2288@gmail.com | Password - vaastu@1234");
  console.log("✅ Sample data inserted successfully!");
  process.exit();
}).catch(err => {
  console.error("❌ Error during seeding:", err);
  process.exit(1);
});
