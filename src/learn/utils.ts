function delimeterMsg(str: string) {
  const msg = `\n*************** ${str} *****************\n`;
  console.log(`%c${msg}`, 'color:green');
  delimeterMsgHTML(msg);
}

function log(...args: any[]) {
  const msgs = [];
  let color = null;
  if (args[0].startsWith('color_')) {
    color = args[0].substring(6);
  }

  if (color) {
    args
      .filter(arg => !arg.startsWith('color_'))
      .forEach(arg => msgs.push(`%c${arg}`, `color:${color}`));
  } else {
    msgs.push(...args.map(arg => arg + '\n\n'));
  }
  console.log(...msgs);
}

function logF(f: Function, ...args: any) {
  const name = splitToWords(f.name);
  log('color_darkgoldenrod', name);
  logToHTML(name);
  f(args);
}

function delimeterMsgHTML(msg: string) {
  appendMsgToHTML(msg, 'delimeter-msg');
}

function logToHTML(...args: any[]) {
  appendMsgToHTML(args.join('\n'), 'msg');
}

function appendMsgToHTML(msg: string, klass: string) {
  const div: HTMLElement = document.createElement('div');
  div.classList.add(klass);
  div.innerText = msg;

  const contentEl = document.getElementById('content');
  if (contentEl) {
    contentEl.appendChild(div);
  }
}

function splitToWords(str: string): string {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .split(' ')
    .map((str, i) => i == 0 ? capitalize(str) : str.toLowerCase())
    .join(' ');
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export { log, logF, logToHTML, delimeterMsg };