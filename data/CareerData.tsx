interface Career {
  org: string
  url: string
  logo: string
  start: string
  end: string
  title: string
  icon: string
  event: string
  details: () => JSX.Element
}

const CareerData: Career[] = [
  {
    org: 'Okhub Vietnam',
    url: 'https://okhub.vn/',
    logo: '/static/images/okhub.jpg',
    start: 'May 2024',
    end: 'Present',
    title: 'Frontend Developer',
    icon: '💼',
    event: 'career-okhub',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Developed the user interface with a focus on smooth user experience and performance
            optimization.
          </li>
          <li>Participated in code reviews and provided valuable feedback</li>
          <li>Collaborated with cross-functional teams to define and implement new features.</li>
          <li>Maintained and improved existing codebase.</li>
          <li>Fixed bugs and made adjustments based on customer feedback.</li>
        </ul>
      )
    },
  },
  {
    org: 'Freelancer',
    url: '#',
    logo: '/static/images/freelance.png',
    start: 'Jan 2024',
    end: 'May 2024',
    title: 'Freelancer Developer',
    icon: '🛠️',
    event: 'career-freelancer',
    details: () => {
      return (
        <ul className="[&>li]:my-2">
          <li>
            Participated in code reviews and provided valuable feedback, leading to enhanced code
            quality.
          </li>
          <li>Assisted in developing a comprehensive documentation system for the codebase</li>
          <li>Collaborated with the UX/UI team to optimize the user interface.</li>
          <li>Developed and implemented new features.</li>
        </ul>
      )
    },
  },
  {
    org: 'Samsung R&D Center Vietnam',
    url: 'https://web.facebook.com/samsungvietnamrnd',
    logo: '/static/images/srv.jpg',
    start: 'Aug 2023',
    end: 'Oct 2023',
    title: 'Intern Mobile Developer',
    icon: '📱',
    event: 'career-samsung',
    details: () => {
      return (
        <ul className="[&>li]:my-2 ">
          <li>
            Trained in data structures and algorithms, resulting in an increase in efficiency.
          </li>
          <li>Development of features for mini Android projects.</li>
          <li>
            Participated in Samsung Software Testing Certification Programming Contest and earned a
            Certification.
          </li>
        </ul>
      )
    },
  },
  {
    org: 'Academy of Cryptography Techniques',
    url: 'https://actvn.edu.vn/',
    logo: '/static/images/kma.png',
    start: 'Sep 2019',
    end: 'May 2024',
    title: 'Student of KMA',
    icon: '🎓',
    event: 'career-kma',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Graduated with a Good degree in{' '}
            <strong className="dark:text-white">
              Electronics and Telecommunications Engineering.
            </strong>
          </li>
          <li>
            GPA: <strong className="dark:text-white">3.04/4.0</strong>
          </li>
          <li>
            While most of my friends pursued careers in{' '}
            <strong className="dark:text-white"> Electronics and Telecommunications </strong>, I
            found my passion in {''}
            <strong className="dark:text-white">Software Engineering</strong> , particularly in web
            development. This decision has shaped who I am today.
          </li>
        </ul>
      )
    },
  },
]

export default CareerData
