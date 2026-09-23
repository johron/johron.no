interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
}

async function getRepositories(username: string): Promise<Repository[]> {
  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
    next: { revalidate: 3600 } // Cache data for 1 hour
  });

  if (!res.ok) {
    throw new Error('Failed to fetch repositories')
  }

  return res.json();
}

export async function ProjectsSection() {
  const repos = await getRepositories('johron')

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Mine prosjekt</h1>
      <div className="grid grid-cols-3 gap-4">
        {[...repos].sort((a, b) => b.stargazers_count - a.stargazers_count).map((repo) => (
          <div key={repo.id} className="bg-blue-300/10 border-blue-300/30 border-2 p-4 rounded-xl shadow-sm">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
              {repo.name}
            </a>
            <p className="text-gray-600 text-sm mt-1">{repo.description}</p>
            <span className="text-xs text-gray-400 mt-2 block">⭐ {repo.stargazers_count}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
