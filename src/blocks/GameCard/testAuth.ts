// Next Level Games' dev/test auth endpoint. `test=true` accepts any UUID as
// `otp` and any numeric `playerId`, and mints a token for a fresh throwaway
// player — no real login flow exists yet on this side.
const TEST_AUTH_URL = 'https://auth-api.dev-portal.next-level.games/general/auth'

type TestAuthResponse = {
  token: string
}

function randomPlayerId() {
  return String(Math.floor(100000 + Math.random() * 900000))
}

export async function fetchTestAuthToken(gameName: string): Promise<string> {
  const params = new URLSearchParams({
    otp: crypto.randomUUID(),
    playerId: randomPlayerId(),
    gameName,
    language: 'en',
    channel: 'DESKTOP',
    test: 'true',
  })

  const response = await fetch(`${TEST_AUTH_URL}?${params.toString()}`)

  if (!response.ok) {
    throw new Error(`Test auth failed: ${response.status}`)
  }

  const data = (await response.json()) as TestAuthResponse
  return data.token
}
