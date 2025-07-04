# Project Overview for AI Assistants

This document provides a concise, structured overview of the `landing-cms-payload` project, designed to help AI assistants quickly understand its architecture, technologies, and key components.

## Core Technologies

*   **Frontend Framework:** Next.js (React)
*   **CMS/Backend:** Payload CMS
*   **Database:** PostgreSQL (managed via Supabase)
*   **File Storage:** S3-compatible object storage (managed via Supabase)
*   **Hosting Platform:** Render

## Project Structure & Key Directories

*   `src/collections/`: Defines the data models (collections) for Payload CMS.
    *   `Users.ts`: User authentication and admin panel access.
    *   `Media.ts`: Handles media uploads and image transformations.
    *   `Pages.ts`: Defines the structure for content pages, utilizing a flexible block system.
*   `src/blocks/`: Contains reusable content blocks used within the `Pages` collection.
    *   `hero/`: Hero section blocks.
    *   `content/`: General content blocks (e.g., text, media, CTAs).
    *   `contact/`: Contact form and information blocks.
*   `src/app/`: Next.js App Router structure.
    *   `(frontend)/`: Public-facing frontend routes.
    *   `(payload)/`: Payload CMS admin panel and API routes.
*   `src/payload.config.ts`: The main configuration file for Payload CMS, defining collections, plugins, and database/storage adapters.
*   `next.config.mjs`: Next.js configuration, integrated with Payload.

## Payload CMS Specifics

*   **Collections:** `Users`, `Media`, `Pages`.
*   **Custom Fields:**
    *   `src/collections/fields/navigation-field.ts`: Custom field for navigation links.
    *   `src/collections/fields/seo.ts`: Custom field for SEO metadata.
*   **Blocks:** The `Pages` collection uses a flexible content field with various blocks. Blocks are dynamically imported and used.
*   **Database Adapter:** `@payloadcms/db-postgres`
*   **Storage Adapter:** `@payloadcms/storage-s3`

## Environment Variables

The project relies on the following environment variables for configuration:

*   `DATABASE_URI`: Connection string for the PostgreSQL database.
*   `PAYLOAD_SECRET`: Secret key for Payload CMS.
*   `S3_BUCKET`: S3 bucket name for media storage.
*   `S3_REGION`: AWS region for the S3 bucket.
*   `S3_ENDPOINT`: Custom S3 endpoint (e.g., for Supabase Storage).
*   `S3_ACCESS_KEY_ID`: Access key ID for S3.
*   `S3_SECRET_ACCESS_KEY`: Secret access key for S3.

## Common Development Commands

*   `pnpm install`: Install project dependencies.
*   `pnpm dev`: Start the Next.js development server with Payload CMS.
*   `pnpm build`: Build the Next.js application for production.
*   `pnpm start`: Start the production server.
*   `pnpm generate:types`: Generate TypeScript types from Payload CMS collections.
*   `pnpm lint`: Run linting checks.
*   `pnpm payload`: Access Payload CMS CLI commands.
