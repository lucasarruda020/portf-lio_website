import { useEffect, useRef, useState } from 'react'
import './App.css'
/* Imagens   */
import dukeGenAI from './assets/CVs/dukeGenAI.jpeg'
import llm from './assets/CVs/llm.jpeg'
import ragAvancado from './assets/CVs/ragavancado.jpeg'
import cienciadados from './assets/CVs/Cientistadedadospy.jpg'
import quantica from './assets/CVs/computacao_quantica.jpg'
import fiapDEVOPS from './assets/CVs/FIapDEVOPS.jpg'
import KerasRedes from './assets/CVs/KerasRedesNeurais.jpg'
import OracleJava from './assets/CVs/oracleJava.jpg'
import pensamento from './assets/CVs/pensamentoComputacional.jpg'
import pycomIA from './assets/CVs/pythoncomIA.jpg'
import fiapJAVA from './assets/CVs/FIAPJavaFundamentos.jpg'
import handspeakPhoto from './assets/project/handspeak.jpg'
import handspeakDemo from './assets/project/handspeakdemonstration.gif'
import pyImage from './assets/project/py.jpg'
import vectorImage from './assets/project/vectors.jpg'
import trindadeLogo from './assets/storyLine/trindade.png'
import trindadeTeamAll from './assets/storyLine/trindade_equipetoda.jpeg'
import trindadeTeam from './assets/storyLine/trindade_time.jpg'
import trindadeBirthday from './assets/storyLine/trindade_niver.jpg'
import huaweiLogo from './assets/storyLine/huawei.png'
import huaweiFirstDay from './assets/storyLine/huawei_primeirodia.jpg'
import huaweiWorking from './assets/storyLine/huawei_trabalhando.jpg'
import huaweiChess from './assets/storyLine/huawei_chess.jpg'
import huaweiTeam from './assets/storyLine/huawei_equipe.jpg'
import keetaLogo from './assets/storyLine/keeta.png'
import keetaFirstDay from './assets/storyLine/Keeta_primeiroDia.jpg'
import keetaTeam from './assets/storyLine/keeta_equipe.jpg'
import keetaRio1 from './assets/storyLine/keeta_rio1.jpg'
import keetaRio2 from './assets/storyLine/Keeta_rio2.jpg'
import keetaLaunch from './assets/storyLine/Keeta_launch.jpg'

const certificates = [
  {
    title: 'GenAI Basics - How LLMs Work',
    subtitle: 'Duke University',
    image: dukeGenAI,
    note: 'To understand LLM and how works one Generative AI',
  },
  {
    title: 'Architecture with RAG & LangChain',
    subtitle: 'Alura',
    image: llm,
    note: 'Using Langchain with advanced functions with RAG and OpenAI with Python',
  },
  {
    title: 'RAG Advanced',
    subtitle: 'Alura',
    image: ragAvancado,
    note: 'How a RAG works and how to use advanced techniques to improve its architecture.',
  },
  {
    title: 'Neural Networks with Keras',
    subtitle: 'Alura',
    image: KerasRedes,
    note: 'How to use Keras and build MLP.',
  },
  {
    title: 'Neural Networks with Keras',
    subtitle: 'Alura',
    image: pycomIA,
    note: 'How to conect python with API from OpenAI.',
  },
  {
    title: 'Java Fundamentals',
    subtitle: 'Oracle',
    image: OracleJava,
    note: 'How Java, the object-oriented language, works.',
  },
  {
    title: 'Devops e Agile Culture',
    subtitle: 'FIAP',
    image: fiapDEVOPS,
    note: 'Tools and concepts of Scrum, DevOps, and Agile cultures to implement in your work.',
  },
  {
    title: 'Java Fundamentals',
    subtitle: 'FIAP',
    image: fiapJAVA,
    note: 'How Java, the object-oriented language, works.',
  },
  {
    title: 'Quantum Engineer for Computers',
    subtitle: 'Anima',
    image: quantica,
    note: 'How quantum computers work and how to use QuBits.',
  },
  {
    title: 'DataScience With Python',
    subtitle: 'Udemy',
    image: cienciadados,
    note: 'How improve your data using Pandas in Python, whole process to be a data scientist.',
  },
  {
    title: 'Computational thinking and programming logic',
    subtitle: 'Alura',
    image: pensamento,
    note: 'How programming logic works.',
  },
]

