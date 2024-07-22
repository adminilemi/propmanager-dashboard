import proImage from '@/assets/propertyImage.png';
import Profile from './DashboardComps/SettingsComps/Profile/Profile';
import MyAccount from './DashboardComps/SettingsComps/MyAccount/MyAccount';
import MyNotifications from './DashboardComps/SettingsComps/MyNotifications/MyNotifications';
import allState from './nigeria-state-and-lgas.json';
import Due from '@/assets/due.png';
import Active from '@/assets/active.png';
import All from '@/assets/all.png';
import Chat from '@/assets/chat.png';
import ListingStats from './DashboardComps/LeadsComp/ListingStats';
import LeadsComp from './DashboardComps/LeadsComp/LeadsComp';
import ClientRquest from './DashboardComps/LeadsComp/ClientRequest';
import LeadsStats from './DashboardComps/LeadsComp/LeadsStat';
import AllListing from './DashboardComps/ListingComps/AllListing';
import OtherListings from './DashboardComps/ListingComps/OtherListing';
import {
  ApartmentIcon,
  DormIcon,
  HomeIcon,
  ShortletIcon,
  TownIcon,
} from '@/SVGs/SVGsExport';

export const propertiesData = [
  {
    id: 1,
    title: 'Palm Harbor',
    price: 2095,
    location: '2699 Opic Abeokuta, Ogun',
    status: 'Active',
    bed: 3,
    bathroom: 4,
    sqrmeter: '5x7 m²',
    properties: 56,
    yearBuilt: 2019,
    tenants: 8,
    request: 12,
    imageUrl: proImage,
    description:
      'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa street in the Palm Harbor neighborhood of Texas.',
    equipments: [
      'Fitted Kitchen',
      'Garden',
      'Stepless Access',
      'Suitable for flat sharing',
      'Guest Toilet',
    ],
  },
  {
    id: 2,
    title: 'Beverly Springfield',
    price: 2795,
    location: '2699 Opic Abeokuta, Ogun',
    status: 'Active',
    bed: 3,
    bathroom: 4,
    sqrmeter: '5x7 m²',
    properties: 46,
    yearBuilt: 1999,
    tenants: 12,
    request: 12,
    imageUrl: proImage,
    description:
      'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa street in the Beverly Springfield neighborhood of Texas.',
    equipments: [
      'Fitted Kitchen',
      'Garden',
      'Stepless Access',
      'Suitable for flat sharing',
      'Guest Toilet',
    ],
  },
  {
    id: 3,
    title: 'Faulkner Ave',
    price: 4095,
    location: '2699 Opic Abeokuta, Ogun',
    status: 'Active',
    bed: 3,
    bathroom: 4,
    sqrmeter: '5x7 m²',
    properties: 23,
    yearBuilt: 2023,
    tenants: 12,
    request: 12,
    imageUrl: proImage,
    description:
      'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa street in the Beverly Springfield neighborhood of Texas.',
    equipments: [
      'Fitted Kitchen',
      'Garden',
      'Stepless Access',
      'Suitable for flat sharing',
      'Guest Toilet',
    ],
  },
  {
    id: 4,
    title: 'St. Crystal',
    price: 1095,
    location: '2699 Opic Abeokuta, Ogun',
    status: 'Active',
    bed: 3,
    bathroom: 4,
    sqrmeter: '5x7 m²',
    properties: 21,
    yearBuilt: 2020,
    tenants: 12,
    request: 19,
    imageUrl: proImage,
    description:
      'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa street in the Beverly Springfield neighborhood of Texas.',
    equipments: [
      'Fitted Kitchen',
      'Garden',
      'Stepless Access',
      'Suitable for flat sharing',
      'Guest Toilet',
    ],
  },
  {
    id: 5,
    title: 'Cove Red',
    price: 3095,
    location: '2699 Opic Abeokuta, Ogun',
    status: 'Archive',
    bed: 3,
    bathroom: 4,
    sqrmeter: '5x7 m²',
    properties: 16,
    yearBuilt: 2012,
    tenants: 10,
    request: 11,
    imageUrl: proImage,
    description:
      'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa street in the Beverly Springfield neighborhood of Texas.',
    equipments: [
      'Fitted Kitchen',
      'Garden',
      'Stepless Access',
      'Suitable for flat sharing',
      'Guest Toilet',
    ],
  },
  {
    id: 6,
    title: 'The Old Steele',
    price: 2695,
    location: '2699 Opic Abeokuta, Ogun',
    status: 'Maintenance',
    bed: 3,
    bathroom: 4,
    sqrmeter: '5x7 m²',
    properties: 46,
    yearBuilt: 2012,
    tenants: 12,
    request: 12,
    imageUrl: proImage,
    description:
      'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa street in the Beverly Springfield neighborhood of Texas.',
    equipments: [
      'Fitted Kitchen',
      'Garden',
      'Stepless Access',
      'Suitable for flat sharing',
      'Guest Toilet',
    ],
  },
  {
    id: 7,
    title: 'Bourdillion ',
    price: 2695,
    location: '2699 Opic Abeokuta, Ogun',
    status: 'Vacant',
    bed: 3,
    bathroom: 4,
    sqrmeter: '5x7 m²',
    properties: 26,
    yearBuilt: 2013,
    tenants: 9,
    request: 90,
    imageUrl: proImage,
    description:
      'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa street in the Beverly Springfield neighborhood of Texas.',
    equipments: [
      'Fitted Kitchen',
      'Garden',
      'Stepless Access',
      'Suitable for flat sharing',
      'Guest Toilet',
    ],
  },
  {
    id: 8,
    title: 'Agbabiaka Estate',
    price: 2695,
    location: '2699 Opic Abeokuta, Ogun',
    status: 'Request',
    bed: 3,
    bathroom: 4,
    sqrmeter: '5x7 m²',
    properties: 42,
    yearBuilt: 2017,
    tenants: 1,
    request: 2,
    imageUrl: proImage,
    description:
      'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa street in the Beverly Springfield neighborhood of Texas.',
    equipments: [
      'Fitted Kitchen',
      'Garden',
      'Stepless Access',
      'Suitable for flat sharing',
      'Guest Toilet',
    ],
  },
  {
    id: 9,
    title: 'Owode Onirin Estate',
    price: 2695,
    location: '2699 Opic Abeokuta, Ogun',
    status: 'Active',
    bed: 3,
    bathroom: 4,
    sqrmeter: '5x7 m²',
    properties: 46,
    yearBuilt: 2012,
    tenants: 12,
    request: 12,
    imageUrl: proImage,
    description:
      'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa street in the Beverly Springfield neighborhood of Texas.',
    equipments: [
      'Fitted Kitchen',
      'Garden',
      'Stepless Access',
      'Suitable for flat sharing',
      'Guest Toilet',
    ],
  },
  {
    id: 10,
    title: 'Alagbole Drive',
    price: 2695,
    location: '2699 Opic Abeokuta, Ogun',
    status: 'Occupied',
    bed: 3,
    bathroom: 4,
    sqrmeter: '5x7 m²',
    properties: 26,
    yearBuilt: 2014,
    tenants: 3,
    request: 15,
    imageUrl: proImage,
    description:
      'Check out that Custom Backyard Entertaining space! 3237sqft, 4 Bedrooms, 2 Bathrooms house on a Lake Villa street in the Beverly Springfield neighborhood of Texas.',
    equipments: [
      'Fitted Kitchen',
      'Garden',
      'Stepless Access',
      'Suitable for flat sharing',
      'Guest Toilet',
    ],
  },
];

