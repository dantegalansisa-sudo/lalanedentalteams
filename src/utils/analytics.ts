/**
 * Analytics utility for tracking conversions.
 * TODO: Replace placeholder IDs in index.html with real GA4 and Meta Pixel IDs.
 *
 * GA4 Measurement ID: G-XXXXXXXXXX → Replace in index.html
 * Meta Pixel ID: XXXXXXXXXXXXXXX → Replace in index.html
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/** Track a custom event in Google Analytics 4 */
export function trackGA4Event(eventName: string, params?: Record<string, string | number>) {
  if (window.gtag) {
    window.gtag('event', eventName, params);
  }
}

/** Track a custom event in Meta Pixel */
export function trackMetaEvent(eventName: string, params?: Record<string, string | number>) {
  if (window.fbq) {
    window.fbq('track', eventName, params);
  }
}

/** Track WhatsApp click conversion */
export function trackWhatsAppClick(section: string) {
  trackGA4Event('whatsapp_click', { section, method: 'whatsapp' });
  trackMetaEvent('Contact', { content_name: `WhatsApp - ${section}` });
}

/** Track phone call click */
export function trackCallClick() {
  trackGA4Event('call_click', { method: 'phone' });
  trackMetaEvent('Contact', { content_name: 'Phone Call' });
}

/** Track form submission */
export function trackFormSubmit(formName: string) {
  trackGA4Event('form_submit', { form_name: formName });
  trackMetaEvent('Lead', { content_name: formName });
}

/** Track service page view */
export function trackServiceView(serviceName: string) {
  trackGA4Event('service_view', { service: serviceName });
  trackMetaEvent('ViewContent', { content_name: serviceName });
}

/** Track booking CTA click */
export function trackBookingClick(source: string) {
  trackGA4Event('booking_click', { source });
  trackMetaEvent('Schedule', { content_name: source });
}
