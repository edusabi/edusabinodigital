import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { FaWhatsapp } from "react-icons/fa";

import {
  ArrowDown,
  ArrowUpRight,
  AtSign,
  Braces,
  ChevronRight,
  Code2,
  Globe,
  MoveRight,
  Terminal,
  Zap,
} from "lucide-react";

const projectsData = [
  {
    number: "01",
    title: "Vyra Performance",
    type: {
      pt: "E-commerce · Front End",
      en: "E-commerce · Front End",
    },
    description: {
      pt: "Catálogo de moda fitness focado em atacado, com variações, carrinho persistente e fechamento do pedido diretamente pelo WhatsApp.",
      en: "Wholesale-focused fitness fashion catalog, featuring variants, persistent cart, and direct WhatsApp checkout.",
    },
    stack: ["React", "UX/UI", "WhatsApp"],
    url: "https://www.vyraperformance.com.br",
    repoUrl: "https://github.com/edusabi/Vyra",
    image: "/vyra.png",
  },
  {
    number: "02",
    title: "Leleli Kids",
    type: {
      pt: "E-commerce · Front End",
      en: "E-commerce · Front End",
    },
    description: {
      pt: "Catálogo de moda feminina infantil focado em atacado, com variações, carrinho persistente e fechamento do pedido diretamente pelo WhatsApp.",
      en: "Wholesale children's fashion catalog, featuring variants, persistent cart, and direct WhatsApp checkout.",
    },
    stack: ["React", "UX/UI", "WhatsApp"],
    url: "https://www.lelelikids.store/",
    repoUrl: "https://github.com/edusabi/lelelikids",
    image: "/leleli.png",
  },
  {
    number: "03",
    title: "Luarê",
    type: {
      pt: "Link na Bio · Atendimento",
      en: "Link in Bio · Customer Service",
    },
    description: {
      pt: "Fluxos inteligentes de atendimento com menu, estados de conversa, respostas humanizadas e integrações para operações reais.",
      en: "Smart customer service flows with menus, conversation states, humanized responses, and integrations for real operations.",
    },
    stack: ["Node.js", "Baileys", "MongoDB"],
    url: "https://www.luare.site/",
    repoUrl: "https://github.com/edusabi/luare",
    image: "/luare.png",
  },
];

const capabilities = [
  "REACT",
  "NODE.JS",
  "JAVASCRIPT",
  "POSTGRESQL",
  "AUTOMAÇÕES",
  "UX/UI",
  "APIs",
];

