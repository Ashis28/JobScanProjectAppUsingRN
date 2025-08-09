import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query, useDummy = false) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Expanded dummy data with multiple job entries
  const dummyResponse = {
    request_id: "936830b0-850f-4e85-8d05-14edf8b1d3f5",
    parameters: {
      job_id: "hpyA_5f2KAErFsx0AAAAAA==",
      country: "us",
      language: "en"
    },
    data: [
      {
        job_id: "job_001_react_developer",
        job_title: "React Developer",
        employer_name: "Tech Solutions Inc",
        employer_logo: "https://via.placeholder.com/100x100/4285f4/ffffff?text=TS",
        employer_website: "https://techsolutions.com",
        job_publisher: "LinkedIn",
        job_employment_type: "FULLTIME",
        job_employment_types: ["FULLTIME"],
        job_apply_link: "https://example.com/apply/react-developer",
        job_apply_is_direct: true,
        apply_options: [
          {
            publisher: "LinkedIn",
            apply_link: "https://example.com/apply/react-developer",
            is_direct: true
          }
        ],
        job_description: "We are looking for a skilled React Developer to join our team. You will be responsible for developing user interface components and implementing them following well-known React.js workflows. Requirements: 3+ years React experience, JavaScript ES6+, Redux, HTML5/CSS3.",
        job_is_remote: true,
        job_posted_at: "2 hours ago",
        job_posted_at_timestamp: Date.now() - 7200000,
        job_posted_at_datetime_utc: new Date(Date.now() - 7200000).toISOString(),
        job_location: "San Francisco, CA",
        job_city: "San Francisco",
        job_state: "California",
        job_country: "US",
        job_latitude: 37.7749,
        job_longitude: -122.4194,
        job_benefits: ["Health Insurance", "401k", "Remote Work"],
        job_google_link: "https://www.google.com/search?q=react+developer+jobs",
        job_salary: "$90,000 - $120,000",
        job_min_salary: 90000,
        job_max_salary: 120000,
        job_salary_period: "YEAR",
        job_highlights: {
          Qualifications: [
            "3+ years of React experience",
            "Strong JavaScript (ES6+) skills",
            "Experience with Redux or Context API",
            "HTML5 and CSS3 proficiency",
            "Git version control"
          ],
          Responsibilities: [
            "Develop new user-facing features",
            "Build reusable components and front-end libraries",
            "Translate designs and wireframes into high-quality code",
            "Optimize components for maximum performance",
            "Collaborate with team members and stakeholders"
          ]
        },
        job_onet_soc: "15113400",
        job_onet_job_zone: "4"
      },
      {
        job_id: "job_002_fullstack_developer",
        job_title: "Full Stack Developer",
        employer_name: "StartupXYZ",
        employer_logo: "https://via.placeholder.com/100x100/34a853/ffffff?text=SX",
        employer_website: "https://startupxyz.com",
        job_publisher: "Indeed",
        job_employment_type: "FULLTIME",
        job_employment_types: ["FULLTIME"],
        job_apply_link: "https://example.com/apply/fullstack-developer",
        job_apply_is_direct: false,
        apply_options: [
          {
            publisher: "Indeed",
            apply_link: "https://example.com/apply/fullstack-developer",
            is_direct: false
          }
        ],
        job_description: "Join our dynamic startup as a Full Stack Developer! Work with modern technologies including React, Node.js, and MongoDB. We offer competitive salary, equity, and a flexible work environment.",
        job_is_remote: false,
        job_posted_at: "1 day ago",
        job_posted_at_timestamp: Date.now() - 86400000,
        job_posted_at_datetime_utc: new Date(Date.now() - 86400000).toISOString(),
        job_location: "Austin, TX",
        job_city: "Austin",
        job_state: "Texas",
        job_country: "US",
        job_latitude: 30.2672,
        job_longitude: -97.7431,
        job_benefits: ["Equity", "Flexible Hours", "Learning Budget"],
        job_google_link: "https://www.google.com/search?q=fullstack+developer+jobs",
        job_salary: "$80,000 - $110,000",
        job_min_salary: 80000,
        job_max_salary: 110000,
        job_salary_period: "YEAR",
        job_highlights: {
          Qualifications: [
            "Experience with React and Node.js",
            "Database design (MongoDB, PostgreSQL)",
            "RESTful API development",
            "Agile development experience",
            "Problem-solving skills"
          ],
          Responsibilities: [
            "Develop both frontend and backend features",
            "Design and implement APIs",
            "Work closely with product team",
            "Participate in code reviews",
            "Mentor junior developers"
          ]
        },
        job_onet_soc: "15113400",
        job_onet_job_zone: "4"
      },
      {
        job_id: "job_003_mobile_developer",
        job_title: "React Native Developer",
        employer_name: "Mobile First Co",
        employer_logo: "https://via.placeholder.com/100x100/ea4335/ffffff?text=MF",
        employer_website: "https://mobilefirst.com",
        job_publisher: "Glassdoor",
        job_employment_type: "CONTRACT",
        job_employment_types: ["CONTRACT"],
        job_apply_link: "https://example.com/apply/react-native-developer",
        job_apply_is_direct: true,
        apply_options: [
          {
            publisher: "Glassdoor",
            apply_link: "https://example.com/apply/react-native-developer",
            is_direct: true
          }
        ],
        job_description: "Seeking an experienced React Native Developer for a 6-month contract. Build cross-platform mobile applications with excellent user experience. Must have experience with iOS and Android deployment.",
        job_is_remote: true,
        job_posted_at: "3 days ago",
        job_posted_at_timestamp: Date.now() - 259200000,
        job_posted_at_datetime_utc: new Date(Date.now() - 259200000).toISOString(),
        job_location: "New York, NY",
        job_city: "New York",
        job_state: "New York",
        job_country: "US",
        job_latitude: 40.7128,
        job_longitude: -74.0060,
        job_benefits: ["Remote Work", "Flexible Schedule"],
        job_google_link: "https://www.google.com/search?q=react+native+developer+jobs",
        job_salary: "$70 - $90 per hour",
        job_min_salary: 70,
        job_max_salary: 90,
        job_salary_period: "HOUR",
        job_highlights: {
          Qualifications: [
            "3+ years React Native experience",
            "iOS and Android app store deployment",
            "Native module integration",
            "Performance optimization",
            "TypeScript knowledge preferred"
          ],
          Responsibilities: [
            "Develop cross-platform mobile applications",
            "Integrate with native device features",
            "Optimize app performance",
            "Collaborate with design team",
            "Maintain code quality and documentation"
          ]
        },
        job_onet_soc: "15113400",
        job_onet_job_zone: "4"
      },
      {
        job_id: "job_004_frontend_developer",
        job_title: "Frontend Developer",
        employer_name: "Design Agency Pro",
        employer_logo: "https://via.placeholder.com/100x100/fbbc04/ffffff?text=DA",
        employer_website: "https://designagencypro.com",
        job_publisher: "AngelList",
        job_employment_type: "PARTTIME",
        job_employment_types: ["PARTTIME"],
        job_apply_link: "https://example.com/apply/frontend-developer",
        job_apply_is_direct: false,
        apply_options: [
          {
            publisher: "AngelList",
            apply_link: "https://example.com/apply/frontend-developer",
            is_direct: false
          }
        ],
        job_description: "Part-time Frontend Developer position perfect for someone looking for work-life balance. Work on exciting client projects using modern frontend technologies. 20-25 hours per week.",
        job_is_remote: true,
        job_posted_at: "5 days ago",
        job_posted_at_timestamp: Date.now() - 432000000,
        job_posted_at_datetime_utc: new Date(Date.now() - 432000000).toISOString(),
        job_location: "Los Angeles, CA",
        job_city: "Los Angeles",
        job_state: "California",
        job_country: "US",
        job_latitude: 34.0522,
        job_longitude: -118.2437,
        job_benefits: ["Flexible Hours", "Creative Environment"],
        job_google_link: "https://www.google.com/search?q=frontend+developer+jobs",
        job_salary: "$40 - $60 per hour",
        job_min_salary: 40,
        job_max_salary: 60,
        job_salary_period: "HOUR",
        job_highlights: {
          Qualifications: [
            "Strong HTML, CSS, JavaScript skills",
            "Experience with modern CSS frameworks",
            "Responsive design expertise",
            "Attention to detail",
            "Portfolio of previous work"
          ],
          Responsibilities: [
            "Convert designs to responsive web pages",
            "Implement interactive user interfaces",
            "Ensure cross-browser compatibility",
            "Optimize for performance and SEO",
            "Collaborate with designers and clients"
          ]
        },
        job_onet_soc: "15113400",
        job_onet_job_zone: "3"
      },
      {
        job_id: "job_005_senior_developer",
        job_title: "Senior Software Engineer",
        employer_name: "Enterprise Corp",
        employer_logo: "https://via.placeholder.com/100x100/9333ea/ffffff?text=EC",
        employer_website: "https://enterprisecorp.com",
        job_publisher: "Company Website",
        job_employment_type: "FULLTIME",
        job_employment_types: ["FULLTIME"],
        job_apply_link: "https://example.com/apply/senior-software-engineer",
        job_apply_is_direct: true,
        apply_options: [
          {
            publisher: "Company Website",
            apply_link: "https://example.com/apply/senior-software-engineer",
            is_direct: true
          }
        ],
        job_description: "Senior Software Engineer role at a Fortune 500 company. Lead technical initiatives, mentor junior developers, and work on large-scale distributed systems. Excellent benefits and career growth opportunities.",
        job_is_remote: false,
        job_posted_at: "1 week ago",
        job_posted_at_timestamp: Date.now() - 604800000,
        job_posted_at_datetime_utc: new Date(Date.now() - 604800000).toISOString(),
        job_location: "Seattle, WA",
        job_city: "Seattle",
        job_state: "Washington",
        job_country: "US",
        job_latitude: 47.6062,
        job_longitude: -122.3321,
        job_benefits: ["Health Insurance", "401k Match", "Stock Options", "PTO"],
        job_google_link: "https://www.google.com/search?q=senior+software+engineer+jobs",
        job_salary: "$130,000 - $180,000",
        job_min_salary: 130000,
        job_max_salary: 180000,
        job_salary_period: "YEAR",
        job_highlights: {
          Qualifications: [
            "5+ years software development experience",
            "Experience with distributed systems",
            "Leadership and mentoring skills",
            "Strong problem-solving abilities",
            "Computer Science degree preferred"
          ],
          Responsibilities: [
            "Lead technical design and architecture",
            "Mentor and guide junior developers",
            "Code review and quality assurance",
            "Collaborate with cross-functional teams",
            "Drive technical innovation"
          ]
        },
        job_onet_soc: "15113200",
        job_onet_job_zone: "5"
      }
    ]
  };

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "x-rapidapi-key": process.env.RAPID_API_KEY || "fac640148emsh98597c99c1d1525p1b47dejsnf6dc3b2eff87",
      "x-rapidapi-host": "jsearch.p.rapidapi.com"
    },
    params: { ...query }
  };

  const fetchData = async () => {
    setIsLoading(true);
    console.log('Fetching data with endpoint:', endpoint, 'query:', query, 'useDummy:', useDummy);

    try {
      if (useDummy) {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500));
        console.log('Using dummy data for endpoint:', endpoint);
        
        if (endpoint === 'job-details') {
          // For job-details, find the specific job by ID
          const jobId = query.job_id;
          const foundJob = dummyResponse.data.find(job => job.job_id === jobId);
          setData(foundJob ? [foundJob] : []);
          console.log('Job details for ID:', jobId, foundJob ? 'found' : 'not found');
        } else {
          // For search endpoint, return all jobs
          setData(dummyResponse.data);
          console.log('Search results:', dummyResponse.data.length, 'jobs');
        }
      } else {
        const response = await axios.request(options);
        console.log('API Response:', response.data);
        setData(response.data.data);
      }
      setError(null);
    } catch (err) {
      setError(err);
      console.error('Fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