export const nigeriaStates = [
  { name: 'Abia', capital: 'Umuahia', region: 'South East' },
  { name: 'Adamawa', capital: 'Yola', region: 'North East' },
  { name: 'Akwa Ibom', capital: 'Uyo', region: 'South South' },
  { name: 'Anambra', capital: 'Awka', region: 'South East' },
  { name: 'Bauchi', capital: 'Bauchi', region: 'North East' },
  { name: 'Bayelsa', capital: 'Yenagoa', region: 'South South' },
  { name: 'Benue', capital: 'Makurdi', region: 'North Central' },
  { name: 'Borno', capital: 'Maiduguri', region: 'North East' },
  { name: 'Cross River', capital: 'Calabar', region: 'South South' },
  { name: 'Delta', capital: 'Asaba', region: 'South South' },
  { name: 'Ebonyi', capital: 'Abakaliki', region: 'South East' },
  { name: 'Edo', capital: 'Benin City', region: 'South South' },
  { name: 'Ekiti', capital: 'Ado-Ekiti', region: 'South West' },
  { name: 'Enugu', capital: 'Enugu', region: 'South East' },
  { name: 'Gombe', capital: 'Gombe', region: 'North East' },
  { name: 'Imo', capital: 'Owerri', region: 'South East' },
  { name: 'Jigawa', capital: 'Dutse', region: 'North West' },
  { name: 'Kaduna', capital: 'Kaduna', region: 'North West' },
  { name: 'Kano', capital: 'Kano', region: 'North West' },
  { name: 'Katsina', capital: 'Katsina', region: 'North West' },
  { name: 'Kebbi', capital: 'Birnin Kebbi', region: 'North West' },
  { name: 'Kogi', capital: 'Lokoja', region: 'North Central' },
  { name: 'Kwara', capital: 'Ilorin', region: 'North Central' },
  { name: 'Lagos', capital: 'Ikeja', region: 'South West' },
  { name: 'Nasarawa', capital: 'Lafia', region: 'North Central' },
  { name: 'Niger', capital: 'Minna', region: 'North Central' },
  { name: 'Ogun', capital: 'Abeokuta', region: 'South West' },
  { name: 'Ondo', capital: 'Akure', region: 'South West' },
  { name: 'Osun', capital: 'Osogbo', region: 'South West' },
  { name: 'Oyo', capital: 'Ibadan', region: 'South West' },
  { name: 'Plateau', capital: 'Jos', region: 'North Central' },
  { name: 'Rivers', capital: 'Port Harcourt', region: 'South South' },
  { name: 'Sokoto', capital: 'Sokoto', region: 'North West' },
  { name: 'Taraba', capital: 'Jalingo', region: 'North East' },
  { name: 'Yobe', capital: 'Damaturu', region: 'North East' },
  { name: 'Zamfara', capital: 'Gusau', region: 'North West' },
];