const translations = {
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      process: "Processo",
      talk: "Vamos conversar",
    },
    hero: {
      available: "Disponível para novos projetos",
      eyebrow: "DESENVOLVEDOR CRIATIVO · BRASIL",
      title1: "EU CRIO",
      title2: "EXPERIÊNCIAS",
      title3: "DIGITAIS",
      desc1: "Transformo ideias em sites, sistemas e automações que unem ",
      descBold: "estética, estratégia e código.",
      viewProjects: "Ver projetos",
      portfolio: "PORTFÓLIO",
    },
    about: {
      label: "Sobre mim",
      lead1:
        "Não construo apenas páginas. Crio pontos de contato digitais que fazem uma marca ser ",
      leadEm: "vista, entendida e lembrada.",
      text:
        "Sou Eduardo Sabino, desenvolvedor focado em experiências web, sistemas completos e automações que resolvem problemas reais. Cada projeto nasce do equilíbrio entre clareza visual, performance e resultado.",
      stats: [
        { v: "10+", l: "Projetos desenvolvidos" },
        { v: "03", l: "Áreas de atuação" },
        { v: "100%", l: "Foco no detalhe" },
      ],
    },
    projectsSec: {
      label: "Projetos selecionados",
      desc: "Uma seleção de produtos, marcas e soluções.",
      access: "Acessar site",
      code: "Ver código",
    },
    process: {
      label: "Como eu trabalho",
      eyebrow: "DO PRIMEIRO RASCUNHO",
      title1: "Ideia em movimento.",
      title2: "Produto em produção.",
      steps: [
        {
          title: "Descoberta",
          desc: "Entendo o negócio, a audiência e o objetivo real do projeto.",
        },
        {
          title: "Direção",
          desc: "Transformo estratégia em arquitetura, interface e identidade.",
        },
        {
          title: "Construção",
          desc: "Desenvolvo, testo e refino até cada interação fazer sentido.",
        },
      ],
    },
    contact: {
      eyebrow: "TEM UMA IDEIA EM MENTE?",
      title1: "VAMOS TIRAR ELA",
      title2: "DO PAPEL.",
      btn: "Iniciar um projeto",
    },
    footer: {
      backTop: "Voltar ao topo",
    },
  },

  en: {
    nav: {
      about: "About",
      projects: "Projects",
      process: "Process",
      talk: "Let's talk",
    },
    hero: {
      available: "Available for new projects",
      eyebrow: "CREATIVE DEVELOPER · BRAZIL",
      title1: "I CREATE",
      title2: "DIGITAL",
      title3: "EXPERIENCES",
      desc1: "I turn ideas into websites, systems, and automations that unite ",
      descBold: "aesthetics, strategy, and code.",
      viewProjects: "View projects",
      portfolio: "PORTFOLIO",
    },
    about: {
      label: "About me",
      lead1:
        "I don't just build pages. I create digital touchpoints that make a brand ",
      leadEm: "seen, understood, and remembered.",
      text:
        "I'm Eduardo Sabino, a developer focused on web experiences, complete systems, and automations that solve real problems. Every project stems from the balance between visual clarity, performance, and results.",
      stats: [
        { v: "10+", l: "Developed projects" },
        { v: "03", l: "Areas of expertise" },
        { v: "100%", l: "Attention to detail" },
      ],
    },
    projectsSec: {
      label: "Selected projects",
      desc: "A selection of products, brands, and solutions.",
      access: "Visit site",
      code: "View code",
    },
    process: {
      label: "How I work",
      eyebrow: "FROM THE FIRST DRAFT",
      title1: "Idea in motion.",
      title2: "Product in production.",
      steps: [
        {
          title: "Discovery",
          desc: "I understand the business, the audience, and the true goal of the project.",
        },
        {
          title: "Direction",
          desc: "I turn strategy into architecture, interface, and identity.",
        },
        {
          title: "Construction",
          desc: "I develop, test, and refine until every interaction makes sense.",
        },
      ],
    },
    contact: {
      eyebrow: "HAVE AN IDEA IN MIND?",
      title1: "LET'S BRING IT",
      title2: "TO LIFE.",
      btn: "Start a project",
    },
    footer: {
      backTop: "Back to top",
    },
  },
};

