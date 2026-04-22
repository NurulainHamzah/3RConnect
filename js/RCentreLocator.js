// Define a dictionary to store recycling centers for each state
var stateRecyclingCenters = {
    "Pulau Pinang": [
        {
            name: "MM Century Sdn Bhd",
            address: "Plot 154(b) Lorong Perindustrian Bukit Minyak, Taman Perindustrian Bukit Minyak, 14000 Bukit Mertajam, Penang.",
            phone: "+6017 476 8984",
            hours: {
                "Mon": "9:00 am - 6:00 pm",
                "Tue": "9:00 am - 6:00 pm",
                "Wed": "9:00 am - 6:00 pm",
                "Thu": "9:00 am - 6:00 pm",
                "Fri": "9:00 am - 6:00 pm",
                "Sat": "Closed",
                "Sun": "Closed"
            },
            additionalInformation: {
                rating: 5.0,
                materialsAccepted: ["plastic", "paper", "metal", "e-waste"],
                coordinates: "5.296160319695421, 100.45785260852135" // Add the correct coordinates here
            }
        },
        {
            name: "Kamatchi Amman Trading",
            address: "No. 6579, Jalan Pengkalan Bukit Tengah, 14000 Bukit Mertajam, Penang.",
            phone: "Phone: 017 456 5446, 019 421 7046",
            hours: {
                "Mon": "9:00 am - 6:00 pm",
                "Tue": "9:00 am - 6:00 pm",
                "Wed": "9:00 am - 6:00 pm",
                "Thu": "9:00 am - 6:00 pm",
                "Fri": "9:00 am - 6:00 pm",
                "Sat": "Closed",
                "Sun": "Closed"
            },
            additionalInformation: {
                businessType: "Type of Business: We are buying all types of ferrous and non-ferrous metals, plastics (HDPE, LDPE, PU, PP, PS, ABS, PVC, POLYCARBONATE, etc), scrap electronic pcb, waste solder, solder dross, used solder waste, lithium-ion batteries, precious metals and pv ribbons. Call us to change your trash into cash. Our experts help you to recycle your trash and save landfill.",
                contactPerson: "Contact: Mr Muralitharan",
                email: "Email: money4business4u@gmail.com",
                coordinates: "5.347132, 100.433733"
            }
        },
        {
            name: "Lns Metal",
            address: "451-B Beach Street, 10300 Penang.",
            phone: "Phone: 010 566 4575",
            hours: {
                "Mon": "9:00 am - 6:00 pm",
                "Tue": "9:00 am - 6:00 pm",
                "Wed": "9:00 am - 6:00 pm",
                "Thu": "9:00 am - 6:00 pm",
                "Fri": "9:00 am - 6:00 pm",
                "Sat": "Closed",
                "Sun": "Closed"
            },
            additionalInformation: {
                rating: 5.0,
                reviews: 139,
                contactPerson: "Contact: Ramakrishna",
                email: "Email: Insmetalindustry@gmail.com",
                remarks: "Remarks: Located next to LY Motor Shop, near to Sia Boey Market. Operation Hours: Mon-Sat 9:00 am to 6:45 pm. Closed on Sundays and public holidays."
            }
        },
        {
            name: "Eco Store Global Sdn Bhd",
            address: "Lot 794 Jalan Bukit Tengah, 14000 Perai, Penang",
            phone: "Phone: 012 390 6690",
            hours: {
                "Mon": "9:00 am - 6:00 pm",
                "Tue": "9:00 am - 6:00 pm",
                "Wed": "9:00 am - 6:00 pm",
                "Thu": "9:00 am - 6:00 pm",
                "Fri": "9:00 am - 6:00 pm",
                "Sat": "Closed",
                "Sun": "Closed"
            },
            additionalInformation: {
                website: "Website: ecostore.weebly.com"
            },
            additionalInformation: {
                rating: 4.4,
                materialsAccepted: ["plastic", "newspaper", "paper", "metal", "alumminium", "e-waste"],
                coordinates: "5.360203, 100.425964"
                
            }
        },
        {
            name: "Embatech Sdn Bhd",
            address: "1, Lintang Beringin 8, Diamond Valley Industrial Park 2, Jalan Permatang Damar Laut, 11960 Batu Maung, Penang",
            phone: "Phone: +60-4-626 5523",
            hours: {
                "Mon": "9:00 am - 6:00 pm",
                "Tue": "9:00 am - 6:00 pm",
                "Wed": "9:00 am - 6:00 pm",
                "Thu": "9:00 am - 6:00 pm",
                "Fri": "9:00 am - 6:00 pm",
                "Sat": "Closed",
                "Sun": "Closed",
            },
             additionalInformation: {
             rating: 4.3,
             materialsAccepted: ["plastic", "paper", "metal","aluminium", "sponge" , "machineries", "e-waste" ],
             coordinates: "5.282222563631613, 100.2708540976306"
            },
        },   
        {
            name: "Excellent Recycling Centre",
            address: "176 Hutton Lane, 10050 George Town, Penang",
            phone: "Phone: +60-4-226 1032",
            hours: {
                "Mon": "9:00 am - 6:00 pm",
                "Tue": "9:00 am - 6:00 pm",
                "Wed": "9:00 am - 6:00 pm",
                "Thu": "9:00 am - 6:00 pm",
                "Fri": "9:00 am - 6:00 pm",
                "Sat": "Closed",
                "Sun": "Closed"
            },
            additionalInformation: {
            rating: 3.8,
            coordinates: "5.422406147317316, 100.32658397660512"
           },
        },
    ],
    "Johor": [
        {
            name: "Kent Soon Recycle Centre Sdn Bhd",
            address: "No. 20, PTD 165724, Jalan Riang 21, Kawasan, Taman Perindustrian Gembira, 81200 Tampoi, Johor",
            phone: "Phone: 07-332 2099",
            hours: {
                "Mon": "9:00 am - 6:00 pm",
                "Tue": "9:00 am - 6:00 pm",
                "Wed": "9:00 am - 6:00 pm",
                "Thu": "9:00 am - 6:00 pm",
                "Fri": "9:00 am - 6:00 pm",
                "Sat": "Closed",
                "Sun": "Closed"
            },
            additionalInformation: {
            rating: 3.9,
            reviews: 25,
            materialsAccepted: [ "plastic", "recycle waste"],
            coordinates: "1.5227167244754816, 103.73952775454572"
           },
        },
        {
            name: "MY RECYCLE ECOPARK SDN BHD",
            address: "City Plaza, Wadi Hana, 80300 Johor Bahru, Johor",
            phone: "Phone: 07-300 5777",
            hours: {
                "Mon": "9:00 am - 6:00 pm",
                "Tue": "9:00 am - 6:00 pm",
                "Wed": "9:00 am - 6:00 pm",
                "Thu": "9:00 am - 6:00 pm",
                "Fri": "9:00 am - 6:00 pm",
                "Sat": "Closed",
                "Sun": "Closed"
            },
            additionalInformation: {
            rating: 4.6,
            materialsAccepted: [ "plastic"],
            coordinates: "1.4759725414057208, 103.76239709551936"
           },
        },
        {
            name: "JOHOR BAHRU JB Recycle",
            address: "No 18, Jalan Seroja 37, Taman Johor Jaya, 81100 Johor Bahru, Johor",
            phone: "Phone: +60-4-829 1497",
            hours: {
                "Mon": "9:00 am - 6:00 pm",
                "Tue": "9:00 am - 6:00 pm",
                "Wed": "9:00 am - 6:00 pm",
                "Thu": "9:00 am - 6:00 pm",
                "Fri": "9:00 am - 6:00 pm",
                "Sat": "Closed",
                "Sun": "Closed"
            },
            additionalInformation: {
            rating: 4.0,
            materialsAccepted: ["paper", "metal","aluminium", "machineries", "e-waste" ],
            coordinates: "1.5311646624271293, 103.81068642850576"
           },
        },
        {
            name: "E-Tech Recycle Sdn Bhd",
            address: "Lot 2036, Jalan Tanah Merah, Taman Desa Cemerlang, 81800 Ulu Tiram, Johor",
            phone: "Phone: 07-861 6886",
            hours: {
                "Mon": "9:00 am - 6:00 pm",
                "Tue": "9:00 am - 6:00 pm",
                "Wed": "9:00 am - 6:00 pm",
                "Thu": "9:00 am - 6:00 pm",
                "Fri": "9:00 am - 6:00 pm",
                "Sat": "Closed",
                "Sun": "Closed"
            },
            additionalInformation: {
            rating: 4.8,
            materialsAccepted: ["paper", "metal"],
            coordinates: "1.5630222710980717, 103.82697482386055"
           },
        },
        {
            name: "J.B. Goodcare Recycle Sdn Bhd",
            address: "PTD 76257 & 76258,, Jln Seelong, 81400 Senai, Johor",
            phone: "Phone: 07-599 6703",
            hours: {
                "Mon": "9:00 am - 6:00 pm",
                "Tue": "9:00 am - 6:00 pm",
                "Wed": "9:00 am - 6:00 pm",
                "Thu": "9:00 am - 6:00 pm",
                "Fri": "9:00 am - 6:00 pm",
                "Sat": "Closed",
                "Sun": "Closed"
            },
            additionalInformation: {
            rating: 4.2,
            materialsAccepted: ["plastic", "paper", "metal", "e-waste"],
            coordinates: "1.621033, 103.690198"
           },
        },
        {
            name: "Aikha Hardware Sdn. Bhd.",
            address: "Lot 893,Jalan Selatan 8(Kempas Lama)Batu 7 1/2, 81300 Skudai, Johor",
            phone: "Phone: 013-713 0000",
            hours: {
                "Mon": "9:00 am - 6:00 pm",
                "Tue": "9:00 am - 6:00 pm",
                "Wed": "9:00 am - 6:00 pm",
                "Thu": "9:00 am - 6:00 pm",
                "Fri": "9:00 am - 6:00 pm",
                "Sat": "Closed",
                "Sun": "Closed"
            },
            additionalInformation: {
            rating: 4.6,
            reviews:29,
            coordinates: "1.5457581250365613, 103.69435874899726"
           },
        },
    ],
    "Melaka": [
        {
            name: "Tzu Chi Recycling Centre Batu Berendam",
            address: "75350 Batu Berendam, Malacca",
            phone: "Phone: 06-336 7890",
            hours: {
                "Mon": "8:00 AM - 1:00 PM",
                "Tue": "8:00 AM - 1:00 PM",
                "Wed": "8:00 AM - 1:00 PM",
                "Thu": "8:00 AM - 1:00 PM",
                "Fri": "8:00 AM - 1:00 PM",
                "Sat": "8:00 AM - 1:00 PM",
                "Sun": "8:00 AM - 1:00 PM"
            },
            additionalInformation: {
            rating: 3.7,
            reviews: 12,
            materialsAccepted:["plastic","paper","metal","aluminium","clothes","e-waste"],
            coordinates: "2.2484529886942504, 102.2513560220101"
           },
        },
        {
            name: "Okh Trading & Recycle Sdn. Bhd",
            address: "2502, Jalan Berkat 8, Taman Malim Jaya, 75250 Malim Jaya, Melaka",
            phone: "Phone:  011-1083 0032",
            hours: {
                "Mon": "9:00 AM - 5:30 PM",
                "Tue": "9:00 AM - 5:30 PM",
                "Wed": "9:00 AM - 5:30 PM",
                "Thu": "9:00 AM - 5:30 PM",
                "Fri": "9:00 AM - 5:30 PM",
                "Sat": "9:00 AM - 5:30 PM",
                "Sun": "Closed"
            },
            additionalInformation: {
                rating: 4.4,
                reviews: 9,
                materialsAccepted: ["paper","plastic","aluminium","metal"],
                coordinates: "2.240745307241806, 102.23583139502401"
        
           },
        },
        {
            name: "Meriahtek (M) Sdn. Bhd.",
            address: "1, Jalan Ttc 30, Taman Teknologi Cheng, 75260 Melaka",
            phone: "Phone:  06-336 5211",
            hours: {
                "Mon": "9:00 am - 6:00 pm",
                "Tue": "9:00 am - 6:00 pm",
                "Wed": "9:00 am - 6:00 pm",
                "Thu": "9:00 am - 6:00 pm",
                "Fri": "9:00 am - 6:00 pm",
                "Sat": "Closed",
                "Sun": "Closed"
            },
            additionalInformation: {
                rating: 4.0,
                businessType: "Our core business is providing eco recycling process which helps to recover and refine precious metals, and we also provide environmentally friendly solutions for other materials.",
                email: "Email: info@meriahtek.com.my",
                coordinates: "2.2666071598195443, 102.23144212267687"
            }
        },
        {
            name: "Krubong Recovery Sdn Bhd",
            address: "2625-1, Jln PK 35, Kawasan Perindustrian Krubong, 75260 Melaka",
            phone: "Phone: 06-3352519",
            hours: {
                "Mon": "8:30 AM - 6:00 PM",
                "Tue": "8:30 AM - 6:00 PM",
                "Wed": "8:30 AM - 6:00 PM",
                "Thu": "8:30 AM - 6:00 PM",
                "Fri": "8:30 AM - 6:00 PM",
                "Sat": "8:30 AM - 6:00 PM",
                "Sun": "Closed"
            },
            additionalInformation: {
                rating: 4.9,
                reviews:8,
                businessType: "Type of Business: We provide Total Waste Management Solution include the process of collecting, transporting, processing, recycling or disposal, and monitoring of waste materials collected from waste generator.",
                email: "Email:info@lamchong.com.my",
                coordinates: "2.284836024154021, 102.24363156988733"
            }
        },
        {
            name: "EVERGREEN OIL & FEED SDN.BHD",
            address: "No. 12, Jalan Jasa Merdeka 12, Taman Merdeka, 75350 Batu Berendam, Melaka, Malaysia",
            phone: "Phone: 012-287 1899",
            hours: {},
            additionalInformation: {
                rating: 4.0,
                reviews: 2,
                materialsAccepted: ["cooking oil"],
                businessType: "Type of Business: We provide barrels to the food industry for used cooking oil collection. Then we will arrange our trucks to collect the used cooking oil from the industry, commercial and residential areas",
                email: "enquiry@evergreenbiooil.com",
                coordinates: "2.261410, 102.237816" 

            }
        }
        
    ],
    "Kedah": [
        {
          name: "EKSP RECYCLE SDN. BHD. (SP)",
          address: "Plot 77869, Jalan Pknk 3/1, Kawasan Perindustrian Sungai Petani, 08000 Sungai Petani, Kedah",
          phone: "Phone: 04-441 7815",
          hours: {
            "Mon": "8:00 AM - 5:00 PM",
            "Tue": "8:00 AM - 5:00 PM",
            "Wed": "8:00 AM - 5:00 PM",
            "Thu": "8:00 AM - 5:00 PM",
            "Fri": "8:00 AM - 5:00 PM",
            "Sat": "8:00 AM - 5:00 PM",
            "Sun": "Closed"
          },
          additionalInformation: {
            rating: 4.4,
            materialsAccepted: ["plastic", "paper", "metal" , "aluminium"],
            businessType: "Type of Business: Specializing in recycling various materials, including ferrous and non-ferrous metals. We provide environmentally friendly solutions for waste management.",
            contactPerson: "Contact: Mr. Tan",
            email: "Email: eksprecycle@gmail.com",
            coordinates: "5.642850571194088, 100.53029485270088"
          }
        },
        {
          name: "HICORE INDUSTRY SDN BHD (Previously known as RECO METAL RECYCLE ENTERPRISE)",
          address: "LOT218, BUKIT TOK PUT MUKIN, 08000 Sungai Petani, Kedah",
          phone: "Phone: 012-485 6443",
          hours: {
            "Mon": "8:30 AM - 1:00 PM, 2:00 PM - 6:00 PM",
            "Tue": "8:30 AM - 1:00 PM, 2:00 PM - 6:00 PM",
            "Wed": "8:30 AM - 1:00 PM, 2:00 PM - 6:00 PM",
            "Thu": "8:30 AM - 1:00 PM, 2:00 PM - 6:00 PM",
            "Fri": "8:30 AM - 1:00 PM, 2:00 PM - 6:00 PM",
            "Sat": "8:30 AM - 1:00 PM, 2:00 PM - 6:00 PM",
            "Sun": "Closed"
          },
          additionalInformation: {
            rating: 4.3,
            reviews: 3,
            materialsAccepted:"metal",
            businessType: "Type of Business: Specializing in recycling various materials, including metals and electronics. Committed to sustainable waste management.",
            contactPerson: "Contact: Mr. Lee",
            email: "Email: hicore.industry@gmail.com",
            coordinates: "5.584666582762868, 100.46504441037186"
          }
        },
        {
          name: "SWC Recycle (M) Sdn Bhd",
          address: "22, Lorong Industri 3, Kawasan Industri Padang Meha, 09400, Kedah",
          phone: "Phone: 04-485 1240",
          hours: {
            "Mon": "9:00 AM - 6:00 PM",
            "Tue": "9:00 AM - 6:00 PM",
            "Wed": "9:00 AM - 6:00 PM",
            "Thu": "9:00 AM - 6:00 PM",
            "Fri": "9:00 AM - 6:00 PM",
            "Sat": "Closed",
            "Sun": "Closed"
          },
          additionalInformation: {
            rating: 4.4,
            materialsAccepted: ["aluminium, reycle item"],
            businessType: "Type of Business: Specializing in recycling metals and electronic waste. Dedicated to eco-friendly waste disposal.",
            contactPerson: "Contact: Mr. Chong",
            email: "Email: swcrecycle@gmail.com",
            coordinates: "5.501191394488946, 100.59686930852207"
          }
        },
        {
          name: "CSH Recycle",
          address: "941, Lorong Makmur 1/2, Kawaasan Perindustrian Taman Makmur, 09600 Lunas, Kedah",
          phone: "Phone: 04-484 3131",
          hours: {
            "Mon": "8:30 AM - 5:30 PM",
            "Tue": "8:30 AM - 5:30 PM",
            "Wed": "8:30 AM - 5:30 PM",
            "Thu": "8:30 AM - 5:30 PM",
            "Fri": "8:30 AM - 5:30 PM",
            "Sat": "8:30 AM - 12:30 PM",
            "Sun": "Closed"
          },
          additionalInformation: {
            materialsAccepted: ["plastic","paper","metal", "waste materials"],
            businessType: "Type of Business: Offering comprehensive recycling services for various materials, including plastics and metals. Committed to environmental sustainability.",
            contactPerson: "Contact: Mr. Lim",
            email: "Email: cshrecycle@gmail.com",
            coordinates: "5.441822094547785, 100.54923872386445"
          }
        },
        {
          name: "Buddhist Tzu-Chi Sungai Petani Recycling Center",
          address: "Jalan Kuala Ketil, Taman Kampung Raja, 08000 Sungai Petani, Kedah",
          phone: "Phone: 016-452 0101",
          hours: {
            "Mon": "9:30 AM - 5:00 AM",
            "Tue": "9:30 AM - 5:00 AM",
            "Wed": "9:30 AM - 5:00 AM",
            "Thu": "9:30 AM - 5:00 AM",
            "Fri": "9:30 AM - 5:00 AM",
            "Sat": "9:30 AM - 5:00 AM",
            "Sun": "Closed"
          },
          additionalInformation: {
            rating: 5.0,
            businessType: "Type of Business: Operating a recycling center with a focus on promoting environmental awareness. Accepting various recyclable materials.",
            contactPerson: "Contact: Ms. Wong",
            email: "Email: tzuchirecycle@gmail.com",
            coordinates: "5.635360294355976, 100.50043406619398"
          }
        },
        {
          name: "Well Recycle Sdn. Bhd.",
          address: "6a, Kampung Mergong Hilir, Kampung Batin, 05150 Alor Setar, Kedah",
          phone: "Phone: 014-700 1001",
          hours: {
            "Mon": "9:00 AM - 6:00 PM",
            "Tue": "9:00 AM - 6:00 PM",
            "Wed": "9:00 AM - 6:00 PM",
            "Thu": "9:00 AM - 6:00 PM",
            "Fri": "Closed",
            "Sat": "9:00 AM - 6:00 PM",
            "Sun": "9:00 AM - 6:00 PM"
          },
          additionalInformation: {
            rating: 5.0,
            materialsAccepted: ["plastic","paper","metal", "e-waste"],
            businessType: "Type of Business: Specializing in the recycling of various materials, including metals and plastics. Committed to sustainable waste management.",
            contactPerson: "Contact: Mr. Gan",
            email: "Email: wellrecycle@gmail.com",
            coordinates: "6.138656928492742, 100.33938733736062"
          }
        },
        {
          name: "SAI SASTHA RESOURCES (BESI BURUK)",
          address: "270, Jalan Anggerik 4/10, Amanjaya, 08000 Sungai Petani, Kedah",
          phone: "Phone: 011-6137 7565",
          hours: {
            "Mon": "8:00 AM - 8:00 PM",
            "Tue": "8:00 AM - 8:00 PM",
            "Wed": "8:00 AM - 8:00 PM",
            "Thu": "Closed",
            "Fri": "8:00 AM - 8:00 PM",
            "Sat": "Closed",
            "Sun": "8:00 AM - 8:00 PM"
          },
          additionalInformation: {
            rating: 5.0,
            materialsAccepted: ["metal","aluminium", "wire/cable","machineries", "e-waste"],
            areasServed: "Kedah and nearby areas",
            businessType: "Type of Business: Specializing in the recycling of scrap metal. Serving Kedah and nearby areas with a commitment to eco-friendly practices.",
            contactPerson: "Contact: Mr. Kumar",
            email: "Email: saisastharesources@gmail.com",
            coordinates: "5.642639948047788, 100.54746589502953"
          }
        },
      ],      
    
    "Kelantan": [
        {
            name: "Kopi Farm",
            address: "18300, Kelantan, Gua MusangLojing1858 A, Rumah Pekerja Pejabat Tanah",
            hours: {
                "Mon": "7:30 AM - 5:00 PM",
                "Tue": "7:30 AM - 5:00 PM",
                "Wed": "7:30 AM - 5:00 PM",
                "Thu": "7:30 AM - 5:00 PM",
                "Fri": "7:30 AM - 5:00 PM",
                "Sat": "7:30 AM - 5:00 PM",
                "Sun": "7:30 AM - 5:00 PM"
            },
            additionalInformation: {
             rating: 4.5,
             reviews: 4,
             coordinates:"4.607863242812645, 101.46300465084786"
            }
        },
        {
            name: "NW Mega Waste Management sb",
            address: "Lot 2613 Jalan Pasir Mas - Salor (Lebuhraya) Kampung Dusun Pinang 15100, Kelantan",
            phone: "Phone: 012-223 9753",
            hours: {
                "Mon": "9:00 AM - 5:30 PM",
                "Tue": "9:00 AM - 5:30 PM",
                "Wed": "9:00 AM - 5:30 PM",
                "Thu": "9:00 AM - 5:30 PM",
                "Fri": "Closed",
                "Sat": "9:00 AM - 5:30 PM",
                "Sun": "9:00 AM - 5:30 PM"
            },
            additionalInformation: {
                materialsAccepted: ["plastic","paper","metal"],
                coordinates: "6.032642376096782, 102.16109569503129"
        
            }
        },
        {
            name: "Nur Recycle Enterprise",
            address: "Jln C/44, Kawasan Perindustrian Mara, 16100 Kota Bharu, Kelantan",
            hours: {
                "Mon": "8:30 AM - 7:00 PM",
                "Tue": "8:30 AM - 7:00 PM",
                "Wed": "8:30 AM - 7:00 PM",
                "Thu": "8:30 AM - 7:00 PM",
                "Fri": "Closed",
                "Sat": "8:30 AM - 7:00 PM",
                "Sun": "8:30 AM - 7:00 PM"
            },
            additionalInformation: {
                materialsAccepted: ["plastic","paper"],
                coordinates: "6.143818728280874, 102.29070909503181"
        
            
            }
        },
        {
            name: "KB Recycling Center",
            rating: 4.7,
            address: "Kampong Panji, Malaysia",
            phone: "Phone: 012-961 1626",
            hours: {
                "Mon": "08:30 AM - 5:30 PM",
                "Tue": "08:30 AM - 5:30 PM",
                "Wed": "08:30 AM - 5:30 PM",
                "Thu": "08:30 AM - 5:30 PM",
                "Fri": "Closed",
                "Sat": "08:30 AM - 5:30 PM",
                "Sun": "08:30 AM - 5:30 PM"
            },
            additionalInformation: {
            rating: 4.7,
            materialsAccepted: ["plastic","paper", "metal", "aluminium"],
            updated: "Updated about 3 years ago"
            }
        },
    ],    "Kuala Lumpur": [
       
        {
            name: "GNPL RECYCLE SDN BHD",
            phone: "Phone: 016-326 3631",
            address: "Lot 18, Jalan Usahawan, kawasan perindustrian ringan, 53200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
            hours: {
                "Mon": "8:00 AM – 6:00 PM",
                "Tue": "8:00 AM – 6:00 PM",
                "Wed": "8:00 AM – 6:00 PM",
                "Thu": "8:00 AM – 6:00 PM",
                "Fri": "8:00 AM – 6:00 PM",
                "Sat": "8:00 AM – 6:00 PM",
                "Sun": "Closed"
            },
            additionalInformation: {
                rating: 4.0,
                materialsAccepted: ["plastic","paper", "metal", "aluminium", "e-waste"],
                reviews: "(8)",
                type: "Recycling Center in Kuala Lumpur",
                areasServed: "Kuala Lumpur and nearby areas",
                coordinates:"3.1988022089063124, 101.7232862238594"

            }
        },
        {
            name: "Recycling Centre",
            rating: 4.3,
            reviews: "(3)",
            type: "Recycling Center in Kuala Lumpur",
            address: "59, Jalan Thambipillay, Brickfields, 50470 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
            hours: {
                "Mon": "8:00 AM – 6:00 PM",
                "Tue": "8:00 AM – 6:00 PM",
                "Wed": "8:00 AM – 6:00 PM",
                "Thu": "8:00 AM – 6:00 PM",
                "Fri": "8:00 AM – 6:00 PM",
                "Sat": "8:00 AM – 6:00 PM",
                "Sun": "8:00 AM – 6:00 PM"
            },
            additionalInformation: {
                rating: 4.3,
                materialsAccepted: ["e-waste"],
                reviews: "(3)",
                type: "Recycling Center in Kuala Lumpur",
                coordinates:"3.131867048101436, 101.68740566618818"
            }
        },
        {
            name: "Win Wins Recycling Trading Sdn. Bhd.",
            phone: "Phone: 012-329 7969",
            address: "26a, Jalan Chan Sow Lin, Chan Sow Lin, 55200 Cheras, Wilayah Persekutuan Kuala Lumpur",
            hours: {
                "Mon": "7:30 AM – 6:30 PM",
                "Tue": "7:30 AM – 6:30 PM",
                "Wed": "7:30 AM – 6:30 PM",
                "Thu": "7:30 AM – 6:30 PM",
                "Fri": "7:30 AM – 6:30 PM",
                "Sat": "7:30 AM – 7:00 PM",
                "Sun": "Closed"
            },
            additionalInformation: {
                materialsAccepted: ["paper", "aluminium", "metal","wire/cable", "e-waste","machineries"]
            }
        },
        {
            name: "DSS Resources Recycling Center",
            phone: "Phone: 019-309 0197",
            address: "8, Jln Damai Puspa 2, Alam Damai, 56000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
            hours: {
                "Mon": "8:00 AM – 6:30 PM",
                "Tue": "8:00 AM – 6:30 PM",
                "Wed": "8:00 AM – 6:30 PM",
                "Thu": "8:00 AM – 6:30 PM",
                "Fri": "8:00 AM – 6:30 PM",
                "Sat": "8:00 AM – 6:30 PM",
                "Sun": "8:00 AM – 5:00 PM"
            },
            additionalInformation: {
                rating: 4.7,
                materialsAccepted: ["metal"],
                reviews: "(9)",
                type: "Waste Management Service in Kuala Lumpur",
                areasServed: "Kuala Lumpur and nearby areas",
                coordinates:"3.05569401051187, 101.7456011238594"
            }
        },
        {
            name: "Thanam Industry Sdn Bhd",
            phone: "Phone: 019-315 5261",
            address: "631, Jalan Lima, Off, Jalan Chan Sow Lin, 55200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
            hours: {
                "Mon": "9:00 AM – 5:00 PM",
                "Tue": "8:00 AM – 6:00 PM",
                "Wed": "8:00 AM – 6:00 PM",
                "Thu": "8:00 AM – 6:00 PM",
                "Fri": "8:00 AM – 6:00 PM",
                "Sat": "8:00 AM – 6:00 PM",
                "Sun": "Closed"
            },
            additionalInformation: {
                rating: 4.6,
                materialsAccepted: ["plastic", "paper", "metal", "e-waste", "scrap car"],
                reviews: "(656)",
                type: "Scrap Metal Dealer in Kuala Lumpur",
                areasServed: "Kuala Lumpur and nearby areas",
                coordinates: "3.115509096870268, 101.71426795269504"
            }
        }
    ],
    "Negeri Sembilan": [
          
                {
                    name: "One JKT Plastic Recycle",
                    address: "239, Jalan Nilai 7/1, Kawasan Perindustrian Nilai 7, 71800 Nilai, Negeri Sembilan",
                    phone: "012-200 4573",
                    hours: {
                        "Mon": "8:30 AM - 6:00 PM",
                        "Tue": "8:30 AM - 6:00 PM",
                        "Wed": "8:30 AM - 6:00 PM",
                        "Thu": "8:30 AM - 6:00 AM",
                        "Fri": "8:30 AM - 6:00 AM",
                        "Sat": "8:30 AM - 6:00 AM",
                        "Sun": "Closed"
                    },
                    additionalInformation: {
                        rating: 5.0,
                        materialsAccepted:["plastic", "aluminium", "metal"],
                        reviews: 7,
                        coordinates: "2.8482389311642695, 101.8163044"
                    }
                },
                {
                    name: "EGA Recycling Sdn Bhd",
                    address: "Factory Lot 29 Jalan Permata 1/1, Arab Malaysian Industrial Park, 71800 Nilai, Negeri Sembilan",
                    phone: "012-631 6467",
                    hours: {
                        "Mon": "8:00 AM - 5:00 AM",
                        "Tue": "8:00 AM - 5:00 AM",
                        "Wed": "8:00 AM - 5:00 AM",
                        "Thu": "8:00 AM - 5:00 AM",
                        "Fri": "8:00 AM - 5:00 AM",
                        "Sat": "Closed",
                        "Sun": "Closed"
                    },
                    additionalInformation: {
                        rating: 4.0,
                        materialsAccepted:["metal", "e-waste"],
                        reviews: 2
                    }
                },
                {
                    name: "Foo Sun Trading Sdn Bhd",
                    address: "Lot 2152, Jalan Sikamat, 70400 Seremban, Negeri Sembilan",
                    phone: "06-763 6163",
                    hours: {
                        "Mon": "9:00 AM - 12:00 PM, 1:00 PM - 5:30 PM",
                        "Tue": "9:00 AM - 12:00 PM, 1:00 PM - 5:30 PM",
                        "Wed": "9:00 AM - 12:00 PM, 1:00 PM - 5:30 PM",
                        "Thu": "9:00 AM - 12:00 PM, 1:00 PM - 5:30 PM",
                        "Fri": "9:00 AM - 12:00 PM, 1:00 PM - 5:30 PM",
                        "Sat": "9:00 AM - 12:00 PM, 1:00 PM - 5:30 PM",
                        "Sun": "Closed"
                    },
                    additionalInformation: {
                        rating: 4.9,
                        reviews: 57,
                        materialsAccepted: ["paper","metal","e-waste", "pallet"],
                        coordinates:"2.753057146593517, 101.9764983950237"
                    }
                },
                {
                    name: "N9 Fibre Sdn Bhd",
                    address: "242 & 243, Jalan Industri Galla 12 Galla Industrial Park, Taman Mutiara Galla, 70200 Seremban, Negeri Sembilan",
                    phone: "06-762 5555",
                    hours: {
                        "Mon": "8:30 AM - 5:00 PM",
                        "Tue": "8:30 AM - 5:00 PM",
                        "Wed": "8:30 AM - 5:00 PM",
                        "Thu": "8:30 AM - 5:00 PM",
                        "Fri": "8:30 AM - 5:00 PM",
                        "Sat": "8:30 AM - 5:00 PM",
                        "Sun": "Closed"
                    },
                    additionalInformation: {
                        rating: 5.0,
                        reviews: 1,
                        materialsAccepted: ["paper","pallet"],
                        coordinates: "2.7365269138521606, 101.89721289502366"
                    }
                },
            {
                name: "EcoGreen Waste Solutions",
                address: "Lot 879, Jalan Harapan Indah, 70450 Seremban, Negeri Sembilan",
                phone: "Phone: 06-777 5678",
                hours: {
                    "Mon": "9:00 AM - 6:00 PM",
                    "Tue": "9:00 AM - 6:00 PM",
                    "Wed": "9:00 AM - 6:00 PM",
                    "Thu": "9:00 AM - 6:00 PM",
                    "Fri": "9:00 AM - 6:00 PM",
                    "Sat": "Closed",
                    "Sun": "Closed"
                },
                additionalInformation: {
                    rating: 4.2,
                    businessType: "Type of Business: Providing comprehensive waste management solutions with a focus on recycling various materials.",
                    contactPerson: "Contact: Mr. Tan",
                    email: "Email: ecogreen.waste@gmail.com",
                    coordinates: "2.6873089313750356, 101.98034816618812"
                }
            }
            
    ],
    "Pahang": [
        {
            name: "Sungai Karang Recycling Trading Sdn Bhd",
            address: "Lot 10102, Mukim, Jln Bypass Kuantan, 26100 Balok, Pahang",
            hours: {
                "Mon": "8:00 AM - 4:30 PM",
                "Tue": "8:00 AM - 4:30 PM",
                "Wed": "8:00 AM - 4:30 PM",
                "Thu": "8:00 AM - 4:30 PM",
                "Fri": "8:00 AM - 4:30 PM",
                "Sat": "8:00 AM - 4:30 PM",
                "Sun": "8:00 AM - 1:00 PM"
            },
            additionalInformation: {
                rating: 5.0,
                reviews: 6,
                materialsAccepted:["plastic", "paper","metal"],
                coordinates: "3.9261143143454023, 103.35189317968205"
            }
        },
        {
            name: "RE SHENG TRADING",
            address: "Lot 235, No.4, Jalan Industri 3/3d, Taman Perindustrian Temerloh, 28400 Mentakab, Pahang",
            phone: "012-983 8115",
            hours: {
                "Mon": "9:00 AM - 6:00 AM",
                "Tue": "9:00 AM - 6:00 AM",
                "Wed": "9:00 AM - 6:00 PM",
                "Thu": "9:00 AM - 6:00 PM",
                "Fri": "9:00 AM - 6:00 PM",
                "Sat": "9:00 AM - 5:30 PM",
                "Sun": "Closed"
            },
            additionalInformation: {
                rating: 4.3,
                reviews: 4,
                materialsAccepted:["plastic", "paper","metal"],
                coordinates:"3.448921043557655, 102.345908095024"
            }
        },
        {
            name: "RANGKAIAN TML 2 ENTERPRISE",
            address: "LOT 697 LEBUHRAYA KUANTAN - KEMAMAM MUKIM BESERAH LEBUHRAYA KUANTAN- KEMAMAM, 26100 Kuantan, Pahang",
            phone: "011-2572 7232",
            hours: {
                "Mon": "Open 24 hours",
                "Tue": "Open 24 hours",
                "Wed": "Open 24 hours",
                "Thu": "Open 24 hours",
                "Fri": "Open 24 hours",
                "Sat": "Open 24 hours",
                "Sun": "Open 24 hours"
            },
            additionalInformation: {
                rating: 4.0,
                reviews: 4,
                coordinates:"3.8897789960942317, 103.33780269502454"
            }
        },
        {
            name: "PT Waste Recycling Industry",
            address: "Mahkota Industrial Park, 13, Jalan IM 3/3, Bandar Indera Mahkota, 25200 Kuantan, Pahang",
            phone: "016-936 3439",
            hours: {
                "Mon": "8:00 AM - 6:00 PM",
                "Tue": "8:00 AM - 6:00 PM",
                "Wed": "8:00 AM - 6:00 PM",
                "Thu": "8:00 AM - 6:00 PM",
                "Fri": "8:00 AM - 6:00 PM",
                "Sat": "8:00 AM - 6:00 PM",
                "Sun": "Closed"
            },
            additionalInformation: {
                rating: 4.9,
                reviews: 106,
                materialsAccepted: ["paper", "metal", "cooking oil", "e-waste"],
                coordinates: "3.8167163911271174, 103.28937035269567"
            }
        },
        {
            name: "PL Metal Trading",
            address: "108, Jalan Industri Semambu 6, Kawasan Perindustrian Semambu, 25350 Kuantan, Pahang",
            phone: "012-915 3701",
            businessType: "Metal",
            hours: {},
            additionalInformation: {
                rating: 4.5,
                reviews: 6,
                materialsAccepted: ["metal"],
                coordinates:"3.8484209147104673, 103.32864392386007"
            }
        },
        {
            name: "Alam Damai Metal Sdn.Bhd.",
            address: "Lot 61427, Batu 8, Jalan Gambang, Kampung Batu Lapan, 26070 Kuantan, Pahang",
            phone: "013-232 3853",
            hours: {
                "Mon": "9:00 AM - 6:00 PM",
                "Tue": "9:00 AM - 6:00 PM",
                "Wed": "9:00 AM - 6:00 PM",
                "Thu": "9:00 AM - 6:00 PM",
                "Fri": "9:00 AM - 6:00 PM",
                "Sat": "9:00 AM - 5:30 PM",
                "Sun": "Closed"
            },
            additionalInformation: {
                rating: 4.0,
                reviews: 2,
                materialsAccepted: ["plastic", "paper", "metal"],
                businessType: "Type of Business: Metal",
                coordinates:"3.766677007537492, 103.22596592386"
            }
        }
    ], 
    "Perak" : [
        {
            name: "Seng Kong Recycle",
            address: "Kawasan Perindustrian Igb, Jln. Kuala Kangsar, 邮政编码: 31200, Perak, Ipoh",
            phone: "016-558 7700",
            hours: {
                "Mon": "9:00 AM - 5:30 PM",
                "Tue": "9:00 AM - 5:30 PM",
                "Wed": "9:00 AM - 5:30 PM",
                "Thu": "9:00 AM - 5:30 PM",
                "Fri": "9:00 AM - 5:30 PM",
                "Sat": "9:00 AM - 5:30 PM",
                "Sun": "Closed"
            },
            additionalInformation: {
                rating: 3.6,
                reviews: 7,
                materialsAccepted: ["paper"],
                coordinates:"4.657197868979866, 101.11709286619057"
            }
        },
        {
            name: "EKSP Recycle Sdn. Bhd. | Ipoh",
            address: "203077, Jalan Industri 2/1, Kawasan Perindustrian Gopeng, 31600 Gopeng, Perak",
            phone: "018-578 2813",
            hours: {
                "Mon": "8:30 AM - 5:30 PM",
                "Tue": "8:30 AM - 5:30 PM",
                "Wed": "8:30 AM - 5:30 PM",
                "Thu": "8:30 AM - 5:30 PM",
                "Fri": "8:30 AM - 5:30 PM",
                "Sat": "8:30 AM - 5:30 PM",
                "Sun": "Closed"
            },
            additionalInformation: {
                rating: 5.0,
                reviews: 4,
                materialsAccepted: ["plastic", "paper", "metal"],
                coordinates:"4.4948692079770725, 101.14502118153266"
            }
        },
        {
            name: "Kitaran Berjaya | Pusat Kitar Semula | Recycling Centre",
            address: "10, Jalan Tawas Baru 1, Taman Tasek Damai, 30010 Ipoh, Perak",
            phone: "05-292 4987",
            hours: {
                "Mon": "9:00 AM - 4:00 PM",
                "Tue": "9:00 AM - 4:00 PM",
                "Wed": "9:00 AM - 4:00 PM",
                "Thu": "9:00 AM - 4:00 PM",
                "Fri": "9:00 AM - 4:00 PM",
                "Sat": "9:00 AM - 1:00 PM",
                "Sun": "Closed"
            },
            additionalInformation: {
                rating: 5.0,
                reviews: 1,
                materialsAccepted: ["plastic", "paper", "metal", "e-waste"],
                coordinates: "4.652517988816404, 101.10488589502623"    
            }
        },
        {
            name: "Thowlee Recycle",
            address: "Lot 74, Jalan Chepor 11/7, Pusat Industrial Seramik, 31200 Chemor, Perak",
            phone: "05-201 5535",
            hours: {
                "Mon": "8:00 AM - 5:00 PM",
                "Tue": "8:00 AM - 5:00 PM",
                "Wed": "8:00 AM - 5:00 PM",
                "Thu": "8:00 AM - 5:00 PM",
                "Fri": "8:00 AM - 5:00 PM",
                "Sat": "8:00 AM - 5:00 PM",
                "Sun": "Closed"
            },
            additionalInformation: {
                areasServed: "Ipoh",
                materialsAccepted: ["tyre"],
                coordinates:"4.700252088040112, 101.09711059502632"
            }
        }
    ],
    "Perlis": [
        {
            name: "Drive Thru Recycle Centre (DTRC) Sena",
            address: "Pasar Awam Sena, Drive Thru Recycle Centre (DTRC, Kampung Sena, 01000 Kangar, Perlis",
            phone: null,
            hours: {
                "Mon": "9:00 AM - 3:00 PM",
                "Tue": "9:00 AM - 3:00 PM",
                "Wed": "9:00 AM - 3:00 PM",
                "Thu": "9:00 AM - 3:00 PM",
                "Fri": "9:00 AM - 11:30 AM",
                "Sat": "9:00 AM - 3:00 PM",
                "Sun": "Closed"
            },
            additionalInformation: {
                rating: 4.0,
                reviews: 3,
                type: "Recycling drop-off location",
                areasServed: "Kangar",
                businessType: null,
                contactPerson: null,
                email: null,
                coordinates: "6.436679232359702, 100.20101869503338"
            }
        },
        {
            name: "Tapak Pelupusan Sanitari, Rimba Mas, Perlis",
            address: "02450 Kangar, Perlis",
            phone: "04-582 2420",
            hours: {
                "Mon": "9:00 AM - 6:00 PM",
                "Tue": "9:00 AM - 6:00 PM",
                "Wed": "9:00 AM - 6:00 PM",
                "Thu": "9:00 AM - 6:00 PM",
                "Fri": "9:00 AM - 6:00 PM",
                "Sat": "9:00 AM - 6:00 PM",
                "Sun": "9:00 AM - 6:00 PM"
            },
            additionalInformation: {
                rating: 4.0,
                reviews: 1,
                type: "Garbage dump",
                areasServed: "Kangar",
                businessType: null,
                contactPerson: null,
                email: null,
                coordinates: "6.598604420116223, 100.27218713736289"
            }
        },
        {
            name: "Syarikat Kamatchi",
            address: "62, Jalan Raja Syed Saffi, Kampung Bintong, 01000 Kangar, Perlis",
            phone: "012-462 1271",
            hours: {
                "Mon": "9:00 AM - 12:00 AM",
                "Tue": "9:00 AM - 6:00 AM",
                "Wed": "Closed",
                "Thu": "9:00 AM - 12:00 AM",
                "Fri": "Closed",
                "Sat": "9:00 AM - 12:00 AM",
                "Sun": "9:00 AM - 6:00 AM"
            },
            additionalInformation: {
                rating: null,
                reviews: null,
                type: null,
                areasServed: null,
                businessType: null,
                contactPerson: null,
                email: null,
                coordinates: "6.440897254677144, 100.17822819503341"
            }
        },
        {
            name: "S.K.S.N ENTERPRISE",
            address: "33, Jalan Bahagia, Taman Bunga Padi, 01000 Kangar, Perlis",
            phone: "017-321 6343",
            hours: {
                "Mon": "Open 24 hours",
                "Tue": "Open 24 hours",
                "Wed": "Open 24 hours",
                "Thu": "Open 24 hours",
                "Fri": "Open 24 hours",
                "Sat": "Open 24 hours",
                "Sun": "Open 24 hours"
            },
            additionalInformation: {
                rating: null,
                reviews: null,
                materialsAccepted: ["paper" ,"metal", "and others"],
                type: null,
                areasServed: "Perlis and nearby areas",
                businessType: null,
                contactPerson: null,
                email: null,
                coordinates: "6.4439044103985585, 100.18157416619773"
            }
        },
        {
            name: "Iyan Maju Enterprise",
            address: "Lot 777, Kampung Kuala Perlis, Kawasan Perindustrian, 02000 Kuala Perlis, Perlis",
            phone: "019-571 0210",
            hours: {
                "Mon": "9:00 AM - 6:00 PM",
                "Tue": "9:00 AM - 6:00 PM",
                "Wed": "9:00 AM - 6:00 PM",
                "Thu": "9:00 AM - 6:00 PM",
                "Fri": "9:00 AM - 6:00 PM",
                "Sat": "9:00 AM - 6:00 PM",
                "Sun": "Closed"
            },
            additionalInformation: {
                rating: null,
                reviews: null,
                type: null,
                areasServed: null,
                businessType: "Metal Trading",
                contactPerson: null,
                email: null,
                coordinates: "6.387292980327881, 100.14146679503311"
            }
        }
    ],
    "Sabah": [
        {
            name: "Recycling Centre",
            address: "Taman Damai, 88300 Kota Kinabalu, Sabah",
            phone: null,
            hours: {
                "Mon": "10:00 AM - 5:00 PM",
                "Tue": "10:00 AM - 5:00 PM",
                "Wed": "10:00 AM - 5:00 PM",
                "Thu": "10:00 AM - 5:00 PM",
                "Fri": "10:00 AM - 5:00 PM",
                "Sat": "Closed",
                "Sun": "Closed"
            },
            additionalInformation: {
                rating: 4.5,
                reviews: 4,
                type: "Recycling center",
                areasServed: "Kota Kinabalu",
                businessType: null,
                contactPerson: null,
                email: null,
                coordinates: "5.969939564674201, 116.09356039503096"
            }
        },
        {
            name: "慈濟哥隆邦环保站 Tzu Chi Kolombong Recycling Centre",
            address: "Lot 6, Ground & 1st Floor, Harmony Industrial Estate, Kolombong, 88450 Kota Kinabalu, Sabah",
            phone: "088-381 779",
            hours: {
                "Mon": "Closed",
                "Tue": "9:00 AM - 1:30 PM",
                "Wed": "Closed",
                "Thu": "9:00 AM - 1:30 PM",
                "Fri": "Closed",
                "Sat": "9:00 AM - 1:30 PM",
                "Sun": "Closed"
            },
            additionalInformation: {
                rating: 4.4,
                reviews: 9,
                type: "Recycling center",
                areasServed: "Kota Kinabalu",
                businessType: null,
                contactPerson: null,
                email: null,
                coordinates: "5.98683842368889, 116.12707441037375"
            }
        },
        {
            name: "Gnc Recycle Sdn. Bhd.",
            address: "88400 Kota Kinabalu, Sabah",
            phone: "088-380 712",
            hours: {
                "Mon": "8:00 AM - 5:00 PM",
                "Tue": "8:00 AM - 5:00 PM",
                "Wed": "8:00 AM - 5:00 PM",
                "Thu": "8:00 AM - 5:00 PM",
                "Fri": "8:00 AM - 5:00 PM",
                "Sat": "8:00 AM - 5:00 PM",
                "Sun": "Closed"
            },
            additionalInformation: {
                rating: 3.4,
                reviews: 28,
                materialsAccepted:["paper", "plastic"],
                type: "Recycling center",
                areasServed: "Kota Kinabalu",
                businessType: null,
                contactPerson: null,
                email: null,
                coordinates: "5.999842529882873, 116.12648074578894"
            }
        },
        {
            name: "Prestige Recycle Technics Sdn Bhd",
            address: "LOT 1, CL015020138 JALAN SEBOR, OFF, Jln Lintas, Kolombong, 88450 Kota Kinabalu, Sabah",
            phone: "011-2672 2332",
            hours: {
                "Mon": "8:30 AM - 5:30 PM",
                "Tue": "8:30 AM - 5:30 PM",
                "Wed": "8:30 AM - 5:30 PM",
                "Thu": "8:30 AM - 5:30 PM",
                "Fri": "8:30 AM - 5:30 PM",
                "Sat": "Closed",
                "Sun": "Closed"
            },
            additionalInformation: {
                rating: 4.3,
                reviews: 15,
                materialsAccepted:["paper", "plastic", "aluminium","metal", "and recycle items"],
                type: "Recycling center",
                areasServed: "Kota Kinabalu",
                businessType: null,
                contactPerson: null,
                email: null,
                coordinates: "5.968663823352407, 116.11113669503096"
            }
        },
        {
            name: "TT Recycle sdn.bhd",
            address: "14755, Jalan Tuaran km 24,jalan tuaran telipok, 88450 Kota Kinabalu, Sabah",
            phone: "088-495 139",
            hours: {
                "Mon": "8:00 AM - 5:00 PM",
                "Tue": "8:00 AM - 5:00 PM",
                "Wed": "8:00 AM - 5:00 PM",
                "Thu": "8:00 AM - 5:00 PM",
                "Fri": "8:00 AM - 5:00 PM",
                "Sat": "8:00 AM - 5:00 PM",
                "Sun": "Closed"
            },
            additionalInformation: {
                rating: 4.9,
                reviews: 9,
                materialsAccepted:["paper", "plastic", "aluminium","metal"],
                type: "Recycling center",
                areasServed: "Tuaran",
                businessType: null,
                contactPerson: null,
                email: null,
                coordinates: "6.097975062027543, 116.20181899503174"
            }
        }
    ],
    "Sarawak": [
        {
            name: "Tzu Chi Sungai Apong Recycling Centre慈濟新漁村環保站",
            address: "57, Jalan Noakes, Sungai Apong, 93450 Kuching, Sarawak",
            phone: null,
            hours: {
                "Mon": "8:00 AM - 11:00 AM",
                "Tue": "Closed",
                "Wed": "8:00 AM - 11:00 AM",
                "Thu": "Closed",
                "Fri": "8:00 AM - 11:00 AM",
                "Sat": "Closed",
                "Sun": "Closed"
            },
            additionalInformation: {
                rating: 5.0,
                reviews: 3,
                materialsAccepted: ["paper", "plastic", "aluminium","metal", "clothes","e-waste"],
                type: "Recycling center",
                areasServed: "Kuching",
                businessType: null,
                contactPerson: null,
                email: null,
                coordinates: "1.5465470230882092, 110.38570499502488"
            }
        },
        {
            name: "Ling Recycle Trading Co.",
            address: "224, Jln Stephen Yong, Batu Kawa, 93250 Kuching, Sarawak",
            phone: null,
            hours: null,
            additionalInformation: {
                rating: 4.3,
                reviews: 9,
                type: "Recycling center",
                areasServed: "Kuching",
                businessType: null,
                contactPerson: null,
                email: null,
                coordinates: "1.498369448832622, 110.2929122373537"
            }
        },
        {
            name: "GC RECYLE SDN.BHD",
            address: "S/L 5) No. 34, Survey Lot 4691 Block 5 Matang Land District Workshop/Office Taman Pelangi Matang Batu 5 1, 2, Q309, Petra Jaya, 93050 Kuching, Sarawak",
            phone: "012-204 5776",
            hours: null,
            additionalInformation: {
                rating: 5.0,
                reviews: 1,
                materialsAccepted:["metal"],
                type: "Recycling center",
                areasServed: "Kuching",
                businessType: null,
                contactPerson: null,
                email: null,
                coordinates: null
            }
        },
        {
            name: "BORNEO RECYCLE",
            address: "Lot 954 Block 5 Sentah Segu Land District 16th Mile, Jalan Kuching - Serian, Road, 94200 Kuching, Sarawak",
            phone: "016-867 6999",
            hours: {
                "Mon": "7:30 AM - 5:00 PM",
                "Tue": "7:30 AM - 5:00 PM",
                "Wed": "7:30 AM - 5:00 PM",
                "Thu": "7:30 AM - 5:00 PM",
                "Fri": "7:30 AM - 5:00 PM",
                "Sat": "7:30 AM - 12:00 PM",
                "Sun": "Closed"
            },
            additionalInformation: {
                rating: 4.8,
                reviews: 4,
                type: "Recycling center",
                areasServed: "Kuching",
                businessType: null,
                contactPerson: null,
                email: null,
                coordinates: "1.3727361986245283, 110.39211392386096"
            }
        },
        {
            name: "Taman BDC Recycling Center",
            address: "Taman Bdc, 93350 Kuching, Sarawak",
            phone: null,
            hours: {
                "Mon": "10:00 AM - 4:00 PM",
                "Tue": "10:00 AM - 4:00 PM",
                "Wed": "10:00 AM - 4:00 PM",
                "Thu": "10:00 AM - 4:00 PM",
                "Fri": "10:00 AM - 4:00 PM",
                "Sat": "10:00 AM - 4:00 PM",
                "Sun": "10:00 AM - 4:00 PM"
            },
            additionalInformation: {
                rating: 5.0,
                reviews: 1,
                materialsAccepted: ["paper","aluminium","metal"],
                type: "Recycling center",
                areasServed: "Kuching",
                businessType: null,
                contactPerson: null,
                email: null,
                coordinates: "1.5065352984895954, 110.3603596950251"
            }
        },
        {
            name: "Golden Jumbo Recycle Sdn Bhd (Main Factory)",
            address: "Lot 1238, Block 8, Muara Tebas, Jalan Bako Demak Laut Indah, 5, Sejingkat, 93050 Kuching, Sarawak",
            phone: "082-496 858",
            hours: {
                "Mon": "8:00 AM - 6:00 PM",
                "Tue": "8:00 AM - 6:00 PM",
                "Wed": "8:00 AM - 6:00 PM",
                "Thu": "8:00 AM - 6:00 PM",
                "Fri": "8:00 AM - 6:00 PM",
                "Sat": "8:00 AM - 2:00 PM",
                "Sun": "Closed"
            },
            additionalInformation: {
                rating: 4.5,
                reviews: 8,
                materialsAccepted: ["plastic","metal","aluminium", "wire/cable"],
                type: "Recycling center",
                areasServed: "Kuching",
                businessType: null,
                contactPerson: null,
                email: null,
                coordinates: "1.5941846477677148, 110.43023439502484"
            }
        }
    ],

    "Selangor": [
        {
            name: "ERTH: Electronic Recycling Through Heroes (E-waste)",
            address: "Jalan Teknokrat 6 Ground Floor, G-3A, Kanvas Retail @ Prima 15, Cyberjaya, 63000 Cyberjaya, Selangor",
            phone: "Phone: 014-221 1446",
            hours: {
                "Mon": "10:00 AM – 10:00 PM",
                "Tue": "10:00 AM – 10:00 PM",
                "Wed": "10:00 AM – 10:00 PM",
                "Thu": "10:00 AM – 10:00 PM",
                "Fri": "10:00 AM – 10:00 PM",
                "Sat": "10:00 AM – 10:00 PM",
                "Sun": "10:00 AM – 10:00 PM"
            },
            additionalInformation: {
                rating: 5.0,
                materialsAccepted: ["e-waste"],
                reviews: "1.3K",
                type: "Waste Management Service in Cyberjaya",
                areasServed: "Serdang and nearby areas",
                appointments: "Appointments: [erth.app](https://erth.app)",
                services: "Services: Free Pickup Service - Authorized Collector by DoE. Recycle Laptops, CPU, Server, Printer. They Pay the Highest Market Rates with the Fastest Service.",
                coordinates:"2.913242782103121, 101.65525419502369"
            }
        },

        {
            name: "IPC Recycling & Buy-Back Centre",
            address: " IPC Shopping Centre, Ladies parking, Level P1, 2, Jalan PJU 7/2, Mutiara Damansara, 47800 Petaling Jaya, Selangor",
            phone: "Phone:  017-804 7033",
            hours: {
                "Mon": "08:00 AM – 10:00 PM",
                "Tue": "08:00 AM – 10:00 PM",
                "Wed": "08:00 AM – 10:00 PM",
                "Thu": "08:00 AM – 10:00 PM",
                "Fri": "08:00 AM – 10:00 PM",
                "Sat": "08:00 AM – 10:00 PM",
                "Sun": "08:00 AM – 10:00 PM"
            },
            additionalInformation: {
                rating: 4.3,
                materialsAccepted: ["plastic", "paper","metal","aluminium","clothes"],
                reviews: "89",
                coordinates:"3.1557372816942557, 101.6107329222834"
            }
        },

        {
            name: "Tzu Chi Kota Kemuning Recycling Education Centre",
            address: "Lot 719, Jalan Anggerik Vanilla, Kota Kemuning, 40460 Shah Alam, Selangor",
            phone: "Phone:  019-325 1209",
            hours: {
                "Mon": "Closed",
                "Tue": "Closed",
                "Wed": "Closed",
                "Thu": "09:30 AM – 11:30 PM",
                "Fri": "09:30 AM – 11:30 PM",
                "Sat": "09:30 AM – 11:30 PM",
                "Sun": "09:30 AM – 11:30 PM"
            },
            additionalInformation: {
                rating: 4.9,
                reviews: "16",
                coordinates:"3.0062192688375062, 101.53903549502375"
            }
        },

        {
            name: "Besi Buruk @ Scrap Metal R",
            address:"jln bk6f/3, Bandar Kinrara, 47180 Puchong, Selangor",
            phone: "016 281 0187",
            hours: {
                "Mon": "8:30 am - 6:30 pm",
                "Tue": "8:30 am - 6:30 pm",
                "Wed": "8:30 am - 6:30 pm",
                "Thu": "8:30 am - 6:30 pm",
                "Fri": "8:30 am - 6:30 pm",
                "Sat": "8:30 am - 6:30 pm",
                "Sun": "8:30 am - 6:30 pm"
                },
                additionalInformation: {
                    rating: 4.8,
                    materialsAccepted: ["metal", "plastic", "paper", "aluminium", "e-waste"],
                    coordinates:"3.0349090831629666, 101.6704187238594"
                }
            },
            
            {
                name: "Smart Lion Recycling Sdn Bhd",
                address: "1, Jalan USJ 7/3c, Usj 2, 47610 Subang Jaya, Selangor",
                phone: "Phone: 012-319 1719",
                hours: {
                    "Mon": "9:00 am - 7:00 pm",
                    "Tue": "9:00 am - 7:00 pm",
                    "Wed": "9:00 am - 7:00 pm",
                    "Thu": "9:00 am - 7:00 pm",
                    "Fri": "9:00 am - 7:00 pm",
                    "Sat": "9:00 am - 7:00 pm",
                    "Sun": "Closed"
                },
                additionalInformation: {
                rating: 4.7,
                materialsAccepted: ["paper", "plastic", "metal", "e-waste"],
                businessType: "Type of Business: We are specialised in the recycling of paper, plastics, metals, electronic items, etc. with more than 15 years of experience. We are purchasing all kinds of recyclable items with the hopes of saving the planet.",
                coordinates: "3.0487481788437214, 101.59374838153065"
                }
            },
    
    
    {
                name: "Paka Recycle Sdn. Bhd.",
                address: "No.7, Lot. No. 65402, Batu 6, Jalan Bukit Kemuning Sek. 34, 40460 Shah Alam, Selangor, Malaysia",
                phone: "Phone: +603 5161 3005, +603 5167 3018",
                hours: {
                    "Mon": "8:00 am - 7:00 pm",
                    "Tue": "8:00 am - 7:00 pm",
                    "Wed": "8:00 am - 7:00 pm",
                    "Thu": "8:00 am - 7:00 pm",
                    "Fri": "8:00 am - 7:00 pm",
                    "Sat": "8:00 am - 7:00 pm",
                    "Sun": "Closed"
                },
                additionalInformation: {
                    website: "Website: www.pakarecycle.com"
                },
                additionalInformation: {
                    rating: 4.0,
                    materialsAccepted: ["metal","e-waste", "paper","plastic", "newspaper", , "alumminium"],
                    email: "Email: pakarecycle@yahoo.com, pakarecycle14@gmail.com",
                    coordinates:"3.007946411032698, 101.51031526618807"   
                }
            }

    ],
    "Terengganu": [
        {
            name: "Anne Yasugy Trading AYT Metal",
            address: "Unnamed Road, 21040, 21040 Marang, Terengganu",
            phone: "019-985 1027",
            hours: {
                "Mon": "9:30 AM - 7:00 PM",
                "Tue": "9:30 AM - 7:00 PM",
                "Wed": "9:30 AM - 7:00 PM",
                "Thu": "9:30 AM - 7:00 PM",
                "Fri": "Closed",
                "Sat": "9:30 AM - 7:00 PM",
                "Sun": "9:30 AM - 7:00 PM"
            },
            additionalInformation: {
                rating: 4.7,
                reviews: 3,
                type: "Recycling center",
                areasServed: "Bukit Payong",
                businessType: null,
                contactPerson: null,
                email: null,
                coordinates: "5.148055909282065, 103.08815439502764"
            }
        },
        {
            name: "Terengganu Recycle",
            address: "Lot 3918 KM 33 Kawasan Perindustrian Ajil, Jalan Kuala Berang, Ajil, 21800 Hulu Terengganu, Terengganu",
            phone: "014-333 3128",
            hours: {
                "Mon": "8:30 AM - 6:30 PM",
                "Tue": "8:30 AM - 6:30 PM",
                "Wed": "8:30 AM - 6:30 PM",
                "Thu": "8:30 AM - 6:30 PM",
                "Fri": "Closed",
                "Sat": "8:30 AM - 6:30 PM",
                "Sun": "8:30 AM - 6:30 PM"
            },
            additionalInformation: {
                rating: 3.3,
                reviews: 3,
                materialsAccepted: ["paper", "plastic","metal", "clothes","e-waste"],
                type: "Recycling center",
                areasServed: "Ajil",
                businessType: null,
                contactPerson: null,
                email: null,
                coordinates: null
            }
        },
        {
            name: "Teras Laksmana Sdn Bhd( Kitar Semula, Recycle, Recycling Metal Scrap Yard/Besi Buruk BERLESEN",
            address: "2430, Jalan TF 4/8, 24000 Kemaman, Terengganu",
            phone: "09-858 1342",
            hours: {
                "Mon": "8:30 AM - 5:00 PM",
                "Tue": "8:30 AM - 5:00 PM",
                "Wed": "8:30 AM - 5:00 PM",
                "Thu": "8:30 AM - 5:00 PM",
                "Fri": "Closed",
                "Sat": "9:00 AM - 5:00 PM",
                "Sun": "8:30 AM - 5:00 PM"
            },
            additionalInformation: {
                rating: 4.1,
                reviews: 8,
                materialsAccepted:["metal"],
                type: "Recycling center",
                areasServed: "Chukai",
                businessType: null,
                contactPerson: null,
                email: null,
                coordinates: "4.20032499578371, 103.42097899502512"
            }
        },
        {
            name: "Rd Paper Gong Badak",
            address: "21300 Kuala Terengganu, Terengganu",
            phone: "013-932 2323",
            hours: {
                "Mon": "8:30 AM - 5:30 PM",
                "Tue": "8:30 AM - 5:30 PM",
                "Wed": "8:30 AM - 5:30 PM",
                "Thu": "8:30 AM - 5:30 PM",
                "Fri": "Closed",
                "Sat": "8:30 AM - 5:30 PM",
                "Sun": "8:30 AM - 5:30 PM"
            },
            additionalInformation: {
                rating: 3.4,
                reviews: 18,
                materialsAccepted: ["paper"],
                type: "Recycling center",
                areasServed: "Kuala Terengganu",
                businessType: null,
                contactPerson: null,
                email: null,
                coordinates: "5.391208101478906, 103.07113127968606"
            }
        },
        {
            name: "B.M.L. Enterprise (Kedai Besi Buruk)",
            address: "PT 2371 K, Kawasan Perindustrian Chendering, 21080 Kuala Terengganu, Terengganu",
            phone: "09-617 3807",
            hours: {
                "Mon": "9:00 AM - 6:00 PM",
                "Tue": "9:00 AM - 6:00 PM",
                "Wed": "9:00 AM - 6:00 PM",
                "Thu": "9:00 AM - 6:00 PM",
                "Fri": "Closed",
                "Sat": "9:00 AM - 6:00 PM",
                "Sun": "9:00 AM - 6:00 PM"
            },
            additionalInformation: {
                rating: 4.0,
                reviews: 12,
                materialsAccepted: ["metal"],
                type: "Recycling center",
                areasServed: "Kuala Terengganu",
                businessType: null,
                contactPerson: null,
                email: null,
                coordinates: "5.268166294720123, 103.16034289502812"
            }
        }
    ],
              
};

