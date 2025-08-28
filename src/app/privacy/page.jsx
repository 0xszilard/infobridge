import Markdown from "@/components/ui/markdown";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for InfoBridge",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}/privacy`,
  },
};

const md = `
# Privacy Policy

**Last updated:** July 2025  

---

## 1. General Information
At InfoBridge OÜ, we take the protection of your personal data seriously. We process your data exclusively in accordance with applicable legal regulations (GDPR, Estonian Personal Data Protection Act). This privacy policy outlines the most important aspects of data processing on our website.

---

## 2. Access Data & Server Log Files
Our hosting provider automatically collects data about visits to this website (so-called server log files). The following information is stored:

- Visited website  
- Date and time of access  
- Amount of data sent  
- Source/referrer URL  
- Browser and operating system used  
- IP address (anonymized)

These log files are stored for a maximum of 7 days and used solely to ensure stable and secure operation of the website and to improve our services. This data is not combined with other data sources.

---

## 3. Cookies & Tracking Technologies
This website uses cookies and similar technologies to enhance the user experience and for marketing purposes.

**Strictly necessary cookies** – Required for the proper functioning of the website (Legal basis: Art. 6(1)(f) GDPR – legitimate interest).

**Analytics and marketing cookies** – Used for statistical purposes and audience measurement (Legal basis: Art. 6(1)(a) GDPR – consent).

### Tools in use (examples, subject to change)
- Google Analytics (with IP anonymization)  
- Meta Pixel  
- Google Tag Manager  

> Note: Upon first visit, a cookie banner appears to collect your consent for non-essential cookies.

---

## 4. Collection and Processing of Personal Data
We only collect personal data (e.g. name, email address, phone number) when you voluntarily provide it—such as when contacting us or signing up for services.

Legal bases for processing:
- Art. 6(1)(b) GDPR (contract performance)  
- Art. 6(1)(a) GDPR (consent)  
- Art. 6(1)(f) GDPR (legitimate interest)

We use this data for:
- Customer support  
- Personalized communication and marketing (max. 365 days post-registration)  
- Product updates and service-related messages

---

## 5. Use of Phone Numbers for SMS and Calls (A2P / 10DLC)
If you provide your phone number and give consent, **InfoBridge s.r.o.** may contact you via SMS or calls for service-related notifications, reminders, or marketing messages.

- You can withdraw your consent at any time (e.g. by replying “STOP”).  
- We follow international A2P guidelines and register our use where required.  
- Your phone number will not be shared with third parties for marketing purposes.

---

## 6. Third-Party Services & Data Transfers
Depending on the tools we use, your data may be transmitted to the following service providers:

- **Hosting**: Vercel, Supabase, AWS (located in the EU or with appropriate safeguards such as Standard Contractual Clauses)  
- **Email and Newsletter Tools**: e.g. Resend, Mailchimp  
- **Payment Providers**: e.g. Stripe, Whop  
- **CRM & Automation**: e.g. HubSpot, Zapier

We maintain data processing agreements with these providers in accordance with Art. 28 GDPR.

---

## 7. Your Rights
Under the GDPR, you have the right to:

- Access your stored data (Art. 15 GDPR)  
- Correct inaccurate data (Art. 16 GDPR)  
- Delete your data (Art. 17 GDPR)  
- Restrict processing (Art. 18 GDPR)  
- Data portability (Art. 20 GDPR)  
- Object to processing (Art. 21 GDPR)  
- Revoke previously given consent (Art. 7 GDPR)

For requests, please contact: **szilard@infobridge.dev**

---

## 8. Data Deletion & Image Rights
If you no longer wish to receive marketing messages, you may unsubscribe at any time by email. Your personal data will be deleted unless legal retention obligations apply.

If you appear in any publicly shared photos or videos (e.g. on social media), you may request removal via email.

---

## 9. Data Security
We implement appropriate technical and organizational measures to protect your personal data against accidental or unlawful destruction, loss, alteration, or unauthorized access.

---

## 10. Changes to This Privacy Policy
We reserve the right to modify this privacy policy to reflect changes in legal requirements or in our data processing practices. The latest version is always available on this website.
`;

export default function PrivacyPage() {
  return (
    <section className="px-4 py-10">
      <div className="m-auto max-w-3xl">
        <Markdown>{md}</Markdown>
      </div>
    </section>
  );
}
