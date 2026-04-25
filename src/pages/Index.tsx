import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Star, Leaf, Scissors, Mountain, Sprout, Trees, Droplets, ArrowRight, Check, Menu, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo-transparent.png";
import heroImage from "@/assets/hero-crepe-myrtle.jpg";
import workMulchBed from "@/assets/work-mulch-bed.jpg";
import workLawnAerial from "@/assets/work-lawn-aerial.jpg";
import workShrubs from "@/assets/work-shrubs.jpg";
import workFrontLawn from "@/assets/work-front-lawn.jpg";
import workDeckBed from "@/assets/work-deck-bed.jpg";
import workFence from "@/assets/work-fence.jpg";
import workDrainage from "@/assets/work-drainage.jpg";

const services = [
  { icon: Scissors, title: "Lawn Maintenance", desc: "Weekly & bi-weekly mowing, edging, and trimming for a perfect lawn year-round." },
  { icon: Leaf, title: "Landscape Design", desc: "Custom designs that transform your yard into an outdoor masterpiece." },
  { icon: Mountain, title: "Hardscape & Stone", desc: "Driveways, walkways, retaining walls, and decorative stonework." },
  { icon: Sprout, title: "Sod & Seeding", desc: "Fresh sod installation and grass seeding for lush, healthy lawns." },
  { icon: Trees, title: "Tree & Shrub Care", desc: "Planting, pruning, removal, and seasonal cleanup services." },
  { icon: Droplets, title: "Drainage & Grading", desc: "Yard drainage solutions and grading to protect your property." },
  { icon: Trash2, title: "Dumpster Rentals", desc: "Roll-off dumpster rentals for construction sites, residential cleanouts, and commercial projects." },
];

const reviews = [
  { name: "Sarah M.", text: "Prices are very reasonable for such professionalism and perfection. They transformed our entire backyard." },
  { name: "James R.", text: "Top-notch work by 92 Ground Crew!! Showed up on time, finished early, and left everything spotless." },
  { name: "Patricia L.", text: "Would highly recommend! The crew is friendly, professional, and the results speak for themselves." },
];

const gallery = [
  { src: workShrubs, label: "Front Bed Design" },
  { src: workMulchBed, label: "Mulch Refresh" },
  { src: workLawnAerial, label: "Precision Mowing" },
  { src: workFrontLawn, label: "Curb Appeal" },
  { src: workDeckBed, label: "New Plantings" },
  { src: workFence, label: "Yard & Fencing" },
  { src: workDrainage, label: "Drainage & Cleanup" },
];

const heroSlides = [
  { src: heroImage, alt: "Beautifully landscaped home with crepe myrtle" },
  { src: workLawnAerial, alt: "Aerial view of freshly mowed lawn with stripe pattern" },
  { src: workFrontLawn, alt: "Pristine front lawn with mowing pattern" },
  { src: workShrubs, alt: "Manicured curved walkway with mulched beds" },
  { src: workMulchBed, alt: "Fresh mulch bed installation around shrubs" },
  { src: workDeckBed, alt: "New plantings with stone border" },
];

