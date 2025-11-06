# site

Praeon marketing site.

## Design system

The shared stylesheet (`assets/styles.css`) encodes the Praeon interface schema so every
page presents the same compliance-grade look and feel:

- **Palette:** deep night background (`--bg`) with glacial blue surfaces and a mint
  accent for positive, audit-ready states.
- **Type scale:** display 44/52, section headings 32/40, tertiary headings 24/32, body
  18/28, and supporting small text 15/24 using Space Grotesk for headings and Inter for
  body copy.
- **Spacing:** 8px base unit exposed as `--space-*` tokens to keep sections, cards, and
  forms consistently padded.
- **Components:** cards, CTA bands, navigation, and forms all pull from shared classes
  so that the homepage, product story, docs, and contact flows use the same affordances.

Update tokens in `assets/styles.css` when evolving the brand; downstream pages will pick
up the refreshed styling automatically.