const projectStory = [
  {
    eyebrow: 'Stage 01',
    title: 'Built with Python',
    description:
      'HandSpeak started in Python, where I built the recognition flow and the logic that interprets hand movement over time.',
    image: pyImage,
    alt: 'Python used to build HandSpeak',
    accent: 'Python pipeline',
  },
  {
    eyebrow: 'Stage 02',
    title: 'Powered by a vector database',
    description:
      'The project uses a vector database to compare patterns and match each movement against learned sign representations.',
    image: vectorImage,
    alt: 'Vector database concept used in HandSpeak',
    accent: 'Vector similarity',
  },
  {
    eyebrow: 'Stage 03',
    title: 'Reading Libras through hand vectors',
    description:
      'HandSpeak reads the hand landmarks, the lines and vectors from the gesture, and the motion history from the last 5 seconds to understand the sign.',
    image: handspeakPhoto,
    alt: 'HandSpeak reading the lines and vectors of a hand',
    accent: '5-second gesture memory',
  },
  {
    eyebrow: 'Stage 04',
    title: 'Real demonstration',
    description:
      'This live demonstration shows the project working in practice, recognizing Libras with temporal context, geometry, and AI inference.',
    image: handspeakDemo,
    alt: 'Live demonstration of HandSpeak',
    accent: 'HandSpeak demo',
  },
]