// Set the default value of the ratingSelector to "none"
document.getElementById("ratingSelector").value = "none";

// Add an event listener to the stateSelector to trigger the function when a state is selected
document.getElementById("stateSelector").addEventListener("change", showRecyclingCentersByStateAndMaterialAndRating);

function showRecyclingCentersByStateAndMaterialAndRating() {
    var stateSelector = document.getElementById("stateSelector");
    var selectedState = stateSelector.value;

    // Retrieve the selected rating from the ratingSelector inside the function
    var ratingSelector = document.getElementById("ratingSelector");
    var selectedRating = ratingSelector.value;

    // Retrieve the selected material
    var materialSelector = document.getElementById("materialSelector");
    var selectedMaterial = materialSelector.value.toLowerCase();

    console.log("Selected State:", selectedState);
    console.log("Selected Rating:", selectedRating);
    console.log("Selected Material:", selectedMaterial);

    var recyclingCentersList = document.getElementById("recyclingCentersList");

    // Clear the previous list
    recyclingCentersList.innerHTML = "";

    // Convert selectedRating to a number
    var numericSelectedRating = parseFloat(selectedRating);

    // Check if the selected state exists in the dictionary
    if (stateRecyclingCenters[selectedState]) {
        var centersInSelectedState = stateRecyclingCenters[selectedState];

        // Loop through each recycling center in the selected state
        for (var i = 0; i < centersInSelectedState.length; i++) {
            var center = centersInSelectedState[i];

            // Check for material match
            var materialMatch = selectedMaterial === "all" || (center.additionalInformation.materialsAccepted && center.additionalInformation.materialsAccepted.includes(selectedMaterial));

            // Convert selectedRating to a number
            // var numericSelectedRating = parseFloat(selectedRating);

            // Check if the rating matches the selected rating range
            if (
                materialMatch &&
                (
                    (selectedRating === "none") ||
                    (numericSelectedRating === parseFloat(center.additionalInformation.rating)) ||
                    (numericSelectedRating === 5 && parseFloat(center.additionalInformation.rating) === 5) ||
                    (numericSelectedRating >= 4.0 && numericSelectedRating < 5.0 && parseFloat(center.additionalInformation.rating) >= 4.0 && parseFloat(center.additionalInformation.rating) < 5.0) ||
                    (numericSelectedRating >= 3.0 && numericSelectedRating < 4.0 && parseFloat(center.additionalInformation.rating) >= 3.0 && parseFloat(center.additionalInformation.rating) < 4.0) ||
                    (numericSelectedRating >= 2.0 && numericSelectedRating < 3.0 && parseFloat(center.additionalInformation.rating) >= 2.0 && parseFloat(center.additionalInformation.rating) < 3.0) ||
                    (numericSelectedRating >= 1.0 && numericSelectedRating < 2.0 && parseFloat(center.additionalInformation.rating) >= 1.0 && parseFloat(center.additionalInformation.rating) < 2.0)
                )
            ) {
                // Create a card for each recycling center
                var card = createRecyclingCenterCard(center);

                // Append the card to the list of recycling centers
                recyclingCentersList.appendChild(card);
            }
        }

        if (recyclingCentersList.children.length === 0) {
            // Display a message if no recycling centers match the criteria
            recyclingCentersList.innerHTML = "No recycling centers found for the selected state, material, and rating.";
        }
    } else {
        // Display a message if the selected state has no recycling centers
        recyclingCentersList.innerHTML = "No recycling centers found for the selected state.";
    }
}

