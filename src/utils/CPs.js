const cps = [
    {
      id: 1,
      name: "Ravi Malhotra",
      email: "ravi.malhotra@example.com",
      phone: "+91 98765 43210",
      company: "Malhotra Realty",
      location: "Indore, MP",
      status: "Active",
      joinedOn: "2025-01-15"
    },
    {
      id: 2,
      name: "Kavita Jain",
      email: "kavita.jain@example.com",
      phone: "+91 91234 56789",
      company: "Jain Property Services",
      location: "Bhopal, MP",
      status: "Inactive",
      joinedOn: "2024-11-05"
    },
    {
      id: 3,
      name: "Sunil Chauhan",
      email: "sunil.chauhan@example.com",
      phone: "+91 99876 54321",
      company: "Chauhan Estates",
      location: "Ujjain, MP",
      status: "Active",
      joinedOn: "2025-03-10"
    },
    {
      id: 4,
      name: "Pooja Thakur",
      email: "pooja.thakur@example.com",
      phone: "+91 97654 32109",
      company: "Thakur Homes",
      location: "Indore, MP",
      status: "Inactive",
      joinedOn: "2023-12-01"
    },
    {
      id: 5,
      name: "Amitabh Khanna",
      email: "amitabh.khanna@example.com",
      phone: "+91 93456 78901",
      company: "Khanna Group",
      location: "Bhopal, MP",
      status: "Active",
      joinedOn: "2025-06-25"
    },
    {
      id: 6,
      name: "Neha Verma",
      email: "neha.verma@example.com",
      phone: "+91 98765 12121",
      company: "Dream Homes",
      location: "Ujjain, MP",
      status: "Active",
      joinedOn: "2024-08-17"
    },
    {
      id: 7,
      name: "Ankit Sharma",
      email: "ankit.sharma@example.com",
      phone: "+91 99887 76543",
      company: "Skyline Realty",
      location: "Indore, MP",
      status: "Inactive",
      joinedOn: "2023-10-10"
    },
    {
      id: 8,
      name: "Divya Joshi",
      email: "divya.joshi@example.com",
      phone: "+91 92345 67890",
      company: "Golden Properties",
      location: "Ratlam, MP",
      status: "Active",
      joinedOn: "2025-02-02"
    },
    {
      id: 9,
      name: "Manish Rathi",
      email: "manish.rathi@example.com",
      phone: "+91 96543 23456",
      company: "Elite Estates",
      location: "Bhopal, MP",
      status: "Active",
      joinedOn: "2024-07-09"
    },
    {
      id: 10,
      name: "Anjali Kumar",
      email: "anjali.kumar@example.com",
      phone: "+91 97653 11223",
      company: "Property Connect",
      location: "Dewas, MP",
      status: "Inactive",
      joinedOn: "2023-11-22"
    },
    {
      id: 11,
      name: "Sandeep Mehta",
      email: "sandeep.mehta@example.com",
      phone: "+91 97890 45678",
      company: "Malhotra Realty",
      location: "Indore, MP",
      status: "Active",
      joinedOn: "2024-05-14"
    },
    {
      id: 12,
      name: "Ritika Desai",
      email: "ritika.desai@example.com",
      phone: "+91 90123 12345",
      company: "Jain Property Services",
      location: "Bhopal, MP",
      status: "Active",
      joinedOn: "2024-12-30"
    },
    {
      id: 13,
      name: "Nikhil Tripathi",
      email: "nikhil.tripathi@example.com",
      phone: "+91 99888 99999",
      company: "Skyline Realty",
      location: "Ratlam, MP",
      status: "Inactive",
      joinedOn: "2023-09-01"
    },
    {
      id: 14,
      name: "Swati Dubey",
      email: "swati.dubey@example.com",
      phone: "+91 98876 54321",
      company: "Golden Properties",
      location: "Ujjain, MP",
      status: "Active",
      joinedOn: "2025-04-11"
    },
    {
      id: 15,
      name: "Arjun Patel",
      email: "arjun.patel@example.com",
      phone: "+91 96567 32100",
      company: "Thakur Homes",
      location: "Indore, MP",
      status: "Inactive",
      joinedOn: "2023-10-20"
    },
    {
      id: 16,
      name: "Sneha Kapoor",
      email: "sneha.kapoor@example.com",
      phone: "+91 91234 89012",
      company: "Dream Homes",
      location: "Dewas, MP",
      status: "Active",
      joinedOn: "2024-02-07"
    },
    {
      id: 17,
      name: "Vikram Nair",
      email: "vikram.nair@example.com",
      phone: "+91 93456 88888",
      company: "Elite Estates",
      location: "Ratlam, MP",
      status: "Inactive",
      joinedOn: "2023-12-15"
    },
    {
      id: 18,
      name: "Meena Bansal",
      email: "meena.bansal@example.com",
      phone: "+91 98760 10203",
      company: "Property Connect",
      location: "Bhopal, MP",
      status: "Active",
      joinedOn: "2025-06-03"
    },
    {
      id: 19,
      name: "Rakesh Pandey",
      email: "rakesh.pandey@example.com",
      phone: "+91 96780 45678",
      company: "Khanna Group",
      location: "Ujjain, MP",
      status: "Active",
      joinedOn: "2024-03-30"
    },
    {
      id: 20,
      name: "Priya Rao",
      email: "priya.rao@example.com",
      phone: "+91 97654 20202",
      company: "Chauhan Estates",
      location: "Indore, MP",
      status: "Inactive",
      joinedOn: "2023-08-18"
    },
    {
      id: 21,
      name: "Deepak Malhotra",
      email: "deepak.malhotra@example.com",
      phone: "+91 99999 12345",
      company: "Malhotra Realty",
      location: "Ratlam, MP",
      status: "Active",
      joinedOn: "2025-07-01"
    },
    {
      id: 22,
      name: "Nisha Jain",
      email: "nisha.jain@example.com",
      phone: "+91 91234 99999",
      company: "Jain Property Services",
      location: "Bhopal, MP",
      status: "Inactive",
      joinedOn: "2023-09-25"
    },
    {
      id: 23,
      name: "Karan Thakur",
      email: "karan.thakur@example.com",
      phone: "+91 98654 55555",
      company: "Thakur Homes",
      location: "Indore, MP",
      status: "Active",
      joinedOn: "2024-01-12"
    },
    {
      id: 24,
      name: "Isha Khanna",
      email: "isha.khanna@example.com",
      phone: "+91 93210 98765",
      company: "Khanna Group",
      location: "Ujjain, MP",
      status: "Active",
      joinedOn: "2025-03-05"
    },
    {
      id: 25,
      name: "Yogesh Sharma",
      email: "yogesh.sharma@example.com",
      phone: "+91 90123 45678",
      company: "Skyline Realty",
      location: "Dewas, MP",
      status: "Inactive",
      joinedOn: "2024-10-28"
    },
    {
      id: 26,
      name: "Sonal Joshi",
      email: "sonal.joshi@example.com",
      phone: "+91 97876 23456",
      company: "Golden Properties",
      location: "Indore, MP",
      status: "Active",
      joinedOn: "2025-02-19"
    },
    {
      id: 27,
      name: "Raj Rathi",
      email: "raj.rathi@example.com",
      phone: "+91 91111 22222",
      company: "Elite Estates",
      location: "Ratlam, MP",
      status: "Inactive",
      joinedOn: "2023-07-11"
    },
    {
      id: 28,
      name: "Komal Kumar",
      email: "komal.kumar@example.com",
      phone: "+91 98888 12121",
      company: "Property Connect",
      location: "Bhopal, MP",
      status: "Active",
      joinedOn: "2024-06-23"
    },
    {
      id: 29,
      name: "Harshit Desai",
      email: "harshit.desai@example.com",
      phone: "+91 93333 44444",
      company: "Dream Homes",
      location: "Indore, MP",
      status: "Inactive",
      joinedOn: "2023-10-30"
    },
    {
      id: 30,
      name: "Simran Tripathi",
      email: "simran.tripathi@example.com",
      phone: "+91 99887 77777",
      company: "Chauhan Estates",
      location: "Ujjain, MP",
      status: "Active",
      joinedOn: "2024-12-10"
    }
  ];
  
  export default cps;
  