const skills = {
  technical: [
    { name: 'HTML5'},
    { name: 'CSS3'},
    { name: 'JavaScript' },
    { name: 'PHP'},
    { name: 'React.js' },
    { name: 'Angular'},
  ],
  professional: [
    'Git',
    'Linux',
    'Windows',
    'Pack Office',
    'EBP Comptabilité',
    'EBP Gestion commerciale',
  ],
  soft: [
    'Résilience',
    'Esprit d\'équipe',
    'Créativité',
    'Empathie',
    'Management inclusif',
    'Assertivité',
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Compétences
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Compétences techniques</h3>
            <div className="space-y-4">
              {skills.technical.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Compétences professionnelles</h3>
            <div className="grid grid-cols-2 gap-2">
              {skills.professional.map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-100 px-3 py-2 rounded-lg text-gray-700 text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-2">
              {skills.soft.map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-100 px-3 py-2 rounded-lg text-gray-700 text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}