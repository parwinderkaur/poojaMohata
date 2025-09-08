const Faq = require("../models/Faq");
const Testimonial = require("../models/Testimonial");
const Blog = require("../models/Blog");
const Service = require("../models/Service");
const Home = require("../models/HomeSection");
const Setting = require("../models/Setting");
const Shop = require("../models/shop");
const PrivacyPolicy = require("../models/PrivacyPolicy");

const moment = require('moment');
const Contact = require("../models/Contact");

module.exports = {
  // HOME PAGE
  home: async (req, res) => {
    try {
      const [settings, sections, service, faqs, testimonials] = await Promise.all([
        Setting.findOne().lean(),
        Home.find({ status: 1 }).sort({ paragraphNo: 1 }).lean(),
        Service.find({ status: 1 }).sort({ paragraphNo: 1 }).lean(),
        Faq.find({ status: 1 }).lean(),
        Testimonial.find({ status: 1 }).lean()
      ]);
      // Home.find({ status: 1 }).lean(),
      res.render("index", {
        layout: 'layout/master',
        title: settings?.metaTitle || 'Vastu Interio || Home',
        settings,
        sections,
        service,
        faqs,
        testimonials
      });
    } catch (err) {
      console.error("Home controller error:", err);
      res.status(500).send("Internal Server Error");
    }
  },

  // SERVICES LIST PAGE
  services: async (req, res) => {
    try {
      const [settings, services] = await Promise.all([
        Setting.findOne().lean(),
        Service.find({ status: 1 }).lean()
      ]);
      res.render("services", {
        layout: 'layout/master',
        title: 'Vastu Interio || Services',
        services,
        settings
      });
    } catch (err) {
      console.error("Services Error:", err);
      res.status(500).send("Internal Server Error");
    }
  },

  // SERVICE DETAIL PAGE
  serviceDetail: async (req, res) => {
    try {
      const [settings, service, servicesList] = await Promise.all([
        Setting.findOne().lean(),
        Service.findById(req.params.id).lean(),
        Service.find({_id: { $ne: req.params.id },  status: 1 }).lean()
    ]);
    
      if (!service) {
        return res.status(404).render("errors/404", { layout: false });
      }
      res.render("service_single", {
        layout: 'layout/master',
        title: service.title,
        service,
        settings,servicesList
      });
    } catch (err) {
      console.error("Service Detail Error:", err);
      res.status(500).send("Internal Server Error");
    }
  },

  // CONTACT PAGE
  contact: async (req, res) => {
    try {
      const settings = await Setting.findOne().lean();
      res.render("contact", {
        layout: 'layout/master',
        title: 'Vastu Interio || Contact Us',
        settings
      });
    } catch (err) {
      console.error("Contact Page Error:", err);
      res.status(500).send("Internal Server Error");
    }
  },
  contactApi: async (req, res) => {
    try {
      const data = {
        name: req.body.name,
        email: req.body.email,
        contact: req.body.phone,
        message: req.body.message,
      };
    
      const savedContact = await Contact.create(data);
  
      if (!savedContact) {
        return res.status(400).json({ success: false, message: "Contact could not be saved" });
      }
  
      return res.json({
        success: true,
        message: "Submitted successfully! Our team will get back to you soon.",
        data: savedContact,
      });
  
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "An error occurred while submitting the contact form.",
        error: err.message,
      });
    }
  },

  // BLOG LIST PAGE
  blog: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = 6; // 6 blogs per page
      const skip = (page - 1) * limit;

      const [settings, blogs, totalBlogs] = await Promise.all([
        Setting.findOne().lean(),
        Blog.find({ status: 1 }).sort({ dateOfPost: -1 }).skip(skip).limit(limit).lean(),
        Blog.countDocuments({ status: 1 })
      ]);

      const totalPages = Math.ceil(totalBlogs / limit);

      res.render("blog", {
        layout: 'layout/master',
        title: 'Vastu Interio || Blogs',
        blogs,
        settings,
        moment,
        page,
        totalPages
      });
    } catch (err) {
      console.error("Blogs Error:", err);
      res.status(500).send("Internal Server Error");
    }
  },

  // BLOG DETAIL PAGE
  blogDetails: async (req, res) => {
    try {
      const [settings, blog] = await Promise.all([
        Setting.findOne().lean(),
        Blog.findById(req.params.id).lean()
      ]);
      if (!blog) {
        return res.status(404).render("errors/404", { layout: false });
      }
      res.render("blog_single", {
        layout: 'layout/master',
        title: blog.title,
        blog,moment,
        settings
      });
    } catch (err) {
      console.error("Blog Detail Error:", err);
      res.status(500).send("Internal Server Error");
    }
  },
   // BLOG LIST PAGE
  appointment: async (req, res) => {
    try {
      const [settings] = await Promise.all([
        Setting.findOne().lean()
      ]);
      res.render("appointment", {
        layout: 'layout/master',
        title: 'Vastu Interio || Appointment',
        moment,
        settings
      });
    } catch (err) {
      console.error("Appointment Error:", err);
      res.status(500).send("Internal Server Error");
    }
  },
   // SHOP LIST PAGE
  // shop controller with pagination
  shop: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;  // current page
      const limit = 6;  // products per page
      const skip = (page - 1) * limit;

      const [settings, total, shop] = await Promise.all([
        Setting.findOne().lean(),
        Shop.countDocuments({ status: 1 }),
        Shop.find({ status: 1 }).sort({ dateOfPost: -1 }).skip(skip).limit(limit).lean()
      ]);

      const totalPages = Math.ceil(total / limit);

      res.render("shop", {
        layout: 'layout/master',
        title: 'Vastu Interio || Shop',
        shop,
        moment,
        settings,
        currentPage: page,
        totalPages
      });
    } catch (err) {
      console.error("Shop Error:", err);
      res.status(500).send("Internal Server Error");
    }
  },
   // ABOUT LIST PAGE
  about: async (req, res) => {
    try {
      const [settings, testimonial] = await Promise.all([
        Setting.findOne().lean(),
        Testimonial.find({ status: 1 }).sort({ dateOfPost: -1 }).lean()
      ]);
      console.log("===testimonial=====",testimonial);
      res.render("about", {
        layout: 'layout/master',
        title: 'Vastu Interio || About',
        testimonial,
        moment,
        settings
      });
    } catch (err) {
      console.error("About Error:", err);
      res.status(500).send("Internal Server Error");
    }
  }, 
  // FAQ LIST PAGE
  faq: async (req, res) => {
    try {
      const [settings, faq] = await Promise.all([
        Setting.findOne().lean(),
        Faq.find({ status: 1 }).sort({ dateOfPost: -1 }).lean()
      ]);
      res.render("faq", {
        layout: 'layout/master',
        title: 'Vastu Interio || FAQ',
        faq,moment,
        settings
      });
    } catch (err) {
      console.error("FAQ Error:", err);
      res.status(500).send("Internal Server Error");
    }
  }, 
  // privacyPolicy LIST PAGE
  privacyPolicy: async (req, res) => {
    try {
      const [settings, privacy_policy] = await Promise.all([
        Setting.findOne().lean(),
        PrivacyPolicy.find({ status: 1 }).sort({ dateOfPost: -1 }).lean()
      ]);
      res.render("privacy_policy", {
        layout: 'layout/master',
        title: 'Vastu Interio || privacy_policy',
        privacy_policy,moment,
        settings
      });
    } catch (err) {
      console.error("privacy_policy Error:", err);
      res.status(500).send("Internal Server Error");
    }
  },

  // ===== API Functions (as is, for frontend AJAX etc.) =====
  getAllFaqs: async (req, res) => {
    const faqs = await Faq.find({ status: 1 });
    res.json(faqs);
  },

  getAllTestimonials: async (req, res) => {
    const testimonials = await Testimonial.find({ status: 1 });
    res.json(testimonials);
  },

  getAllBlogs: async (req, res) => {
    const blogs = await Blog.find({ status: 1 });
    res.json(blogs);
  },

  getAllServices: async (req, res) => {
    const services = await Service.find({ status: 1 });
    res.json(services);
  },
  getAllProducts: async (req, res) => {
    const services = await Shop.find({ status: 1 });
    res.json(services);
  },
  getAllprivacyPolicy: async (req, res) => {
    const services = await PrivacyPolicy.find({ status: 1 });
    res.json(services);
  },

  getAllHomeSections: async (req, res) => {
    const home = await Home.find({ status: 1 });
    res.json(home);
  },

  getAllSettings: async (req, res) => {
    const settings = await Setting.find({ status: 1 });
    res.json(settings);
  }
};