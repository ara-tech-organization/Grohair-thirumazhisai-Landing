import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ChevronDown, Phone, Mail, MapPin, PhoneCall, Menu, X } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import styles from "./GrohairLanding.module.css";

// Hair treatment images
import mesoImg from "../../assets/treatments/mesotherapy.png";
import oxyImg from "../../assets/treatments/olt.png";
import hairTransImg from "../../assets/treatments/basic-hair-transplant-fue.png";
import fueImg from "../../assets/fue.webp";
import eyebrowImg from "../../assets/treatments/eyebrow-transplant.png";
import beardImg from "../../assets/treatments/beard-transplant.png";
import mustacheImg from "../../assets/treatments/moustache-transplant.png";
import scalpImg from "../../assets/treatments/smp.png";
import microbladingImg from "../../assets/treatments/microblading.png";
import eyelashImg from "../../assets/treatments/eyelash-extensions.png";
import basicThinPolyImg from "../../assets/treatments/basic-thin-poly.png";
// import celebrityChoiceImg from "../../assets/treatments/celebrity-choice.png";
import fullLaceImg from "../../assets/treatments/full-lace.png";
import hairExImg from "../../assets/treatments/hair-extension.png";
import menFullCapImg from "../../assets/treatments/men-full-cap.png";
import womenFullCapImg from "../../assets/treatments/women-full-cap.png";

// Skin treatment images
import skinPeelsImg from "../../assets/treatments/skin-peels.png";
import microdermabrasionImg from "../../assets/treatments/microdermabrasion.png";
import qSwitchedLaserImg from "../../assets/treatments/q-switched-lasers.png";
import ndyagLaserImg from "../../assets/treatments/nd-yag-laser.png";
import diodeLaserImg from "../../assets/treatments/diode-laser.png";
import rfFacialsImg from "../../assets/treatments/rf-facials.png";
import dermaFillersImg from "../../assets/treatments/dermal-fillers.png";
import hydrafacialImg from "../../assets/treatments/hydrafacial.png";

// Before/After images
import ba1 from "../../assets/BeforeAfter/b-a-01.webp";
import ba2 from "../../assets/BeforeAfter/b-a-02.webp";
import ba3 from "../../assets/BeforeAfter/b-a-03.webp";
import ba4 from "../../assets/BeforeAfter/b-a-04.webp";

import logo from "../../assets/logo.png";
import footerLogo from "../../assets/footer.png";

