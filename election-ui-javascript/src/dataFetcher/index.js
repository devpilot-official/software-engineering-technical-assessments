import { fetchResultData, fetchCandidateMap } from '../fakeAPI'; // Let's imagine this is an external service that we are calling via https

async function fetchResults() {
  const results = await fetchResultData();
  const candidateMap = fetchCandidateMap();

  return results;
}

export default fetchResults;
