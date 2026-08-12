"use client";

import { Section, SectionInner, SectionHead } from "../section";
import { Coverflow } from "../coverflow";

export function Projects() {
  return (
    <Section id="projects">
      <SectionInner>
        <SectionHead title="Live projects." />
        <Coverflow />
      </SectionInner>
    </Section>
  );
}