export const Inputs = (val, state, lga) => {
  return [
    {
      id: 'Property_Name',
      type: 'text',
      label: 'Property Name',
      value: val?.Property_Name,
      placeholder: 'Enter property name or estate name',
      required: false,
    },
    {
      id: 'YearBuilt',
      label: 'Year Built',
      type: 'number',
      value: val?.YearBuilt,
      placeholder: 'Enter Year Built',
      required: true,
    },
    {
      id: 'Property_Category',
      type: 'text',
      label: 'Property Purpose',
      value: val?.Property_Category,
      placeholder: 'Select purpose of this listing',
      options: propertyCategories,
      required: false,
    },

    {
      id: 'StreetAddress',
      type: 'text',
      label: 'Street Address',
      value: val?.StreetAddress,
      placeholder: 'Enter Street Address',
      required: true,
    },
    {
      id: 'UnitNumber',
      type: 'text',
      label: 'Unit Number',
      value: val?.UnitNumber,
      placeholder: 'Enter Unit Number',
      required: true,
    },
    {
      id: 'State',
      label: 'State',
      value: val?.State,
      placeholder: 'Select state',
      options: state,
      required: true,
    },
    {
      id: 'City',
      label: 'City',
      value: val?.City,
      placeholder: 'Select LGA',
      options: lga,
      required: true,
    },
    {
      id: 'ElectricityBand',
      type: 'text',
      label: 'Electricity Band',
      value: val?.ElectricityBand,
      placeholder: 'Select Electricity Band',
      options: ['Band A', 'Band B', 'Band C', 'Band D'],
      required: true,
    },
  ];
};

export const OnboardingInputs = (val, getLga) => {
  return [
    {
      id: 'CompanyName',
      type: 'text',
      label: 'Business Name',
      value: val.CompanyName,
      placeholder: 'Enter business name ',
    },
    {
      id: 'Typeoforganisation',
      type: 'text',
      label: 'Type of Organization',
      value: val.Typeoforganisation,
      placeholder: 'Enter Type of Organization',
    },
    {
      id: 'WhatsappNumber',
      type: 'tel',
      label: 'Whatsapp number',
      value: val.WhatsappNumber,
      placeholder: 'Enter whatsapp number',
    },
    {
      id: 'OfficeAddress',
      label: 'Office Address',
      type: 'text',
      value: val.OfficeAddress,
      placeholder: 'Enter business address',
    },
    {
      id: 'State',
      label: 'State',
      value: val.State,
      placeholder: 'Select state',
      options: allState,
      keyValue: 'state',
    },
    {
      id: 'LGA',
      type: 'text',
      label: 'LGA',
      value: val.LGA,
      placeholder: 'Select LGA',
      options: getLga,
    },
  ];
};

export const propertyCategories = [
  {
    id: 2,
    title: 'Rent',
  },
  {
    id: 3,
    title: 'Sell',
  },
  // {
  //   id: 4,
  //   title: 'Buy',
  // },
  {
    id: 5,
    title: 'Shortlet',
  },
];

export const paymentType = [
  {
    id: 1,
    title: 'Monthly',
  },
  {
    id: 2,
    title: 'Yearly',
  },
  {
    id: 3,
    title: 'Daily',
  },
  {
    id: 4,
    title: 'SQM',
  },
];
export const propertyType = [
  {
    id: 1,
    title: 'Home',
    icon: <HomeIcon />,
  },
  {
    id: 2,
    title: 'Shortlets',
    icon: <ShortletIcon />,
  },
  {
    id: 3,
    title: 'Apartment',
    icon: <ApartmentIcon />,
  },
  {
    id: 4,
    title: 'Town House',
    icon: <TownIcon />,
  },
  {
    id: 5,
    title: 'Dorm / Room / Student housing',
    icon: <DormIcon />,
  },
  {
    id: 6,
    title: 'Others',
    icon: <DormIcon />,
  },
];

