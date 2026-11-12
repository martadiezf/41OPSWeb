// Builds public/llms.txt (index) and public/llms-full.txt (full, structured)
// from the site's English copy, including sections not currently shown on the page.
// Superseded content (e.g. the old open/closed engagement modes) is left out on purpose.
// Run: node tools/build-llms.mjs   (bundles src/app/i18n/en.ts with esbuild)
import { build } from 'esbuild';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const out = join(mkdtempSync(join(tmpdir(), 'llms-')), 'en.mjs');
await build({ entryPoints: ['src/app/i18n/en.ts'], bundle: true, format: 'esm', platform: 'node', outfile: out, logLevel: 'silent' });
const { EN: t } = await import(out);

const SITE = 'https://www.41ops.com';
const md = (html = '') => html
  .replace(/<h3[^>]*>(.*?)<\/h3>/gs, '\n#### $1\n')
  .replace(/<h4[^>]*>(.*?)<\/h4>/gs, '\n##### $1\n')
  .replace(/<li[^>]*>/g, '\n- ').replace(/<\/li>/g, '')
  .replace(/<br\s*\/?>/g, '\n')
  .replace(/<\/p>/g, '\n\n')
  .replace(/<a [^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gs, '[$2]($1)')
  .replace(/<(strong|b)>(.*?)<\/\1>/gs, '**$2**').replace(/<(em|i)>(.*?)<\/\1>/gs, '*$2*')
  .replace(/<[^>]+>/g, '')
  .replace(/\\n/g, '\n').replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
const list = (items) => items.map((i) => `- ${i}`).join('\n');

const p = t.partStw, a = t.approach;
const full = [];
full.push(`# 41OPS: the only training that ends in production

> ${t.hero.description}

${p.lead}

Website: ${SITE} · Contact: hello@41ops.com · ${t.contactUs.addressLines.join(', ')}
Part of SciTheWorld: https://scitheworld.com · Research: https://algorithmization.com`);

full.push(`## ${p.pipelineLabel}
${p.pipeline.map((s, i) => `${i + 1}. **${s.title}**: ${s.text}`).join('\n')}

${p.pipelineNote}`);

full.push(`## What 41OPS does
${p.bridge}

${p.intro}

### ${p.stepsLabel}
${p.steps.map((s) => `${s.number}. **${s.title}** (${s.tag}): ${s.text}`).join('\n')}

${p.stepsNote}

### ${p.doorsLabel}
${p.doors.map((d) => `- **${d.title}**: ${d.text}`).join('\n')}

### ${p.modesLabel}
${p.modes.map((m) => `- **${m.title}**: ${m.text}`).join('\n')}

${p.closing}`);

full.push(`## ${a.title.replace(/‑/g, '-')}
${a.lead}

${a.columns.map((c) => `### ${c.title} (${c.subtitle.toLowerCase()})\n${c.steps.map((s, i) => `${i + 1}. ${s}`).join('\n')}\n\n${c.artifact}`).join('\n\n')}

### From the spreadsheet to the algorithmized artifact
${a.timeline.map((x) => `- **${x.label}: ${x.title}.** ${x.text}`).join('\n')}

### ${a.m1Label}: ${a.m1Title}
${a.m1Text}

### ${a.plugTitle}
${a.plugLead}
${a.layers.map((l) => `- **${l.title}**: ${l.text}`).join('\n')}

${a.closing}`);

full.push(`## ${t.highlights.sectionTitle.charAt(0) + t.highlights.sectionTitle.slice(1).toLowerCase()}
${t.highlights.cards.map((c) => `### ${c.title}
${md(c.description)}
${(c.testimonials || []).map((x) => `\n> "${x.quote}" (${x.name}, ${x.role.toLowerCase()})`).join('\n')}
${c.markers?.length ? `\n#### What LLMs answer, around the world\n${c.markers.map((m) => `- **${m.city}, ${m.country}**: ${m.description}`).join('\n')}` : ''}
${c.prompt ? `\n#### Data MAPs (2022), chapter 3\n${c.prompt.split('Follows the Chapter:')[1]?.trim() ?? ''}` : ''}`).join('\n\n')}`);

full.push(`## ${t.deeper.title}
${t.aboutUsHorizontal.map((s) => `### ${s.title}\n${md(s.modalContent)}`).join('\n\n')}

### ${t.deeper.toolkit.title}
${t.deeper.toolkit.teaser}`);

full.push(`## Why 41OPS
${t.unbeatableVertical.map((s) => `### ${s.title}\n${md(s.modalContent || s.customContent)}`).join('\n\n')}`);

full.push(`## About 41OPS in depth
${t.newVerticalSections.filter((s) => s.modalContent).map((s) => `### ${s.title}\n*${s.subtitle.charAt(0) + s.subtitle.slice(1).toLowerCase()}*\n\n${md(s.modalContent)}`).join('\n\n')}

### Two speeds in transformation
${t.transformationSpeeds.map((m) => `#### ${m.title}\n${md(m.content)}`).join('\n\n')}`);

full.push(`## Algorithmization, the research behind 41OPS
${t.oldVerticalSections.filter((s) => s.modalContent).map((s) => `### ${s.title.charAt(0) + s.title.slice(1).toLowerCase()}\n${md(s.modalContent)}`).join('\n\n')}

### The three knowledge pillars
${t.pillarsList.map((m) => `#### ${m.title}\n${md(m.content)}`).join('\n\n')}

### Outputs
${t.outputsList.map((m) => `#### ${m.title}\n${md(m.content)}`).join('\n\n')}`);

full.push(`## ${t.academicPartners.title}
${t.academicPartners.introText}
${t.academicPartners.partners.map((x) => `- **${x.institution}**: ${x.partnership}`).join('\n')}

${t.academicPartners.outroText}`);

full.push(`## Awards
${t.awards.items.map((x) => `- **${x.name}** (${x.category.toLowerCase()}): ${x.project}${x.year ? `, ${x.year}` : ''}`).join('\n')}`);

full.push(`## ${t.newsroom.title}
${t.newsroom.items.map((n) => `- **${n.date} · ${n.company} · ${n.title}**: ${n.summary}${n.howAiSeesUs ? ` ([read](${n.howAiSeesUs}))` : ''}`).join('\n')}`);

full.push(`## ${t.edge.title}
${t.edge.text}`);

full.push(`## Join us
${md(t.joinUs.description)}

${t.joinUs.jobOffers.map((j) => `### ${j.position} (${j.location})\n${md(j.description)}`).join('\n\n')}`);

full.push(`## Contact
hello@41ops.com · ${t.contactUs.addressLines.join(', ')} · ${SITE}`);

writeFileSync('public/llms-full.txt', full.join('\n\n---\n\n') + '\n');

const index = `# 41OPS

> ${t.hero.description}

${p.lead} ${p.intro}

41OPS trains first (CALM, Back to the Future), then takes the client's own artifact to pre-production and production with Data MAPs on Fractal (AI OS) or Alpha Dynamics (advanced investment). Each step only if the previous one leads there.

## Content
- [Full content](${SITE}/llms-full.txt): everything on this site, structured, including sections not currently shown on the page.
- [Home](${SITE}/): positioning, how we work, highlights, awards, partners, newsroom and contact.

## The group
- [SciTheWorld](https://scitheworld.com): family business in state-of-the-art investing; a conglomerate built on its own R&D.
- [Algorithmization](https://algorithmization.com): the R. Research centre and timestamped papers.
- [SystematicMe](https://systematicme.com)
- [Learning~Adaptive](https://learningadaptive.com)
`;
writeFileSync('public/llms.txt', index);
console.log('llms.txt', index.length, 'chars; llms-full.txt', full.join('').length, 'chars');
