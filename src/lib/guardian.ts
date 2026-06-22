export interface GuardianArticle {
  id: string;
  webTitle: string;
  webUrl: string;
  webPublicationDate: string;
  fields?: {
    thumbnail?: string;
    trailText?: string;
  };
}

export interface GuardianResponse {
  response: {
    status: string;
    total: number;
    results: GuardianArticle[];
  };
}

export async function fetchGuardianNews(): Promise<GuardianArticle[]> {
  const apiKey = process.env.GUARDIAN_API_KEY;
  if (!apiKey) {
    throw new Error("Missing GUARDIAN_API_KEY environment variable.");
  }

  // q=law OR justice OR legal, show-fields=thumbnail,trailText, page-size=12
  const url = `https://content.guardianapis.com/search?q=law%20OR%20justice%20OR%20legal&show-fields=thumbnail,trailText&page-size=12&api-key=${apiKey}`;

  const res = await fetch(url, {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch news: ${res.statusText}`);
  }

  const data: GuardianResponse = await res.json();
  
  if (data.response?.status !== "ok") {
    throw new Error("Invalid response status from Guardian API.");
  }

  return data.response.results || [];
}
