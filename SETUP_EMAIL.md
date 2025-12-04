# Email Setup Instructions

To enable the contact form to send emails to sohan0020p@gmail.com, follow these steps:

## Option 1: Web3Forms (Recommended - Free & Easy)

1. Go to https://web3forms.com/
2. Sign up for a free account
3. Get your Access Key
4. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `src/components/Contact.jsx` with your actual key
5. The form will automatically send emails to sohan0020p@gmail.com

**Pros:**
- Free forever (up to 250 submissions/month)
- No backend needed
- Works directly from the browser
- Spam protection included

## Option 2: EmailJS (Alternative)

1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Create an email service (Gmail)
4. Create an email template
5. Get your:
   - Service ID
   - Template ID
   - Public Key

6. Install EmailJS:
```bash
npm install @emailjs/browser
```

7. Update Contact.jsx with EmailJS code:

```javascript
import emailjs from '@emailjs/browser'

const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'sohan0020p@gmail.com'
      },
      'YOUR_PUBLIC_KEY'
    )
    
    setSubmitStatus({
      type: 'success',
      message: 'Message sent successfully!'
    })
    setFormData({ name: '', email: '', message: '' })
  } catch (error) {
    setSubmitStatus({
      type: 'error',
      message: 'Failed to send message. Please try again.'
    })
  } finally {
    setIsSubmitting(false)
  }
}
```

## Current Implementation

The form is currently set up with Web3Forms. You just need to:

1. Visit https://web3forms.com/
2. Enter your email: sohan0020p@gmail.com
3. Get your Access Key
4. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in Contact.jsx

That's it! The form will work immediately.

## Features Included

✅ Form validation (all fields required)
✅ Loading state while sending
✅ Success/error messages
✅ Automatic form reset on success
✅ Beautiful animations
✅ Disabled button while submitting
✅ Email sent to: sohan0020p@gmail.com
