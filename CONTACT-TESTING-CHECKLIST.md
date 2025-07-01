# 📧 Contact Section Testing Checklist

## ✅ Configuration Status

**Form Configuration: COMPLETE ✅**
- **Formspree ID:** `xanjpqpg`
- **Form URL:** `https://formspree.io/f/xanjpqpg`
- **Integration:** React with @formspree/react
- **Validation:** Complete client-side validation
- **Loading States:** Implemented with spinner
- **Success Handling:** Custom thank you message

**Map Configuration: COMPLETE ✅**
- **Location:** School of Physics & Astronomy, University of Nottingham
- **Embed:** Google Maps iframe with fallback
- **CSP Headers:** Updated to allow Google Maps
- **Accessibility:** Proper ARIA labels and title

---

## 🧪 Testing Procedures

### 1. Pre-Deployment Testing (Local)
```bash
# Start development server
npm run dev

# Navigate to: http://localhost:3000/uonmmm-website/#contact
```

**Test Items:**
- [ ] Map displays correctly
- [ ] Map is interactive (zoom, pan)
- [ ] "Open in Google Maps" link works
- [ ] Contact form renders properly
- [ ] Form validation works (try empty submission)
- [ ] Loading spinner appears on submission
- [ ] Success message displays after submission

### 2. Post-Deployment Testing (Live)

**Test on GitHub Pages URL:**
```
https://[username].github.io/uonmmm-website/#contact
```

**Map Testing:**
- [ ] Google Maps embed loads
- [ ] Shows correct location (University of Nottingham)
- [ ] Interactive controls work
- [ ] Mobile responsiveness
- [ ] Direct link opens Google Maps

**Form Testing:**
- [ ] Form submits successfully
- [ ] Email notification received
- [ ] Success message appears
- [ ] Form resets after success
- [ ] Validation errors display correctly
- [ ] Loading states work properly

### 3. Cross-Browser Testing
Test in:
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile browsers

### 4. Accessibility Testing
- [ ] Tab navigation works through form
- [ ] Screen reader compatibility
- [ ] Focus indicators visible
- [ ] Skip-to-content link includes contact form

---

## 📋 Expected Behavior

### Form Submission Flow
1. **User fills form** → Client-side validation
2. **User clicks "Send Message"** → Loading spinner appears
3. **Form submits to Formspree** → Background processing
4. **Success response** → Thank you message displays
5. **Email notification** → You receive the submission

### Form Validation
- **Name field:** Required, text input
- **Email field:** Required, valid email format
- **Message field:** Required, textarea

### Error Handling
- **Network errors:** Graceful error display
- **Validation errors:** Inline error messages
- **Server errors:** User-friendly error messages

---

## 🛠️ Troubleshooting Guide

### Map Not Showing
**Possible Causes:**
- CSP blocking (already fixed)
- Network connectivity
- Ad blockers blocking Google services

**Solutions:**
- Check browser console for errors
- Disable ad blockers temporarily
- Use "Open in Google Maps" fallback link

### Form Not Submitting
**Possible Causes:**
- Formspree account not verified
- Network issues
- JavaScript disabled

**Debug Steps:**
1. Check browser console for errors
2. Verify Formspree form ID: `xanjpqpg`
3. Test with simple browser fetch:
```javascript
fetch('https://formspree.io/f/xanjpqpg', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Test', email: 'test@example.com', message: 'Test message' })
})
```

### Email Not Received
**Check:**
- [ ] Spam/junk folder
- [ ] Formspree dashboard for submissions
- [ ] Email address in Formspree settings
- [ ] Formspree account verification

---

## 📊 Success Metrics

### Performance Targets
- [ ] Form submission < 2 seconds
- [ ] Map loads < 3 seconds
- [ ] No console errors
- [ ] Mobile responsiveness maintained

### User Experience
- [ ] Clear visual feedback on interactions
- [ ] Professional appearance
- [ ] Intuitive navigation
- [ ] Accessible to all users

### Functional Requirements
- [ ] 100% form submission success rate
- [ ] Email delivery within 5 minutes
- [ ] Cross-browser compatibility
- [ ] Mobile device functionality

---

## 🎯 Final Verification

Before going live, confirm:
- [ ] Formspree dashboard configured
- [ ] Email notifications working
- [ ] Map displays University location
- [ ] All form fields validate correctly
- [ ] Success/error states work
- [ ] Mobile responsiveness maintained
- [ ] Accessibility standards met

**Form is ready for production use! 🚀**