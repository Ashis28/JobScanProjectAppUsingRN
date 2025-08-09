# 🚀 JobScan - React Native Job Search App

A modern, feature-rich job search application built with React Native and Expo, integrating real-time job data from JSearch API.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 📱 Features

### ✨ Core Functionality
- **Real-time Job Search** - Browse thousands of job listings from JSearch API
- **Popular Jobs** - Curated list of trending job opportunities
- **Nearby Jobs** - Location-based job recommendations
- **Job Details** - Complete job information with descriptions, requirements, and apply links
- **Search by Category** - Filter jobs by Full-time, Part-time, or Contract positions
- **Company Logos** - Visual company branding with smart fallback images

### 🎨 User Experience
- **Modern UI/UX** - Clean, intuitive interface with smooth navigation
- **Responsive Design** - Optimized for various screen sizes
- **Loading States** - Elegant loading indicators and error handling
- **Image Optimization** - Smart image loading with fallback support
- **Navigation** - Seamless routing between screens using Expo Router

## 🏗️ Architecture

### Tech Stack
- **Frontend**: React Native with Expo
- **Navigation**: Expo Router (file-based routing)
- **API**: JSearch API (RapidAPI)
- **HTTP Client**: Axios
- **State Management**: React Hooks (useState, useEffect)
- **Styling**: StyleSheet (React Native)

### Project Structure
```
📦 my-app
├── 📁 app/                    # Expo Router pages
│   ├── _layout.js            # Root layout
│   ├── index.js              # Home screen
│   ├── job-details/[id].js   # Job details screen
│   └── search/[id].js        # Search results screen
├── 📁 components/            # Reusable components
│   ├── common/               # Shared components
│   ├── home/                 # Home screen components
│   └── jobdetails/           # Job details components
├── 📁 constants/             # App constants
├── 📁 hook/                  # Custom hooks
├── 📁 assets/                # Images, fonts, icons
└── 📁 styles/                # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- React Native development environment

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Ashis28/JobScanProjectAppUsingRN.git
cd JobScanProjectAppUsingRN
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
Create a `.env` file in the root directory:
```env
RAPID_API_KEY=your_jsearch_api_key_here
```

4. **Start the development server**
```bash
npm start
# or
expo start
```

5. **Run on device/simulator**
- **iOS**: Press `i` in terminal or scan QR code with Camera app
- **Android**: Press `a` in terminal or scan QR code with Expo Go app
- **Web**: Press `w` in terminal

## 🔧 Configuration

### API Setup
1. Visit [RapidAPI JSearch](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch)
2. Subscribe to the free plan (2,500 requests/month)
3. Copy your API key
4. Add it to your `.env` file

### Customization
- **Colors**: Modify `constants/theme.js`
- **Fonts**: Update `assets/fonts/` and `app/_layout.js`
- **Icons**: Replace icons in `assets/icons/`

## 📸 Screenshots

### Home Screen
The main dashboard featuring Popular Jobs and Nearby Jobs sections with search functionality.

![Home Screen](https://via.placeholder.com/300x600/4285f4/ffffff?text=Home+Screen)

### Job Details
Comprehensive job information including description, qualifications, and apply button.

![Job Details](https://via.placeholder.com/300x600/34a853/ffffff?text=Job+Details)

### Search Results
Filtered job listings based on user search criteria and job types.

![Search Results](https://via.placeholder.com/300x600/ea4335/ffffff?text=Search+Results)

## 🛠️ Development

### Key Components

#### `useFetch` Hook
Custom hook for API data fetching with loading states and error handling:
```javascript
const { data, isLoading, error, refetch } = useFetch('search', {
  query: 'react-developer',
  page: '1',
  num_pages: '1',
  country: 'us'
});
```

#### Image Handling
Smart image loading with fallback support:
```javascript
<Image
  source={{
    uri: job?.employer_logo || defaultImageUrl
  }}
  onError={() => console.log('Image failed to load')}
/>
```

### Best Practices Implemented
- ✅ Environment variable management
- ✅ Error boundary handling
- ✅ Loading state management
- ✅ Image optimization
- ✅ Clean code architecture
- ✅ Responsive design patterns

## 🐛 Troubleshooting

### Common Issues

**Images not loading:**
- Check internet connection
- Verify API key is valid
- Check console for error messages

**API errors:**
- Ensure `.env` file exists with valid API key
- Check API rate limits
- Verify network connectivity

**Navigation issues:**
- Clear Expo cache: `expo start -c`
- Restart development server
- Check Expo Router configuration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **JSearch API** - For providing comprehensive job data
- **Expo Team** - For the amazing development platform
- **React Native Community** - For continuous support and resources

## 📞 Contact

**Ashis28** - [GitHub Profile](https://github.com/Ashis28)

Project Link: [https://github.com/Ashis28/JobScanProjectAppUsingRN](https://github.com/Ashis28/JobScanProjectAppUsingRN)

---

⭐ **Star this repo if you found it helpful!** ⭐
