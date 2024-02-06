export default function Credits({ lang }: { lang: "fr" | "eng" }) {
  if (lang === "fr")
    return (
      <footer className="grid place-content-center py-20">
        <p className="text-center text-lg">Réalisé par Berrached Hana.</p>
        <p className="text-center text-lg">Tous droits réservés.</p>
      </footer>
    );
  else
    return (
      <footer className="grid place-content-center py-20">
        <p className="text-center text-lg">Built by Hana Berrached.</p>
        <p className="text-center text-lg">All rights reserved.</p>
      </footer>
    );
}
