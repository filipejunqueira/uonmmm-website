# 📧 Contact Section Setup Guide

This guide explains how to set up both the map and contact form in your GitHub Pages website.

## 🗺️ Problem 1: Map Not Showing - FIXED ✅

### What Was Wrong
The Google Maps embed was blocked by our Content Security Policy (CSP) headers.

### Solution Applied ✅
Updated the CSP in `index.html` to allow Google Maps:
- Added `https://maps.googleapis.com` and `https://www.google.com` to script sources
- Added `*.googleapis.com` and `*.gstatic.com` to image sources
- Added `frame-src https://www.google.com` to allow Google Maps iframes

### Current Map Configuration
The map is already configured to show the **School of Physics & Astronomy, University of Nottingham**:
- **Address**: University Park, Nottingham, NG7 2RD, UK
- **Coordinates**: 52.93922687216764, -1.1983363234988083
- **Maps URL**: Properly embedded and should now display

---

## 📧 Problem 2: Contact Form Solutions

### Recommended Solutions for GitHub Pages

#### 🥇 **Option 1: Formspree (RECOMMENDED - Already Integrated)**

**Why Formspree?**
- ✅ Already integrated in your code
- ✅ Works perfectly with static sites
- ✅ No backend required
- ✅ Spam protection included
- ✅ Free tier: 50 submissions/month
- ✅ Email notifications
- ✅ Easy setup (5 minutes)

**Setup Status: ✅ COMPLETED**

The form is now configured with Formspree ID: `xanjpqpg`

**Already Done:**
1. ✅ Formspree form ID configured in code
2. ✅ React integration properly set up
3. ✅ Form validation and error handling implemented
4. ✅ Loading states and success messages ready

**Next Steps:**
1. **Configure form settings** in your Formspree dashboard at https://formspree.io/forms/xanjpqpg/settings:
   - Set your email to receive submissions
   - Configure custom thank you message
   - Set up spam protection
   - Add file upload if needed

**Features Included:**
- Form validation
- Loading states
- Success/error handling
- Spam protection
- Email notifications
- Form analytics

---

#### 🥈 **Option 2: Netlify Forms (Alternative)**

**If you switch to Netlify hosting:**
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <!-- Your form fields -->
</form>
```

**Features:**
- ✅ 100 submissions/month (free)
- ✅ Built into Netlify
- ✅ Spam protection
- ✅ Email notifications

---

#### 🥉 **Option 3: EmailJS (Client-side only)**

**For completely client-side solution:**
```bash
npm install emailjs-com
```

```javascript
import emailjs from 'emailjs-com';

const sendEmail = (formData) => {
  emailjs.send('service_id', 'template_id', formData, 'user_id')
    .then((result) => {
      console.log('Email sent successfully');
    });
};
```

**Features:**
- ✅ 200 emails/month (free)
- ✅ No backend required
- ✅ Template customization
- ⚠️ Requires email service setup

---

#### 🥉 **Option 4: getform.io (Simple Alternative)**

**Similar to Formspree:**
```html
<form action="https://getform.io/f/{your-form-endpoint}" method="POST">
  <!-- Your form fields -->
</form>
```

**Features:**
- ✅ 50 submissions/month (free)
- ✅ No registration needed
- ✅ Instant setup
- ✅ Webhook support

---

## 🚀 Quick Start Instructions

### ✅ Setup Complete - Ready for Testing

**Form Status: ACTIVE**
- **Form ID:** `xanjpqpg`
- **Endpoint:** `https://formspree.io/f/xanjpqpg`
- **Integration:** Complete and configured

**Immediate Next Steps:**

1. **Configure Your Formspree Dashboard:**
   - Go to: https://formspree.io/forms/xanjpqpg/settings
   - Set your email to receive submissions
   - Configure spam protection settings
   - Set custom thank you message (optional)

2. **Test the Form:**
   - Deploy the website to GitHub Pages
   - Navigate to the contact section
   - Fill out and submit a test form
   - Check your email for the submission

3. **Verify Setup:**
   - Check Formspree dashboard for submissions
   - Test form validation (try submitting empty form)
   - Test success message display

### Advanced Configuration:

**Custom Email Template:**
```html
<!-- Add hidden fields for better emails -->
<input type="hidden" name="_subject" value="New contact from UONMMM website" />
<input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
```

**Spam Protection:**
```html
<!-- Honeypot field (keep hidden) -->
<input type="text" name="_gotcha" style="display: none;" />
```

**File Uploads:**
```javascript
// Add to form if needed
<input type="file" name="attachment" accept=".pdf,.doc,.docx" />
```

---

## 🔧 Testing Your Setup

### Map Testing:
1. **Load the contact section**
2. **Check if map displays** School of Physics & Astronomy
3. **Test map interactions** (zoom, pan)
4. **Verify in different browsers**

### Form Testing:
1. **Fill out and submit test form**
2. **Check for success message**
3. **Verify email delivery**
4. **Test form validation**
5. **Test in mobile/desktop**

---

## 📊 Cost Comparison

| Service | Free Tier | Paid Plans | Best For |
|---------|-----------|------------|----------|
| **Formspree** | 50/month | $10/month (1000) | Most users ✅ |
| **Netlify Forms** | 100/month | $19/month (1000) | Netlify users |
| **EmailJS** | 200/month | $15/month (unlimited) | High volume |
| **getform.io** | 50/month | $4.99/month (unlimited) | Budget option |

---

## 🎯 Recommendation

**Use Formspree** - it's already integrated, reliable, and perfect for your academic website needs. The free tier (50 submissions/month) should be sufficient for most research group websites.

**Current Status:**
- ✅ Map: Fixed and ready
- ✅ Form: Configured, needs Formspree ID
- ✅ Styling: Professional design
- ✅ Validation: Complete form validation
- ✅ Accessibility: Screen reader friendly

**Next Step:** Just get your Formspree form ID and replace it in the code!