export const propertySubType = [
  {
    id: 1,
    title: 'Blocks of Flats',
    icon: <HomeIcon />,
  },
  {
    id: 2,
    title: 'Detached Bungalow',
    icon: <ShortletIcon />,
  },
  {
    id: 3,
    title: 'Detached Duplex',
    icon: <ApartmentIcon />,
  },
  {
    id: 4,
    title: 'Semi-Detached Bungalow',
    icon: <TownIcon />,
  },
  {
    id: 5,
    title: 'Semi-Detached Duplex',
    icon: <DormIcon />,
  },
  {
    id: 6,
    title: 'Terraced Bungalow',
    icon: <DormIcon />,
  },
];
// export const propertySubType = [
//   {
//     id: 1,
//     title: 'Shop',
//   },
//   {
//     id: 2,
//     title: 'Office space',
//   },
//   {
//     id: 3,
//     title: 'Flats and apartments',
//   },
//   {
//     id: 4,
//     title: 'Lands',
//   },
//   {
//     id: 5,
//     title: 'Semi detached bungalow',
//   },
//   {
//     id: 6,
//     title: 'Semi detached duplex',
//   },
//   {
//     id: 7,
//     title: 'Co-working space',
//   },
//   {
//     id: 8,
//     title: 'Detached bungalow',
//   },
//   {
//     id: 9,
//     title: 'Warehouse',
//   },
//   {
//     id: 10,
//     title: 'Shop in a mall',
//   },
//   {
//     id: 11,
//     title: 'Self contain',
//   },
//   {
//     id: 12,
//     title: 'Mini flats',
//   },
//   {
//     id: 13,
//     title: 'Detached duplex',
//   },
//   {
//     id: 14,
//     title: 'Houses',
//   },
//   {
//     id: 15,
//     title: 'Terraced bungalow',
//   },
//   {
//     id: 16,
//     title: 'Commercial properties',
//   },
//   {
//     id: 17,
//     title: 'Terraced duplex',
//   },
// ];

export const maxPrice = [
  { title: '500,000', value: 500000 },
  { title: '600,000', value: 600000 },
  { title: '700,000', value: 700000 },
  { title: '800,000', value: 800000 },
  { title: '900,000', value: 900000 },
  { title: '1 million', value: 1000000 },
  { title: '2 million', value: 2000000 },
  { title: '3 Millon', value: 3000000 },
  { title: '5 Million', value: 5000000 },
  { title: '10 Million', value: 10000000 },
  { title: '20 Million', value: 20000000 },
  { title: '30 Million', value: 30000000 },
  { title: '40 Million', value: 40000000 },
  { title: '50 Million', value: 50000000 },
  { title: '100 Millon', value: 100000000 },
  { title: '200 Millon', value: 200000000 },
  { title: '300 Millon', value: 300000000 },
  { title: '500 Millon', value: 500000000 },
  { title: '600 Million', value: 600000000 },
  { title: '700 Million', value: 700000000 },
  { title: '800 Million', value: 800000000 },
  { title: '900 Million', value: 900000000 },
  { title: '1 Billion', value: 1000000000 },
  { title: '2 Billion', value: 2000000000 },
  { title: '5 Billion', value: 5000000000 },
  { title: '10 Billion', value: 10000000000 },
];

export const minPrice = [
  { title: '50,000', value: 500000 },
  { title: '100,000', value: 100000 },
  { title: '200,000', value: 200000 },
  { title: '300,000', value: 300000 },
  { title: '400,000', value: 400000 },
  { title: '500,000', value: 500000 },
  { title: '600,000', value: 600000 },
  { title: '700,000', value: 700000 },
  { title: '800,000', value: 800000 },
  { title: '900,000', value: 900000 },
  { title: '1 million', value: 1000000 },
  { title: '2 million', value: 2000000 },
  { title: '3 Millon', value: 3000000 },
  { title: '5 Million', value: 5000000 },
  { title: '10 Million', value: 10000000 },
  { title: '20 Million', value: 20000000 },
  { title: '30 Million', value: 30000000 },
  { title: '40 Million', value: 40000000 },
  { title: '50 Million', value: 50000000 },
  { title: '100 million', value: 100000000 },
];

export const amenitiesList = [
  {
    title: 'Boys Quater',
  },
  {
    title: 'Child care',
  },
  {
    title: 'Dranaige System',
  },
  {
    title: 'Front Desk Service',
  },
  {
    title: 'Big Compound',
  },
  {
    title: '24 Hours Security',
  },
  {
    title: 'All Room Ensuit',
  },
  {
    title: 'Big Compound',
  },
  {
    title: 'C of O',
  },
  {
    title: 'CCTV Cameras',
  },
  {
    title: 'Church Nearby',
  },
  {
    title: 'Elevator',
  },
  {
    title: 'GYM',
  },
  {
    title: 'A/C',
  },
  {
    title: 'Swimming Pool',
  },
  {
    title: 'Free WiFi',
  },
];

