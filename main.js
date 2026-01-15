/**
 * Z-Index Controller
 * Manages z-index input controls for multiple elements
 */

// Constants
const VALID_Z_INDEX_KEYWORDS = Object.freeze([
  'auto',
  'inherit',
  'initial',
  'revert',
  'revert-layer',
  'unset'
]);

const ELEMENT_COUNT = 6;
const ERROR_MESSAGE = 'Enter a valid z-index value';
const DEFAULT_Z_INDEX = 'auto';

// Element cache for performance
const elements = {
  inputs: [],
  displays: [],
  targets: [],
  resetButton: null
};

/**
 * Validates if a value is a valid z-index
 * @param {string} value - The value to validate
 * @returns {boolean}
 */
function isValidZIndex(value) {
  return Number.isInteger(Number(value)) || VALID_Z_INDEX_KEYWORDS.includes(value);
}

/**
 * Updates the z-index display text
 * @param {HTMLElement} displayElement - The element to update
 * @param {string} value - The z-index value to display
 */
function updateZIndexDisplay(displayElement, value) {
  displayElement.textContent = `z-index: ${value}`;
}

/**
 * Applies z-index to an element
 * @param {HTMLElement} targetElement - The element to apply z-index to
 * @param {string} value - The z-index value
 */
function applyZIndex(targetElement, value) {
  targetElement.style.zIndex = value;
}

/**
 * Handles input event - validates and applies z-index in real-time
 * @param {number} elementIndex - The index of the element (1-based)
 * @returns {Function} Event handler function
 */
function createInputHandler(elementIndex) {
  return (event) => {
    const value = event.target.value;
    
    // If empty, show auto and apply auto
    if (value === '') {
      updateZIndexDisplay(elements.displays[elementIndex], DEFAULT_Z_INDEX);
      applyZIndex(elements.targets[elementIndex], DEFAULT_Z_INDEX);
      return;
    }
    
    // Show current input value
    updateZIndexDisplay(elements.displays[elementIndex], value);
    
    // Apply z-index if valid, otherwise apply auto
    const isValid = isValidZIndex(value);
    const zIndexValue = isValid ? value : DEFAULT_Z_INDEX;
    applyZIndex(elements.targets[elementIndex], zIndexValue);
  };
}

/**
 * Handles blur event - shows error message if invalid
 * @param {number} elementIndex - The index of the element (1-based)
 * @returns {Function} Event handler function
 */
function createBlurHandler(elementIndex) {
  return (event) => {
    const value = event.target.value;
    
    // Only update display if value is invalid to show error
    if (value !== '' && !isValidZIndex(value)) {
      updateZIndexDisplay(elements.displays[elementIndex], ERROR_MESSAGE);
    }
  };
}

/**
 * Resets all elements to default z-index
 */
function resetAll() {
  for (let i = 1; i <= ELEMENT_COUNT; i++) {
    updateZIndexDisplay(elements.displays[i], DEFAULT_Z_INDEX);
    applyZIndex(elements.targets[i], DEFAULT_Z_INDEX);
    elements.inputs[i].value = '';
  }
}

/**
 * Caches DOM elements for better performance
 */
function cacheElements() {
  for (let i = 1; i <= ELEMENT_COUNT; i++) {
    elements.inputs[i] = document.getElementById(`elementInput${i}`);
    elements.displays[i] = document.getElementById(`element${i}ZIndex`);
    elements.targets[i] = document.getElementById(`element${i}`);
  }
  elements.resetButton = document.getElementById('resetButton');
}

/**
 * Attaches event listeners to all input elements
 */
function attachEventListeners() {
  for (let i = 1; i <= ELEMENT_COUNT; i++) {
    elements.inputs[i].addEventListener('input', createInputHandler(i));
    elements.inputs[i].addEventListener('blur', createBlurHandler(i));
  }
  elements.resetButton.addEventListener('click', resetAll);
}

/**
 * Initialize the application
 */
function initialize() {
  cacheElements();
  attachEventListeners();
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  initialize();
}