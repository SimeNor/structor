export const reisevaksineSkjema = {
  resourceType: "Questionnaire",
  id: "44",
  meta: {
    versionId: "9",
    lastUpdated: "2020-02-06T09:48:58.3192392+00:00",
    profile: ["http://ehelse.no/fhir/StructureDefinition/sdf-Questionnaire"],
    tag: [
      { system: "urn:ietf:bcp:47", code: "nb-NO", display: "Norsk bokmål" },
    ],
  },
  language: "nb-NO",
  contained: [
    {
      resourceType: "ValueSet",
      id: "1101",
      version: "1.0",
      name: "urn:oid:1101",
      title: "Ja / Nei",
      status: "draft",
      publisher: "Direktoratet for e-helse",
      compose: {
        include: [
          {
            system: "urn:oid:2.16.578.1.12.4.1.1101",
            concept: [
              { code: "1", display: "Ja" },
              { code: "2", display: "Nei" },
            ],
          },
        ],
      },
    },
    {
      resourceType: "ValueSet",
      id: "1102",
      version: "1.0",
      name: "urn:oid:1102",
      title: "ja, nei, vet ikke",
      status: "draft",
      publisher: "Direktoratet for e-helse",
      compose: {
        include: [
          {
            system: "urn:oid:2.16.578.1.12.4.1.1102",
            concept: [
              { code: "1", display: "Ja" },
              { code: "2", display: "Nei" },
              { code: "3", display: "Vet ikke" },
            ],
          },
        ],
      },
    },
    {
      resourceType: "ValueSet",
      id: "9043",
      version: "1.0",
      name: "urn:oid:9043",
      title: "Landkoder",
      status: "draft",
      publisher: "Direktoratet for e-helse",
      compose: {
        include: [
          {
            system: "urn:oid:2.16.578.1.12.4.1.9043",
            concept: [
              { code: "AF", display: "Afghanistan" },
              { code: "AL", display: "Albania" },
              { code: "DZ", display: "Algerie" },
              { code: "AS", display: "Amerikansk Samoa" },
              { code: "AD", display: "Andorra" },
              { code: "AO", display: "Angola" },
              { code: "AI", display: "Anguilla" },
              { code: "AQ", display: "Antarktis" },
              { code: "AG", display: "Antigua og Barbuda" },
              { code: "AR", display: "Argentina" },
              { code: "AM", display: "Armenia" },
              { code: "AW", display: "Aruba" },
              { code: "AZ", display: "Aserbajdsjan" },
              { code: "AU", display: "Australia" },
              { code: "BS", display: "Bahamas" },
              { code: "BH", display: "Bahrain" },
              { code: "BD", display: "Bangladesh" },
              { code: "BB", display: "Barbados" },
              { code: "BE", display: "Belgia" },
              { code: "BZ", display: "Belize" },
              { code: "BJ", display: "Benin" },
              { code: "BM", display: "Bermuda" },
              { code: "BT", display: "Bhutan" },
              { code: "BO", display: "Bolivia" },
              { code: "BQ", display: "Bonaire, Sint Eustatius og Saba" },
              { code: "BA", display: "Bosnia-Hercegovina" },
              { code: "BW", display: "Botswana" },
              { code: "BV", display: "Bouvetøya" },
              { code: "BR", display: "Brasil" },
              { code: "BN", display: "Brunei Darussalam" },
              { code: "BG", display: "Bulgaria" },
              { code: "BF", display: "Burkina Faso" },
              { code: "BI", display: "Burundi" },
              { code: "CA", display: "Canada" },
              { code: "KY", display: "Caymanøyene" },
              { code: "CL", display: "Chile" },
              { code: "CX", display: "Christmasøya" },
              { code: "CO", display: "Colombia" },
              { code: "CK", display: "Cookøyene" },
              { code: "CR", display: "Costa Rica" },
              { code: "CU", display: "Cuba" },
              { code: "CW", display: "Curaçao" },
              { code: "DK", display: "Danmark" },
              { code: "AE", display: "De forente arabiske emiratene" },
              { code: "US", display: "De forente stater (USA)" },
              {
                code: "UM",
                display: "De forente stater, mindre, avsidesliggende øyer",
              },
              { code: "TF", display: "De franske territoriene i sør" },
              { code: "AN", display: "De nederlandske Antillene" },
              { code: "DO", display: "Den dominikanske republikken" },
              { code: "CF", display: "Den sentralafrikanske republikken" },
              { code: "IO", display: "Det britiske territoriet i Indiahavet" },
              { code: "PS", display: "Det palestinske området" },
              { code: "DJ", display: "Djibouti" },
              { code: "DM", display: "Dominica" },
              { code: "EC", display: "Ecuador" },
              { code: "EG", display: "Egypt" },
              { code: "GQ", display: "Ekvatorial-Guinea" },
              { code: "SV", display: "El Salvador" },
              { code: "CI", display: "Elfenbe(i)nskysten" },
              { code: "ER", display: "Eritrea" },
              { code: "EE", display: "Estland" },
              { code: "ET", display: "Etiopia" },
              { code: "FK", display: "Falklandsøyene" },
              { code: "FJ", display: "Fiji" },
              { code: "PH", display: "Filippinene" },
              { code: "FI", display: "Finland" },
              { code: "FR", display: "Frankrike" },
              { code: "GF", display: "Fransk Guyana" },
              { code: "PF", display: "Fransk Polynesia" },
              { code: "FO", display: "Færøyene" },
              { code: "GA", display: "Gabon" },
              { code: "GM", display: "Gambia" },
              { code: "GE", display: "Georgia" },
              { code: "GH", display: "Ghana" },
              { code: "GI", display: "Gibraltar" },
              { code: "GD", display: "Grenada" },
              { code: "GL", display: "Grønland" },
              { code: "GP", display: "Guadeloupe" },
              { code: "GU", display: "Guam" },
              { code: "GT", display: "Guatemala" },
              { code: "GG", display: "Guernsey" },
              { code: "GN", display: "Guinea" },
              { code: "GW", display: "Guinea-Bissau" },
              { code: "GY", display: "Guyana" },
              { code: "HT", display: "Haiti" },
              { code: "HM", display: "Heard- og McDonaldøyene" },
              { code: "GR", display: "Hellas" },
              { code: "HN", display: "Honduras" },
              { code: "HK", display: "Hong Kong" },
              { code: "BY", display: "Hviterussland" },
              { code: "IN", display: "India" },
              { code: "ID", display: "Indonesia" },
              { code: "IQ", display: "Irak" },
              { code: "IR", display: "Iran" },
              { code: "IE", display: "Irland" },
              { code: "IS", display: "Island" },
              { code: "IL", display: "Israel" },
              { code: "IT", display: "Italia" },
              { code: "JM", display: "Jamaica" },
              { code: "JP", display: "Japan" },
              { code: "YE", display: "Jemen" },
              { code: "JE", display: "Jersey" },
              { code: "VG", display: "Jomfruøyene (Britisk)" },
              { code: "VI", display: "Jomfruøyene (USA)" },
              { code: "JO", display: "Jordan" },
              { code: "YU", display: "Jugoslavia" },
              { code: "KH", display: "Kambodsja" },
              { code: "CM", display: "Kamerun" },
              { code: "CV", display: "Kapp Verde" },
              { code: "KZ", display: "Kasakhstan" },
              { code: "KE", display: "Kenya" },
              { code: "CN", display: "Kina" },
              { code: "KG", display: "Kirgisistan" },
              { code: "KI", display: "Kiribati" },
              { code: "CC", display: "Kokosøyene" },
              { code: "KM", display: "Komorene" },
              { code: "CD", display: "Kongo" },
              { code: "CG", display: "Kongo-Brazzaville" },
              { code: "XK", display: "Kosovo" },
              { code: "HR", display: "Kroatia" },
              { code: "KW", display: "Kuwait" },
              { code: "CY", display: "Kypros" },
              { code: "LA", display: "Laos" },
              { code: "LV", display: "Latvia" },
              { code: "LS", display: "Lesotho" },
              { code: "LB", display: "Libanon" },
              { code: "LR", display: "Liberia" },
              { code: "LY", display: "Libya" },
              { code: "LI", display: "Liechtenstein" },
              { code: "LT", display: "Litauen" },
              { code: "LU", display: "Luxemb(o)urg" },
              { code: "MO", display: "Macao" },
              { code: "MG", display: "Madagaskar" },
              { code: "MK", display: "Makedonia" },
              { code: "MW", display: "Malawi" },
              { code: "MY", display: "Malaysia" },
              { code: "MV", display: "Maldivene" },
              { code: "ML", display: "Mali" },
              { code: "MT", display: "Malta" },
              { code: "IM", display: "Man" },
              { code: "MA", display: "Marokko" },
              { code: "MH", display: "Marshalløyene" },
              { code: "MQ", display: "Martinique" },
              { code: "MR", display: "Mauritania" },
              { code: "MU", display: "Mauritius" },
              { code: "YT", display: "Mayotte" },
              { code: "MX", display: "Mexico" },
              { code: "FM", display: "Mikronesiaføderasjonen" },
              { code: "MD", display: "Moldova" },
              { code: "MC", display: "Monaco" },
              { code: "MN", display: "Mongolia" },
              { code: "ME", display: "Montenegro" },
              { code: "MS", display: "Montserrat" },
              { code: "MZ", display: "Mosambik" },
              { code: "MM", display: "Myanmar/Burma" },
              { code: "NA", display: "Namibia" },
              { code: "NR", display: "Nauru" },
              { code: "NL", display: "Nederland" },
              { code: "NP", display: "Nepal" },
              { code: "NZ", display: "New Zealand" },
              { code: "NI", display: "Nicaragua" },
              { code: "NE", display: "Niger" },
              { code: "NG", display: "Nigeria" },
              { code: "NU", display: "Niue" },
              { code: "KP", display: "Nord-Korea" },
              { code: "MP", display: "Nord-Marianene" },
              { code: "NF", display: "Norfolkøya" },
              { code: "NO", display: "Norge" },
              { code: "NC", display: "Ny-Caledonia" },
              { code: "OM", display: "Oman" },
              { code: "PK", display: "Pakistan" },
              { code: "PW", display: "Palau" },
              { code: "PA", display: "Panama" },
              { code: "PG", display: "Papua Ny-Guinea" },
              { code: "PY", display: "Paraguay" },
              { code: "PE", display: "Peru" },
              { code: "PN", display: "Pitcairn" },
              { code: "PL", display: "Polen" },
              { code: "PT", display: "Portugal" },
              { code: "PR", display: "Puerto Rico" },
              { code: "QA", display: "Qatar" },
              { code: "RE", display: "Réunion" },
              { code: "RO", display: "Romania" },
              { code: "RU", display: "Russland" },
              { code: "RW", display: "Rwanda" },
              { code: "SH", display: "Saint Helena" },
              { code: "KN", display: "Saint Kitts og Nevis" },
              { code: "LC", display: "Saint Lucia" },
              { code: "VC", display: "Saint Vincent og Grenadinene" },
              { code: "BL", display: "Saint-Barthélemy" },
              { code: "MF", display: "Saint-Martin" },
              { code: "PM", display: "Saint-Pierre og Miquelon" },
              { code: "SB", display: "Salomonøyene" },
              { code: "WS", display: "Samoa" },
              { code: "SM", display: "San Marino" },
              { code: "ST", display: "São Tomé og Príncipe" },
              { code: "SA", display: "Saudi-Arabia" },
              { code: "SN", display: "Senegal" },
              { code: "RS", display: "Serbia" },
              { code: "CS", display: "Serbia og Montenegro" },
              { code: "SC", display: "Seychellene" },
              { code: "SL", display: "Sierra Leone" },
              { code: "SG", display: "Singapore" },
              { code: "SX", display: "Sint Maarten" },
              { code: "SK", display: "Slovakia" },
              { code: "SI", display: "Slovenia" },
              { code: "SO", display: "Somalia" },
              { code: "ES", display: "Spania" },
              { code: "LK", display: "Sri Lanka" },
              { code: "GB", display: "Storbritannia" },
              { code: "SD", display: "Sudan" },
              { code: "SR", display: "Surinam" },
              { code: "SJ", display: "Svalbard og Jan Mayen" },
              { code: "CH", display: "Sveits" },
              { code: "SE", display: "Sverige" },
              { code: "SZ", display: "Swaziland" },
              { code: "SY", display: "Syria" },
              { code: "ZA", display: "Sør-Afrika" },
              { code: "GS", display: "Sør-Georgia og de søndre Sandwichøyene" },
              { code: "KR", display: "Sør-Korea" },
              { code: "SS", display: "Sør-Sudan" },
              { code: "TJ", display: "Tadsjikistan" },
              { code: "TW", display: "Taiwan" },
              { code: "TZ", display: "Tanzania" },
              { code: "TH", display: "Thailand" },
              { code: "TG", display: "Togo" },
              { code: "TK", display: "Tokelau" },
              { code: "TO", display: "Tonga" },
              { code: "TT", display: "Trinidad og Tobago" },
              { code: "TD", display: "Tsjad" },
              { code: "CZ", display: "Tsjekkia" },
              { code: "TN", display: "Tunisia" },
              { code: "TM", display: "Turkmenistan" },
              { code: "TC", display: "Turks- og Caicosøyene" },
              { code: "TV", display: "Tuvalu" },
              { code: "TR", display: "Tyrkia" },
              { code: "DE", display: "Tyskland" },
              { code: "UG", display: "Uganda" },
              { code: "XX", display: "Ukjent nasjon" },
              { code: "UA", display: "Ukraina" },
              { code: "HU", display: "Ungarn" },
              { code: "UY", display: "Uruguay" },
              { code: "UZ", display: "Usbekistan" },
              { code: "VU", display: "Vanuatu" },
              { code: "VA", display: "Vatikanstaten" },
              { code: "VE", display: "Venezuela" },
              { code: "EH", display: "Vest-Sahara" },
              { code: "VN", display: "Vietnam" },
              { code: "WF", display: "Wallis- og Futunaøyene" },
              { code: "ZM", display: "Zambia" },
              { code: "ZW", display: "Zimbabwe" },
              { code: "AT", display: "Østerrike" },
              { code: "TL", display: "Øst-Timor" },
              { code: "AX", display: "Åland" },
            ],
          },
        ],
      },
    },
  ],
  extension: [
    {
      url: "http://ehelse.no/fhir/StructureDefinition/sdf-endpoint",
      valueReference: {
        reference:
          "https://skjemakatalog-test-fhir-apimgmt.azure-api.net/api/v1/Endpoint/24",
      },
    },
    {
      url:
        "http://ehelse.no/fhir/StructureDefinition/sdf-authenticationrequirement",
      valueCoding: {
        system: "http://ehelse.no/fhir/ValueSet/AuthenticationRequirement",
        code: "3",
      },
    },
    {
      url:
        "http://ehelse.no/fhir/StructureDefinition/sdf-accessibilitytoresponse",
      valueCoding: {
        system: "http://ehelse.no/fhir/ValueSet/AccessibilityToResponse",
        code: "1",
      },
    },
    {
      url: "http://ehelse.no/fhir/StructureDefinition/sdf-canbeperformedby",
      valueCoding: {
        system: "http://ehelse.no/fhir/ValueSet/CanBePerformedBy",
        code: "2",
      },
    },
    {
      url: "http://ehelse.no/fhir/StructureDefinition/sdf-discretion",
      valueCoding: {
        system: "http://ehelse.no/fhir/ValueSet/Discretion",
        code: "0",
      },
    },
  ],
  url:
    "https://skjemakatalog-test-fhir-apimgmt.azure-api.net/api/v1/Questionnaire/44",
  version: "1.0",
  name: "SIO-Reisevaksine",
  title: "Egenerklæring ved ønske om reisevaksine",
  status: "draft",
  date: "2019-11-01",
  publisher: "Direktoratet for e-helse",
  useContext: [
    {
      code: {
        system: "http://hl7.org/fhir/ValueSet/usage-context-type",
        code: "focus",
        display: "Clinical Focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "urn:oid:2.16.578.1.12.4.1.1.8655",
            code: "S0305",
            display: "Infeksjonsmedisin",
          },
        ],
      },
    },
  ],
  contact: [{ name: "https://sio.no/helse" }],
  subjectType: ["Patient"],
  item: [
    {
      linkId: "1",
      text: "Informasjon",
      type: "group",
      repeats: false,
      item: [
        {
          linkId: "1.1",
          text: "Om skjemaet",
          type: "group",
          repeats: false,
          item: [
            {
              linkId: "1.1.1",
              text:
                "Dette skjemaet er for studenter tilknyttet Studentsamskipnaden SiO, som har bestilt time for å sette reisevaksine. Du skal fylle ut dette skjemaet før du kommer til timen. Du får ikke svar på dettes skjemaet.Husk at du ikke bør ta vaksine om du er syk.",
              _text: {
                extension: [
                  {
                    url:
                      "http://hl7.org/fhir/StructureDefinition/rendering-markdown",
                    valueMarkdown:
                      "Dette skjemaet er for studenter tilknyttet Studentsamskipnaden SiO, som har bestilt time for å sette reisevaksine.\r\n\r\nDu skal fylle ut dette skjemaet før du kommer til timen.\r\n\r\nDu kan bestille time på Helsenorge. Velg «Min helse», «Helsekontakter» og «Helsestasjon for studenter».\r\n\r\nDu får ikke svar på dettes skjemaet.\r\n\r\n**Husk at du ikke bør ta vaksine om du er syk.**",
                  },
                ],
              },
              type: "display",
            },
          ],
        },
        {
          linkId: "1.2",
          text: "Personvern og bruk av dine opplysninger",
          type: "group",
          repeats: false,
          item: [
            {
              extension: [
                {
                  url:
                    "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  valueCodeableConcept: {
                    coding: [
                      {
                        system:
                          "http://hl7.org/fhir/ValueSet/questionnaire-item-control",
                        code: "inline",
                      },
                    ],
                  },
                },
              ],
              linkId: "1.2.1",
              text: "Les mer om bruk av dine opplysninger på Helsenorge her",
              type: "text",
              required: false,
              repeats: false,
              readOnly: false,
              item: [
                {
                  linkId: "1.2.1.1",
                  text:
                    "Dette skjemaet blir sendt fra Helsenorge via sikker kanal til mottaker. Helsenorge lagrer en kopi av dette skjemaet. Generelle bruksvilkår og kontaktinformasjon til personvernombud finner du i bruksvilkårene for Helsenorge.",
                  _text: {
                    extension: [
                      {
                        url:
                          "http://hl7.org/fhir/StructureDefinition/rendering-markdown",
                        valueMarkdown:
                          "Dette skjemaet blir sendt fra Helsenorge via sikker kanal til mottaker.\r\n\r\nHelsenorge lagrer en kopi av dette skjemaet. [Generelle bruksvilkår og kontaktinformasjon til personvernombud finner du i bruksvilkårene for Helsenorge](https://helsenorge.no/bruksvilkar-for-min-helse).",
                      },
                    ],
                  },
                  type: "display",
                },
              ],
            },
            {
              extension: [
                {
                  url:
                    "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  valueCodeableConcept: {
                    coding: [
                      {
                        system:
                          "http://hl7.org/fhir/ValueSet/questionnaire-item-control",
                        code: "inline",
                      },
                    ],
                  },
                },
              ],
              linkId: "1.2.2",
              text: "Les mer om bruk av dine opplysninger hos SIO her",
              type: "text",
              required: false,
              repeats: false,
              readOnly: false,
              item: [
                {
                  linkId: "1.2.2.1",
                  text:
                    "Mottaker du sender skjemaet til er dataansvarlig for personopplysningene oppgitt i skjemaet. Formålet med behandlingen av personopplysningene i skjemaet, er å kunne behandle din forespørsel i mottakers elektroniske pasientjournal.",
                  _text: {
                    extension: [
                      {
                        url:
                          "http://hl7.org/fhir/StructureDefinition/rendering-markdown",
                        valueMarkdown:
                          "Mottaker du sender skjemaet til er dataansvarlig for personopplysningene oppgitt i skjemaet.\r\n\r\nFormålet med behandlingen av personopplysningene i skjemaet, er å kunne behandle din forespørsel i mottakers elektroniske pasientjournal. [Les mer om personvern her](https://www.sio.no/snarveier/om-sio/personvern)",
                      },
                    ],
                  },
                  type: "display",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      linkId: "2",
      text: "Personalia og kontaktinformasjon",
      type: "group",
      repeats: false,
      item: [
        {
          extension: [
            {
              url: "http://ehelse.no/fhir/StructureDefinition/validationtext",
              valueString: "Du kan ikke benytte spesialtegn i dette feltet",
            },
            {
              url: "http://ehelse.no/fhir/StructureDefinition/sdf-fhirpath",
              valueString:
                "Patient.name.where(use = 'official').select(given.join(' ') & ' ' & family)",
            },
          ],
          linkId: "2.1",
          text: "Navn",
          type: "string",
          required: true,
          repeats: false,
          readOnly: true,
          maxLength: 250,
          initialString: "Adrian Moe",
        },
        {
          extension: [
            {
              url: "http://ehelse.no/fhir/StructureDefinition/validationtext",
              valueString: "Du kan ikke benytte spesialtegn i dette feltet",
            },
            {
              url: "http://ehelse.no/fhir/StructureDefinition/sdf-fhirpath",
              valueString:
                "Patient.telecom.where(use = 'mobile' and system = 'phone').value",
            },
          ],
          linkId: "2.2",
          text: "Telefonnummer fra Kontakt- og reservasjonsregisteret",
          type: "string",
          required: false,
          repeats: false,
          readOnly: true,
          maxLength: 250,
          initialString: "9999999999",
        },
        {
          extension: [
            {
              url: "http://ehelse.no/fhir/StructureDefinition/validationtext",
              valueString: "Du kan ikke benytte spesialtegn i dette feltet",
            },
            {
              url: "http://ehelse.no/fhir/StructureDefinition/sdf-fhirpath",
              valueString:
                "Patient.telecom.where(use = 'home' and system = 'email').value",
            },
          ],
          linkId: "2.3",
          text: "Epost fra Kontakt- og reservasjonsregisteret",
          type: "string",
          required: false,
          repeats: false,
          readOnly: true,
          maxLength: 250,
          initialString: "01126222358-test@minid.norge.no",
        },
        {
          linkId: "2.4",
          text:
            "For å oppdatere opplysningene, gå til Kontakt- og reservasjonsregisteret (ID-porten) https://www.norge.no/nb/oppdater-kontaktinformasjon/",
          _text: {
            extension: [
              {
                url:
                  "http://hl7.org/fhir/StructureDefinition/rendering-markdown",
                valueMarkdown:
                  "For å oppdatere opplysningene, [gå til Kontakt- og reservasjonsregisteret (ID-porten)]( https://www.norge.no/nb/oppdater-kontaktinformasjon/)",
              },
            ],
          },
          type: "display",
        },
      ],
    },
    {
      linkId: "3",
      text: "Reiseperiode",
      type: "group",
      repeats: false,
      item: [
        {
          extension: [
            {
              url: "http://ehelse.no/fhir/StructureDefinition/validationtext",
              valueString: "Du må fylle ut dette feltet",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/entryFormat",
              valueString: "dd.mm.åååå",
            },
          ],
          linkId: "3.1",
          text: "Dato fra",
          type: "date",
          required: true,
          repeats: false,
          readOnly: false,
        },
        {
          extension: [
            {
              url: "http://ehelse.no/fhir/StructureDefinition/validationtext",
              valueString: "Du må fylle ut dette feltet",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/entryFormat",
              valueString: "dd.mm.åååå",
            },
          ],
          linkId: "3.2",
          text: "Dato til",
          type: "date",
          required: true,
          repeats: false,
          readOnly: false,
        },
      ],
    },
    {
      linkId: "4",
      text: "Reiserute",
      type: "group",
      repeats: false,
      item: [
        {
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/minValue",
              valueInteger: 1,
            },
            {
              url: "http://ehelse.no/fhir/StructureDefinition/repeatstext",
              valueString: "Legg til nytt reisemål",
            },
            {
              url:
                "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
              valueInteger: 20,
            },
          ],
          linkId: "4.1",
          text: "Land, regioner og boforhold",
          _text: {
            extension: [
              {
                url:
                  "http://hl7.org/fhir/StructureDefinition/rendering-markdown",
                valueMarkdown:
                  "Land, regioner og boforhold\r\n\r\n*Du kan legge til flere*",
              },
            ],
          },
          type: "group",
          repeats: true,
          item: [
            {
              extension: [
                {
                  url:
                    "http://ehelse.no/fhir/StructureDefinition/validationtext",
                  valueString: "Du må fylle ut dette feltet",
                },
              ],
              linkId: "4.1.1",
              text: "Land",
              type: "choice",
              required: true,
              repeats: false,
              readOnly: false,
              options: { reference: "#9043" },
            },
            {
              extension: [
                {
                  url:
                    "http://ehelse.no/fhir/StructureDefinition/validationtext",
                  valueString:
                    '"Du må fylle ut dette feltet, og kan ikke benytte spesialtegn"',
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/regex",
                  valueString: "^[æøåÆØÅa-zA-Z0-9,.!?()+\\-\\/* ]*$",
                },
              ],
              linkId: "4.1.2",
              text: "Region",
              type: "string",
              required: true,
              repeats: false,
              readOnly: false,
              maxLength: 250,
            },
            {
              extension: [
                {
                  url:
                    "http://ehelse.no/fhir/StructureDefinition/validationtext",
                  valueString:
                    '"Du må fylle ut dette feltet, og kan ikke benytte spesialtegn"',
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/regex",
                  valueString: "^[æøåÆØÅa-zA-Z0-9,.!?()+\\-\\/* ]*$",
                },
              ],
              linkId: "4.1.3",
              text: "Boforhold",
              type: "string",
              required: true,
              repeats: false,
              readOnly: false,
              maxLength: 250,
            },
          ],
        },
      ],
    },
    {
      linkId: "5",
      text: "Helsetilstand",
      type: "group",
      repeats: false,
      item: [
        {
          extension: [
            {
              url: "http://ehelse.no/fhir/StructureDefinition/validationtext",
              valueString: "Du må fylle ut dette feltet",
            },
          ],
          linkId: "5.1",
          text: "Har du noen kroniske eller medfødte sykdommer?",
          type: "choice",
          required: true,
          repeats: false,
          readOnly: false,
          options: { reference: "#1101" },
          item: [
            {
              extension: [
                {
                  url:
                    "http://ehelse.no/fhir/StructureDefinition/validationtext",
                  valueString:
                    '"Du må fylle ut dette feltet, og kan ikke benytte spesialtegn"',
                },
                {
                  url: "http://ehelse.no/fhir/StructureDefinition/repeatstext",
                  valueString: "Legg til ny sykdom",
                },
                {
                  url:
                    "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
                  valueInteger: 20,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/regex",
                  valueString: "^[æøåÆØÅa-zA-Z0-9,.!?()+\\-\\/* ]*$",
                },
              ],
              linkId: "5.1.1",
              text: "Kronisk eller medfødt sykdom",
              type: "string",
              enableWhen: [
                {
                  question: "5.1",
                  answerCoding: {
                    system: "urn:oid:2.16.578.1.12.4.1.1101",
                    code: "1",
                  },
                },
              ],
              required: true,
              repeats: true,
              readOnly: false,
              maxLength: 250,
            },
          ],
        },
        {
          extension: [
            {
              url: "http://ehelse.no/fhir/StructureDefinition/validationtext",
              valueString: "Du må fylle ut dette feltet",
            },
          ],
          linkId: "5.2",
          text: "Har du noen allergier?",
          type: "choice",
          required: true,
          repeats: false,
          readOnly: false,
          options: { reference: "#1101" },
          item: [
            {
              extension: [
                {
                  url:
                    "http://ehelse.no/fhir/StructureDefinition/validationtext",
                  valueString:
                    '"Du må fylle ut dette feltet, og kan ikke benytte spesialtegn"',
                },
                {
                  url: "http://ehelse.no/fhir/StructureDefinition/repeatstext",
                  valueString: "Legg til ny allergi",
                },
                {
                  url:
                    "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
                  valueInteger: 20,
                },
                {
                  url: "http://hl7.org/fhir/StructureDefinition/regex",
                  valueString: "^[æøåÆØÅa-zA-Z0-9,.!?()+\\-\\/* ]*$",
                },
              ],
              linkId: "5.2.1",
              text: "Allergi",
              type: "string",
              enableWhen: [
                {
                  question: "5.2",
                  answerCoding: {
                    system: "urn:oid:2.16.578.1.12.4.1.1101",
                    code: "1",
                  },
                },
              ],
              required: true,
              repeats: true,
              readOnly: false,
              maxLength: 250,
            },
          ],
        },
        {
          linkId: "5.3",
          text: "Bruker du noen legemidler fast?",
          _text: {
            extension: [
              {
                url:
                  "http://hl7.org/fhir/StructureDefinition/rendering-markdown",
                valueMarkdown:
                  "Bruker du noen legemidler fast?\r\n\r\n*Er du usikker på hvilke legemidler du bruker fast, kan du gå inn på [Helsenorge og se der](https://minhelse.helsenorge.no/legemidler)*",
              },
            ],
          },
          type: "choice",
          required: true,
          repeats: false,
          readOnly: false,
          options: { reference: "#1101" },
          item: [
            {
              linkId: "5.3.1",
              text: "Legemiddel",
              type: "group",
              enableWhen: [
                {
                  question: "5.3",
                  answerCoding: {
                    system: "urn:oid:2.16.578.1.12.4.1.1101",
                    code: "1",
                  },
                },
              ],
              repeats: true,
              item: [
                {
                  extension: [
                    {
                      url:
                        "http://ehelse.no/fhir/StructureDefinition/validationtext",
                      valueString:
                        '"Du må fylle ut dette feltet, og kan ikke benytte spesialtegn"',
                    },
                    {
                      url: "http://hl7.org/fhir/StructureDefinition/regex",
                      valueString: "^[æøåÆØÅa-zA-Z0-9,.!?()+\\-\\/* ]*$",
                    },
                  ],
                  linkId: "5.3.1.1",
                  text: "Navn og styrke",
                  type: "string",
                  required: true,
                  repeats: false,
                  readOnly: false,
                  maxLength: 250,
                },
                {
                  extension: [
                    {
                      url:
                        "http://ehelse.no/fhir/StructureDefinition/validationtext",
                      valueString:
                        '"Du må fylle ut dette feltet, og kan ikke benytte spesialtegn"',
                    },
                    {
                      url: "http://hl7.org/fhir/StructureDefinition/regex",
                      valueString: "^[æøåÆØÅa-zA-Z0-9,.!?()+\\-\\/* ]*$",
                    },
                  ],
                  linkId: "5.3.1.2",
                  text: "Dosering",
                  type: "string",
                  required: true,
                  repeats: false,
                  readOnly: false,
                  maxLength: 250,
                },
              ],
            },
          ],
        },
        {
          extension: [
            {
              url: "http://ehelse.no/fhir/StructureDefinition/validationtext",
              valueString: "Du må fylle ut dette feltet",
            },
          ],
          linkId: "5.4",
          text: "Er du gravid?",
          type: "choice",
          required: true,
          repeats: false,
          readOnly: false,
          options: { reference: "#1102" },
        },
      ],
    },
    {
      linkId: "6",
      text: "Tidligere vaksiner",
      type: "group",
      repeats: false,
      item: [
        {
          linkId: "6.1",
          text:
            "Ta med en utskrift av dine vaksiner (vaksinekort), se helsenorge/ linke",
          _text: {
            extension: [
              {
                url:
                  "http://hl7.org/fhir/StructureDefinition/rendering-markdown",
                valueMarkdown:
                  "Ta med en utskrift av dine vaksiner (vaksinekort) \r\n[Se dine vaksiner på helsenorge](https://minhelse.helsenorge.no/vaksiner)",
              },
            ],
          },
          type: "display",
        },
      ],
    },
    {
      linkId: "7",
      text: "Tilleggsopplysninger",
      type: "group",
      repeats: false,
      item: [
        {
          extension: [
            {
              url: "http://ehelse.no/fhir/StructureDefinition/validationtext",
              valueString: "Du kan ikke benytte spesialtegn i dette feltet",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/regex",
              valueString: "^[æøåÆØÅa-zA-Z0-9,.!?()+\\-\\/* ]*$",
            },
          ],
          linkId: "7.1",
          text: "Har du mer å tilføye, kan du gjøre det i feltet under",
          type: "text",
          required: false,
          repeats: false,
          readOnly: false,
          maxLength: 1000,
        },
      ],
    },
  ],
};