export const TabsData = {
  TabTitle: [
    {
      id: 'tab1',
      title: 'Profile',
    },

    {
      id: 'tab2',
      title: 'My Account',
    },
    {
      id: 'tab3',
      title: 'Notifications',
    },
  ],

  TabContents: [
    { id: 'tab1', comp: <Profile /> },
    { id: 'tab2', comp: <MyAccount /> },
    { id: 'tab3', comp: <MyNotifications /> },
  ],
};

export const LeadsData = {
  TabTitle: [
    {
      id: 'tab1',
      title: 'Listing Stat',
    },

    {
      id: 'tab2',
      title: 'Leads',
    },
    {
      id: 'tab3',
      title: 'Client Requests',
    },
    {
      id: 'tab4',
      title: 'Leads Stat',
    },
  ],

  TabContents: [
    { id: 'tab1', comp: <ListingStats /> },
    { id: 'tab2', comp: <LeadsComp /> },
    { id: 'tab3', comp: <ClientRquest /> },
    { id: 'tab4', comp: <LeadsStats /> },
  ],
};

export const ListingData = {
  TabTitle: [
    {
      id: 'tab1',
      title: 'All',
    },

    {
      id: 'tab2',
      title: 'Published',
    },
    {
      id: 'tab3',
      title: 'Closed',
    },
    {
      id: 'tab4',
      title: 'Expired',
    },
  ],

  TabContents: [
    { id: 'tab1', comp: <AllListing /> },
    { id: 'tab2', comp: <OtherListings vacantVal={0} /> },
    { id: 'tab3', comp: <OtherListings vacantVal={1} /> },
    { id: 'tab4', comp: <OtherListings vacantVal={1} /> },
  ],
};

export const ListingInitialState = {
  minMonthlyRent: '',
  maxMonthlyRent: '',
  PropertyType: '',
  name: '',
  State: '',
  LGA: '',
  Property_Category: '',
  startDate: '',
  endDate: '',
  BedRooms: '',
  status: '',
  limit: 0,
  skip: 0,
};

export const pricingPlan = {
  Monthly: [
    {
      id: 'MonthlyBasic',
      title: 'Basic',
      desc: 'Our basic package covers:',
      price: 1000,
      planNumber: 1,

      benefits: [
        {
          id: 1,
          li: '2 Listing',
        },
        {
          id: 2,
          li: '5 Property Picture Uploads',
        },
        {
          id: 3,
          li: '0 Video Upload',
        },
      ],
    },
    {
      id: 'MonthlySilver',
      title: 'Silver',
      desc: 'Our silver package covers:',
      price: 2500,
      planNumber: 2,

      benefits: [
        {
          id: 1,
          li: '10 Listing',
        },
        {
          id: 2,
          li: '8 Property Picture Uploads',
        },
        {
          id: 3,
          li: '0 Video Upload',
        },
      ],
    },
    {
      id: 'MonthlyGold',
      title: 'Gold',
      desc: 'Our gold package covers:',
      price: 6000,
      planNumber: 3,

      benefits: [
        {
          id: 1,
          li: '15 Listing',
        },
        {
          id: 2,
          li: '10 Property Picture Uploads',
        },
        {
          id: 3,
          li: '1 Video Upload',
        },
      ],
    },
    {
      id: 'MonthlyPlatinum',
      title: 'Platinum',
      desc: 'Our platinum package covers:',
      price: 10000,
      planNumber: 4,

      benefits: [
        {
          id: 1,
          li: '30',
        },
        {
          id: 2,
          li: '12 Property Picture Uploads',
        },
        {
          id: 3,
          li: '1 Video Upload',
        },
      ],
    },
    {
      id: 'MonthlyDiamon',
      title: 'Diamond',
      desc: 'Our diamond package covers:',
      price: 50000,
      planNumber: 5,

      benefits: [
        {
          id: 1,
          li: 'Unlimited',
        },
        {
          id: 2,
          li: '15 Property Picture Uploads',
        },
        {
          id: 3,
          li: '2 Video Upload',
        },
      ],
    },
  ],

  Yearly: [
    {
      id: 'YearlyBasic',
      title: 'Basic',
      desc: 'Our basic package covers:',
      price: 12000,
      planNumber: 6,

      benefits: [
        {
          id: 1,
          li: '2 Listing',
        },
        {
          id: 2,
          li: '5 Property Picture Uploads',
        },
        {
          id: 3,
          li: '0 Video Upload',
        },
      ],
    },
    {
      id: 'YearlySilver',
      title: 'Silver',
      desc: 'Our silver package covers:',
      price: 30000,
      planNumber: 7,

      benefits: [
        {
          id: 1,
          li: '10 Listing',
        },
        {
          id: 2,
          li: '8 Property Picture Uploads',
        },
        {
          id: 3,
          li: '0 Video Upload',
        },
      ],
    },
    {
      id: 'YearlyGold',
      title: 'Gold',
      desc: 'Our gold package covers:',
      price: 60000,
      planNumber: 8,

      benefits: [
        {
          id: 1,
          li: '15 Listing',
        },
        {
          id: 2,
          li: '10 Property Picture Uploads',
        },
        {
          id: 3,
          li: '1 Video Upload',
        },
      ],
    },
    {
      id: 'YearlyPlatinum',
      title: 'Platinum',
      desc: 'Our platinum package covers:',
      price: 90000,
      planNumber: 9,
      benefits: [
        {
          id: 1,
          li: '30 Listing',
        },
        {
          id: 2,
          li: '12 Property Picture Uploads',
        },
        {
          id: 3,
          li: '1 Video Upload',
        },
      ],
    },
    {
      id: 'YearlyDiamond',
      title: 'Diamond',
      desc: 'Our diamond package covers:',
      price: 600000,
      planNumber: 10,

      benefits: [
        {
          id: 1,
          li: 'Unlimited',
        },
        {
          id: 2,
          li: '15 Property Picture Uploads',
        },
        {
          id: 3,
          li: '2 Video Upload',
        },
      ],
    },
  ],
};

