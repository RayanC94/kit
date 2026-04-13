import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — ApprenKit",
  description: "Mentions légales et conditions générales de vente ApprenKit.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-foreground mb-10">
          Mentions légales & CGV
        </h1>

        <div className="prose prose-slate max-w-none space-y-8 text-sm text-muted-foreground">
          <section>
            <h2 className="text-lg font-bold text-foreground">Éditeur du site</h2>
            <p>
              ApprenKit — [Raison sociale à compléter]<br />
              [Adresse à compléter]<br />
              [SIRET à compléter]<br />
              Email : contact@apprenkit.fr
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground">Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images, graphismes, logo) est la
              propriété exclusive d&apos;ApprenKit. Toute reproduction, représentation, modification ou
              exploitation non autorisée est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground">Données personnelles (RGPD)</h2>
            <p>
              Les données collectées via les formulaires de ce site (nom, email, téléphone) sont
              utilisées uniquement dans le cadre du traitement de votre demande de devis. Elles ne
              sont pas transmises à des tiers sans votre consentement. Conformément au RGPD, vous
              disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données.
              Pour toute demande : contact@apprenkit.fr
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground">Cookies</h2>
            <p>
              Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement.
              Aucun cookie publicitaire ou de tracking tiers n&apos;est déposé sans votre consentement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground">Conditions générales de vente</h2>
            <p>
              Les présentes CGV s&apos;appliquent à toutes les commandes passées auprès d&apos;ApprenKit par des
              Centres de Formation d&apos;Apprentis (CFA) ou tout autre professionnel.
            </p>
            <h3 className="font-semibold text-foreground mt-4">Commandes</h3>
            <p>
              Toute commande est précédée d&apos;un devis écrit signé. La commande est ferme à réception
              du bon de commande signé et de l&apos;acompte convenu.
            </p>
            <h3 className="font-semibold text-foreground mt-4">Délais</h3>
            <p>
              Le délai de production et de livraison est de 10 à 15 jours ouvrés à compter de la
              validation du bon de commande et de la réception du logo en haute définition.
            </p>
            <h3 className="font-semibold text-foreground mt-4">Personnalisation</h3>
            <p>
              ApprenKit ne peut être tenu responsable d&apos;un rendu insatisfaisant dû à un fichier
              logo fourni en basse résolution. Il est de la responsabilité du client de fournir
              les fichiers conformes (SVG ou PNG haute définition, fond transparent).
            </p>
            <h3 className="font-semibold text-foreground mt-4">Financement OPCO</h3>
            <p>
              ApprenKit fournit les justificatifs nécessaires à la demande de prise en charge OPCO
              mais ne peut garantir l&apos;acceptation de cette demande par l&apos;OPCO de l&apos;entreprise
              employeuse. Le client reste responsable de la constitution et du dépôt du dossier
              auprès de son OPCO.
            </p>
            <h3 className="font-semibold text-foreground mt-4">Droit applicable</h3>
            <p>
              Les présentes CGV sont soumises au droit français. Tout litige relève de la
              compétence des tribunaux français.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