export default function Home() {
  const pageRef = useRef(null);
  const progressRef = useRef(null);

  const [lang, setLang] = useState("pt");

  const t = translations[lang];

  const toggleLanguage = () => {
    setLang((previousLanguage) =>
      previousLanguage === "pt" ? "en" : "pt",
    );
  };

  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
      once: false,
      mirror: true,
      offset: 80,
      anchorPlacement: "top-bottom",
      debounceDelay: 50,
      throttleDelay: 50,
      disable: false,
    });

    let pointerFrame = 0;
    let refreshFrame = 0;

    const refreshAOS = () => {
      AOS.refreshHard();
    };

    const firstFrame = window.requestAnimationFrame(() => {
      refreshFrame = window.requestAnimationFrame(refreshAOS);
    });

    const refreshTimer = window.setTimeout(refreshAOS, 350);

    const images = pageRef.current?.querySelectorAll("img") ?? [];

    images.forEach((image) => {
      if (!image.complete) {
        image.addEventListener("load", refreshAOS, {
          once: true,
        });
      }
    });

    if (document.fonts?.ready) {
      document.fonts.ready
        .then(refreshAOS)
        .catch(() => {});
    }

    const updateProgress = () => {
      if (!progressRef.current) return;

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        totalHeight > 0 ? window.scrollY / totalHeight : 0;

      progressRef.current.style.transform = `scaleX(${progress})`;
    };

    const updatePointer = (event) => {
      if (!pageRef.current) return;

      window.cancelAnimationFrame(pointerFrame);

      pointerFrame = window.requestAnimationFrame(() => {
        pageRef.current?.style.setProperty(
          "--pointer-x",
          `${event.clientX}px`,
        );

        pageRef.current?.style.setProperty(
          "--pointer-y",
          `${event.clientY}px`,
        );
      });
    };

    updateProgress();

    window.addEventListener("load", refreshAOS);
    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });
    window.addEventListener("pointermove", updatePointer, {
      passive: true,
    });

    return () => {
      window.clearTimeout(refreshTimer);
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(refreshFrame);
      window.cancelAnimationFrame(pointerFrame);

      window.removeEventListener("load", refreshAOS);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("pointermove", updatePointer);

      images.forEach((image) => {
        image.removeEventListener("load", refreshAOS);
      });
    };
  }, []);

  useEffect(() => {
    const refreshTimer = window.setTimeout(() => {
      AOS.refreshHard();
    }, 50);

    return () => {
      window.clearTimeout(refreshTimer);
    };
  }, [lang]);

  return (
    <div className="site-shell" ref={pageRef}>
      <div
        className="scroll-progress"
        ref={progressRef}
        aria-hidden="true"
      />

      <div className="pointer-light" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <header
        className="header"
        data-aos="fade-down"
        data-aos-duration="650"
      >
        <a
          className="brand"
          href="#inicio"
          aria-label="Ir para o início"
        >
          <img
            src="/logoInstagram.png"
            alt="Logo de Eduardo Sabino"
            width="50"
            height="50"
            style={{ borderRadius: "50%" }}
          />
        </a>

        <nav
          className="nav"
          aria-label="Navegação principal"
        >
          <a href="#sobre">{t.nav.about}</a>
          <a href="#projetos">{t.nav.projects}</a>
          <a href="#processo">{t.nav.process}</a>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="lang-toggle"
            onClick={toggleLanguage}
            aria-label="Mudar idioma"
          >
            <Globe size={15} />

            <span>
              {lang === "pt" ? "EN" : "PT"}
            </span>
          </button>

          <a
            className="header-cta"
            href="#contato"
          >
            {t.nav.talk}

            <ArrowUpRight
              size={15}
              strokeWidth={1.8}
            />
          </a>
        </div>
      </header>

      <main>
        <section
          className="hero"
          id="inicio"
        >
          <div
            className="hero-grid"
            aria-hidden="true"
            data-aos="fade-left"
            data-aos-duration="1100"
          />

          <div
            className="hero-orbit"
            aria-hidden="true"
          >
            <span />
          </div>

          <div
            className="hero-kicker"
            data-aos="fade-right"
            data-aos-delay="110"
          >
            <span className="availability-dot" />

            {t.hero.available}
          </div>

          <div className="hero-copy">
            <p
              className="eyebrow"
              data-aos="fade-up"
              data-aos-delay="110"
            >
              {t.hero.eyebrow}
            </p>

            <h1 aria-label="Eu crio experiências digitais">
              <span
                data-aos="fade-up"
                data-aos-delay="40"
              >
                {t.hero.title1}
              </span>

              <span
                className="outlined"
                data-aos="fade-up"
                data-aos-delay="110"
              >
                {t.hero.title2}
              </span>

              <span
                data-aos="fade-up"
                data-aos-delay="180"
              >
                {t.hero.title3}

                <span className="accent-dot">.</span>
              </span>
            </h1>
          </div>

          <div
            className="hero-bottom"
            data-aos="fade-up"
            data-aos-delay="260"
          >
            <p>
              {t.hero.desc1}

              <strong>
                {t.hero.descBold}
              </strong>
            </p>

            <a
              className="scroll-link"
              href="#projetos"
            >
              {t.hero.viewProjects}

              <ArrowDown size={17} />
            </a>
          </div>

          <div
            className="hero-index"
            aria-hidden="true"
            data-aos="fade-left"
            data-aos-delay="320"
          >
            <span>{t.hero.portfolio}</span>
            <span>© 2026</span>
          </div>
        </section>

        <section
          className="about section"
          id="sobre"
        >
          <div className="about-sidebar">
            <div
              className="section-label"
              data-aos="fade-right"
            >
              <span>01</span>

              {t.about.label}
            </div>

            <div
              className="about-image-container"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="/fotoMinha.png"
                alt="Eduardo Sabino"
                className="about-image"
              />

              <div className="image-overlay" />
            </div>
          </div>

          <div className="about-content">
            <p
              className="about-lead"
              data-aos="fade-up"
            >
              {t.about.lead1}

              <em>
                {t.about.leadEm}
              </em>
            </p>

            <div className="about-grid">
              <div
                className="about-note"
                data-aos="fade-up"
              >
                <Terminal
                  size={20}
                  strokeWidth={1.5}
                />

                <p>
                  {t.about.text}
                </p>
              </div>

              <div
                className="stats"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {t.about.stats.map((stat) => (
                  <div key={stat.l}>
                    <strong>{stat.v}</strong>
                    <span>{stat.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="projects section"
          id="projetos"
        >
          <div className="projects-heading">
            <div
              className="section-label"
              data-aos="fade-right"
            >
              <span>02</span>

              {t.projectsSec.label}
            </div>

            <p data-aos="fade-left">
              {t.projectsSec.desc}
            </p>
          </div>

          <div className="project-list">
            {projectsData.map((project, index) => (
              <article
                className="project-card"
                key={project.title}
                data-aos="fade-up"
                data-aos-delay={Math.min(index * 70, 210)}
              >
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span>{project.type[lang]}</span>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-visual-link"
                  aria-label={`Visitar o site do projeto ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={`Captura de tela do projeto ${project.title}`}
                    className="project-screenshot"
                    loading="lazy"
                  />

                  <div className="screenshot-overlay">
                    <span>
                      {t.projectsSec.access}

                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </a>

                <div className="project-info">
                  <div>
                    <h2>{project.title}</h2>

                    <p>
                      {project.description[lang]}
                    </p>
                  </div>

                  <div className="project-footer">
                    <ul
                      aria-label={`Tecnologias do projeto ${project.title}`}
                    >
                      {project.stack.map((item) => (
                        <li key={item}>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Ver código do ${project.title} no GitHub`}
                    >
                      {t.projectsSec.code}

                      <Code2 size={15} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="capabilities"
          aria-label="Tecnologias e habilidades"
          data-aos="fade-up"
        >
          <div className="marquee-track">
            {[...capabilities, ...capabilities].map(
              (item, index) => (
                <span key={`${item}-${index}`}>
                  {item}

                  <i>✦</i>
                </span>
              ),
            )}
          </div>
        </section>

        <section
          className="process section"
          id="processo"
        >
          <div
            className="section-label"
            data-aos="fade-right"
          >
            <span>03</span>

            {t.process.label}
          </div>

          <div className="process-content">
            <div
              className="process-title"
              data-aos="fade-up"
            >
              <p>
                {t.process.eyebrow}
              </p>

              <h2>
                {t.process.title1}

                <br />

                {t.process.title2}
              </h2>
            </div>

            <ol className="process-list">
              {t.process.steps.map((step, index) => {
                const Icon =
                  index === 0
                    ? Braces
                    : index === 1
                      ? Zap
                      : ChevronRight;

                return (
                  <li
                    data-aos="fade-up"
                    data-aos-delay={index * 90}
                    key={step.title}
                  >
                    <span>
                      0{index + 1}
                    </span>

                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>

                    <Icon aria-hidden="true" />
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section
          className="contact"
          id="contato"
        >
          <div
            className="contact-glow"
            aria-hidden="true"
          />

          <p data-aos="fade-up">
            {t.contact.eyebrow}
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="60"
          >
            {t.contact.title1}

            <span>
              {t.contact.title2}
            </span>
          </h2>

          <a
            className="contact-link"
            href="https://www.instagram.com/edusabino.digital/"
            target="_blank"
            rel="noreferrer"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            {t.contact.btn}

            <MoveRight size={25} />
          </a>
        </section>
      </main>

      <footer
        className="footer"
        data-aos="fade-up"
        data-aos-offset="20"
      >
        <div>
          <a
            href="https://github.com/edusabi"
            target="_blank"
            rel="noreferrer"
          >
            <Code2 size={17} />
            GitHub
          </a>

          <a
            href="https://www.instagram.com/edusabino.digital/"
            target="_blank"
            rel="noreferrer"
          >
            <AtSign size={17} />
            Instagram
          </a>

          <a
            href="https://wa.me/5581995594773"
          >
            <FaWhatsapp size={17} />
            WhatsApp
          </a>
        </div>

        <p>© 2026 Eduardo Sabino</p>

        <a href="#inicio">
          {t.footer.backTop}

          <ArrowDown
            className="footer-arrow"
            size={16}
          />
        </a>
      </footer>
    </div>
  );
}