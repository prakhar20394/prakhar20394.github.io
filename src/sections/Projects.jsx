import React from "react";
import content from "../content.json";
import { Section, Shell, H1, Accent } from "../components/UI";
import styled from "styled-components";

const Kicker = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  font-size: 12px;
  margin-bottom: 8px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const ProjectCard = styled.div`
  border: 1px solid var(--rule);
  border-radius: 12px;
  padding: 24px;
  background: var(--card);
  box-shadow: var(--shadow);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    border-color: var(--accent, #0066ff);
    box-shadow: 0 8px 24px rgba(0, 102, 255, 0.12);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const ProjectTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--text);
`;

const ProjectRole = styled.p`
  margin: 0 0 12px 0;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
`;

const ProjectDescription = styled.p`
  margin: 0 0 12px 0;
  font-size: 14px;
  line-height: 1.6;
  color: var(--text);
`;

const ResponsibilityList = styled.ul`
  margin: 0;
  padding-left: 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    font-size: 13px;
    line-height: 1.6;
    color: var(--text);
    position: relative;
    padding-left: 12px;

    &:before {
      content: "→";
      position: absolute;
      left: 0;
      color: var(--muted);
    }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 48px 24px;
  color: var(--muted);
  font-size: 15px;

  p {
    margin: 0;
  }
`;

export default function ProjectsResponsibilities() {
  const projects = content.projects || [];

  return (
    <Section id="projects">
      <Shell>
        <Kicker>Projects & Responsibilities</Kicker>

        <H1 style={{ marginBottom: 8 }}>
          Key <Accent>projects</Accent> and impact
        </H1>

        {projects.length > 0 ? (
          <ProjectsGrid>
            {projects.map((project, i) => (
              <ProjectCard key={i}>
                <ProjectTitle>{project.title}</ProjectTitle>
                {project.role && <ProjectRole>{project.role}</ProjectRole>}
                {project.description && (
                  <ProjectDescription>{project.description}</ProjectDescription>
                )}
                {project.responsibilities && (
                  <ResponsibilityList>
                    {project.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ResponsibilityList>
                )}
              </ProjectCard>
            ))}
          </ProjectsGrid>
        ) : (
          <EmptyState>
            <p>Projects and responsibilities coming soon...</p>
          </EmptyState>
        )}
      </Shell>
    </Section>
  );
}
