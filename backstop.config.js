module.exports = {
  id: 'uspto-ds-theme',
  viewports: [
    {
      label: 'phone',
      width: 320,
      height: 480
    },
    {
      label: 'tablet',
      width: 768,
      height: 1024
    },
    {
      label: 'desktop',
      width: 1920,
      height: 1080
    }
  ],
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  scenarios: [
    {
      label: 'Button Component',
      url: process.env.BASE_URL || 'http://localhost:8080/index.html',
      selectors: ['#buttonExample'],
      misMatchThreshold: 0.1,
      requireSameDimensions: true
    },
    {
      label: 'Form Component',
      url: process.env.BASE_URL || 'http://localhost:8080/index.html',
      selectors: ['#formExample'],
      misMatchThreshold: 0.1,
      requireSameDimensions: true
    },
    {
      label: 'Alert Component',
      url: process.env.BASE_URL || 'http://localhost:8080/index.html',
      selectors: ['#alertExample'],
      misMatchThreshold: 0.1,
      requireSameDimensions: true
    },
    {
      label: 'Step Indicator Component',
      url: process.env.BASE_URL || 'http://localhost:8080/index.html',
      selectors: ['#stepIndicatorExample'],
      misMatchThreshold: 0.1,
      requireSameDimensions: true
    },
    {
      label: 'Table Component',
      url: process.env.BASE_URL || 'http://localhost:8080/index.html',
      selectors: ['#tableExample'],
      misMatchThreshold: 0.1,
      requireSameDimensions: true
    },
    {
      label: 'Global Header',
      url: process.env.BASE_URL || 'http://localhost:8080/index.html',
      selectors: ['#global-header'],
      misMatchThreshold: 0.1,
      requireSameDimensions: true
    }
  ],
  paths: {
    bitmaps_reference: 'test/visual/reference',
    bitmaps_test: 'test/visual/test',
    engine_scripts: 'test/visual/engine_scripts',
    html_report: 'test/visual/html_report',
    ci_report: 'test/visual/ci_report'
  },
  report: ['browser', 'CI'],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox']
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false
};
