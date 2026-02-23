# 🎵 Discography.lab

An advanced study laboratory focused on **React Fundamentals** and **Data Architecture**. This project explores the technical specifications (liner notes) of albums from iconic bands such as Radiohead, Foo Fighters, and Queens of the Stone Age.

The primary goal of this repository is to strengthen core programming foundations and eliminate over-reliance on AI tools, prioritizing a deep, line-by-line understanding of modern software architecture.

## 🛠️ Tech Stack

This project leverages the most modern and performant tools in the 2026 Front-end ecosystem:

* **Vite + React 19**: Ultra-fast development environment and the latest React features.
* **TypeScript**: Static typing to ensure data safety, predictability, and robust developer experience.
* **TanStack Query (v5)**: Declarative server-state management, handling caching and synchronization.
* **Zod**: Runtime schema validation to guarantee the integrity of data consumed from APIs.
* **Tailwind CSS v4**: Modern, high-performance utility-first styling.
* **JSON Server**: A simulated REST API for data persistence and realistic fetching scenarios.

## 🚀 Key Learning Milestones

Moving beyond "Vibe Coding," this project implements:

1.  **Non-negotiable Data Contracts**: Using **Zod** schemas to validate albums and their technical credits before they even reach the UI layer.
2.  **Service Pattern**: Isolation of `fetch` logic into specialized services, utilizing **TypeScript Generics** for reusable and type-safe API calls.
3.  **Declarative Fetching**: Replacing manual `useEffect` hooks with **TanStack Query** to professionally manage `loading`, `error`, and `cache` states.
4.  **End-to-End Typing**: Leveraging `z.infer` so TypeScript understands exactly what an Album object contains, preventing "undefined" errors at runtime.

## 📦 Getting Started

Follow these steps to run the laboratory locally:

### 1. Install Dependencies
```bash
npm install
