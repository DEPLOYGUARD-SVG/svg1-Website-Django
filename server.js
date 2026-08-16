/**
 * Express.js Backend Server for Personal Portfolio
 * Serves the static portfolio and provides the contact form API endpoint.
 */

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend files from the portfolio directory
app.use(express.static(path.join(__dirname)));

// ==========================================================================
// API ENDPOINTS
// ==========================================================================

/**
 * POST /api/contact
 * Handles contact form submissions.
 */
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Simple input validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields (name, email, subject, message) are required.' 
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide a valid email address.' 
    });
  }

  // Log contact query to console (and server log file if desired)
  console.log('==================================================');
  console.log(`NEW CONTACT MESSAGE RECEIVED: ${new Date().toISOString()}`);
  console.log(`From: ${name} <${email}>`);
  console.log(`Subject: ${subject}`);
  console.log(`Message:\n"${message}"`);
  console.log('==================================================');

  // Nodemailer Integration Placeholder:
  // If SMTP environment variables are set, we would send the email here:
  // 
  // const nodemailer = require('nodemailer');
  // const transporter = nodemailer.createTransport({
  //   host: process.env.EMAIL_HOST,
  //   port: process.env.EMAIL_PORT,
  //   secure: true,
  //   auth: {
  //     user: process.env.EMAIL_USER,
  //     pass: process.env.EMAIL_PASS
  //   }
  // });
  //
  // transporter.sendMail({
  //   from: `"${name}" <${email}>`,
  //   to: process.env.RECEIVER_EMAIL || 'shakinanthakumar@gmail.com',
  //   subject: `Portfolio Contact: ${subject}`,
  //   text: message
  // }).then(...).catch(...);

  // Return success response to the client
  return res.status(200).json({ 
    success: true, 
    message: 'Message logged on the server. Email transmission would happen here in production.' 
  });
});

// Fallback to index.html for single page navigation support
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`\n🚀 Portfolio server running at: http://localhost:${PORT}`);
  console.log(`Serving static files from: ${__dirname}`);
  console.log(`Endpoint POST /api/contact is active.\n`);
});
