import Markdown from "@/components/ui/markdown";

export const metadata = {
  title: "Imprint",
  description: "Imprint for InfoBridge",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}/imprint`,
  },
};

const md = `
## Imprint (Impressum)

**Company Name:**  
InforBridge OÜ

**Legal Form:**  
Private Limited Company (osaühing, OÜ)

**Registered Office:**  
Pärnu mnt 139c  
11317 Tallinn   
Estonia

**Commercial Register Entry:**  
Registered in the Estonian Commercial Register  
Registry Code: 12345678

**VAT ID:**  
EE123456789

**Legal Representative:**  
Mgr. Szilárd Máté, CEO

**Contact Information:**  
Phone: +372 600 1234  
Email: [szilard@infobridge.dev](mailto:szilard@infobridge.dev)  
Website: [infobridge.dev](https://infobridge.dev)

---

**Online Dispute Resolution**

The European Commission provides a platform for online dispute resolution:  
[https://ec.europa.eu/consumers/odr/](https://ec.europa.eu/consumers/odr/)  
You can find our contact email above.

We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
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
