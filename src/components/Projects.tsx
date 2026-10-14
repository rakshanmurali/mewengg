import { useState } from "react";
import {
  ongoingProjects,
  completedProjects,
  type ProjectRow,
} from "../data/content";

function ProjectGrid({ rows }: { rows: ProjectRow[] }) {
  return (
    <div className="project-grid">
      {rows.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="project-card-top">
            <h3>{project.name}</h3>
            <span className="project-value">{project.value}</span>
          </div>

          <p>{project.work}</p>
        </div>
      ))}
    </div>
  );
}

export default function Projects() {
  const [tab, setTab] = useState<"ongoing" | "completed">("ongoing");

  return (
    <section id="projects" className="section projects">
      <div className="wrap">

        <div className="section-head">
          <div className="eyebrow">TRACK RECORD</div>
          <h2>Projects Successfully Delivered</h2>
        </div>

        <div className="proj-tabs">
          <button
            className={tab === "ongoing" ? "is-active" : ""}
            onClick={() => setTab("ongoing")}
          >
            Ongoing ({ongoingProjects.length})
          </button>

          <button
            className={tab === "completed" ? "is-active" : ""}
            onClick={() => setTab("completed")}
          >
            Completed ({completedProjects.length})
          </button>
        </div>

        <ProjectGrid
          rows={tab === "ongoing" ? ongoingProjects : completedProjects}
        />

      </div>
    </section>
  );
}