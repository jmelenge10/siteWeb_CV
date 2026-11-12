// Applies the theme chosen with the switch before the page is painted (avoids a flash).
try {
  var saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') document.documentElement.dataset.theme = saved;
} catch (e) {}
