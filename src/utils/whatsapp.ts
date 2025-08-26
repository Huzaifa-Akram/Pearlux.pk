/**
 * Utility function to open WhatsApp with a pre-populated message for product inquiry
 */
export const contactViaWhatsApp = (
  productName: string,
  productId: string,
  customMessage?: string
) => {
  // WhatsApp number
  const phoneNumber = "923126295899"; // Pearlux contact number

  // Create default message template
  const defaultMessage = `Hello! I'm interested in purchasing ${productName} (ID: ${productId}) from Pearlux. Is it available?`;

  // Use custom message if provided, otherwise use default
  const message = customMessage || defaultMessage;

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);

  // Open WhatsApp in new tab
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
};

/**
 * Utility function to get WhatsApp link without opening it
 * Useful for non-interactive elements like <a> tags
 */
export const getWhatsAppLink = (
  productName: string,
  productId: string,
  customMessage?: string
) => {
  // WhatsApp number
  const phoneNumber = "923126295899"; // Pearlux contact number

  // Create default message template
  const defaultMessage = `Hello! I'm interested in purchasing ${productName} (ID: ${productId}) from Pearlux. Is it available?`;

  // Use custom message if provided, otherwise use default
  const message = customMessage || defaultMessage;

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);

  // Return WhatsApp URL
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
