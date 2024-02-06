import Link from "next/link";
import Section from "./section";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import GitHubIcon from "@mui/icons-material/GitHub";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import projectData from "@/data/projects.json";

export default function Projects({ lang }: { lang: "fr" | "eng" }) {
  const data = projectData[lang];
  return (
    <Section id="projects" title="Mes projets">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {data.map((pr) => (
          <Card key={pr.title} info={pr} />
        ))}
      </div>
    </Section>
  );
}

function Card({ info }: { info: any }) {
  return (
    <div className="flex flex-col gap-8 rounded-xl bg-secondary p-10">
      <div className="flex gap-2.5">
        <FolderOpenIcon className="text-primary" style={{ fontSize: 40 }} />
        {info.github !== "" && (
          <Link
            className="ml-auto hover:text-primary"
            href={info.github}
            target="_blank"
          >
            <GitHubIcon style={{ fontSize: 23 }}></GitHubIcon>
          </Link>
        )}
        {info.host !== "" && (
          <Link className="hover:text-primary" href={info.host} target="_blank">
            <DriveFolderUploadIcon
              style={{ fontSize: 25 }}
            ></DriveFolderUploadIcon>
          </Link>
        )}
      </div>
      <h2 className="text-3xl text-heading">{info.title}</h2>
      <p>{info.description}</p>
      <p>{info.languages.map((l: string) => l + " ")}</p>
    </div>
  );
}