const careerStory = [
  {
    eyebrow: 'Step 01',
    company: 'Trindade Tecnologia',
    role: 'Technical Support Intern',
    logo: trindadeLogo,
    description:
      'Trindade Tecnologia is an ERP company for health insurance brokers. I joined as a Technical Support Intern in a small company with fewer than 50 employees, based in Praca da Republica, where I received my first opportunity in the job market.',
    images: [
      {
        src: trindadeTeamAll,
        alt: 'The full Trindade Tecnologia team',
      },
    ],a8 
  },
  {
    eyebrow: 'Step 02',
    company: 'Trindade Tecnologia',
    role: 'Operating System and Product Support',
    logo: trindadeLogo,
    description:
      'I was placed in the operating system and product support team, where we helped several brokerages through ticket-based solutions. That experience was very important for developing my communication and problem-management skills.',
    images: [
      {
        src: trindadeTeam,
        alt: 'Trindade Tecnologia support team',
      },
    ],
  },
  {
    eyebrow: 'Step 03',
    company: 'Trindade Tecnologia',
    role: 'A memorable first chapter',
    logo: trindadeLogo,
    description:
      'It is a place where I only carry good memories. They always treated me very well and saw strong potential in me. I still keep in touch with some of them today, and that experience became the first real step of my professional journey.',
    images: [
      {
        src: trindadeBirthday,
        alt: 'A celebration moment at Trindade Tecnologia',
      },
    ],
  },
  {
    eyebrow: 'Step 04',
    company: 'Huawei',
    role: 'Software Developer Intern',
    logo: huaweiLogo,
    description:
      'Huawei is the Chinese giant considered one of the biggest technology companies in the world. Passing its selection process was a huge moment for me. There were four interviews in total, and I went through each one excited, anxious, and highly motivated. Joining that company felt like a dream coming true.',
    images: [
      {
        src: huaweiFirstDay,
        alt: 'First day at Huawei',
      },
    ],
  },
  {
    eyebrow: 'Step 05',
    company: 'Huawei',
    role: 'Automation, support, and development',
    logo: huaweiLogo,
    description:
      'There I developed strong technical skills. We built Python automations with Pandas, scraping, and web crawlers. We also supported a C++ system and contributed to projects involving Java and Vue.js, which became extremely important for my professional growth across Brazil and LATAM operations.',
    images: [
      {
        src: huaweiWorking,
        alt: 'Working at Huawei',
      },
    ],
  },
  {
    eyebrow: 'Step 06',
    company: 'Huawei',
    role: 'International exchange and learning',
    logo: huaweiLogo,
    description:
      'At Huawei I even took part in a memorable Brazil versus China chess match. Liao was one of the international colleagues who impressed me the most with his intelligence and his ability to share knowledge through concise but powerful explanations.',
    images: [
      {
        src: huaweiChess,
        alt: 'Chess match at Huawei',
      },
    ],
  },
  {
    eyebrow: 'Step 07',
    company: 'Huawei',
    role: 'An international team that shaped me',
    logo: huaweiLogo,
    description:
      'Working in an international team helped me strengthen my English and dive deeper into Chinese culture. I built connections with people from different countries and learned from everyone around me. I feel I was shaped extremely well for the professional environment thanks to my manager Thiago and mentors Zhang Dongxu, Xiaohu, Rodrigues, and Luciana.',
    images: [
      {
        src: huaweiTeam,
        alt: 'Huawei team',
      },
    ],
  },
  {
    eyebrow: 'Step 08',
    company: 'Keeta Delivery Brazil',
    role: 'API Integration Supervisor',
    logo: keetaLogo,
    description:
      'Keeta is a food delivery company that arrived in Brazil in 2025. They invited me before operations started, and I was able to be part of the first day-one API team. That created a strong bond with my colleagues while we explored processes and challenges in a field that was completely new to me.',
    images: [
      {
        src: keetaFirstDay,
        alt: 'First day at Keeta Delivery Brazil',
      },
    ],
  },
  {
    eyebrow: 'Step 09',
    company: 'Keeta Delivery Brazil',
    role: 'Business communication and API support',
    logo: keetaLogo,
    description:
      'At Keeta I developed my communication with the business team and improved my ability to transfer knowledge and support the systems integrating with our APIs. Understanding the urgency of the launch, I helped make the process smoother and more successful as part of the machine that keeps Keeta moving.',
    images: [
      {
        src: keetaTeam,
        alt: 'Keeta team',
      },
    ],
  },
  {
    eyebrow: 'Step 10',
    company: 'Keeta Delivery Brazil',
    role: 'My first business trip',
    logo: keetaLogo,
    description:
      'Because of my performance, I was selected to travel alone to Rio de Janeiro to support the launch that was expected for March. Even though other strategies appeared along the way, this became my first business trip, and it will always remain special to me.',
    images: [
      {
        src: keetaRio1,
        alt: 'Keeta trip to Rio de Janeiro photo one',
      },
      {
        src: keetaRio2,
        alt: 'Keeta trip to Rio de Janeiro photo two',
      },
    ],
  },
  {
    eyebrow: 'Step 11',
    company: 'Keeta Delivery Brazil',
    role: 'Current full-time chapter',
    logo: keetaLogo,
    description:
      'Today I continue working at Keeta, helping the daily operation with the high-performance mindset I try to bring every morning. In the photo, my friend Enzo and I are working side by side as part of TIM, the Technical Integrations team.',
    images: [
      {
        src: keetaLaunch,
        alt: 'Keeta launch moment',
      },
    ],
  },
]

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeStoryIndex, setActiveStoryIndex] = useState(0)
  const [activeCareerIndex, setActiveCareerIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDraggingCertificates, setIsDraggingCertificates] = useState(false)
  const certificatePointerIdRef = useRef(null)
  const certificateDragStartXRef = useRef(0)
  const storyRefs = useRef([])
  const careerRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio)

        if (visibleEntries[0]) {
          setActiveStoryIndex(Number(visibleEntries[0].target.dataset.index))
        }
      },
      {
        threshold: [0.35, 0.55, 0.75],
        rootMargin: '-10% 0px -15% 0px',
      },
    )

    const elements = storyRefs.current.filter(Boolean)
    elements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio)

        if (visibleEntries[0]) {
          setActiveCareerIndex(Number(visibleEntries[0].target.dataset.index))
        }
      },
      {
        threshold: [0.35, 0.55, 0.75],
        rootMargin: '-10% 0px -15% 0px',
      },
    )

    const elements = careerRefs.current.filter(Boolean)
    elements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
    }
  }, [])

  const changeCertificate = (direction) => {
    setActiveIndex((current) => (current + direction + certificates.length) % certificates.length)
  }

  const handleCertificatePointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) {
      return
    }

    certificatePointerIdRef.current = event.pointerId
    certificateDragStartXRef.current = event.clientX
    setIsDraggingCertificates(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handleCertificatePointerMove = (event) => {
    if (!isDraggingCertificates || certificatePointerIdRef.current !== event.pointerId) {
      return
    }

    const nextDragOffset = event.clientX - certificateDragStartXRef.current
    setDragOffset(nextDragOffset)
  }

  const handleCertificatePointerEnd = (event) => {
    if (!isDraggingCertificates || certificatePointerIdRef.current !== event.pointerId) {
      return
    }

    const swipeThreshold = 90

    if (dragOffset <= -swipeThreshold) {
      changeCertificate(1)
    } else if (dragOffset >= swipeThreshold) {
      changeCertificate(-1)
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }

    certificatePointerIdRef.current = null
    certificateDragStartXRef.current = 0
    setIsDraggingCertificates(false)
    setDragOffset(0)
  }

  return (
    <main className="page-shell">
      <section className="hero-stage">
        <div className="parallax-layer parallax-backdrop" />
        <div className="parallax-layer parallax-glow glow-one" />
        <div className="parallax-layer parallax-glow glow-two" />
        <div className="parallax-layer parallax-grid" />

        <div className="hero-content">
          <article className="hero-copy">
            <p className="eyebrow">AI Engineer • Data Science • Back-end Developer</p>
            <h1>Lucas Arruda</h1>
            <p className="lead">
              Hello! Welcome to my website:
            </p>

            <div className="chip-row">
              <span>email📧: lucasarruda020@gmail.com</span>
              <span>Telphone📞: +55 11 99974-3055</span>
              <span>Linkedin: https://www.linkedin.com/in/lucasarruda-silva/</span>
              <span>GitHub: https://github.com/lucasarruda020</span>
              <span>Age: 24🎂</span>
              <span>Location📍: São Paulo, Brazil</span>
            </div>

            <div className="hero-actions">
              <a className="button button-secondary" href="#about">Working💻: Keeta API Integration</a>
              <a className="button button-secondary" href="#work">Studying📚: MBA Data Science and IA Generation at USP</a>
              <a className="button button-secondary" href="#work">Undergrad👷🏻: Computer Engineer on-site 2020-2025</a>
            </div>
          </article>

          <aside className="hero-card" aria-label="Intro snapshot">
            <p className="card-label">About me</p>
            <h2>Focus in AI</h2>
            <p>
              With a degree in computer engineering and currently studying data science and AI engineering, I am intensely studying everything related to neural networks, machine learning, RAGs, LangChain, and machine learning, including feedforward and backpropagation.
            </p>
            <ul className="card-points">
              <li>Created Agents in Keeta</li>
              <li>Worked with Pandas in Huawei as Software developer</li>
            </ul>
          </aside>
        </div>

        <div className="scroll-hint"></div>
      </section>

      <section className="certificates-stage" id="certificates">
        <div className="certificates-intro">
          <p className="eyebrow">drag sideways to see all</p>
          <h2>Certificates</h2>
          <p className="lead compact">
            Drag to the left ⬅️ or to the right ➡️ to see all my certificates
          </p>
        </div>

        <div
          className={`certificate-deck ${isDraggingCertificates ? 'is-dragging' : ''}`}
          aria-label="Certificate presentation deck"
          onPointerDown={handleCertificatePointerDown}
          onPointerMove={handleCertificatePointerMove}
          onPointerUp={handleCertificatePointerEnd}
          onPointerCancel={handleCertificatePointerEnd}
        >
          {certificates.map((item, index) => {
            const offset = index - activeIndex
            const normalizedOffset = ((offset % certificates.length) + certificates.length) % certificates.length
            const isActive = normalizedOffset === 0
            const depth = Math.min(normalizedOffset, certificates.length - normalizedOffset)
            const baseTranslateX = isActive
              ? 0
              : normalizedOffset < 2
                ? normalizedOffset * 34
                : (normalizedOffset - certificates.length) * 34
            const rotate = isActive
              ? 0
              : normalizedOffset < 2
                ? normalizedOffset * 4
                : (normalizedOffset - certificates.length) * 4
            const scale = isActive ? 1 : 1 - depth * 0.06
            const translateX = baseTranslateX + dragOffset * 0.35

            return (
              <article
                className={`certificate-card deck-card ${isActive ? 'is-active' : ''}`}
                key={`${item.title}-${index}`}
                style={{
                  transform: `translate(-50%, -50%) translateX(${translateX}px) rotate(${rotate}deg) scale(${scale})`,
                  zIndex: certificates.length - depth,
                  opacity: depth > 1 ? 0.45 : 1,
                }}
              >
                <img src={item.image} alt={item.title} draggable={false} />
                <div className="certificate-body">
                  <p className="card-label">{item.subtitle}</p>
                  <h3>{item.title}</h3>
                  <p className="certificate-copy">{item.note}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="projects-stage" id="projects">
        <div className="projects-intro">
          <p className="eyebrow">Project Story</p>
          <h2>HandSpeak</h2>
          <p className="lead compact">
            A scroll-based storyline about the AI project I built with Python, vector similarity, and hand gesture history to read Libras.
          </p>
        </div>

        <div className="story-shell">
          <div className="story-visual-column">
            <div className="story-visual-frame">
              {projectStory.map((step, index) => (
                <figure
                  className={`story-media ${index === activeStoryIndex ? 'is-active' : ''}`}
                  key={step.title}
                >
                  <img src={step.image} alt={step.alt} />
                  <figcaption>
                    <span>{step.eyebrow}</span>
                    <strong>{step.accent}</strong>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="story-steps">
            {projectStory.map((step, index) => (
              <article
                className={`story-step ${index === activeStoryIndex ? 'is-active' : ''}`}
                data-index={index}
                key={`${step.title}-${index}`}
                ref={(element) => {
                  storyRefs.current[index] = element
                }}
              >
                <div className="story-step-card">
                  <p className="card-label">{step.eyebrow}</p>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="career-stage" id="career-story">
        <div className="career-intro">
          <p className="eyebrow">Career Story</p>
          <h2>From my first internship to my current full-time role</h2>
          <p className="lead compact">
            A visual timeline of the companies that shaped my journey, from technical support to software development and API integration leadership.
          </p>
        </div>

        <div className="career-shell">
          <div className="career-visual-column">
            <div className="career-visual-frame">
              {careerStory.map((step, index) => (
                <figure
                  className={`career-media ${index === activeCareerIndex ? 'is-active' : ''}`}
                  key={`${step.company}-${step.role}-${index}`}
                >
                  <div className={`career-media-stack ${step.images.length > 1 ? 'is-split' : ''}`}>
                    {step.images.map((image) => (
                      <img key={image.alt} src={image.src} alt={image.alt} />
                    ))}
                  </div>
                  <figcaption>
                    <span>{step.company}</span>
                    <strong>{step.role}</strong>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="career-steps">
            {careerStory.map((step, index) => (
              <article
                className={`career-step ${index === activeCareerIndex ? 'is-active' : ''}`}
                data-index={index}
                key={`${step.company}-${step.role}-${index}`}
                ref={(element) => {
                  careerRefs.current[index] = element
                }}
              >
                <div className="career-step-card">
                  <img className="career-company-logo" src={step.logo} alt={`${step.company} logo`} />
                  <p className="card-label">{step.eyebrow}</p>
                  <h3>{step.company}</h3>
                  <h4>{step.role}</h4>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
