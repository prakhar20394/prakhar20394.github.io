import React, { useMemo, useState, useRef, useEffect } from "react";
import content from "../content.json";
import blogs from "../blog.json";
import {
  Section,
  Shell,
  H1,
  Grid,
  Card,
  CardImage,
  CardBody,
  Tag,
  Title,
  Sub,
  FiltersRow,
  FilterToggle,
  PillsCloud,
  Chip,
  Accent,
} from "../components/UI";
import styled from "styled-components";

const Kicker = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  font-size: 12px;
  margin-bottom: 8px;
`;

const Modal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  background: var(--bg);
  border-radius: 16px;
  width: min(90vw, 1100px);
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  position: relative;
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 640px) {
    width: 95vw;
    flex-direction: column;
  }
`;

const ScrollTracker = styled.div`
  width: 200px;
  padding: 40px 20px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  align-self: flex-start;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 52px;
    width: 2px;
    height: calc(100% - 52px);
    background: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const ProgressLine = styled.div`
  position: absolute;
  left: 0;
  top: 52px;
  width: 2px;
  background: var(--accent);
  transition: height 0.3s ease;
  height: ${(props) => props.$progress}%;
`;

const TrackerItem = styled.div`
  font-size: 13px;
  color: ${(props) => (props.$active ? "var(--accent)" : "var(--muted)")};
  padding: 8px 12px;
  margin-bottom: 4px;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s;
  font-weight: ${(props) => (props.$active ? "600" : "400")};
  border-left: 2px solid
    ${(props) => (props.$active ? "var(--accent)" : "transparent")};
  padding-left: 10px;
  position: relative;

  &:hover {
    color: var(--text);
    background: rgba(0, 0, 0, 0.03);
  }
