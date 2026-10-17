/* ==========================================================================
   STORY — content for the /story page and the Overview teaser.
   Every line comes from what Sabbir told us. Private details (age, marriage,
   home village, grades) stay out on purpose.
   ========================================================================== */

export interface Photo {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
}

const photo = (file: string, width: number, height: number, alt: string, caption: string): Photo => ({
  src: `/story/${file}.webp`,
  width,
  height,
  alt,
  caption,
});

export const PHOTOS = {
  dhanmondi: photo("01-dhanmondi-lake", 960, 1280, "Sabbir leaning on a railing at Dhanmondi Lake", "Dhanmondi Lake, Dhaka"),
  joiningDay: photo("02-joining-day", 960, 1280, "Sabbir receiving his appointment letter at PKG IT", "Joining PKG IT, 2025"),
  afterClass: photo("03-after-class", 1050, 1400, "Sabbir in his college uniform after class", "After class with friends"),
  pithaUtsab: photo("04-pitha-utsab", 1050, 1400, "Sabbir at a Pitha Utsab photo frame", "Pitha Utsab, 2026"),
  gym: photo("05-gym", 840, 1400, "Mirror selfie at the gym", "Training at the gym"),
  afternoon: photo("06-afternoon", 1050, 1400, "Sabbir standing by a bougainvillea bush", "An afternoon with friends"),
  college1: photo("07-college", 768, 1024, "Sabbir in college uniform under a tree", "College days"),
  college2: photo("08-college", 768, 1024, "Sabbir in college uniform by a bus", "College days"),
  afterCollege: photo("09-after-college", 1080, 1082, "Sabbir in a black T-shirt by a railway line", "After college"),
  rooftop: photo("10-rooftop", 768, 768, "Sabbir on a rooftop at sunset", "Rooftop, 1 July 2025"),
} satisfies Record<string, Photo>;

export const STORY = {
  quote: "I never had a straight path, so I learned to build my own.",
  intro:
    "I made clothes by day and wrote code by night. Today I build the systems behind some of Bangladesh's best-known brands.",
};

/** "The short version": three blocks a client can read in under a minute. */
export const SUMMARY = [
  {
    label: "Background",
    icon: "mapPin",
    text: "In class seven my family faced hard times and moved to Narsingdi for work. I made clothes during the day and studied at night, going to school mainly to sit my exams.",
  },
  {
    label: "How I learned",
    icon: "code",
    text: "I wrote my first HTML near the end of class nine and practised all night after work. When my course stopped at JavaScript arrays and objects, I kept going on my own with YouTube, every day. Later, Rahul Roy showed me how real projects are built and opened the door to my first job.",
  },
  {
    label: "Today",
    icon: "building",
    text: "Since 2025 I've been a full-stack developer at PKG IT, building the websites, admin panels, CRMs and real-time dashboards behind Rainbow Paints, Anwar Ispat, A1 Polymer, ProtonBD and Property Lifts.",
  },
];

/** What the story means for someone hiring me. */
export const TRAITS = [
  {
    title: "I learn fast, on my own",
    icon: "cap",
    text: "I learned to code without a teacher. A new stack or an unfamiliar codebase doesn't slow me down for long.",
  },
  {
    title: "I show up every day",
    icon: "clock",
    text: "Years of working days and coding nights built the habit. You get steady progress, not bursts and silence.",
  },
  {
    title: "I build the whole system",
    icon: "layers",
    text: "Public site, admin panel, database, integrations and deployment. One person who understands how it all connects.",
  },
  {
    title: "I keep it honest",
    icon: "check",
    text: "I use AI tools to move faster, and I understand every line I ship. I'll tell you plainly what's done and what isn't.",
  },
];

export const MILESTONES = [
  { when: "Class 7", what: "Moved to Narsingdi, worked by day" },
  { when: "2021", what: "Wrote my first code" },
  { when: "2025", what: "Joined PKG IT" },
  { when: "Next", what: "Web security and finishing HSC" },
];

/** Small photo strip near the end of the page. */
export const MOMENTS: Photo[] = [PHOTOS.joiningDay, PHOTOS.college1, PHOTOS.gym, PHOTOS.afternoon];
