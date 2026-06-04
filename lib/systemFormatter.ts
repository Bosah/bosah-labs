export function formatSystemLine(...parts: string[]) {
  const payload = parts.join(' | ');
  return `SYSTEM_LINE: ${payload}`;
}

export function formatEventLine(timestamp: string, ...parts: string[]) {
  const payload = parts.join(' | ');
  return `EVENT_LINE: ${timestamp} | ${payload}`;
}

export function isSystemLine(line: string) {
  return line.startsWith('SYSTEM_LINE:');
}

export function isEventLine(line: string) {
  return line.startsWith('EVENT_LINE:');
}
