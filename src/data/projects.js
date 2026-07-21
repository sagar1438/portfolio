const projects = [
  {
    title: "Cinefy — BookMyShow",
    period: "Mar 2026 — Apr 2026",
    description:
      "A BookMyShow-style movie ticket booking backend that manages movies, theatres, screens, and bookings for over 10 entities under concurrent load.",
    features: [
      "Seat booking and locking logic with confirmation, cancellation, and payment handling",
      "Supports 100+ concurrent users during peak load",
      "99.9% double-booking prevention with ACID-compliant transactions",
    ],
    challenge:
      "Preventing double bookings under concurrent seat selection while keeping response times under 200ms — solved with row-level seat locking and transactional integrity, and kept the API clean using DTOs, custom exception handling, and Jakarta Validation, cutting redundant code by 30%.",
    stack: ["Java 21", "Spring Boot", "Spring Data JPA", "MySQL", "Hibernate", "Maven"],
    github: "https://github.com/sagar1438/Cinefy-BookMyShow",
  },
  {
    title: "LRU Cache — Memory & Concurrent Variants",
    period: "Aug 2025 — Sep 2025",
    description:
      "A production-style LRU cache built from scratch in Java, implemented as four progressive variants: a standard cache, a memory-aware cache, and thread-safe versions of both.",
    features: [
      "O(1) get/put using HashMap + Doubly Linked List, cutting average lookup time from 12ms to 5ms",
      ">95% cache hit rate with adaptive eviction policies",
      "Thread-safe variant handling 100+ concurrent requests/sec",
    ],
    challenge:
      "Balancing strict O(1) access with safe concurrent mutation — addressed with coarse-grained synchronization in the concurrent variant, backed by full JUnit 5 test coverage for correctness, and combined memory-usage limits with entry-count limits to keep memory usage 25% lower under 10k+ entry loads.",
    stack: ["Java", "Data Structures", "Maven", "JUnit 5", "Java Concurrency", "Git"],
    github: "https://github.com/sagar1438/LRU-CACHE",
  },
 {
    title: "SnapMind — AI Study & Knowledge Organizer",
    period: "June 2026 — July 2026",
    description:
      "A full-stack AI-powered study organizer — upload a screenshot of notes, a code error, or an article, and it automatically extracts the text and generates a title, summary, and tags.",
    features: [
      "OCR text extraction plus AI-generated titles, summaries, and tags via the Google Gemini API",
      "FastAPI + SQLite backend with 6 REST endpoints — image upload, metadata editing, keyword search, full CRUD",
      "React frontend with gallery, search, and detail views",
    ],
    stack: ["React", "JavaScript", "HTML/CSS", "Python", "FastAPI", "SQLite", "EasyOCR", "Google Gemini API", "Vercel", "Render"],
    github: "https://github.com/sagar1438/SnapMind---Ai",
  },
  {
    title: "FaceTrack — Facial Recognition Attendance System",
    period: "AUG 2025 — SEP 2025",
    description:
      "A Python-based attendance system that replaces manual roll calls with real-time face detection and recognition, built for classrooms, offices, and events.",
    features: [
      "Face detection and recognition using OpenCV and dlib",
      "Attendance records persisted to a MySQL database",
      "Simple interface for starting a session and reviewing attendance",
    ],
    challenge:
      "Recognizing faces reliably enough for real-time use without a heavyweight pipeline — solved by pairing OpenCV's detection with pre-trained recognition models, keeping the whole flow lightweight enough to run live during a session.",
    stack: ["Python", "OpenCV", "dlib", "MySQL"],
    github: "https://github.com/sagar1438/FaceGuard-Attendance-System",
  },
];

export default projects;
