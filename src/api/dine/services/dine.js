'use strict';

/**
 * dine service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dine.dine');
