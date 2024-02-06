import Link from "next/link";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Header({
  onLanguageChange,
}: {
  onLanguageChange: any;
}) {
  return (
    <header className="flex items-center gap-5 bg-background px-10 py-5 font-bold text-heading sm:px-16">
      <h1 className="cursor-default text-xl">Hana Berrached</h1>
      <nav className="hidden gap-3 sm:flex">
        <Link className="hover:text-primary" href={"#hero"}>
          Accueil
        </Link>
        <Link className="hover:text-primary" href={"#about"}>
          A propos
        </Link>
        <Link className="hover:text-primary" href={"#experience"}>
          Experience
        </Link>
        <Link className="hover:text-primary" href={"#projects"}>
          Projets
        </Link>
      </nav>
      <div className="ml-auto flex gap-3">
        <Link className="hover:text-primary" href="mailto:hana@gmail.com">
          <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
        </Link>
        <Link className="hover:text-primary" href="tongithub" target="_blank">
          <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
        </Link>
        <Link className="hover:text-primary" href="tonlinkedin" target="_blank">
          <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
        </Link>
        <select
          className=" border-none bg-background text-sm focus:outline-none"
          onChange={(e) => onLanguageChange(e.target.value)}
        >
          <option value="fr">Fr</option>
          <option value="eng">En</option>
        </select>
      </div>
    </header>
  );
}
