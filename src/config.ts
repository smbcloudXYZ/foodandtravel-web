export const SITE = {
  // SITE INFO ///////////////////////////////////////////////////////////////////////////////////////////
  website: 'https://fatapp.5mb.com/', // Site domain
  title: 'FatApp', // Site title
  author: 'Splitfire AB', // Author name
  description: 'FatApp - 4.5+ Star Restaurants', // Site description
  language: 'id-ID', // Default language

  // GENERAL SETTINGS ////////////////////////////////////////////////////////////////////////////////////
  contentWidth: '35rem', // Content area width
  centeredLayout: true, // Use centered layout (false for left-aligned)
  favicon: false, // Show favicon on index page
  themeToggle: false, // Show theme toggle button (uses system theme by default)
  footer: true, // Show footer
  fadeAnimation: true, // Enable fade animations

  // DATE SETTINGS ///////////////////////////////////////////////////////////////////////////////////////
  dateFormat: 'YYYY-MM-DD', // Date format: YYYY-MM-DD, MM-DD-YYYY, DD-MM-YYYY, MONTH DAY YYYY, DAY MONTH YYYY
  dateSeparator: '.', // Date separator: . - / (except for MONTH DAY YYYY and DAY MONTH YYYY)
  dateOnRight: true, // Date position in post list (true for right, false for left)

  // POST SETTINGS ///////////////////////////////////////////////////////////////////////////////////////
  readingTime: false, // Show reading time in posts
  toc: true, // Show the table of contents when there is enough page width
  imageViewer: true, // Enable image viewer
  copyCode: true // Enable copy button in code blocks
}
