const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// הוספת הסיומת mjs עבור Firebase 12
config.resolver.sourceExts.push('mjs');

module.exports = config;
