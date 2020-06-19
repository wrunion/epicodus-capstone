export const c = {
  /* query data */
  BASE_URL: "https://data.cityofnewyork.us/resource/pqg4-dm6b.json",
  /* search phrases */
  AGING: 'aging',
  CHILD_CARE: 'child_care_parent_information',
  SUPPORT_GROUPS: 'counseling_support_groups',
  HEALTH: 'health',
  HOUSING: 'housing',
  LGBTQ: 'lesbian_gay_bisexual_and_or_transgender',
  LEGAL_AID: 'legal_services',
  EDUCATION: 'education',
  EMPLOYMENT: 'employment_job_training',
  IMMIGRATION: 'immigration',
  MENTAL_HEALTH: 'counseling_support_groups',
  YOUTH_SERVICES: 'youth_services',
  DISABILITIES: 'disabilities',
  VETERAN_SERVICES: 'veterans_military_families',
  DOMESTIC_VIOLENCE: 'domestic_violence',
  /* locations */
  LOCATION_BRONX: 'bronx',
  LOCATION_BROOKLYN: 'brooklyn',
  LOCATION_MANHATTAN: 'manhattan',
  LOCATION_QUEENS: 'queens',
  LOCATION_STATEN_ISLAND: 'staten_island',
  /* contact info */
  NAME: 'organizationname',
  PHONE: 'phone',
  URL: 'url',
  ADDRESS: 'address1',
}

/*------------------------------*/

export const DISPLAY = {
  'bronx': "Bronx",
  'brooklyn': "Brooklyn",
  'manhattan': "Manhattan",
  'queens': "Queens",
  'staten_island': "Staten Island",
  'child_care_parent_information': "Child Care",
  'counseling_support_groups': "Mental Health Care",
  'health': "Health Care",
  'housing': "Housing",
  'homelessness': "Homelessness",
  'faith_based_organization': "Faith Baised Organizations",
  'youth_services': "Youth Services",
  'lesbian_gay_bisexual_and_or_transgender': "LGBTQ Services",
  'legal_services': "Legal Services",
  'immigration': "Immigration Services",
  'domestic_violence': "DV Support",
  'aging': "Aging Resources", 
  'disabilities': "Disability Resources",
  'arts_culture': "Arts and Culture",
  'education': "Education", 
  'employment_job_training': "Employment and Job Training",
  'veterans_military_families': "Veteran Services",
  'community_service_volunteerism': "Volunteer Opportunities",
  "personal_finance_financial_education": "Financial Education", 
  "victim_services": "Victim Services"
}

/*------------------------------*/

export const KEYWORDS = ['aging', 'arts_culture', "child_care_parent_information", 'disabilities', 'education', 'employment_job_training', "faith_based_organization", "health", "housing", "homelessness", 'lesbian_gay_bisexual_and_or_transgender', 'legal_services', 'immigration', "counseling_support_groups", 'veterans_military_families', 'community_service_volunteerism', "youth_services"];

export const LOCATIONS = ["queens", "brooklyn", "staten_island", "bronx", "manhattan"];

/*------------------------------*/

/* DROPDOWN SEARCH OPTIONS */
export const searchCategories = [
  {key: 1, text: "Child Care", value: 'child_care_parent_information'},
  {key: 2, text: "Counseling", value: 'counseling_support_groups'},
  {key: 3, text: "Education", value: "education"},
  {key: 4, text: "Employment and Job Training", value: 'employment_job_training'},
  {key: 5, text: "Financial Education", value: 'personal_finance_financial_education'},
  {key: 6, text: "Health Care", value: 'health'},
  {key: 7, text: "Housing", value: 'housing'},
  {key: 8, text: "Legal Services", value: "legal_services"},
  {key: 9, text: "LGBTQ Resources", value: 'lesbian_gay_bisexual_and_or_transgender'},
  {key: 10, text: "Immigration", value: "immigration"},
  {key: 11, text: "Support Groups", value: 'counseling_support_groups'},
  {key: 12, text: "Veteran Services", value: "veterans_military_families"},
  {key: 13, text: "Victim Services", value: 'victim_services'},
  {key: 14, text: "Youth Services", value: 'youth_services'},
]

export const additionalSearchCategories = [
  //latino, spanish, asian american, jewish, homelessness, disability, aging, arts, faith-based organizations
]

export const customSearches = [
  {text: "Trans Health Care", value: ['trans_health'] }
]

export const searchLocations = [
  {key:1, text: "Bronx", value: 'bronx'},
  {key: 2, text: "Brooklyn", value: 'brooklyn'},
  {key: 3, text: "Manhattan", value: 'manhattan'},
  {key: 4, text: "Queens", value: 'queens'},
  {key: 5, text: "Staten Island", value:'staten_island'},
]