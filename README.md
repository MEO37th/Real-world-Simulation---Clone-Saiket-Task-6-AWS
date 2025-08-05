# Real-world Simulation - AWS Services Showcase

A comprehensive Next.js application that simulates and showcases various Amazon Web Services (AWS) offerings through an interactive web interface. This project demonstrates AWS service capabilities, pricing models, and use cases in a user-friendly format.

## 🚀 Features

- **Interactive AWS Services Showcase**: Explore various AWS services with detailed information and use cases
- **Free Tier Navigation**: Dedicated section highlighting AWS Free Tier offerings
- **Service Detail Modals**: In-depth information about individual AWS services
- **Responsive Design**: Fully responsive interface built with Tailwind CSS
- **Modern UI Components**: Utilizes Radix UI components for consistent user experience
- **Performance Optimized**: Built with Next.js 14 for optimal performance and SEO

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Charts**: Recharts for data visualization
- **Notifications**: Sonner for toast notifications

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- Node.js (version 18.0 or higher)
- npm or yarn package manager
- Git

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MEO37th/Real-world-Simulation---Clone-Saiket-Task-6-AWS.git
   cd Real-world-Simulation---Clone-Saiket-Task-6-AWS
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── test/              # Test pages
├── components/            # React components
│   ├── ui/                # Reusable UI components (Radix UI)
│   ├── main/              # Main application components
│   ├── Header.tsx         # Application header
│   ├── Footer.tsx         # Application footer
│   ├── Hero.tsx           # Hero section
│   ├── MainContent.tsx    # Main content area
│   ├── ServicesShowcase.tsx # AWS services showcase
│   └── ...                # Other components
├── styles/                # Global styles
│   └── globals.css        # Global CSS with Tailwind
├── guidelines/            # Project guidelines and documentation
└── public/                # Static assets
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🌟 Key Components

### Header Component
- Navigation menu with AWS branding
- Responsive design for mobile and desktop

### Services Showcase
- Interactive grid of AWS services
- Detailed service information modals
- Category-based service organization

### Free Tier Navigation
- Dedicated section for AWS Free Tier services
- Clear pricing and usage limit information

### Feedback Section
- User feedback collection interface
- Integration-ready for backend services

## 🎨 Styling and Theming

The project uses a modern design system with:
- **Tailwind CSS** for utility-first styling
- **Custom CSS variables** for consistent theming
- **Responsive breakpoints** for mobile-first design
- **Dark/Light mode support** (configurable)

## 🔒 Security Considerations

- All external links open in new tabs with `rel="noopener noreferrer"`
- Input validation on all form components
- Secure handling of user data and feedback

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1024px and above)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings (auto-detected for Next.js)
3. Deploy with automatic CI/CD

### Manual Deployment
1. Build the application: `npm run build`
2. Start the production server: `npm run start`
3. Configure your hosting environment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **AWS** for providing comprehensive cloud services documentation
- **Radix UI** for accessible component primitives
- **Tailwind CSS** for utility-first CSS framework
- **Next.js** team for the excellent React framework
- **Vercel** for hosting and deployment platform

## 📞 Support

For support and questions:
- Create an issue in this repository
- Contact the development team
- Check the [guidelines](./guidelines/Guidelines.md) for development standards

## 🔄 Version History

- **v0.1.0** - Initial release with core AWS services showcase
- Features include service exploration, free tier information, and responsive design

---

**Built with ❤️ for the AWS community**