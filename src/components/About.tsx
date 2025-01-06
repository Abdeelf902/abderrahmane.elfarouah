import Container from './shared/Container';
import SectionTitle from './shared/SectionTitle';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <SectionTitle>À propos de moi</SectionTitle>
        
        <div className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          <p className="mb-6">
            Développeur passionné avec une double expertise en développement AS400 RPG et technologies web modernes.
            Mon parcours unique me permet d'apporter une perspective précieuse aux projets, combinant la robustesse
            des systèmes legacy avec l'innovation des technologies actuelles.
          </p>
          
          <p className="mb-6">
            Actuellement en formation START ZUP, je me spécialise dans le développement web avec React.js
            et les technologies modernes du web, tout en maintenant mon expertise en AS400.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Formation</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>START ZUP (2023-2024)</li>
                <li>O'clock (2022)</li>
                <li>BAFA (2014)</li>
                <li>Bac Pro Secrétariat (2011)</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Certifications</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>PSC1 (2018)</li>
                <li>BAFA (2014)</li>
                <li>BEP Métiers du secrétariat (2009)</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}