// Function to create a card for each recycling center
function createRecyclingCenterCard(recyclingCenter) {
    const card = document.createElement("div");
    card.classList.add("recycling-center-card");

     // Apply gradient background
     card.style.background = "linear-gradient(to bottom, #b7d9c2, #a5c3b9)";;


    const centerName = document.createElement("div");
    centerName.classList.add("center-name");
    centerName.textContent = recyclingCenter.name;

    const centerDetails = document.createElement("div");
    centerDetails.classList.add("center-details");

    // Add basic details of the recycling center to the card
    centerDetails.innerHTML =
        "<strong>Address:</strong> " + recyclingCenter.address + "<br>" +
        "<strong>Phone:</strong> " + (recyclingCenter.phone ? recyclingCenter.phone : "Not specified") + "<br>";

          // Add Google Maps link
     if (recyclingCenter.additionalInformation.coordinates) {
        // Log coordinates to console for debugging
        console.log("Coordinates:", recyclingCenter.additionalInformation.coordinates);

        centerDetails.innerHTML +=
            "<strong>Location:</strong> <a href='https://www.google.com/maps?q=" + recyclingCenter.additionalInformation.coordinates + "' target='_blank'>View on Google Maps</a><br>";
    }

    // Add additional details
    if (recyclingCenter.additionalInformation) {
        centerDetails.innerHTML +=
            "<strong>Areas Served:</strong> " + (recyclingCenter.additionalInformation.areasServed ? recyclingCenter.additionalInformation.areasServed : "Not specified") + "<br>" +
            "<strong>Material Accepted:</strong> " + (recyclingCenter.additionalInformation.materialsAccepted ? recyclingCenter.additionalInformation.materialsAccepted : "Not specified") + "<br>" +
            "<strong>Rating:</strong> " + (recyclingCenter.additionalInformation.rating ? recyclingCenter.additionalInformation.rating : "Not rated") + "<br>" +
            "<strong>Reviews:</strong> " + (recyclingCenter.additionalInformation.reviews ? recyclingCenter.additionalInformation.reviews : "No reviews") + "<br>" +
            "<strong>Type:</strong> " + (recyclingCenter.additionalInformation.type ? recyclingCenter.additionalInformation.type : "Not specified") + "<br>" +
            "<strong>Services:</strong> " + (recyclingCenter.additionalInformation.services ? recyclingCenter.additionalInformation.services : "Not specified") + "<br>" +
            "<strong>Appointments:</strong> " + (recyclingCenter.additionalInformation.appointments ? recyclingCenter.additionalInformation.appointments : "Not specified") + "<br>";

            
        
    }

   

    // Check if the recycling center has hours information
    if (recyclingCenter.hours) {
        // Add hours information to the card
        centerDetails.innerHTML += "<strong>Operating Hours:</strong><br>";

        // Loop through each day in the hours information
        for (var day in recyclingCenter.hours) {
            centerDetails.innerHTML +=
                "<strong>" + day + ":</strong> " + recyclingCenter.hours[day] + "<br>";
        }
    }

    // Append the basic details and additional details to the card
    card.appendChild(centerName);
    card.appendChild(centerDetails);

    return card;
}
