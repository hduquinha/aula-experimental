export default function handler(req, res) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#000d0e;stop-opacity:1" />
      <stop offset="60%" style="stop-color:#001a1c;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#002426;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#018E95;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#6AC1C1;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#f59e0b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#fcd34d;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="divLine" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#018E95;stop-opacity:0" />
      <stop offset="30%" style="stop-color:#018E95;stop-opacity:0.6" />
      <stop offset="70%" style="stop-color:#018E95;stop-opacity:0.6" />
      <stop offset="100%" style="stop-color:#018E95;stop-opacity:0" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)" />

  <!-- Decorative grid lines -->
  <line x1="0" y1="180" x2="1200" y2="180" stroke="#018E95" stroke-width="0.5" stroke-opacity="0.12" />
  <line x1="0" y1="450" x2="1200" y2="450" stroke="#018E95" stroke-width="0.5" stroke-opacity="0.12" />

  <!-- Accent circles decorativas -->
  <circle cx="1100" cy="80" r="180" fill="none" stroke="#018E95" stroke-width="1" stroke-opacity="0.08" />
  <circle cx="1100" cy="80" r="120" fill="none" stroke="#018E95" stroke-width="1" stroke-opacity="0.10" />
  <circle cx="100" cy="560" r="150" fill="none" stroke="#018E95" stroke-width="1" stroke-opacity="0.08" />

  <!-- Vertical divider -->
  <rect x="560" y="60" width="1.5" height="510" fill="url(#divLine)" />

  <!-- LEFT SIDE — Branding -->

  <!-- Logo circle bg -->
  <circle cx="180" cy="185" r="72" fill="#018E95" fill-opacity="0.12" />
  <circle cx="180" cy="185" r="60" fill="#001a1c" />
  <circle cx="180" cy="185" r="58" fill="none" stroke="url(#accent)" stroke-width="3" />

  <!-- VOZUP text inside circle (logo placeholder) -->
  <text x="180" y="179" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-size="18" font-weight="900" fill="#018E95" letter-spacing="1">VOZ</text>
  <text x="180" y="200" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-size="18" font-weight="900" fill="#6AC1C1" letter-spacing="1">UP</text>

  <!-- School name -->
  <text x="180" y="280" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-size="36" font-weight="900" fill="#ffffff" letter-spacing="2">VOZUP</text>
  <text x="180" y="308" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="400" fill="#6AC1C1" letter-spacing="2">ESCOLA DE ORATÓRIA</text>
  <text x="180" y="326" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="400" fill="#6AC1C1" letter-spacing="2">E INTELIGÊNCIA EMOCIONAL</text>

  <!-- Divider bar -->
  <rect x="130" y="348" width="100" height="2" rx="1" fill="url(#accent)" />

  <!-- Event badge -->
  <rect x="80" y="368" width="200" height="28" rx="14" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.4" />
  <circle cx="97" cy="382" r="5" fill="#f59e0b" />
  <text x="180" y="387" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#fcd34d" letter-spacing="1">AULA EXPERIMENTAL · EXCLUSIVA</text>

  <!-- Vagas limitadas badge -->
  <rect x="95" y="412" width="170" height="26" rx="13" fill="#e03131" fill-opacity="0.12" stroke="#e03131" stroke-width="1" stroke-opacity="0.35" />
  <circle cx="111" cy="425" r="4" fill="#e03131" />
  <text x="180" y="430" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#fca5a5" letter-spacing="0.8">VAGAS LIMITADAS</text>

  <!-- RIGHT SIDE — Event details -->

  <!-- Title -->
  <text x="620" y="140" font-family="Arial Black, Arial, sans-serif" font-size="42" font-weight="900" fill="#ffffff" letter-spacing="-0.5">Garanta sua</text>
  <text x="620" y="195" font-family="Arial Black, Arial, sans-serif" font-size="42" font-weight="900" fill="url(#accent)" letter-spacing="-0.5">vaga agora</text>

  <!-- Subtitle -->
  <text x="620" y="240" font-family="Arial, sans-serif" font-size="16" fill="#8aaeaf" font-weight="400">Aula experimental presencial e exclusiva</text>

  <!-- Divider line -->
  <rect x="620" y="264" width="520" height="1" fill="#018E95" fill-opacity="0.2" />

  <!-- Detail rows -->

  <!-- Calendário -->
  <rect x="620" y="284" width="500" height="64" rx="10" fill="#018E95" fill-opacity="0.06" stroke="#018E95" stroke-width="1" stroke-opacity="0.2" />
  <!-- calendar icon simplified -->
  <rect x="640" y="302" width="22" height="20" rx="3" fill="none" stroke="#6AC1C1" stroke-width="1.5" />
  <line x1="640" y1="308" x2="662" y2="308" stroke="#6AC1C1" stroke-width="1.5" />
  <line x1="648" y1="298" x2="648" y2="302" stroke="#6AC1C1" stroke-width="1.5" />
  <line x1="654" y1="298" x2="654" y2="302" stroke="#6AC1C1" stroke-width="1.5" />
  <text x="674" y="308" font-family="Arial, sans-serif" font-size="10" fill="#6AC1C1" font-weight="700" letter-spacing="1">DATA</text>
  <text x="674" y="326" font-family="Arial, sans-serif" font-size="15" fill="#ffffff" font-weight="700">Terça-feira, 30 de Junho de 2025</text>

  <!-- Relógio -->
  <rect x="620" y="360" width="500" height="64" rx="10" fill="#018E95" fill-opacity="0.06" stroke="#018E95" stroke-width="1" stroke-opacity="0.2" />
  <circle cx="651" cy="392" r="11" fill="none" stroke="#6AC1C1" stroke-width="1.5" />
  <line x1="651" y1="386" x2="651" y2="392" stroke="#6AC1C1" stroke-width="1.5" stroke-linecap="round" />
  <line x1="651" y1="392" x2="657" y2="395" stroke="#6AC1C1" stroke-width="1.5" stroke-linecap="round" />
  <text x="674" y="384" font-family="Arial, sans-serif" font-size="10" fill="#6AC1C1" font-weight="700" letter-spacing="1">HORÁRIO</text>
  <text x="674" y="402" font-family="Arial, sans-serif" font-size="15" fill="#ffffff" font-weight="700">18h59 às 21h09</text>

  <!-- Local -->
  <rect x="620" y="436" width="500" height="64" rx="10" fill="#018E95" fill-opacity="0.06" stroke="#018E95" stroke-width="1" stroke-opacity="0.2" />
  <circle cx="651" cy="461" r="9" fill="none" stroke="#6AC1C1" stroke-width="1.5" />
  <circle cx="651" cy="461" r="3" fill="#6AC1C1" />
  <line x1="651" y1="470" x2="651" y2="480" stroke="#6AC1C1" stroke-width="1.5" stroke-linecap="round" />
  <text x="674" y="458" font-family="Arial, sans-serif" font-size="10" fill="#6AC1C1" font-weight="700" letter-spacing="1">LOCAL</text>
  <text x="674" y="476" font-family="Arial, sans-serif" font-size="14" fill="#ffffff" font-weight="700">Rua Azevedo Soares, 1334 — Tatuapé, SP</text>

  <!-- CTA button -->
  <rect x="620" y="516" width="500" height="52" rx="10" fill="url(#gold)" />
  <text x="870" y="548" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-size="18" font-weight="900" fill="#1a0a00" letter-spacing="0.5">GARANTIR MINHA VAGA</text>

  <!-- Bottom URL -->
  <text x="600" y="608" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#3d6062" letter-spacing="0.5">vozup-campanha-b.vercel.app</text>
</svg>`;

  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "public, max-age=3600");
  res.status(200).send(svg);
}
