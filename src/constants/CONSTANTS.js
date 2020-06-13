export const c = {
  /* query data */
  APP_TOKEN: "$$app_token=NDQ8EOLrXHft9YeGZ2axBbxzb",
  BASE_URL: "https://data.cityofnewyork.us/resource/pqg4-dm6b.json",

  /* search phrases */
  AGING: 'aging',
  CHILD_CARE: 'child_care_parent_information',
  SUPPORT_GROUPS: 'counseling_support_groups',
  HEALTH: 'health',
  HOUSING: 'housing',
  HOUSING_ARRAY: ['housing', 'homelessness'],
  LGBTQ: 'lesbian_gay_bisexual_and_or_transgender',
  LEGAL_AID: 'legal_services',
  EDUCATION: 'education',
  EMPLOYMENT: 'employment_job_training',
  // LEGAL_AID_ARRAY: ['legal_services', 'victim_services', 'anti_discrimination_human_rights'],
  IMMIGRATION: 'immigration',
  MENTAL_HEALTH: 'counseling_support_groups',
  YOUTH_SERVICES: 'youth_services',
  DISABILITIES: 'disabilities',
  VETERAN_SERVICES: 'veterans_military_families',
  // DOMESTIC_VIOLENTCE: ['victim_services', 'domestic_violence'],
  DOMESTIC_VIOLENCE: 'domestic_violence',
  /* other filter terms */
  GOVERNMENT_ORGANIZATION: ['other_government_organization', 'new_york_city_agency'],
  NONPROFIT: 'nonprofit',

  /* locations */
  LOCATION_BRONX: 'bronx',
  LOCATION_BROOKLYN: 'brooklyn',
  LOCATION_MANHATTAN: 'manhattan',
  LOCATION_QUEENS: 'queens',
  LOCATION_STATEN_ISLAND: 'staten_island',
  /* contact info */
  NAME: 'organizationname',
  NOURL: 'nourl',
  PHONE: 'phone',
  POSTCODE: 'postcode',
  URL: 'url',
  ADDRESS: 'address1',

}

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
  'domestic_violence': "Domestic Violence Survivor Support",
  'aging': "Aging Resources", 
  'disabilities': "Disability Resources",
  'arts_culture': "Arts and Culture",
  'education': "Education", 
  'employment_job_training': "Employment and Job Training",
  'veterans_military_families': "Veteran Services",
  'community_service_volunteerism': "Volunteer Opportunities"
}

/*------------------------------*/

/* For tagging the data right after it's collected and before it's stored in state */
export const KEYWORDS = ["health", "housing", "homelessness", "child_care_parent_information", "counseling_support_groups", "youth_services", "faith_based_organization", 'lesbian_gay_bisexual_and_or_transgender', 'legal_services', 'immigration', 'aging', 'disabilities', 'arts_culture', 'education', 'employment_job_training', 'community_service_volunteerism','veterans_military_families'];

export const LOCATIONS = ["queens", "brooklyn", "staten_island", "bronx", "manhattan"];

/*------------------------------*/

export const searchCategories = [
  {key: 1, text: "Child Care", value: 'child_care_parent_information'},
  {key: 3, text: "Health Care", value: 'health'},
  {key: 4, text: "Housing", value: 'housing'},
  {key: 2, text: "Mental Health Care", value: 'counseling_support_groups'},
  {key: 5, text: "Youth Services", value: 'youth_services'},
  {key: 6, text: "Employment", value: 'employment_job_training'},
  {key: 7, text: "Job Training", value: 'employment_job_training'},
  {key: 8, text: "Personal Finance", value: "personal_finance_financial_education"},
  {key: 9, text: "Financial Education", value: 'personal_finance_financial_education'},
  {key: 10, text: "Victim Services", value: 'victim_services'},
  {key: 11, text: "LGBTQ", value: 'lesbian_gay_bisexual_and_or_transgender'},
  {key: 12, text: "Veteran Services", value: "veterans_military_families"},
  {key: 12, text: "Counseling", value: 'counseling_support_groups'},
  {key:13, text: "Support Groups", value: 'counseling_support_groups'}
]

export const searchLocations = [
  {key:1, text: "Bronx", value: 'bronx'},
  {key: 2, text: "Brooklyn", value: 'brooklyn'},
  {key: 3, text: "Manhattan", value: 'manhattan'},
  {key: 4, text: "Queens", value: 'queens'},
  {key: 5, text: "Staten Island", value:'staten_island'}
]