const GrohairLanding = () => {
  const navigate = useNavigate();
  const [activeHairFaq, setActiveHairFaq] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [selectedHairTreatment, setSelectedHairTreatment] = useState(0);
  const [selectedSkinTreatment, setSelectedSkinTreatment] = useState(0);
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    date: "",
    time: "",
    treatment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });
  const [menuOpen, setMenuOpen] = useState(false);
  const [captchaInput, setCaptchaInput] = useState("");

  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const [captchaCode, setCaptchaCode] = useState(generateCaptcha);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const hairTreatments = [
    {
      title: "Mesotherapy",
      description: "Hair Mesotherapy is a non-surgical, minimally invasive procedure designed to strengthen and revitalize hair follicles. A carefully customized cocktail of vitamins, amino acids, peptides, and hyaluronic acid is injected directly into the scalp using fine microinjections. This targeted nourishment helps improve blood circulation, reduce hair thinning, and encourage thicker, healthier hair growth. For best results, sessions are typically recommended once every 15 days, with a total of 10\u201312 sessions.",
      image: mesoImg,
      benefits: ["Reduces Hair Fall", "Improves Hair Thickness", "Supports Follicle Health", "No Downtime"],
    },
    {
      title: "Oxygen Laser Therapy (OLT)",
      description: "Oxygen Laser Therapy (OLT) is a gentle, non-invasive treatment that utilizes advanced light technology to enhance scalp circulation and boost oxygen supply to the hair follicles. By improving blood flow and cellular activity, it helps strengthen follicles and support healthier, stronger hair growth. The procedure is completely safe, painless, and suitable for both men and women. OLT is also highly recommended after hair transplantation, as it aids in faster healing, reduces inflammation, and promotes early and improved hair growth.",
      image: oxyImg,
      benefits: ["Reduces Hair Fall", "Strengthens Thin Hair", "Improves Scalp Oxygenation", "Balances Scalp Health", "Stimulates Dormant Follicles"],
    },
    {
      title: "Basic Hair Transplant FUE",
      description: "FUE (Follicular Unit Extraction) is an advanced, minimally invasive hair transplant technique that restores natural hair growth with precision and care. Healthy individual hair follicles are gently extracted from the donor area\u2014usually the back or sides of the scalp\u2014and meticulously implanted into thinning or bald regions. Performed under local anesthesia, FUE is typically completed within a single day, ensuring maximum comfort and minimal discomfort. The technique leaves no linear scars, offers a quicker recovery time, and requires minimal downtime.",
      image: hairTransImg,
      benefits: ["Natural, Permanent Hair Growth", "Minimally Invasive Procedure", "No Major Cuts Or Stitches", "Minimal Downtime", "Uses Your Own Hair Follicles", "One-Day Procedure"],
    },
    {
      title: "Percutaneous FUE",
      description: "Percutaneous FUE is a refined and advanced form of the traditional FUE hair transplant technique, performed using specialized micro-motor technology for enhanced precision. Ultra-fine punches measuring approximately 0.7\u20130.8 mm are used to gently extract and implant individual grafts. This technique allows the surgeon to maintain precise control over the depth, direction, and density of implantation, resulting in more natural hairline design and higher-density outcomes. Percutaneous FUE also minimizes scalp trauma, supports faster healing, and ensures aesthetically superior, natural-looking results.",
      image: fueImg,
      benefits: ["Precise Control Of Depth, Direction & Density", "High Graft Survival Rate", "Minimally Invasive", "No Major Cuts Or Stitches", "One-Day Procedure", "Faster Recovery", "High-Density Natural Results"],
    },
    {
      title: "Eyebrow Transplant",
      description: "Eyebrows frame your face \u2014 so why rely on daily pencils and liners? With an Eyebrow Transplant, carefully selected hair follicles from around the ear are implanted into your brow line to restore natural thickness and fullness. The result is long-lasting, fuller eyebrows that enhance your facial features naturally.",
      image: eyebrowImg,
      benefits: ["Achieve Thicker Brows", "Encourage Hair Regrowth", "No Visible Scars", "Attain Natural Look", "Safe And Effective"],
    },
    {
      title: "Beard Transplant",
      description: "Men experiencing patchy or thin facial hair can achieve a fuller, well-defined look with a Beard Transplant. Healthy hair follicles are carefully extracted from a donor area and precisely implanted into the beard region to enhance density and shape. Two advanced options are available: Basic Beard Transplant and Percutaneous Beard Transplant, each designed to deliver natural-looking, long-lasting results.",
      image: beardImg,
      benefits: ["Improves Density", "Fill In Bald Patches", "Natural Looking Facial Hair", "No Minor Linear Scarring", "Permanent Solution"],
    },
    {
      title: "Moustache Transplant",
      description: "Thanks to advanced hair transplant techniques, restoring a fuller moustache is now possible with a Moustache Transplant. Men who are unable to grow a moustache due to low density, genetics, or past injuries can achieve a thicker, well-defined moustache line. Healthy grafts are carefully extracted from the donor area and precisely implanted to create natural-looking, long-lasting results.",
      image: mustacheImg,
      benefits: ["Covers Moustache Patches", "Highlight Masculine Features", "Can Trim Or Shave The Transplanted Hair", "Get Natural Results", "No Visible Scars"],
    },
    {
      title: "Scalp Micropigmentation (SMP)",
      description: "Scalp Micropigmentation (SMP) is a non-invasive cosmetic procedure that creates the illusion of fuller, denser hair by depositing specialized pigments into the scalp using advanced micro-precision technology. It is an effective solution for hair thinning, alopecia, and male or female pattern baldness, helping to achieve a natural shaved-head or density-enhancing look. Each session typically lasts around 4\u20135 hours, depending on the area being treated.",
      image: scalpImg,
      benefits: ["Creates A Natural, Fuller Look", "Immediate Visible Improvement", "Safe For Existing Hair", "Non-Surgical Procedure", "Effectively Camouflages Hair Loss"],
    },
    {
      title: "Microblading",
      description: "Eyebrows play a key role in defining a woman\u2019s facial identity. Microblading enhances your brows by implanting fine, hair-like pigment strokes into the superficial layers of the skin, creating a natural and fuller appearance. The procedure takes approximately 3 hours and includes 1 main session followed by 2 follow-up sessions for perfect shape and long-lasting results.",
      image: microbladingImg,
      benefits: ["Reshape Your Brow Line", "Fuller & Denser Look", "Won\u2019t Stop Natural Growth", "Quick Procedure", "Get Your Dream Eyebrows"],
    },
    {
      title: "Eyelash Lift & Extensions",
      description: "Eyelash Lift and Extensions are aesthetic treatments that beautifully enhance your natural lashes. A lash lift gently curls and elevates your existing lashes, giving them a longer, more defined look. Lash extensions add extra length and volume using carefully applied, lightweight natural fibers for a fuller yet natural finish. The procedure is safe, comfortable, and typically completed within 1 hour.",
      image: eyelashImg,
      benefits: ["Enhances Eye Definition", "Fuller And More Refined Appearance", "Natural-Looking Results", "Non-Surgical Procedure", "Immediate Visible Improvement"],
    },
    {
      title: "Basic Thin Poly",
      description: "The Thin Poly Base system is the perfect choice if you\u2019re looking for a lightweight, natural-looking hair solution. AdGrohair offers premium-quality thin poly base hair systems designed to blend seamlessly with your scalp for a realistic appearance. These advanced systems are crafted for durability, long-lasting performance, and superior comfort. After the final cut and styling, they deliver excellent volume and density \u2014 giving you a confident, natural finish.",
      image: basicThinPolyImg,
      benefits: ["Lightweight And Comfortable", "Natural Scalp Appearance", "Good Volume And Density", "Long-Lasting Durability"],
    },
    
    {
      title: "Full Lace",
      description: "The Full Lace Hair System is one of the most popular non-surgical hair replacement solutions worldwide. Designed with a lightweight, breathable lace base, it allows optimal airflow to the scalp for all-day comfort. The fine lace construction creates a seamless, natural-looking hairline and ensures realistic hair movement for an undetectable finish.",
      image: fullLaceImg,
      benefits: ["Highly Natural Hairline Appearance", "Lightweight And Breathable Design", "Comfortable For Daily Wear", "Seamless Blending With Existing Hair", "Flexible Styling Options"],
    },
    {
      title: "Hair Extension",
      description: "Remy Hair Extensions are made from premium virgin human hair with intact, aligned cuticles to maintain a smooth, tangle-free, and natural appearance. They are an ideal solution for adding instant volume, length, or style enhancement, blending seamlessly with your natural hair for a flawless, long-lasting finish.",
      image: hairExImg,
      benefits: ["100% High-Quality Human Hair", "Soft, Smooth, And Natural Texture", "Adds Volume And Length Instantly", "Blends Seamlessly With Natural Hair"],
    },
    {
      title: "Men Full Cap",
      description: "The Men Full Cap Hair System is a complete coverage, non-surgical solution designed for individuals experiencing extensive hair loss \u2014 including conditions like alopecia totalis, alopecia universalis, or hair loss due to medical treatments such as chemotherapy. Fully customized to match your scalp size, head shape, and specific hair loss pattern, this system ensures a secure fit, natural appearance, and comfortable all-day wear \u2014 restoring both hair and confidence.",
      image: menFullCapImg,
      benefits: ["Full Scalp Coverage", "Designed For Advanced Hair Loss Conditions", "Customized Fit And Design", "Natural Appearance"],
    },
    {
      title: "Women Full Cap",
      description: "The Women Full Cap Hair System is a complete coverage, non-surgical solution designed for women experiencing extensive hair loss. Available in lengths ranging from 14 to 22 inches, it offers the flexibility to style your hair in multiple ways \u2014 including braids, ponytails, and other customized hairstyles \u2014 while maintaining a natural look and comfortable fit.",
      image: womenFullCapImg,
      benefits: ["Full Scalp Coverage", "Designed For Medical Hair Loss Conditions", "Custom Fit And Natural Appearance", "Available In Multiple Lengths", "Allows Flexible Styling Options", "Non-Surgical And Comfortable Solution"],
    },
  ];

  const skinTreatments = [
    {
      title: "Skin Peels",
      description: "We provide a comprehensive range of advanced, medically guided skin peels designed to enhance skin texture, reduce pigmentation, control acne, and restore your natural glow. Our specialized peel treatments include Glycolic Peel, ArgiPeel Exfoliating Peel, Ferulac Peel Booster System, Lacti Peel, Amelan Peel, Nomelan Peel, Yellow Peel, and Salicylic Acid Peel \u2014 each carefully selected to address specific skin concerns and deliver safe, visible results.",
      image: skinPeelsImg,
      benefits: ["Improves Skin Texture", "Reduces Pigmentation", "Controls Acne", "Restores Natural Radiance"],
    },
    {
      title: "Microdermabrasion",
      description: "Microdermabrasion is a gentle dermatological treatment that exfoliates and removes the outermost layer of dead skin cells. It helps even out skin tone, reduce the appearance of acne scars, and restore brightness to dull skin. The procedure typically takes around 30 minutes and can be safely combined with other treatments for enhanced results.",
      image: microdermabrasionImg,
      benefits: ["Evens Out Skin Tone", "Fades Acne Scars", "Brightens Complexion", "Quick 30-Minute Procedure"],
    },
    {
      title: "Q-Switched Lasers",
      description: "At GloSkin, advanced Q-Switched Laser technology is used to effectively treat pigmentation concerns such as melasma, sun damage, and various pigmented lesions including age spots, freckles, sunspots, and certain birthmarks. The laser works by precisely targeting excess melanin in the skin without damaging the surrounding tissue, ensuring safe and effective results. It can also be customized for safe and efficient tattoo removal, delivering clearer and more even-toned skin.",
      image: qSwitchedLaserImg,
      benefits: ["Targets Pigmentation & Melasma", "Stimulates Collagen Production", "Improves Acne Scars", "Refines Enlarged Pores"],
    },
    {
      title: "Nd-YAG Laser",
      description: "Nd:YAG Laser is an advanced and highly effective technique for long-term hair reduction. One of its greatest advantages is its suitability for all skin types \u2014 including tanned and darker skin tones \u2014 making it a safe and versatile option. For optimal and long-lasting results, 6\u20138 sessions are typically recommended, with a gap of about one month between each session.",
      image: ndyagLaserImg,
      benefits: ["Works On All Skin Types", "Safe For Tanned & Darker Skin", "Permanent Hair Reduction", "Clinically Proven Technology"],
    },
    {
      title: "Diode Laser",
      description: "Diode Laser hair removal uses a single, highly targeted wavelength of light that is strongly absorbed by melanin in the hair follicle. The system includes advanced skin-cooling technology to protect the surface of the skin while delivering effective energy to the root. As the melanin heats up, it safely damages the follicle and disrupts its blood supply, leading to long-term and permanent hair reduction.",
      image: diodeLaserImg,
      benefits: ["High Melanin Absorption", "Built-In Skin Cooling", "Permanent Hair Removal", "Safe For All Skin Types"],
    },
    {
      title: "RF Facials",
      description: "Radiofrequency (RF) technology uses controlled high-frequency radio waves to safely and precisely remove skin lesions such as moles, warts, skin tags, freckles, and DPNs. Unlike traditional scalpel excision, RF treatment delivers minimal thermal damage to surrounding tissues, ensuring greater precision, reduced bleeding, and faster healing with minimal discomfort.",
      image: rfFacialsImg,
      benefits: ["Precise Lesion Removal", "Minimal Bleeding", "Faster Healing", "Safe And Effective"],
    },
    {
      title: "Dermal Fillers",
      description: "Dermal fillers are injectable treatments designed to restore lost volume, smooth wrinkles, and soften facial lines. They are commonly administered around the eyes, nose, and mouth to enhance facial contours and rejuvenate your appearance. Results are visible immediately, with minimal downtime and quick recovery. We use premium, internationally trusted fillers such as Juvederm by Allergan and Restylane by Galderma to ensure safe, natural-looking, and long-lasting results.",
      image: dermaFillersImg,
      benefits: ["Instant Visible Results", "Restores Facial Volume", "Minimal Recovery Time", "Long-Lasting Effects"],
    },
    {
      title: "HydraFacial",
      description: "HydraFacial is an advanced, multi-step skin treatment that combines cleansing, exfoliation, gentle chemical peeling, extraction, and intense hydration in a single session using patented vortex technology. Suitable for all skin types, it helps minimize enlarged pores, reduce fine lines, control acne, and restore a brighter, healthier-looking complexion \u2014 all with no downtime and instant glow.",
      image: hydrafacialImg,
      benefits: ["Deep Cleansing & Exfoliation", "Suitable For All Skin Types", "Improves Pores & Fine Lines", "Instant Hydration & Glow"],
    },
  ];

  const faqs = [
    {
      question: "What treatments do you offer for hair loss?",
      answer:
        "We offer advanced hair restoration treatments including Hair Transplant (FUE), Mesotherapy, Scalp Micropigmentation, CHS (Comprehensive Hair Solutions), and Oxygen Laser Therapy (OLT).",
    },
    {
      question: "How does a hair transplant work?",
      answer:
        "Hair transplant involves relocating healthy hair follicles from the donor area to areas experiencing hair thinning or baldness. We use advanced FUE techniques to deliver precise, natural-looking results.",
    },
    {
      question: "Is hair transplantation a permanent solution?",
      answer:
        "Yes, hair transplantation provides permanent results as the transplanted hair follicles are resistant to balding.",
    },
    {
      question: "How long does it take to see results after a hair transplant?",
      answer:
        "Initial growth begins around 3-4 months, with full results visible after 12-18 months.",
    },
    {
      question: "Is the procedure safe?",
      answer:
        "Absolutely. Our treatments are designed with safety, precision, and patient comfort as top priorities. Performed by experienced professionals, the procedures are minimally invasive and tailored to ensure a smooth recovery experience.",
    },
    {
      question: "How much does a hair transplant cost at GroHair?",
      answer:
        "We know choosing a hair transplant is both a personal and financial decision. The cost depends on your specific hair condition and treatment plan. That\u2019s why we offer a detailed consultation to evaluate your needs and provide honest, customized pricing tailored just for you.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        'Booking an appointment is quick and hassle-free. Simply click the "Book an Appointment" button on our website, call our clinic, or leave your details \u2014 and our team will promptly get in touch to confirm your preferred time.',
    },
    {
      question: "What skincare treatments do you offer?",
      answer:
        "We offer a comprehensive range of advanced skincare treatments for acne, pigmentation, anti-aging, and overall skin rejuvenation. Our services include Laser Hair Reduction, chemical peels, hydrafacials, microneedling, advanced laser resurfacing, skin tightening treatments, anti-aging injectables, and customized dermatology-led treatment programs tailored to individual skin concerns.",
    },
    {
      question: "How do I know which facial treatment is right for me?",
      answer:
        "Every individual\u2019s skin is unique. During your consultation, our specialists conduct a thorough evaluation of your skin health and concerns to determine the most suitable, medically guided treatment approach for optimal and lasting results.",
    },
    {
      question: "Is Laser Hair Reduction safe?",
      answer:
        "Yes, Laser Hair Reduction is a clinically proven and safe procedure when carried out by qualified professionals using advanced medical-grade technology. Safety and patient comfort are always our priority.",
    },
    {
      question: "How many sessions are required for laser hair removal?",
      answer:
        "Typically 6-8 sessions are needed for optimal results, spaced 4-6 weeks apart.",
    },
    {
      question: "Do skin treatments have side effects?",
      answer:
        "Most treatments have minimal side effects like temporary redness that resolves within hours to days.",
    },
    {
      question: "Do you provide anti-aging treatments?",
      answer:
        "Yes, we offer Botox, dermal fillers, RF treatments, and other advanced anti-aging procedures.",
    },
    {
      question: "What products do you recommend for daily skincare?",
      answer:
        "We recommend medical-grade skincare products tailored to your specific skin type and concerns.",
    },
    {
      question: "How do I book an appointment at GloSkin?",
      answer:
        "You can book through our website, call our clinic, or use our online booking system.",
    },
  ];

  const testimonials = [
    {
      name: "Arun Kumar",
      rating: 5,
      text: "I was initially hesitant about getting a hair transplant, but the team explained everything clearly and made me feel confident. The results look very natural, and I\u2019m extremely satisfied with my decision.",
      image: hairTransImg,
    },
    {
      name: "Meena R",
      rating: 5,
      text: "I took treatment for pigmentation, and I can see visible improvement within a few sessions. The doctors are professional and genuinely care about patient comfort.",
      image: skinPeelsImg,
    },
    {
      name: "Sathish V",
      rating: 5,
      text: "The FUE procedure was smooth and well managed. The clinic maintains high standards of hygiene, and the staff were supportive throughout the process.",
      image: fueImg,
    },
    {
      name: "Priya S",
      rating: 5,
      text: "I underwent Laser Hair Reduction and had a great experience. The procedure was comfortable, and the team guided me properly before and after treatment.",
      image: ndyagLaserImg,
    },
    {
      name: "Karthik N",
      rating: 5,
      text: "Very transparent consultation and clear explanation of costs. No false promises \u2014 just honest guidance and good results.",
      image: mesoImg,
    },
    {
      name: "Divya M",
      rating: 5,
      text: "Professional doctors, advanced equipment, and a welcoming atmosphere. I would highly recommend GroHair GloSkin for anyone considering treatment.",
      image: hydrafacialImg,
    },
  ];

  const beforeAfterImages = [ba1, ba2, ba3, ba4];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const refreshCaptcha = () => {
    setCaptchaCode(generateCaptcha());
    setCaptchaInput("");
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (captchaInput.toUpperCase() !== captchaCode) {
      setSubmitMessage({ type: "error", text: "Incorrect captcha. Please try again." });
      refreshCaptcha();
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage({ type: "", text: "" });

    // Console log the data being sent
    console.log("📧 Sending appointment data:", {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      date: formData.date,
      time: formData.time,
      treatment: formData.treatment,
    });

    try {
      const response = await fetch(
        "https://schoolcommunication-gmdtekepd3g3ffb9.canadacentral-01.azurewebsites.net/api/postMSMSForm/booNewAppoinment11",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer 123",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            date: formData.date,
            time: formData.time,
            treatment: formData.treatment,
          }),
        },
      );

      console.log("📡 Response Status:", response.status, response.statusText);

      // Check if response is ok (status 200-299)
      if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ API Error Response:", errorText);

        if (response.status === 401) {
          throw new Error(
            "Unauthorized - API key or authentication required. Please contact the administrator.",
          );
        }

        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      // Try to parse JSON response
      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        console.log("📄 Response Text:", text);
        data = { error: false, message: text };
      }

      console.log("✅ API Response:", data);

      if (!data.error) {
        // Reset form
        setFormData({
          name: "",
          email: "",
          mobile: "",
          date: "",
          time: "",
          treatment: "",
        });
        console.log("📬 Email sent from: aradiscovermarketing@gmail.com");
        console.log("📬 Email sent to: thirumazhisai@adgrohair.com");
        refreshCaptcha();
        // Navigate to thank you page
        navigate("/thank-you");
      } else {
        setSubmitMessage({
          type: "error",
          text:
            data.message ||
            "Failed to send appointment request. Please try again.",
        });
        console.error("❌ Error:", data.message);
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      setSubmitMessage({
        type: "error",
        text:
          error.message ||
          "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* Fixed Contact Icons */}
      <div className={styles.fixedIcons}>
        <a
          href="tel:+919047656789"
          className={styles.fixedIconCall}
          aria-label="Call us"
        >
          <Phone size={24} />
        </a>
        <a
          href="https://wa.me/919047656789"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.fixedIconWhatsapp}
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <img
              src={logo}
              alt="Grohair Bioskin Logo"
              className={styles.logoImage}
            />
          </div>

          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
            <a href="#" className={styles.navLink} onClick={(e) => { e.preventDefault(); document.getElementById("hair-treatments")?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); }}>Hair Treatments</a>
            <a href="#" className={styles.navLink} onClick={(e) => { e.preventDefault(); document.getElementById("skin-treatments")?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); }}>Skin Treatments</a>
            <a href="#" className={styles.navLink} onClick={(e) => { e.preventDefault(); document.getElementById("faqs")?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); }}>FAQs</a>
            <a href="#" className={styles.navLink} onClick={(e) => { e.preventDefault(); document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); }}>Testimonials</a>
            <a href="#" className={styles.navLink} onClick={(e) => { e.preventDefault(); document.getElementById("before-after")?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); }}>Before & After</a>
            <a href="#" className={styles.navLink} onClick={(e) => { e.preventDefault(); document.getElementById("footer-contact")?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); }}>Contact Us</a>
          </nav>

          <div className={styles.headerRight}>
            <a href="tel:+919047656789" className={styles.phone}>
              <span className={styles.phoneIcon}>
                <PhoneCall size={19}></PhoneCall>
              </span>
              +91 90476 56789
            </a>
            <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Book Appointment */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.appointmentForm}>
            <h1 className={styles.heroTitle}>Book An Appointment</h1>
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className={styles.formInput}
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className={styles.formInput}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formRow}>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Your Phone Number"
                  className={styles.formInput}
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                />
                <div className={styles.formDateWrapper}>
                  {!formData.date && <span className={styles.formDateLabel}>Select Date</span>}
                  <input
                    type="date"
                    name="date"
                    className={`${styles.formInput} ${!formData.date ? styles.formDateEmpty : ''}`}
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split("T")[0]}
                    max="2099-12-31"
                    required
                  />
                </div>
              </div>
              <div className={styles.formRow}>
                <select
                  name="time"
                  className={styles.formInput}
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Time</option>

                  <option value="10:00 AM">10:00 AM</option>
                  <option value="10:30 AM">10:30 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="12:30 PM">12:30 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="1:30 PM">1:30 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="2:30 PM">2:30 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="3:30 PM">3:30 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="4:30 PM">4:30 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                  <option value="5:30 PM">5:30 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                  <option value="6:30 PM">6:30 PM</option>
                  <option value="7:00 PM">7:00 PM</option>
                  <option value="7:30 PM">7:30 PM</option>
                  <option value="8:00 PM">8:00 PM</option>
                </select>
                <select
                  name="treatment"
                  className={styles.formInput}
                  value={formData.treatment}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Treatment</option>
                  <option value="Hair">Hair</option>
                  <option value="Skin">Skin</option>
                </select>
              </div>
              <div className={styles.captchaRow}>
                <div className={styles.captchaDisplay}>
                  <span className={styles.captchaCode}>{captchaCode}</span>
                  <button type="button" className={styles.captchaRefresh} onClick={refreshCaptcha} aria-label="Refresh captcha">&#x21bb;</button>
                </div>
                <input
                  type="text"
                  placeholder="Enter Captcha"
                  className={styles.formInput}
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
                  required
                  autoComplete="off"
                />
              </div>
              {submitMessage.text && (
                <div
                  style={{
                    padding: "12px",
                    marginBottom: "10px",
                    borderRadius: "6px",
                    textAlign: "center",
                    backgroundColor:
                      submitMessage.type === "success" ? "#4caf50" : "#f44336",
                    color: "#fff",
                    fontSize: "14px",
                  }}
                >
                  {submitMessage.text}
                </div>
              )}
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Book An Appointment"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Hair Treatments Section */}
      <section
        id="hair-treatments"
        data-animate
        className={`${styles.treatmentsSection} ${isVisible["hair-treatments"] ? styles.visible : ""}`}
      >
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Our <span className={styles.highlight}>Hair</span> Treatments
          </h2>
        </div>

        <div className={styles.treatmentPanel}>
          <div className={styles.treatmentList}>
            <div className={styles.treatmentListInner}>
              {hairTreatments.map((treatment, index) => (
                <button
                  key={index}
                  className={`${styles.treatmentListItem} ${selectedHairTreatment === index ? styles.treatmentListItemActive : ""}`}
                  onClick={() => setSelectedHairTreatment(index)}
                >
                  {treatment.title}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.treatmentDetail} key={selectedHairTreatment}>
            <div className={styles.treatmentDetailImage}>
              <img
                src={hairTreatments[selectedHairTreatment].image}
                alt={hairTreatments[selectedHairTreatment].title}
              />
            </div>
            <div className={styles.treatmentDetailContent}>
              <h3 className={styles.treatmentDetailTitle}>
                {hairTreatments[selectedHairTreatment].title}
              </h3>
              <p className={styles.treatmentDetailDescription}>
                {hairTreatments[selectedHairTreatment].description}
              </p>
              <div className={styles.treatmentBenefits}>
                <h4 className={styles.benefitsHeading}>Benefits</h4>
                <div className={styles.benefitsGrid}>
                  {hairTreatments[selectedHairTreatment].benefits.map(
                    (benefit, i) => (
                      <span key={i} className={styles.benefitTag}>
                        {benefit}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionCta}>
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className={styles.sectionCtaBtn}>Book an Appointment</a>
        </div>
      </section>

      {/* Skin Treatments Section */}
      <section
        id="skin-treatments"
        data-animate
        className={`${styles.treatmentsSection} ${styles.skinSection} ${isVisible["skin-treatments"] ? styles.visible : ""}`}
      >
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Our <span className={styles.highlight}>Skin</span> Treatments
          </h2>
        </div>

        <div
          className={`${styles.treatmentPanel} ${styles.treatmentPanelReversed}`}
        >
          <div className={styles.treatmentList}>
            <div className={styles.treatmentListInner}>
              {skinTreatments.map((treatment, index) => (
                <button
                  key={index}
                  className={`${styles.treatmentListItem} ${selectedSkinTreatment === index ? styles.treatmentListItemActive : ""}`}
                  onClick={() => setSelectedSkinTreatment(index)}
                >
                  {treatment.title}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.treatmentDetail} key={selectedSkinTreatment}>
            <div className={styles.treatmentDetailImage}>
              <img
                src={skinTreatments[selectedSkinTreatment].image}
                alt={skinTreatments[selectedSkinTreatment].title}
              />
            </div>
            <div className={styles.treatmentDetailContent}>
              <h3 className={styles.treatmentDetailTitle}>
                {skinTreatments[selectedSkinTreatment].title}
              </h3>
              <p className={styles.treatmentDetailDescription}>
                {skinTreatments[selectedSkinTreatment].description}
              </p>
              <div className={styles.treatmentBenefits}>
                <h4 className={styles.benefitsHeading}>Benefits</h4>
                <div className={styles.benefitsGrid}>
                  {skinTreatments[selectedSkinTreatment].benefits.map(
                    (benefit, i) => (
                      <span key={i} className={styles.benefitTag}>
                        {benefit}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionCta}>
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className={styles.sectionCtaBtn}>Book an Appointment</a>
        </div>
      </section>

      {/* FAQs Section */}
      <section
        id="faqs"
        data-animate
        className={`${styles.faqsSection} ${isVisible["faqs"] ? styles.visible : ""}`}
      >
        <div className={styles.faqsContainer}>
          <h2 className={styles.sectionTitle}>
            Frequently Asked <span className={styles.highlight}>Questions</span>
          </h2>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={styles.faqItem}
                onClick={() =>
                  setActiveHairFaq(activeHairFaq === index ? null : index)
                }
              >
                <div
                  className={`${styles.faqQuestion} ${activeHairFaq === index ? styles.faqQuestionActive : ""}`}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`${styles.faqIcon} ${activeHairFaq === index ? styles.faqIconActive : ""}`}
                    size={20}
                  />
                </div>
                {activeHairFaq === index && (
                  <div className={styles.faqAnswer}>{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.sectionCta}>
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className={styles.sectionCtaBtn}>Book an Appointment</a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        data-animate
        className={`${styles.testimonialsSection} ${isVisible["testimonials"] ? styles.visible : ""}`}
      >
        <div className={styles.testimonialsContainer}>
          <div className={styles.testimonialImage}>
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
            />
          </div>
          <div className={styles.testimonialContent}>
            <span className={styles.testimonialLabel}>Testimonials</span>
            <h2 className={styles.testimonialTitle}>What Our Customers Say!</h2>
            <div className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>"</div>
              <div className={styles.testimonialInfo}>
                <h4 className={styles.testimonialName}>
                  {testimonials[currentTestimonial].name}
                </h4>
                <div className={styles.stars}>
                  {"★".repeat(testimonials[currentTestimonial].rating)}
                </div>
                <p className={styles.testimonialText}>
                  {testimonials[currentTestimonial].text}
                </p>
              </div>
            </div>
            <div className={styles.testimonialNav}>
              <button
                className={styles.navBtn}
                onClick={() =>
                  setCurrentTestimonial((prev) =>
                    prev === 0 ? testimonials.length - 1 : prev - 1,
                  )
                }
              >
                ←
              </button>
              <button
                className={styles.navBtn}
                onClick={() =>
                  setCurrentTestimonial((prev) =>
                    prev === testimonials.length - 1 ? 0 : prev + 1,
                  )
                }
              >
                →
              </button>
            </div>
          </div>
        </div>
        <div className={styles.sectionCta}>
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className={styles.sectionCtaBtn}>Book an Appointment</a>
        </div>
      </section>

      {/* Before & After Section */}
      <section
        id="before-after"
        data-animate
        className={`${styles.beforeAfterSection} ${isVisible["before-after"] ? styles.visible : ""}`}
      >
        <h2 className={styles.sectionTitle}>
          <span className={styles.highlight}>Before</span> &{" "}
          <span className={styles.highlight}>After</span> Results
        </h2>
        <div className={styles.beforeAfterGrid}>
          {beforeAfterImages.map((image, index) => (
            <div key={index} className={styles.beforeAfterCard}>
              <img src={image} alt={`Before After ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className={styles.sectionCta}>
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className={styles.sectionCtaBtn}>Book an Appointment</a>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer-contact" className={styles.footer}>
        <div className={styles.footerContent}>
          {/* Column 1: Logo & CTA */}
          <div className={styles.footerLeft}>
            <div className={styles.footerLogo}>
              <img
                src={footerLogo}
                alt="Grohair & Gloskin"
                className={styles.footerLogoImage}
              />
            </div>
            <h3 className={styles.footerCtaTitle}>
              Ready to Begin Your Hair & Skin Transformation?
            </h3>
            <div className={styles.footerCtaButtons}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={styles.footerCtaBtn}
              >
                Book an Appointment
              </a>
              <a
                href="tel:+919047656789"
                className={styles.footerCtaBtnOutline}
              >
                <PhoneCall size={16} /> Call Now
              </a>
            </div>

            {/* Contact Details */}
            <div className={styles.footerContact}>
              <p>
                <Phone size={16} />{" "}
                <a href="tel:9047656789"> +91 90476 56789</a>
              </p>
              <p>
                <Mail size={16} />
                <a href="mailto:thirumazhisai@adgrohair.com">
                  thirumazhisai@adgrohair.com
                </a>
              </p>
              <p>
                <MapPin size={16} />
                <span>
                  1st floor, No. 40 trunk road, Poonamallee, Chennai - 600056
                  <br />
                  Landmark: Near GRT Jewellers Poonamallee
                </span>
              </p>
            </div>

            {/* Social Media Links */}
            <div className={styles.footerSocial}>
              <a
                href="https://www.instagram.com/adgrogloclinic.thirumazhisai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61587509442494"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Map */}
          <div className={styles.footerRight}>
            <div className={styles.footerMap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d80.0952!3d13.0472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261!2sPoonamallee%2C%20Chennai%2C%20Tamil%20Nadu%20600056!5e0!3m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p>
            © <span className={styles.footerBottomHighlight}>Grohair</span> &{" "}
            <span className={styles.footerBottomHighlight}>GloSkin</span>
          </p>
          <p>
            <Link to="/privacy-policy" className={styles.footerBottomLink}>
              Privacy Policy
            </Link>
            {" | "}
            Crafted with Excellence by{" "}
            <a
              href="https://discovertechnologies.co/index.html"
              className={styles.footerBottomLink}
            >
              ARA Discoveries Pvt.Ltd
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GrohairLanding;
