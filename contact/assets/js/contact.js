const form = document.querySelector("#contact-form");
const message = document.querySelector("#message");
const count = document.querySelector("[data-character-count]");
const productField = document.querySelector("[data-product-field]");
const productSelect = document.querySelector("#product");
const status = document.querySelector("#form-status");
const topicInputs = document.querySelectorAll('input[name="topic"]');

const fieldMessages = {
  name: "Please enter your name.",
  email: "Please enter a valid email address.",
  subject: "Please enter a subject.",
  message: "Please enter a message.",
  privacy: "Please confirm that you have read the privacy notice."
};

const updateCount = () => {
  count.textContent = String(message.value.length);
};

const updateTopicFields = () => {
  const topic = document.querySelector('input[name="topic"]:checked')?.value;
  const needsProduct = topic === "technical-support";

  productField.hidden = !needsProduct;
  productSelect.required = needsProduct;

  if (!needsProduct) {
    productSelect.value = "";
  }
};

const setError = (field, messageText) => {
  const error = document.querySelector(`[data-error-for="${field.id}"]`);
  field.setAttribute("aria-invalid", "true");
  if (error) error.textContent = messageText;
};

const clearError = (field) => {
  const error = document.querySelector(`[data-error-for="${field.id}"]`);
  field.removeAttribute("aria-invalid");
  if (error) error.textContent = "";
};

const validateField = (field) => {
  clearError(field);

  if (field.type === "checkbox" && !field.checked) {
    setError(field, fieldMessages[field.id]);
    return false;
  }

  if (field.required && !field.value.trim()) {
    setError(field, fieldMessages[field.id] || "This field is required.");
    return false;
  }

  if (field.type === "email" && field.value && !field.validity.valid) {
    setError(field, fieldMessages.email);
    return false;
  }

  return true;
};

message.addEventListener("input", updateCount);
topicInputs.forEach((input) => input.addEventListener("change", updateTopicFields));

form.querySelectorAll("input, textarea, select").forEach((field) => {
  field.addEventListener("blur", () => {
    if (field.required) validateField(field);
  });

  field.addEventListener("input", () => clearError(field));
});

form.addEventListener("submit", (event) => {
  status.textContent = "";

  const honeypot = form.elements.company_website;
  if (honeypot.value) {
    event.preventDefault();
    return;
  }

  const requiredFields = [...form.querySelectorAll("[required]")].filter(
    (field) => !field.closest("[hidden]")
  );

  const isValid = requiredFields.map(validateField).every(Boolean);

  if (!isValid) {
    event.preventDefault();
    status.textContent = "Please review the highlighted fields.";
    form.querySelector('[aria-invalid="true"]')?.focus();
    return;
  }

  /*
    The form is intentionally prevented from sending until a production
    endpoint is configured. Remove preventDefault() after setting the form
    action, or replace this block with your preferred fetch implementation.
  */
  event.preventDefault();
  status.textContent = "The form is ready. Connect your form handler to enable sending.";
});

updateCount();
updateTopicFields();
