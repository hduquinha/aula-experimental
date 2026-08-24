(function () {
  const WHATSAPP_NUMBER = "551120901412";
  const CTA_CLASS = "whatsapp-success-link";

  function buildWhatsAppUrl(name) {
    const visitorName = String(name || "").replace(/\s+/g, " ").trim();
    const message = visitorName
      ? `Olá! Meu nome é ${visitorName}. Acabei de concluir meu cadastro e gostaria de falar com a equipe.`
      : "Olá! Acabei de concluir meu cadastro e gostaria de falar com a equipe.";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  function addWhatsAppCta() {
    const successBlock = document.getElementById("successBlock");
    const form = document.getElementById("regForm");
    if (!successBlock || !form || successBlock.querySelector(`.${CTA_CLASS}`)) return;

    const nameInput = form.elements.namedItem("nome");
    const link = document.createElement("a");
    link.className = CTA_CLASS;
    link.href = buildWhatsAppUrl(nameInput && "value" in nameInput ? nameInput.value : "");
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Chamar no WhatsApp";
    successBlock.append(link);
  }

  function observeSuccessState() {
    const successBlock = document.getElementById("successBlock");
    if (!successBlock) return;

    if (successBlock.classList.contains("visible")) addWhatsAppCta();
    new MutationObserver(() => {
      if (successBlock.classList.contains("visible")) addWhatsAppCta();
    }).observe(successBlock, { attributes: true, attributeFilter: ["class"] });
  }

  const style = document.createElement("style");
  style.textContent = `
    .${CTA_CLASS}{display:flex;align-items:center;justify-content:center;min-height:48px;margin:18px auto 0;padding:12px 18px;border-radius:10px;background:#25D366;color:#062b17;font:800 .9rem/1.2 inherit;text-decoration:none;box-shadow:0 10px 22px rgba(37,211,102,.22);transition:transform .18s ease,filter .18s ease}
    .${CTA_CLASS}:hover{transform:translateY(-1px);filter:brightness(1.05)}
    .${CTA_CLASS}:focus-visible{outline:3px solid #fff;outline-offset:3px}
  `;
  document.head.append(style);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", observeSuccessState, { once: true });
  } else {
    observeSuccessState();
  }
})();