// ==== Chart Datas Start ====

export const monthlyChartData = (data) => {
  return {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],

    datasets: [
      // registered
      {
        minBarLength: 0,
        data: [
          data?.Jan.Vacant,
          data?.Feb.Vacant,
          data?.Mar.Vacant,
          data?.Apr.Vacant,
          data?.May.Vacant,
          data?.Jun.Vacant,
          data?.Jul.Vacant,
          data?.Aug.Vacant,
          data?.Sep.Vacant,
          data?.Oct.Vacant,
          data?.Nov.Vacant,
          data?.Dec.Vacant,
        ],

        backgroundColor: ' #5F259F',
      },
      // Verified
      {
        // categoryPercentage: 1,
        minBarLength: 0,
        data: [
          data?.Jan.Occupied,
          data?.Feb.Occupied,
          data?.Mar.Occupied,
          data?.Apr.Occupied,
          data?.May.Occupied,
          data?.Jun.Occupied,
          data?.Jul.Occupied,
          data?.Aug.Occupied,
          data?.Sep.Occupied,
          data?.Oct.Occupied,
          data?.Nov.Occupied,
          data?.Dec.Occupied,
        ],

        backgroundColor: '#e0def7',
      },
    ],
  };
};

export const weeklyChartData = (data) => {
  return {
    labels: Object?.keys(data),

    datasets: [
      // rent
      {
        data: Object?.values(data)?.map((item) => item?.rent),
        lineTension: 0.5,
        borderColor: '#5F259F',
        pointBorderColor: '#FFB812',
        backgroundColor: ' #FFB812',
      },
      // sale
      {
        data: Object?.values(data)?.map((item) => item?.sale),
        backgroundColor: '#100A55',
        borderColor: '#FFB812',
        pointBorderColor: '#100A55',
        lineTension: 0.5,
      },

      // shortlets
      {
        data: Object?.values(data)?.map((item) => item?.shortlet),

        pointBorderColor: '#100A55',
        borderColor: '#A09C9C',
        backgroundColor: ' #5F259F',
        lineTension: 0.5,
      },
    ],
  };
};

