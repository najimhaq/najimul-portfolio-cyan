export const projects = [
  {
    slug: 'epikcart',
    title: 'Epikcart',
    tag: 'E-commerce Platform',
    stack: ['React', 'Redux', 'React i18n'],
    thumbnail: '/projects/epikcart.png',
    problem:
      'Client needed a multi-language e-commerce store that could handle high product volume without slow filtering/search.',
    decision:
      'Chose Redux for predictable global cart/state management over Context API, since cart logic touched 8+ components. Used React i18n for scalable multi-language support instead of hardcoded translation objects.',
    result:
      'Reduced product filter response time from ~1.2s to 300ms by memoizing filter logic; supports 3 languages with zero layout shift.',
    liveUrl: 'https://epikcart-demo.vercel.app',
    githubUrl: 'https://github.com/najimulhaque/epikcart',
  },
  {
    slug: 'resume-roaster',
    title: 'Resume Roaster',
    tag: 'AI SaaS Tool',
    stack: ['GPT-4', 'Next.js', 'PostgreSQL'],
    thumbnail: '/projects/resume-roaster.png',
    problem:
      'Job seekers get generic resume feedback with no actionable, specific critique tied to the job description.',
    decision:
      'Used GPT-4 with a structured prompt-chain (not single prompt) to force section-by-section critique. PostgreSQL over MongoDB because feedback history needed relational queries (user -> resume -> feedback versions).',
    result:
      'Processes a resume + JD match in under 8 seconds; early users reported picking up 3-4 concrete fixes per resume.',
    liveUrl: 'https://resume-roaster.vercel.app',
    githubUrl: 'https://github.com/najimulhaque/resume-roaster',
  },
];
