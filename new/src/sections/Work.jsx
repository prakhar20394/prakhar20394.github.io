import React, { useMemo, useState } from "react";
import content from "../content.json";
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
} from "../components/UI";
import styled from "styled-components";

const Kicker = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  font-size: 12px;
  margin-bottom: 8px;
`;

export default function Work() {
  const method = content.method[0];

  const allPhases = Object.keys(method);
  const [selected, setSelected] = useState(allPhases); // default: all selected

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

  return (
    <Section id="work">
      <Shell>
        <Kicker>Work</Kicker>
        <H1>AI product work across domains</H1>
        {/* Cards */}
        <Grid style={{ marginTop: 16 }}>
          {filteredWork.map((w, i) => (
            <Card
              key={i}
              href={w.href || "#"}
              target={w.href ? "_blank" : undefined}
              rel="noreferrer"
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

        {/* Method inside Work */}
        <Kicker style={{ marginTop: 18 }}>Method</Kicker>
        <H1>Applying first-principles thinking to solve problems</H1>

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
      </Shell>
    </Section>
  );
}
