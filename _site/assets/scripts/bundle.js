import { logger } from './logger.js';
import { toggleMode } from './toggleMode.js';

document.addEventListener('DOMContentLoaded', () => {
    logger();
    toggleMode();
});