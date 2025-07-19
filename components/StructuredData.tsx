"use client"

export default function StructuredData() {

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Pearly Whites Dental Studio",
    "alternateName": "Dr. Devin Chetty Dental Practice",
    "description": "Award-winning celebrity dentist Dr. Devin Chetty offers premium dental services in Umhlanga. Trusted by 100+ celebrities for cosmetic dentistry, implants, and smile transformations.",
    "url": "https://pearlywhitesdental.co.za",
    "logo": "https://pearlywhitesdental.co.za/logo.jpg",
    "image": "https://pearlywhitesdental.co.za/header.jpg",
    "telephone": "+27655541518",
    "email": "info@pearlywhitesdental.co.za",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6 Lagoon Drive, The Pearls Of Umhlanga",
      "addressLocality": "Umhlanga Rocks",
      "addressRegion": "KwaZulu-Natal",
      "postalCode": "4320",
      "addressCountry": "ZA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-29.726720",
      "longitude": "31.083387"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification", 
        "dayOfWeek": "Thursday",
        "opens": "08:00",
        "closes": "17:00",
        "description": "Pensioners' Day - Special rates available"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00", 
        "closes": "13:00"
      }
    ],
    "priceRange": "R650 - R15000",
    "paymentAccepted": "Medical Aid, Cash, Card",
    "currenciesAccepted": "ZAR",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-29.726720",
        "longitude": "31.083387"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dental Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Zoom Whitening",
            "description": "Advanced in-chair whitening treatment"
          },
          "price": "6200",
          "priceCurrency": "ZAR"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Dental Implants",
            "description": "Premium dental implant placement and restoration"
          },
          "price": "15000",
          "priceCurrency": "ZAR"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Professional Athlete"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Dr Chetty transformed my smile completely. The best dentist I have ever visited"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/pearlywhitesdentalstudio_/",
      "https://www.facebook.com/pearlywhitesdentalstudio/"
    ]
  }

  // Person Schema for Dr. Devin Chetty
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. Devin Chetty",
    "jobTitle": "Celebrity Dentist",
    "description": "Award-winning celebrity dentist with over 10 years of experience, trusted by 100+ celebrity clients for advanced cosmetic and restorative dentistry.",
    "image": "https://pearlywhitesdental.co.za/header.jpg",
    "worksFor": {
      "@type": "Dentist",
      "name": "Pearly Whites Dental Studio"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Certification",
        "recognizedBy": {
          "@type": "Organization", 
          "name": "Health Professions Council of South Africa"
        }
      }
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Dentist",
      "occupationalCategory": "Healthcare",
      "skills": [
        "Cosmetic Dentistry",
        "Dental Implants", 
        "Teeth Whitening",
        "Veneers",
        "Crowns",
        "Restorative Dentistry"
      ]
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "University of the Witwatersrand"
    }
  }

  // Medical Organization Schema
  const medicalOrgSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Pearly Whites Dental Studio",
    "description": "Premier dental practice specializing in cosmetic dentistry, dental implants, and comprehensive oral healthcare.",
    "medicalSpecialty": [
      "Cosmetic Dentistry",
      "Restorative Dentistry", 
      "Dental Implantology",
      "Teeth Whitening",
      "General Dentistry"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6 Lagoon Drive, The Pearls Of Umhlanga", 
      "addressLocality": "Umhlanga Rocks",
      "addressRegion": "KwaZulu-Natal",
      "postalCode": "4320",
      "addressCountry": "ZA"
    },
    "telephone": "+27655541518",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Medical License",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Health Professions Council of South Africa"
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalOrgSchema),
        }}
      />
    </>
  )
}
