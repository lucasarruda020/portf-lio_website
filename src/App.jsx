import { useState } from 'react'
import './App.css'
import dukeGenAI from './assets/dukeGenAI.jpeg'
import llm from './assets/llm.jpeg'
import ragAvancado from './assets/ragavancado.jpeg'

const certificates = [
  {
    title: 'Duke GenAI',
    subtitle: 'Generative AI Foundations',
    image: dukeGenAI,
    note: 'Use this space to add your reflections, key takeaways, or project ideas.',
  },
  {
    title: 'LLM',
    subtitle: 'Large Language Models',
    image: llm,
    note: 'Add what you learned about prompting, evaluation, or real-world use cases here.',
  },
  {
    title: 'RAG Avançado',
    subtitle: 'Retrieval-Augmented Generation',
    image: ragAvancado,
    note: 'Write your notes about vector search, context retrieval, and production patterns.',
  },
]

function App() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleWheel = (event) => {
    event.preventDefault()

    if (event.deltaY > 0) {
      setActiveIndex((current) => (current + 1) % certificates.length)
      return
    }

    setActiveIndex((current) => (current - 1 + certificates.length) % certificates.length)
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
              Hello! I'm Lucas Arruda, welcome to my website! 
            </p>

            <div className="chip-row">
              <span>Generative AI</span>
              <span>Product Design</span>
              <span>Frontend Engineering</span>
              <span>Creative Problem Solving</span>
            </div>

            <div className="hero-actions">
              <a className="button button-primary" href="#about">Start the journey</a>
              <a className="button button-secondary" href="#work">See what I build</a>
            </div>
          </article>

          <aside className="hero-card" aria-label="Intro snapshot">
            <p className="card-label">Now exploring</p>
            <h2>Human-centered AI</h2>
            <p>
              From interfaces to intelligent workflows, I focus on elegant experiences that turn
              complex ideas into useful tools.
            </p>
            <ul className="card-points">
              <li>Fast prototypes with real-world impact</li>
              <li>Clear storytelling for ambitious products</li>
              <li>Thoughtful systems behind the scenes</li>
            </ul>
          </aside>
        </div>

        <div className="scroll-hint">Scroll to explore the next chapters</div>
      </section>

      <section className="certificates-stage" id="certificates" onWheel={handleWheel}>
        <div className="certificates-intro">
          <p className="eyebrow">Certificates</p>
          <h2>Use the mouse wheel to flip through the certificates like a presentation deck.</h2>
          <p className="lead compact">
            Each card stays minimized behind the next one, creating the layered parallax feeling
            you wanted while the active certificate comes forward as you scroll.
          </p>
        </div>

        <div className="certificate-deck" aria-label="Certificate presentation deck">
          {certificates.map((item, index) => {
            const offset = index - activeIndex
            const normalizedOffset = ((offset % certificates.length) + certificates.length) % certificates.length
            const isActive = normalizedOffset === 0
            const depth = Math.min(normalizedOffset, certificates.length - normalizedOffset)
            const translateX = isActive ? 0 : normalizedOffset < 2 ? normalizedOffset * 34 : (normalizedOffset - certificates.length) * 34
            const rotate = isActive ? 0 : normalizedOffset < 2 ? normalizedOffset * 4 : (normalizedOffset - certificates.length) * 4
            const scale = isActive ? 1 : 1 - depth * 0.06

            return (
              <article
                className={`certificate-card deck-card ${isActive ? 'is-active' : ''}`}
                key={item.title}
                style={{
                  transform: `translate(-50%, -50%) translateX(${translateX}px) rotate(${rotate}deg) scale(${scale})`,
                  zIndex: certificates.length - depth,
                  opacity: depth > 1 ? 0.45 : 1,
                }}
              >
                <img src={item.image} alt={item.title} />
                <div className="certificate-body">
                  <p className="card-label">{item.subtitle}</p>
                  <h3>{item.title}</h3>
                  <p className="certificate-copy">{item.note}</p>
                  <label className="note-label" htmlFor={`${item.title}-notes`}>Comment here</label>
                  <textarea
                    id={`${item.title}-notes`}
                    className="note-field"
                    placeholder={`Add a personal note about ${item.title}...`}
                  />
                </div>
              </article>
            )
          })}
        </div>

        <p className="deck-hint">Scroll the mouse wheel to move through the deck</p>
      </section>
    </main>
  )
}

export default App