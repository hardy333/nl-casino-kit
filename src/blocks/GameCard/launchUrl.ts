export function launchUrl(baseUrl: string, token: string) {
  return `${baseUrl}/auth?token=${encodeURIComponent(token)}`
}