`;

const TrackerSubItem = styled(TrackerItem)`
  font-size: 12px;
  padding-left: 22px;
  margin-left: 12px;
  border-left: 1px solid
    ${(props) =>
      props.$active ? "var(--accent)" : "rgba(0, 0, 0, 0.1)"};

  &::before {
    content: "";
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${(props) =>
      props.$active ? "var(--accent)" : "var(--muted)"};
    transition: all 0.2s;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 40px;
  overflow-y: auto;
  max-height: 90vh;

  @media (max-width: 640px) {
    padding: 24px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: var(--muted);
  transition: color 0.2s;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  &:hover {
    color: inherit;
    background: rgba(0, 0, 0, 0.05);
  }
`;

const BlogContent = styled.div`
  h2 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
    margin-top: 32px;

    &:first-child {
      margin-top: 0;
    }
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
    margin-top: 24px;
    color: var(--text);
  }

  p {
    line-height: 1.6;
    margin-bottom: 16px;
    color: var(--text);
  }

  img {
    width: 100%;
    border-radius: 8px;
    margin: 24px 0;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 16px;

    li {
      padding-left: 24px;
      margin-bottom: 8px;
      position: relative;

      &::before {
        content: "→";
        position: absolute;
        left: 0;
        color: var(--muted);
      }
    }
  }
`;

export default function Work() {
  const method = content.method[0];

  const allPhases = Object.keys(method);
  const [selected, setSelected] = useState(allPhases); // default: all selected
  const [selectedWork, setSelectedWork] = useState(null);
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const contentRef = useRef(null);
  const sectionRefs = useRef([]);

  const toggle = (name) =>
    setSelected((prev) =>
      prev.includes(name)
        ? prev.length > 1
          ? prev.filter((p) => p !== name)
          : prev
        : [...prev, name]
    );

  const visibleSkills = useMemo(
    () => Array.from(new Set(selected.flatMap((p) => method[p] || []))),
    [selected, method]
  );

  const filteredWork = useMemo(() => {
    if (selected.length === allPhases.length) return content.work;
    return content.work.filter((w) =>
      (w.phases || []).some((p) => selected.includes(p))
    );
  }, [selected, allPhases.length]);

  const handleCardClick = (work, e) => {
    e.preventDefault();
    setSelectedWork(work);
  };

  const closeModal = () => {
    setSelectedWork(null);
    setActiveSection(0);
    setScrollProgress(0);
  };

  // Get blogs related to selected work (based on workId in blog.json)
  const relatedBlogs = useMemo(() => {
    if (!selectedWork?.workId) return [];
    return blogs.filter((blog) => blog.workId === selectedWork.workId);
  }, [selectedWork]);

  // Build flat navigation structure with sections and subsections
  const navItems = useMemo(() => {
    const items = [];
    relatedBlogs.forEach((blog, blogIdx) => {
      blog.sections?.forEach((section, sectionIdx) => {
        const id = `${blogIdx}-${sectionIdx}`;
        items.push({
          id,
          label: section.heading,
          type: "section",
          blogIdx,
          sectionIdx,
        });
        section.subsections?.forEach((subsection, subIdx) => {
          items.push({
            id: `${id}-${subIdx}`,
            label: subsection.heading,
            type: "subsection",
            blogIdx,
            sectionIdx,
            subIdx,
          });
        });
      });
    });
    return items;
  }, [relatedBlogs]);

  // Scroll tracking
  useEffect(() => {
    if (!selectedWork || navItems.length === 0) return;

    const contentElement = contentRef.current;
    if (!contentElement) return;

    const handleScroll = () => {
      const scrollPosition = contentElement.scrollTop + 100;
      const scrollHeight = contentElement.scrollHeight - contentElement.clientHeight;
      const progress = (contentElement.scrollTop / scrollHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      for (let i = sectionRefs.current.length - 1; i >= 0; i--) {
        const section = sectionRefs.current[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(i);
          break;
        }
      }
    };

    contentElement.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => contentElement.removeEventListener("scroll", handleScroll);
  }, [selectedWork, navItems]);

  const scrollToSection = (index) => {
    const section = sectionRefs.current[index];
    if (section && contentRef.current) {
      contentRef.current.scrollTo({
        top: section.offsetTop - 20,
        behavior: "smooth",
      });
    }
  };

  return (
    <Section id="work">
      <Shell>
        
        {/* Method inside Work */}
        <Kicker style={{ marginTop: 18 }}>Work</Kicker>
        <H1>Applying <Accent>first-principle</Accent> thinking to solve problems</H1>

        {/* Filters */}
        <FiltersRow style={{ marginTop: 16, marginBottom: 10 }}>
          {allPhases.map((name) => {
            const active = selected.includes(name);
            return (
              <FilterToggle
                key={name}
                $active={active}
                onClick={() => toggle(name)}
                aria-pressed={active}
              >
                {name}
              </FilterToggle>
            );
          })}
        </FiltersRow>

        {/* Skills from selected phases */}
        <PillsCloud style={{ marginTop: 12 }}>
          {visibleSkills.map((s, i) => (
            <Chip key={i}>{s}</Chip>
          ))}
        </PillsCloud>
        {/* Cards */}
        <Grid style={{ marginTop: 16 }}>
          {filteredWork.map((w, i) => (
            <Card
              key={i}
              as="button"
              onClick={(e) => handleCardClick(w, e)}
              style={{
                background: "none",
                border: "none",
                padding: "0",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <CardImage $img={w.image} />
              <CardBody>
                <Tag>{w.tag}</Tag>
                <Title>{w.title}</Title>
                <Sub>{w.subtitle}</Sub>
                {w.phases && (
                  <Tag style={{ marginTop: 6 }}>{w.phases.join(" · ")}</Tag>
                )}
              </CardBody>
            </Card>
          ))}
        </Grid>

        {/* Modal */}
        {selectedWork && (
          <Modal onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={closeModal}>×</CloseButton>

              {/* Scroll Tracker Sidebar */}
              {navItems.length > 0 && (
                <ScrollTracker>
                  <ProgressLine $progress={scrollProgress} />
                  <div
                    style={{
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "var(--muted)",
                      marginBottom: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Contents
                  </div>
                  {navItems.map((item, idx) =>
                    item.type === "section" ? (
                      <TrackerItem
                        key={item.id}
                        $active={activeSection === idx}
                        onClick={() => scrollToSection(idx)}
                      >
                        {item.label}
                      </TrackerItem>
                    ) : (
                      <TrackerSubItem
                        key={item.id}
                        $active={activeSection === idx}
                        onClick={() => scrollToSection(idx)}
                      >
                        {item.label}
                      </TrackerSubItem>
                    )
                  )}
                </ScrollTracker>
              )}

              {/* Scrollable Content */}
              <ContentWrapper ref={contentRef}>
                <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
                  {selectedWork.title}
                </h1>
                <p style={{ color: "var(--muted)", marginBottom: 24 }}>
                  {selectedWork.subtitle}
                </p>

                <BlogContent>
                  {relatedBlogs.length > 0 ? (
                    relatedBlogs.map((blog) =>
                      blog.sections ? (
                        blog.sections.map((section, sectionIdx) => {
                          const sectionId = `${relatedBlogs.indexOf(blog)}-${sectionIdx}`;
                          const navIdx = navItems.findIndex(
                            (item) => item.id === sectionId
                          );
                          return (
                            <div key={sectionId}>
                              <h2
                                ref={(el) =>
                                  navIdx >= 0 && (sectionRefs.current[navIdx] = el)
                                }
                              >
                                {section.heading}
                              </h2>
                              {section.content?.map((para, pIdx) =>
                                typeof para === "string" &&
                                para.match(/\.(jpg|jpeg|png|gif|webp)$/i) ? (
                                  <img key={pIdx} src={para} alt="" />
                                ) : (
                                  <p key={pIdx}>{para}</p>
                                )
                              )}
                              {section.subsections?.map((subsection, subIdx) => {
                                const subId = `${sectionId}-${subIdx}`;
                                const subNavIdx = navItems.findIndex(
                                  (item) => item.id === subId
                                );
                                return (
                                  <div key={subId}>
                                    <h3
                                      ref={(el) =>
                                        subNavIdx >= 0 &&
                                        (sectionRefs.current[subNavIdx] = el)
                                      }
                                    >
                                      {subsection.heading}
                                    </h3>
                                    {subsection.content?.map((para, pIdx) =>
                                      typeof para === "string" &&
                                      para.match(/\.(jpg|jpeg|png|gif|webp)$/i) ? (
                                        <img key={pIdx} src={para} alt="" />
                                      ) : (
                                        <p key={pIdx}>{para}</p>
                                      )
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          );
                        })
                      ) : (
                        // Fallback for old content structure
                        <div key={blog.slug}>
                          <h2>{blog.title}</h2>
                          {blog.content?.map((para, pIdx) => (
                            <p key={pIdx}>{para}</p>
                          ))}
                        </div>
                      )
                    )
                  ) : (
                    <p>Blog content not available.</p>
                  )}
                </BlogContent>
              </ContentWrapper>
            </ModalContent>
          </Modal>
        )}
      </Shell>
    </Section>
  );
}