export const doughtData = (data) => {
  return [
    {
      id: 2,
      title: 'Properties',
      subTitle: 'Total Listed Properties',

      doughChartData: {
        labels: '',
        datasets: [
          {
            data: [data?.data?.totalProperties, 0],
            borderRadius: 8,
            backgroundColor: ['#5F259F', '#E8E6F9'],
            cutout: '80%',
          },
        ],
      },

      doughnutLabel: {
        id: 'doughnutLabel',
        afterDatasetsDraw(chart) {
          const { ctx } = chart;
          let centerX = chart.getDatasetMeta(0).data[0].x;
          let initialCenterY = chart.getDatasetMeta(0).data[0].y;

          // The labels

          // The labels
          ctx.save();
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          // Labels
          const labels = [
            {
              text: data?.data?.totalProperties
                ? data?.data?.totalProperties
                : 0,
              font: 'bold 36px sans-serif',
              color: '#000',
            },
            {
              text: 'Properties',
              font: 'italic 10px sans-serif',
              color: '#565c69',
            },
          ];
          const totalHeight = labels.length * 15;

          labels.forEach((label, index) => {
            ctx.font = label.font;
            ctx.fillStyle = label.color;
            const centerY = initialCenterY - totalHeight / 2 + index * (15 + 7);
            ctx.fillText(label.text, centerX, centerY);
          });

          ctx.restore();
        },
      },
    },
    {
      id: 3,
      title: 'Vacant',
      subTitle: 'Total vacant property',

      doughChartData: {
        labels: '',
        datasets: [
          {
            data: [data?.data?.vacantProperties, 0],
            borderRadius: 8,
            backgroundColor: ['#5F259F', '#E8E6F9'],
            cutout: '80%',
          },
        ],
      },

      doughnutLabel: {
        id: 'doughnutLabel',
        afterDatasetsDraw(chart) {
          const { ctx } = chart;
          let centerX = chart.getDatasetMeta(0).data[0].x;
          let initialCenterY = chart.getDatasetMeta(0).data[0].y;

          // The labels
          ctx.save();
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          // Labels
          const labels = [
            {
              text: data?.data?.vacantProperties
                ? data?.data?.vacantProperties
                : 0,
              font: 'bold 36px sans-serif',
              color: '#000',
            },
            {
              text: 'Vacant',
              font: 'italic 10px sans-serif',
              color: '#565c69',
            },
          ];
          const totalHeight = labels.length * 15;

          labels.forEach((label, index) => {
            ctx.font = label.font;
            ctx.fillStyle = label.color;
            const centerY = initialCenterY - totalHeight / 2 + index * (15 + 7);
            ctx.fillText(label.text, centerX, centerY);
          });

          ctx.restore();
        },
      },
    },
    {
      id: 4,
      title: 'Occupied Properties',
      subTitle: 'Total sold properties',

      doughChartData: {
        labels: '',
        datasets: [
          {
            data: [
              data?.data?.occupiedProperties === 0
                ? 0.2
                : data?.data?.occupiedProperties,
              0,
            ],
            borderRadius: 8,
            backgroundColor: ['#5F259F', '#E8E6F9'],
            cutout: '80%',
          },
        ],
      },

      doughnutLabel: {
        id: 'doughnutLabel',
        afterDatasetsDraw(chart) {
          const { ctx } = chart;
          let centerX = chart.getDatasetMeta(0).data[0].x;
          let initialCenterY = chart.getDatasetMeta(0).data[0].y;

          // The labels
          ctx.save();
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          // Labels
          const labels = [
            {
              text: data?.data?.occupiedProperties
                ? data?.data?.occupiedProperties
                : 0,
              font: 'bold 36px sans-serif',
              color: '#000',
            },
            {
              text: 'Unlisted',
              font: 'italic 10px sans-serif',
              color: '#565c69',
            },
          ];
          const totalHeight = labels.length * 15;

          labels.forEach((label, index) => {
            ctx.font = label.font;
            ctx.fillStyle = label.color;
            const centerY = initialCenterY - totalHeight / 2 + index * (15 + 7);
            ctx.fillText(label.text, centerX, centerY);
          });

          ctx.restore();
        },
      },
    },
  ];
};

export const doughOp = {
  elements: {
    arc: {
      skipNull: true, // Display segments with a value of 0
    },
  },
};

export const chartOptions = {
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      beginAtZero: true,
    },
    y: {
      display: false,
      gridLines: {
        display: false,
      },
    },
  },
};

// ==== Chart Datas End ====

export const free = [
  {
    name: 'upload1',
    title: '',
    url: '',
  },
  {
    name: 'upload2',
    title: '',
    url: '',
  },
  // {
  //   name: 'upload3',
  //   title: '',
  //   url: '',
  // },
  // {
  //   name: 'upload4',
  //   title: '',
  //   url: '',
  // },
  // {
  //   name: 'upload5',
  //   title: '',
  //   url: '',
  // },
];

export const silver = [
  {
    name: 'upload1',
    title: '',
    url: '',
  },
  {
    name: 'upload2',
    title: '',
    url: '',
  },
  {
    name: 'upload3',
    title: '',
    url: '',
  },
  {
    name: 'upload4',
    title: '',
    url: '',
  },
  {
    name: 'upload5',
    title: '',
    url: '',
  },
  {
    name: 'upload6',
    title: '',
    url: '',
  },
  {
    name: 'upload7',
    title: '',
    url: '',
  },
  {
    name: 'upload8',
    title: '',
    url: '',
  },
];

export const gold = [
  {
    name: 'upload1',
    title: '',
    url: '',
  },
  {
    name: 'upload2',
    title: '',
    url: '',
  },
  {
    name: 'upload3',
    title: '',
    url: '',
  },
  {
    name: 'upload4',
    title: '',
    url: '',
  },
  {
    name: 'upload5',
    title: '',
    url: '',
  },
  {
    name: 'upload6',
    title: '',
    url: '',
  },
  {
    name: 'upload7',
    title: '',
    url: '',
  },
  {
    name: 'upload8',
    title: '',
    url: '',
  },
  {
    name: 'upload9',
    title: '',
    url: '',
  },
  {
    name: 'upload10',
    title: '',
    url: '',
  },
];

