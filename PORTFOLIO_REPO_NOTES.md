# Portfolio repository readiness

This is an internal publishing note. The portfolio links point to real repositories, but the three linked build repositories are currently private. Before making the portfolio public, either make a deliberately prepared repository public or replace its link with a case-study page.

## OdinGraph — duplicate and generalise

Repository: https://github.com/sebabecasis/odingraph

Recommendation: keep the current repository private and create a separate public showcase repository.

Why:

- The repository contains a large, real social graph and derived data files.
- The interface and documentation are written for a specific Odin application and include named people and images.
- Deployment notes refer to protecting Patrick's network data.

Public version:

- Use a small synthetic or explicitly licensed sample network.
- Replace applicant-specific copy and personal assets with a neutral product walkthrough.
- Add an architecture diagram, screenshots, a concise README, and one reproducible demo query.
- Keep the analysis modules that demonstrate PageRank, betweenness, Leiden communities, role classification, embeddings, and evidence retrieval.

The earlier `c-2180` repository overlaps with this idea. Treat it as design history: either archive it privately or use selected concepts in the new public OdinGraph showcase instead of publishing two confusing versions.

## Fintwit Scraping — tidy, then consider making public

Repository: https://github.com/sebabecasis/fintwit-scraping

Recommendation: tidy this repository in place if it contains no proprietary inputs; otherwise duplicate a sanitised version.

Before publication:

- Recheck the full Git history for credentials, paid-provider details, private account lists, email addresses, and production endpoints.
- Replace operational account lists and cached results with a small sample fixture.
- Rewrite the README around the reusable loop: collect, classify, synthesise, store, publish.
- Separate the core pipeline from the finance-specific configuration so the general pattern is obvious.
- Add a sample report or screenshots so a reviewer can understand the output without running paid APIs.

## AI traffic listener — duplicate and generalise

Current state: no corresponding repository is present in the `sebabecasis` GitHub account.

Recommendation: locate the source repository, keep any Disciple deployment private, and create a new public repository such as `ai-agent-traffic-listener`.

Public version:

- Remove Disciple domains, production analytics, Supabase identifiers, and deployment secrets.
- Turn the 29-label classifier into a clearly documented, configurable registry.
- Include anonymised request fixtures and the existing test suite.
- Explain the privacy choice: log matched agent traffic asynchronously without storing human traffic or IP addresses.
- Present the 0.833% result as an anonymised case-study observation, not as live customer data.

## Sentvia and Disciple systems — case studies first

The Sentvia GTM OS, Disciple outbound engine, marketing platform, and acquisition work are useful portfolio evidence, but their current source repositories are either absent from `sebabecasis` or tied to employer systems.

Recommendation: do not publish employer repositories wholesale. Create standalone case-study pages or small reference implementations that show the reusable architecture, sample inputs, safety defaults, and outputs without exposing company data or code.

## Suggested order

1. Publish a sanitised OdinGraph showcase; it is the clearest proof of the Frontier GTM thesis.
2. Tidy and document Fintwit as the always-on agent example.
3. Create the generalised AI traffic listener repository.
4. Convert employer-specific builds into case studies with small, independent reference implementations only where that adds proof.
