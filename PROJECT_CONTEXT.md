# Project Context

## Overview

This repository contains a static personal portfolio website for Maria del Carmen Salazar. The current implementation is a single-page site built with plain HTML and CSS, with no JavaScript, backend, package manager, build step, or automated testing.

The project currently serves as an initial portfolio landing page with introductory personal information and a services section. It is simple, readable, and easy to deploy, but still early in maturity from a product, UX, accessibility, and maintainability perspective.

## Project Goals

The site appears intended to:

- present a professional identity
- communicate core services and technical areas
- act as a personal brand website
- provide a base for future portfolio expansion

## Tech Stack

- HTML5
- CSS3
- Google Fonts (`Poppins`)
- Local PNG image assets
- Git / GitHub for version control

## Repository Layout

- `index.html`: main page markup
- `estilos.css`: global styles for the site
- `README.md`: short project description
- `LICENSE`: GPL v3 license text
- `fondo.png`: hero background image
- `image.png`: main profile image
- `base-de-datos.png`, `mostrar-codigo.png`, `mucho-alternativo.png`, `navegador.png`, `pastilla.png`, `prueba.png`: service icons
- `init.md`: initial descriptive context document

## Current Architecture

The codebase is intentionally simple and fully static.

### Markup model

- all content is embedded directly in `index.html`
- there are no reusable partials or components
- there is no dynamic rendering
- the page is structured as a single landing page

### Styling model

- all styling is centralized in `estilos.css`
- layout relies mainly on Flexbox
- styling is global, not modular
- no responsive breakpoints are currently implemented

### Runtime model

- no client-side application logic
- no state management
- no API integration
- no build-time tooling

## Functional Scope

### Implemented sections

1. Hero / header
2. About section
3. Services section

### Visually referenced but not implemented as real navigation targets

- Mis Trabajos
- ¿Por qué trabajar conmigo?
- Blog
- Contacto

## Content Summary

The site positions Maria del Carmen Salazar as a computing professional with multidisciplinary academic background. The current narrative emphasizes:

- software development
- server administration
- IoT
- electronics
- QA
- web design

This creates a broad technical profile, though the portfolio currently lacks case studies, proof of work, client references, or project detail pages.

## Design Characteristics

The current design direction is a classic early portfolio landing page:

- large hero background image
- centered identity block
- horizontal top navigation
- side-by-side about section
- service cards in a grid-like flex layout
- strong color-block cards for service categories

This gives the site immediate visual structure, but the implementation is still fairly rigid and desktop-oriented.

## Main Technical Findings

### 1. Responsive support is missing

Current CSS strongly suggests desktop-first layout assumptions:

- no `meta viewport` in the document head
- horizontal menu with no mobile fallback
- large fixed vertical spacing in hero
- service cards sized with percentage widths and fixed padding
- no media queries

Likely consequence:

- layout instability or overflow on phones and smaller tablets

### 2. Navigation is present visually but not functionally

The main menu items are plain list text rather than working links, and the main CTA is an anchor without `href`.

Consequence:

- the page implies interactivity it does not actually provide

### 3. Information architecture is incomplete

The page menu references sections that are not implemented. That creates a mismatch between what the interface promises and what the document contains.

Consequence:

- users may interpret the site as unfinished

### 4. Accessibility is limited

Observed issues include:

- missing `alt` text on service images
- non-functional anchor element used as button
- limited semantic depth in content structure

Consequence:

- weaker screen reader support
- lower semantic quality

### 5. Image optimization has not been addressed yet

The largest visual assets are relatively heavy for such a small site.

Consequence:

- slower initial load, especially on mobile or poor connections

## Strengths

- very low complexity
- easy to understand for a beginner or quick maintainer handoff
- no dependency management burden
- fast to host on any static platform
- clear initial personal-brand direction

## Weaknesses

- not responsive
- incomplete navigation model
- missing content sections
- limited accessibility
- heavy image assets
- no testing or validation workflow
- no structure for scaling beyond a very small page

## Product Maturity Assessment

Current maturity level: early prototype / first public draft.

It is already useful as:

- a personal learning project
- a visual mock of a personal brand site
- a starting point for an eventual production portfolio

It is not yet strong enough to be considered a polished professional portfolio without additional work in UX, responsiveness, content depth, and accessibility.

## Maintenance Notes

If the project remains static and small, the current architecture can still work with some cleanup.

If the project grows to include:

- multiple pages
- portfolio items
- blog entries
- contact forms
- localization
- CMS-like editing

then a more modular structure or framework-based approach may become worthwhile.

## Recommended Next Steps

### Immediate

- add `meta viewport`
- replace menu text items with real anchor links
- make the CTA functional
- either implement missing sections or remove them from navigation
- add alt text to service images

### Short term

- add responsive CSS breakpoints
- improve spacing and content hierarchy
- optimize PNG assets
- refine copywriting and consistency

### Medium term

- add portfolio/work samples
- add a contact section
- define a clearer visual system
- consider splitting styles by section if the codebase grows

## Suggested Use Of This Document

This file should act as the working technical reference for anyone modifying the repository. It is especially useful for:

- onboarding into the project quickly
- planning refactors
- identifying current limitations
- deciding whether to keep the project static or evolve it

## Status Summary

The repository is a clean and understandable static portfolio base with a clear personal-brand purpose. Its main gaps are not complexity-related but quality-related: responsiveness, navigation behavior, accessibility, and content completeness.
