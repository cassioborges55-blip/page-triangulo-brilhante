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
