import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://tiger365official.co.in'),
  verification: {
    google: "1HccjCAMmju3o1sxJQZn7PdxS1JOPEyTDowlYtlxxNg",
  },
  title: "Tiger365 Official ID | Sports & Account Guide",
  description: "Explore Tiger365 information, online ID guidance, sports and gaming resources, login help, and frequently asked questions.",
  keywords: "tiger365, tiger365official, tiger exchange, online gaming, live casino, sports exchange, cricket ID",
  applicationName: 'Tiger365',
  authors: [{ name: 'Tiger365' }],
  creator: 'Tiger365',
  publisher: 'Tiger365',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Tiger365 Official ID | Sports & Account Guide",
    description: "Explore Tiger365 information, online ID guidance, sports and gaming resources, login help, and frequently asked questions.",
    url: "https://tiger365official.co.in",
    siteName: "Tiger365",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tiger365 Official ID | Sports & Account Guide",
    description: "Explore Tiger365 information, online ID guidance, sports and gaming resources, login help, and frequently asked questions.",
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://tiger365official.co.in/#website",
                  "url": "https://tiger365official.co.in/",
                  "name": "Tiger365",
                  "inLanguage": "en"
                },
                {
                  "@type": "Organization",
                  "@id": "https://tiger365official.co.in/#organization",
                  "name": "Tiger365",
                  "url": "https://tiger365official.co.in/"
                },
                {
                  "@type": "WebPage",
                  "@id": "https://tiger365official.co.in/#webpage",
                  "url": "https://tiger365official.co.in/",
                  "name": "Tiger365 Official ID | Sports & Account Guide",
                  "description": "Explore Tiger365 information, online ID guidance, sports and gaming resources, login help, and frequently asked questions.",
                  "isPartOf": {
                    "@id": "https://tiger365official.co.in/#website"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://tiger365official.co.in/#faq",
                  "url": "https://tiger365official.co.in/",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is Tiger365?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Tiger365 is the brand or website referenced on this domain. Check the site's current pages and terms for the latest information."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How does a Tiger365 ID work?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "An account ID is generally used to identify a user account. Refer to Tiger365's current account instructions and terms for the exact process."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I access Tiger365?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the site's current official URL and verify the domain before entering any account information. Follow the access instructions published on the site."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What sports are available on Tiger365?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Available sports can change. Check the current sports or gaming section on the website for the latest list and availability."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Does Tiger365 provide live sports information?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Check the site's current sports section for any live-event information and the terms that apply to its use."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I get help with my Tiger365 account?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How do I find Tiger365 login information?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What payment options are supported?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What should I do if I have trouble accessing my account?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Where can I find the latest Tiger365 updates?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Refer to Tiger365's current website information and terms for the most accurate answer."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#080c12] text-white">
        {children}
      </body>
    </html>
  );
}

