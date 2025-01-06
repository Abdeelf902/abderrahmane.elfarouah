import Container from './shared/Container';
import SectionTitle from './shared/SectionTitle';
import ExperienceList from './experience/ExperienceList';
import { experiences } from '../data/experiences';

export default function Experience() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <Container>
        <SectionTitle>Parcours professionnel</SectionTitle>
        <ExperienceList experiences={experiences} />
      </Container>
    </section>
  );
}
