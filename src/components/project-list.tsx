"use client";

import { useMemo, useState } from "react";
import { PROJECTS, PROJECT_TYPES } from "@/lib/site";
import { Icon } from "./icons";
import { Shot, StackDots } from "./project-card";

const STACKS = [...new Set(PROJECTS.flatMap((p) => p.stack))].sort();

/** Repository-list view of every project, with search and two filters. */
export function ProjectList() {
  const [q, setQ] = useState("");
  const [type, setType] = useState("");
  const [stack, setStack] = useState("");

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return PROJECTS.filter(
      (p) =>
        (!needle ||
          `${p.title} ${p.purpose} ${p.stack.join(" ")}`.toLowerCase().includes(needle)) &&
        (!type || p.type.includes(type)) &&
        (!stack || p.stack.includes(stack))
    );
  }, [q, type, stack]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-line pb-4">
        <label
          htmlFor="project-search"
          className="flex h-[34px] flex-[1_1_260px] items-center gap-2 rounded-lg border border-line bg-surface px-2.5 focus-within:border-accent focus-within:shadow-[0_0_0_3px_var(--accent-soft)]"
        >
          <Icon name="search" className="h-4 w-4 text-muted" />
          <input
            id="project-search"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Find a project…"
            autoComplete="off"
            className="w-full min-w-0 bg-transparent outline-none"
          />
        </label>
        <select
          aria-label="Filter by type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="btn"
        >
          <option value="">Type: All</option>
          {PROJECT_TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <select
          aria-label="Filter by stack"
          value={stack}
          onChange={(e) => setStack(e.target.value)}
          className="btn"
        >
          <option value="">Stack: All</option>
          {STACKS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      {list.length === 0 ? (
        <p className="py-10 text-center text-muted">
          No project matches those filters.{" "}
          <button
            type="button"
            className="text-accent hover:underline"
            onClick={() => {
              setQ("");
              setType("");
              setStack("");
            }}
          >
            Clear filters
          </button>
        </p>
      ) : (
        <ul>
          {list.map((p) => (
            <li
              key={p.id}
              className="grid gap-3.5 border-b border-line py-[22px] md:grid-cols-[minmax(0,1fr)_180px] md:gap-6"
            >
              <div className="min-w-0">
                <h2 className="flex flex-wrap items-center gap-2.5 text-[19px] font-semibold">
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {p.title}
                  </a>
                  <span className="badge badge-live">Live</span>
                  <span className="badge">{p.type}</span>
                </h2>
                <p className="mt-2 mb-3 max-w-[66ch] text-muted">{p.purpose}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12.5px] text-muted">
                  <StackDots stack={p.stack} />
                  <span>{p.own ? "Own product" : "Built at PKG IT"}</span>
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent hover:underline"
                  >
                    Visit <Icon name="external" className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
              <Shot project={p} sizes="(min-width: 768px) 180px, 100vw" className="-order-1 rounded-lg border border-line md:order-none" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