const Index = () => {
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="container flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3 group">
            <img src={logo} alt="92 Ground Crew logo" className="h-12 w-auto object-contain" />
            <div className="leading-tight hidden sm:block">
              <div className="font-display font-semibold text-lg">92 Ground Crew</div>
              <div className="text-xs text-muted-foreground -mt-0.5">Salisbury, MD</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-primary transition-smooth">Services</a>
            <a href="#work" className="hover:text-primary transition-smooth">Our Work</a>
            <a href="#reviews" className="hover:text-primary transition-smooth">Reviews</a>
            <a href="#contact" className="hover:text-primary transition-smooth">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:4436693728" className="hidden sm:flex items-center gap-2 text-sm font-semibold">
              <Phone className="w-4 h-4 text-primary" />
              (443) 669-3728
            </a>
            <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
              <a href="#contact">Free Quote</a>
            </Button>
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="container py-4 flex flex-col gap-4 text-sm font-medium">
              <a href="#services" onClick={() => setOpen(false)}>Services</a>
              <a href="#work" onClick={() => setOpen(false)}>Our Work</a>
              <a href="#reviews" onClick={() => setOpen(false)}>Reviews</a>
              <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
              <a href="tel:4436693728" className="text-primary font-semibold">(443) 669-3728</a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((s, i) => (
            <img
              key={i}
              src={s.src}
              alt={s.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${i === slide ? 'opacity-100 animate-slow-zoom' : 'opacity-0'}`}
              width={1920}
              height={1280}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-hero" />
          {/* Slide indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={`Show slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === slide ? 'w-8 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'}`}
              />
            ))}
          </div>
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/15 backdrop-blur-sm border border-white/20 text-white text-sm mb-6 animate-fade-in">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span>5.0 Rated on Google · 10+ Reviews</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-white text-balance leading-[1.05] animate-fade-up">
              Outdoor spaces, <em className="italic font-normal text-primary-glow">crafted</em> with care.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-xl text-balance animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Full-service landscaping & lawn care across Maryland's Eastern Shore. From weekly mowing to complete property transformations.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <Button asChild variant="hero" size="xl">
                <a href="#contact">Get a Free Quote <ArrowRight className="w-5 h-5" /></a>
              </Button>
              <Button asChild variant="glass" size="xl">
                <a href="#services">Our Services</a>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-white/80 text-sm animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary-glow" /> Licensed & Insured</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary-glow" /> Free Estimates</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary-glow" /> Residential & Commercial</div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="py-20 md:py-28">
        <div className="container grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="text-accent uppercase text-xs tracking-[0.2em] font-semibold mb-4">About Us</div>
            <h2 className="text-4xl md:text-5xl font-semibold text-balance leading-tight">
              A local crew with a serious eye for detail.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Based in Salisbury, MD, 92 Ground Crew has built a reputation across Delmarva for delivering professional, reliable, and beautiful landscape work — whether it's a weekly mow or a full property redesign.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              We serve homeowners and businesses in Salisbury, Delmar, Laurel, Pittsville, and the surrounding Eastern Shore communities.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <div className="font-display text-4xl font-semibold text-primary">5.0★</div>
                <div className="text-sm text-muted-foreground mt-1">Google Rating</div>
              </div>
              <div>
                <div className="font-display text-4xl font-semibold text-primary">440+</div>
                <div className="text-sm text-muted-foreground mt-1">Followers</div>
              </div>
              <div>
                <div className="font-display text-4xl font-semibold text-primary">19+</div>
                <div className="text-sm text-muted-foreground mt-1">Services</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
              <img src={workLawnAerial} alt="Aerial view of freshly mowed lawn with precision stripe pattern" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-elegant max-w-xs hidden md:block">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
              </div>
              <p className="text-sm italic">"Top-notch work. Prices are very reasonable for such professionalism and perfection."</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28 bg-gradient-section">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <div className="text-accent uppercase text-xs tracking-[0.2em] font-semibold mb-4">What We Do</div>
            <h2 className="text-4xl md:text-5xl font-semibold text-balance leading-tight">
              Every service your property needs, under one crew.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-elegant transition-smooth">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce">
                  <s.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">Plus snow removal ❄️, leaf removal, sod installation, yard drainage, and more.</p>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Ask about your project <ArrowRight className="w-4 h-4" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="work" className="py-20 md:py-28">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="text-accent uppercase text-xs tracking-[0.2em] font-semibold mb-4">Our Work</div>
              <h2 className="text-4xl md:text-5xl font-semibold text-balance leading-tight">
                Projects we're proud of.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">A glimpse of recent transformations across the Eastern Shore.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {gallery.map((g, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-2xl shadow-soft ${i === 0 ? 'col-span-2 lg:col-span-2 row-span-2 aspect-square lg:aspect-auto' : 'aspect-square'}`}>
                <img src={g.src} alt={g.label} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                <div className="absolute bottom-4 left-4 text-background font-medium opacity-0 group-hover:opacity-100 transition-smooth">{g.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary-glow blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-accent uppercase text-xs tracking-[0.2em] font-semibold mb-4">Reviews</div>
            <h2 className="text-4xl md:text-5xl font-semibold text-balance leading-tight">
              5.0 stars from neighbors who love their yards.
            </h2>
            <div className="flex justify-center gap-1 mt-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-accent text-accent" />)}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 p-8 rounded-2xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <p className="text-lg leading-relaxed mb-6 italic">"{r.text}"</p>
                <div className="font-semibold">{r.name}</div>
                <div className="text-sm opacity-70">Google Review</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-28 bg-gradient-section">
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <div className="text-accent uppercase text-xs tracking-[0.2em] font-semibold mb-4">Get In Touch</div>
            <h2 className="text-4xl md:text-5xl font-semibold text-balance leading-tight mb-6">
              Ready to love your yard again?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Reach out for a free, no-pressure estimate. We typically respond within a few hours.
            </p>
            <div className="space-y-6">
              <a href="tel:4436693728" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-smooth">
                  <Phone className="w-5 h-5 group-hover:text-primary-foreground transition-smooth" />
                </div>
                <div>
                  <div className="font-semibold text-lg">(443) 669-3728</div>
                  <div className="text-sm text-muted-foreground">Tap to call during business hours</div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-lg">5980 Gloucester Ct</div>
                  <div className="text-sm text-muted-foreground">Salisbury, MD 21801</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-lg">Mon–Fri: 7am – 5pm</div>
                  <div className="text-sm text-muted-foreground">Sat: 9am – 12pm · Closed Sunday</div>
                  <div className="text-sm text-muted-foreground mt-1">Serving Salisbury, Delmar, Laurel, Pittsville & beyond</div>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-card p-8 md:p-10 rounded-2xl shadow-elegant border border-border space-y-5" onSubmit={(e) => { e.preventDefault(); window.location.href = 'tel:4436693728'; }}>
            <h3 className="text-2xl font-semibold mb-2">Request a Free Quote</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Name</label>
                <input required className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-smooth" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Phone</label>
                <input required type="tel" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-smooth" placeholder="(443) 555-0123" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Service Needed</label>
              <select className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-smooth">
                <option>Lawn Maintenance</option>
                <option>Landscape Design</option>
                <option>Hardscape & Stone</option>
                <option>Sod & Seeding</option>
                <option>Tree & Shrub Care</option>
                <option>Other / Multiple</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Project Details</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-smooth resize-none" placeholder="Tell us a bit about your property and what you're looking for..." />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              Request My Free Quote <ArrowRight className="w-4 h-4" />
            </Button>
            <p className="text-xs text-muted-foreground text-center">Or call us directly at (443) 669-3728</p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-background/10">
            <div className="flex items-center gap-3">
              <img src={logo} alt="92 Ground Crew logo" className="h-12 w-auto object-contain" />
              <div>
                <div className="font-display font-semibold text-lg">92 Ground Crew</div>
                <div className="text-xs opacity-60">Premier Landscaping · Salisbury, MD</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 text-sm opacity-80">
              <a href="#services" className="hover:opacity-100">Services</a>
              <a href="#work" className="hover:opacity-100">Our Work</a>
              <a href="#reviews" className="hover:opacity-100">Reviews</a>
              <a href="#contact" className="hover:opacity-100">Contact</a>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm opacity-60">
            <div>© {new Date().getFullYear()} 92 Ground Crew. All rights reserved.</div>
            <div>Licensed & Insured · Maryland's Eastern Shore</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
