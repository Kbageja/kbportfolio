export const GA_TRACKING_ID = 'G-TJVSGR5SJ6'; // <-- your Measurement ID here

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, params }) => {
  window.gtag('event', action, params);
};
