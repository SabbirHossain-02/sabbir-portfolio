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
  joiningDay: photo("02-joining-day", 960, 1280, "Sabbir receiving his appointment letter at PKG IT", "The day I joined PKG IT, appointment letter in hand"),
  afterClass: photo("03-after-class", 1050, 1400, "Sabbir in his college uniform after class", "After class, out with friends"),
  pithaUtsab: photo("04-pitha-utsab", 1050, 1400, "Sabbir at a Pitha Utsab photo frame", "Pitha Utsab, 2026"),
  gym: photo("05-gym", 840, 1400, "Mirror selfie at the gym", "After a session at the gym"),
  afternoon: photo("06-afternoon", 1050, 1400, "Sabbir standing by a bougainvillea bush", "An afternoon out with friends"),
  college1: photo("07-college", 768, 1024, "Sabbir in college uniform under a tree", "College, a few months before I left"),
  college2: photo("08-college", 768, 1024, "Sabbir in college uniform by a bus", "College days"),
  afterCollege: photo("09-after-college", 1080, 1082, "Sabbir in a black T-shirt by a railway line", "After college"),
  rooftop: photo("10-rooftop", 768, 768, "Sabbir on a rooftop at sunset", "Rooftop, 1 July 2025"),
} satisfies Record<string, Photo>;

export const STORY = {
  quote: "I never had a straight path, so I learned to build my own.",
  intro:
    "This is how a boy who made clothes by day and wrote code by night ended up building systems for some of Bangladesh's best-known brands.",
};

export interface Chapter {
  when: string;
  title: string;
  paragraphs: string[];
  photo?: Photo;
}

export const CHAPTERS: Chapter[] = [
  {
    when: "Class 7",
    title: "The year everything changed",
    paragraphs: [
      "I was in class seven when money ran out at home. My family packed up and moved to Narsingdi so that everyone who could work, would. I was one of them.",
      "From then on, my days belonged to work. I made clothes, hour after hour, and school became a place I went to only to sit my exams. Whatever studying I did happened at night, after the work was done.",
    ],
  },
  {
    when: "2021",
    title: "My first line of code",
    paragraphs: [
      "Near the end of class nine, I opened a laptop and wrote my first code. It was HTML, and it was simple, but it was mine.",
      "After that, the nights changed. I made clothes all day and practised coding all night, until the sky outside started to get light.",
    ],
  },
  {
    when: "The hardest part",
    title: "When the course stopped",
    paragraphs: [
      "I joined a course to learn properly. It reached JavaScript arrays and objects, and then it stopped. No more lessons. No one to ask.",
      "That hurt more than I can explain. It felt like a door closing just as I had found it. So I made a decision: if there was no teacher left, I would be my own motivation. Every day I opened YouTube, watched one more video, and practised until it made sense. Then I came back and did it again the next day.",
    ],
    photo: PHOTOS.college1,
  },
  {
    when: "Discipline",
    title: "What the gym taught me",
    paragraphs: [
      "Training at the gym gave me the habit that held everything together: show up every day, even when progress is too slow to see. I brought that same habit to every night of coding.",
    ],
    photo: PHOTOS.gym,
  },
  {
    when: "2025",
    title: "Rahul bhai, and the door that opened",
    paragraphs: [
      "Then I met Rahul bhai. He taught me how real work gets done, and it was through him that I got my first job. He didn't teach me everything; the rest I kept learning from YouTube and from my own mistakes. But without him, I would not have walked through that door.",
      "In 2025 I joined PKG IT as a full-stack developer. I still remember holding that appointment letter.",
    ],
    photo: PHOTOS.joiningDay,
  },
  {
    when: "Today",
    title: "Building for national brands",
    paragraphs: [
      "Today I build the websites, admin panels, CRMs and real-time dashboards behind Rainbow Paints, Anwar Ispat, A1 Polymer, ProtonBD and Property Lifts. I use AI tools to move faster, and I make sure I understand every line I ship.",
    ],
  },
  {
    when: "Next",
    title: "What comes next",
    paragraphs: [
      "I'm learning web application security, because the systems I build deserve to be defended. And I'm going back to finish my HSC. I left college before the exam, and I want to close that chapter properly.",
      "I never had a straight path. So I keep building my own.",
    ],
  },
];

/** Photo wall at the end of the story, roughly in time order. */
export const MOMENTS: Photo[] = [
  PHOTOS.afterClass,
  PHOTOS.college2,
  PHOTOS.afterCollege,
  PHOTOS.afternoon,
  PHOTOS.rooftop,
  PHOTOS.pithaUtsab,
];