export const platinum = [
  {
    name: 'upload1',
    title: '',
    url: '',
  },
  {
    name: 'upload2',
    title: '',
    url: '',
  },
  {
    name: 'upload3',
    title: '',
    url: '',
  },
  {
    name: 'upload4',
    title: '',
    url: '',
  },
  {
    name: 'upload5',
    title: '',
    url: '',
  },
  {
    name: 'upload6',
    title: '',
    url: '',
  },
  {
    name: 'upload7',
    title: '',
    url: '',
  },
  {
    name: 'upload8',
    title: '',
    url: '',
  },
  {
    name: 'upload9',
    title: '',
    url: '',
  },
  {
    name: 'upload10',
    title: '',
    url: '',
  },
  {
    name: 'upload11',
    title: '',
    url: '',
  },
  {
    name: 'upload12',
    title: '',
    url: '',
  },
];

export const diamond = [
  {
    name: 'upload1',
    title: '',
    url: '',
  },
  {
    name: 'upload2',
    title: '',
    url: '',
  },
  {
    name: 'upload3',
    title: '',
    url: '',
  },
  {
    name: 'upload4',
    title: '',
    url: '',
  },
  {
    name: 'upload5',
    title: '',
    url: '',
  },
  {
    name: 'upload6',
    title: '',
    url: '',
  },
  {
    name: 'upload7',
    title: '',
    url: '',
  },
  {
    name: 'upload8',
    title: '',
    url: '',
  },
  {
    name: 'upload9',
    title: '',
    url: '',
  },
  {
    name: 'upload10',
    title: '',
    url: '',
  },
  {
    name: 'upload11',
    title: '',
    url: '',
  },
  {
    name: 'upload12',
    title: '',
    url: '',
  },
  {
    name: 'upload13',
    title: '',
    url: '',
  },
  {
    name: 'upload14',
    title: '',
    url: '',
  },
  {
    name: 'upload15',
    title: '',
    url: '',
  },
];

export const tenantReq = [
  {
    id: 1,
    title: 'Valentino Parker',
    subTitle: 'Palm Harbor',
    date: 'Dec 7, 2021',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
  },
  {
    id: 2,
    title: 'Sofia Clear',
    subTitle: 'Beverly Springfield',
    date: 'Dec 7, 2021',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
  },
  {
    id: 3,
    title: 'Chris Justice',
    subTitle: 'Cove Red',
    date: 'Dec 7, 2021',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
  },
  {
    id: 4,
    title: 'Edin Kaolo',
    subTitle: 'Kelapa Bafing',
    date: 'Dec 7, 2021',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
  },
];

export const rents = (data) => {
  return [
    {
      id: 3,
      title: `${data?.totalProperties} Total Listing (s)`,
      subTitle: 'Total listed  Property. ',
      icon: All,
    },
    {
      id: 2,
      title: `${data?.vacantProperties} Listing`,
      subTitle: 'Active Listing.',
      icon: Active,
    },
    {
      id: 4,
      title: `${data?.occupiedProperties} Due  Listing (s)`,
      subTitle: 'Expired Listing.',
      icon: Due,
    },
    {
      id: 1,
      title: `${data?.clientReq || 0}  Clients Request`,
      subTitle: '',
      icon: Chat,
    },
  ];
};

export const datas = [
  {
    id: 1,
    date: '09/07/2024',
    title: 'New Jarus',
    bed: 3,
    bath: 4,
    toilet: 1,
    price: '200,000',
    sqm: '33.5',
    status: 'Active',
  },
  {
    id: 2,
    date: '09/07/2024',
    title: 'Bana Island',
    bed: 1,
    bath: 2,
    toilet: 2,
    price: '200,000',
    sqm: '33.5',
    status: 'Active',
  },
  {
    id: 3,
    date: '09/07/2024',
    title: 'Main Bungalow ',
    bed: 13,
    bath: 43,
    toilet: 12,
    price: '10,000,000',
    sqm: '33.5',
    status: 'Active',
  },
  {
    id: 4,
    date: '09/07/2024',
    title: 'Old Detached Semi Bungalow ',
    bed: 13,
    bath: 14,
    toilet: 11,
    price: '2,000,000',
    sqm: '33.5',
    status: 'Active',
  },
  {
    id: 5,
    date: '09/07/2024',
    title: 'Newly Detached Multi-Semi Bungalow ',
    bed: 5,
    bath: 8,
    toilet: 11,
    price: '3,000,000',
    sqm: '33.5',
    status: 'Active',
  },
  {
    id: 6,
    date: '09/07/2024',
    title: 'Newly Undetached Semi Bungalow ',
    bed: 5,
    bath: 8,
    toilet: 11,
    price: '3,000,000',
    sqm: '33.5',
    status: 'Active',
  },
  {
    id: 7,
    date: '09/07/2024',
    title: 'Newly Detached Semi Bungalow ',
    bed: 5,
    bath: 8,
    toilet: 11,
    price: '3,000,000',
    sqm: '33.5',
    status: 'Active',
  },
];
