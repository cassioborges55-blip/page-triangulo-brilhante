/**
 * Tracking helpers — push events to the GTM dataLayer.
 * Safe to call even if dataLayer is undefined.
 */

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

function push(event: Record<string, unknown>) {
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(event);
}

/**
 * Fire when the lead form is successfully persisted to the database.
 */
export function trackLeadSubmit(params: {
  tipoEvento: string;
  publico: string;
}) {
  push({
    event: "lead_form_submit",
    form_name: "lp_page_eventos",
    tipo_evento: params.tipoEvento,
    publico: params.publico,
  });
}

/**
 * Fire before opening the WhatsApp link from any CTA.
 */
export function trackWhatsappClick(local: string) {
  push({ event: "whatsapp_click", local });
}

/**
 * Fire when a generic CTA (non-WhatsApp) is clicked.
 */
export function trackCtaClick(local: string) {
  push({ event: "cta_click", local });
}

export const WHATSAPP_NUMBER = "5534998093337";

export const WHATSAPP_BASE_MESSAGE =
  "Olá! Vim pela página do PAGE Eventos e quero saber mais sobre o sistema para o meu evento.";

const REF_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
] as const;

/**
 * Reads campaign params from the URL and returns a compact "(ref: ...)" suffix.
 * Returns "" when no param is present.
 */
export function getRefSuffix(): string {
  if (typeof window === "undefined") return "";
  let params: URLSearchParams;
  try {
    params = new URLSearchParams(window.location.search);
  } catch {
    return "";
  }
  const values = REF_KEYS.map((k) => params.get(k))
    .filter((v): v is string => !!v && v.trim() !== "")
    .map((v) => v.trim().replace(/\s+/g, ""));
  if (values.length === 0) return "";
  const ref = values.join("-").slice(0, 60);
  return ` (ref: ${ref})`;
}

/**
 * Builds a wa.me link with a pre-filled message (base message by default),
 * appending campaign reference when present in the URL.
 */
export function buildWhatsappUrl(message: string = WHATSAPP_BASE_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message + getRefSuffix())}`;
}
