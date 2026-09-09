const projects = [
  {
    title: "PickWise — LLM Model Recommendation	Platform",
    period: "Aug 2026 - Present",
    description:
      "A full-stack AI-powered platform that analyzes project requirements and recommends the most suitable LLMs based on cost, speed, quality, and capability.",
    features: [
      "NLP-based requirement extraction and explainable model scoring using Google Gemini API",
      "Python scoring engine evaluating 20+ AI models across multiple selection criteria",
      "React frontend with model discovery and comparison, backed by FastAPI, REST APIs, and SQLite",
    ],
    challenge:
      "Preventing double bookings under concurrent seat selection while keeping response times under 200ms — solved with row-level seat locking and transactional integrity, and kept the API clean using DTOs, custom exception handling, and Jakarta Validation, cutting redundant code by 30%.",
    stack: ["React", "JavaScript", "Python", "FastAPI", "SQLite", "Google Gemini API"],
    github: "https://github.com/sagar1438/PickWise---AI",
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
