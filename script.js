const defaultRules = [
  { name: 'Minecraft Server', protocol: 'TCP', externalPort: 25565, internalPort: 25565, targetIp: '192.168.1.10' },
  { name: 'Web Access', protocol: 'TCP', externalPort: 80, internalPort: 80, targetIp: '192.168.1.20' },
  { name: 'Plex Remote', protocol: 'BOTH', externalPort: 32400, internalPort: 32400, targetIp: '192.168.1.30' }
];

const services = {
  '192.168.1.10': { name: 'Gaming PC', service: 'Minecraft', port: 25565 },
  '192.168.1.20': { name: 'Web Server', service: 'HTTP', port: 80 },
  '192.168.1.30': { name: 'Home NAS / Storage', service: 'Plex', port: 32400 }
};

const translations = {
  en: {
    natRoutingLab: 'NAT ROUTING LAB', simulationActive: 'SIMULATION ACTIVE', routerPanel: 'ROUTER CONTROL PANEL', heroLine1: 'Route traffic', heroLine2: 'with intent.',
    introCopy: 'Configure Network Address Translation rules, then send a packet to see how your router decides what gets through.',
    networkIdentity: 'NETWORK IDENTITY', gatewayOverview: 'Gateway overview', online: 'ONLINE', publicIp: 'PUBLIC IP',
    wanFacing: 'WAN / INTERNET FACING', routerGateway: 'ROUTER GATEWAY', lanPrivate: 'LAN / PRIVATE NETWORK',
    inboundRules: 'INBOUND RULES', ruleName: 'RULE NAME', proto: 'PROTO', external: 'EXTERNAL', internal: 'INTERNAL', targetLocalIp: 'TARGET LOCAL IP',
    ruleCountActive: '{count} {word} ACTIVE', ruleCountReady: '{count} {word} READY', ruleCountEmpty: 'EMPTY',
    portForwardingTable: 'Port forwarding table', applyRules: 'Apply rules', factoryReset: 'Factory reset',
    statusActive: 'Rules applied · listening for traffic', statusDraft: 'Draft changed · apply rules to activate', forwarded: 'FORWARDED', blocked: 'BLOCKED', notConfigured: 'NOT CONFIGURED',
    liveTopology: 'LIVE TOPOLOGY', packetJourney: 'Packet journey', lastEventLabel: 'LAST EVENT', awaitingPacket: 'Awaiting packet',
    routeVisualizer: 'REAL-TIME ROUTE VISUALIZER', latency: 'LATENCY', wanPublic: 'WAN / PUBLIC', lanPrivateShort: 'LAN / PRIVATE', internet: 'INTERNET', externalNode: 'EXTERNAL', router: 'ROUTER', natGateway: 'NAT GATEWAY', localNetwork: 'LOCAL NETWORK', trustedZone: 'TRUSTED ZONE', gamingPc: 'GAMING PC', webServer: 'WEB SERVER', homeNas: 'HOME NAS / STORAGE', natDecision: 'NAT decision point',
    packetGenerator: 'PACKET GENERATOR', sendInboundTraffic: 'Send inbound traffic', publicInternetClient: 'Act like a client on the public internet.', inboundTargetPort: 'INBOUND TARGET PORT', protocol: 'PROTOCOL', sendTestPacket: 'Send test packet', tryPort: 'Try port', forSuccess: 'for a success, or change the protocol to see a refusal.', trafficConsole: 'TRAFFIC CONSOLE', clearLog: 'CLEAR LOG',
    ruleMinecraft: 'Minecraft Server', ruleWeb: 'Web Access', rulePlex: 'Plex Remote', newRule: 'New forwarding rule',
    invalidPortTitle: 'Invalid target port', invalidPortDetail: 'Enter a valid TCP/UDP port between 1 and 65535.', signalInputError: 'INPUT ERROR',
    noRulesTitle: 'Blocked by Firewall: Stealth Mode', noRulesDetail: 'No active forwarding rules are configured on this router.', signalBlocked: 'BLOCKED',
    packetEnteringTitle: 'Packet entering public interface', packetEnteringDetail: 'Inbound {protocol} traffic addressed to external port {port}.', signalInTransit: 'IN TRANSIT',
    ruleFoundTitle: 'Rule found: {name}', forwardingDetail: 'Forwarding {protocol} :{port} → {ip}:{internalPort}.', signalForwarding: 'FORWARDING',
    successTitle: 'Success: Port Open & Service Accessible!', successDetail: '{service} is listening on {ip}:{port}.', signalAccepted: 'ACCEPTED',
    refusedTitle: 'Connection Refused', protocolMismatchDetail: 'Protocol mismatch: rule expects {ruleProtocol}, device received {protocol}.', wrongPortDetail: 'Packet reached {device}, but nothing is listening on internal port {internalPort}.', signalRefused: 'REFUSED',
    noMatchDetail: 'No forwarding rule matches external port {port} / {protocol}.',
    rulesAppliedEvent: 'Rules applied', packetDroppedEvent: 'Packet dropped at router', deviceAcceptedEvent: '{service} accepted connection', deviceRefusedEvent: 'Device refused connection', factoryRestoredEvent: 'Factory defaults restored',
    systemInit: 'PortPilot simulator initialized. Router is online.', configStartup: '3 starter rules active. Ready for inbound traffic.', invalidPortLog: 'Packet rejected: target port must be between 1 and 65535.', packetReceivedLog: 'Inbound {protocol} packet received on External Port {port}...', evaluatingLog: 'Evaluating packet against applied forwarding rules...', noRuleLog: 'No rule found for External Port {port}. Dropping packet at gateway.', ruleForwardLog: 'Rule found: Forwarding to {ip}:{internalPort}...', serviceAcceptedLog: 'Connection accepted by {service} on {ip}:{port}.', serviceProtocolRefusedLog: 'Connection refused: protocol mismatch at {device}.', servicePortRefusedLog: '{service} is listening on port {port}, not {internalPort}.', appliedRulesLog: 'Applied {count} forwarding {ruleWord} to gateway.', factoryResetLog: 'Router reset to factory defaults. 3 starter rules loaded.', consoleClearedLog: 'Console cleared. Awaiting traffic.'
  },
  el: {
    natRoutingLab: 'ΕΡΓΑΣΤΗΡΙ NAT ΔΡΟΜΟΛΟΓΗΣΗΣ', simulationActive: 'Η ΠΡΟΣΟΜΟΙΩΣΗ ΕΝΕΡΓΗ', routerPanel: 'ΠΙΝΑΚΑΣ ΕΛΕΓΧΟΥ ROUTER', heroLine1: 'Δρομολόγησε κίνηση', heroLine2: 'με πρόθεση.',
    introCopy: 'Ρύθμισε κανόνες Network Address Translation και στείλε ένα packet για να δεις πώς αποφασίζει ο router τι περνάει.',
    networkIdentity: 'ΤΑΥΤΟΤΗΤΑ ΔΙΚΤΥΟΥ', gatewayOverview: 'Επισκόπηση gateway', online: 'ONLINE', publicIp: 'ΔΗΜΟΣΙΑ IP',
    wanFacing: 'WAN / ΠΡΟΣ ΤΟ INTERNET', routerGateway: 'GATEWAY ROUTER', lanPrivate: 'LAN / ΙΔΙΩΤΙΚΟ ΔΙΚΤΥΟ',
    inboundRules: 'ΕΙΣΕΡΧΟΜΕΝΟΙ ΚΑΝΟΝΕΣ', ruleName: 'ΟΝΟΜΑ ΚΑΝΟΝΑ', proto: 'ΠΡΩΤ.', external: 'ΕΞΩΤΕΡΙΚΗ', internal: 'ΕΣΩΤΕΡΙΚΗ', targetLocalIp: 'ΤΟΠΙΚΗ IP ΠΡΟΟΡΙΣΜΟΥ',
    ruleCountActive: '{count} {word} ΕΝΕΡΓΟΙ', ruleCountReady: '{count} {word} ΕΤΟΙΜΟΙ', ruleCountEmpty: 'ΑΔΕΙΟ',
    portForwardingTable: 'Πίνακας προώθησης θυρών', applyRules: 'Εφαρμογή κανόνων', factoryReset: 'Επαναφορά εργοστασιακών',
    statusActive: 'Κανόνες ενεργοί · αναμονή για κίνηση', statusDraft: 'Πρόχειρες αλλαγές · πάτησε εφαρμογή', forwarded: 'ΠΡΟΩΘΗΘΗΚΕ', blocked: 'ΜΠΛΟΚΑΡΙΣΤΗΚΕ', notConfigured: 'ΜΗ ΡΥΘΜΙΣΜΕΝΟ',
    liveTopology: 'ΖΩΝΤΑΝΗ ΤΟΠΟΛΟΓΙΑ', packetJourney: 'Διαδρομή packet', lastEventLabel: 'ΤΕΛΕΥΤΑΙΟ EVENT', awaitingPacket: 'Αναμονή για packet',
    routeVisualizer: 'ΖΩΝΤΑΝΗ ΑΠΕΙΚΟΝΙΣΗ ΔΙΑΔΡΟΜΗΣ', latency: 'ΚΑΘΥΣΤΕΡΗΣΗ', wanPublic: 'WAN / ΔΗΜΟΣΙΟ', lanPrivateShort: 'LAN / ΙΔΙΩΤΙΚΟ', internet: 'INTERNET', externalNode: 'ΕΞΩΤΕΡΙΚΟ', router: 'ROUTER', natGateway: 'GATEWAY NAT', localNetwork: 'ΤΟΠΙΚΟ ΔΙΚΤΥΟ', trustedZone: 'ΖΩΝΗ ΕΜΠΙΣΤΟΣΥΝΗΣ', gamingPc: 'PC GAMING', webServer: 'WEB SERVER', homeNas: 'ΟΙΚΙΑΚΟ NAS / ΑΠΟΘΗΚΕΥΣΗ', natDecision: 'Σημείο απόφασης NAT',
    packetGenerator: 'ΔΗΜΙΟΥΡΓΙΑ PACKET', sendInboundTraffic: 'Στείλε εισερχόμενη κίνηση', publicInternetClient: 'Μίμηση client από το δημόσιο internet.', inboundTargetPort: 'ΕΙΣΕΡΧΟΜΕΝΗ ΘΥΡΑ ΠΡΟΟΡΙΣΜΟΥ', protocol: 'ΠΡΩΤΟΚΟΛΛΟ', sendTestPacket: 'Αποστολή test packet', tryPort: 'Δοκίμασε τη θύρα', forSuccess: 'για επιτυχία ή άλλαξε πρωτόκολλο για να δεις απόρριψη.', trafficConsole: 'ΚΟΝΣΟΛΑ ΚΙΝΗΣΗΣ', clearLog: 'ΚΑΘΑΡΙΣΜΟΣ LOG',
    ruleMinecraft: 'Minecraft Server', ruleWeb: 'Πρόσβαση Web', rulePlex: 'Απομακρυσμένο Plex', newRule: 'Νέος κανόνας προώθησης',
    invalidPortTitle: 'Μη έγκυρη θύρα προορισμού', invalidPortDetail: 'Πληκτρολόγησε έγκυρη TCP/UDP θύρα από 1 έως 65535.', signalInputError: 'ΣΦΑΛΜΑ ΕΙΣΑΓΩΓΗΣ',
    noRulesTitle: 'Μπλοκάρισμα από Firewall: Stealth Mode', noRulesDetail: 'Δεν υπάρχουν ενεργοί κανόνες προώθησης σε αυτόν τον router.', signalBlocked: 'ΜΠΛΟΚΑΡΙΣΜΕΝΟ',
    packetEnteringTitle: 'Το packet μπαίνει στη δημόσια διεπαφή', packetEnteringDetail: 'Εισερχόμενη κίνηση {protocol} προς την εξωτερική θύρα {port}.', signalInTransit: 'ΣΕ ΔΙΑΔΡΟΜΗ',
    ruleFoundTitle: 'Βρέθηκε κανόνας: {name}', forwardingDetail: 'Προώθηση {protocol} :{port} → {ip}:{internalPort}.', signalForwarding: 'ΠΡΟΩΘΗΣΗ',
    successTitle: 'Επιτυχία: Η θύρα είναι ανοιχτή και η υπηρεσία προσβάσιμη!', successDetail: 'Η υπηρεσία {service} ακούει στο {ip}:{port}.', signalAccepted: 'ΑΠΟΔΟΧΗ',
    refusedTitle: 'Η σύνδεση απορρίφθηκε', protocolMismatchDetail: 'Ασυμφωνία πρωτοκόλλου: ο κανόνας περιμένει {ruleProtocol}, η συσκευή έλαβε {protocol}.', wrongPortDetail: 'Το packet έφτασε στο {device}, αλλά δεν ακούει τίποτα στην εσωτερική θύρα {internalPort}.', signalRefused: 'ΑΠΟΡΡΙΨΗ',
    noMatchDetail: 'Κανένας κανόνας δεν ταιριάζει στην εξωτερική θύρα {port} / {protocol}.',
    rulesAppliedEvent: 'Οι κανόνες εφαρμόστηκαν', packetDroppedEvent: 'Το packet απορρίφθηκε στον router', deviceAcceptedEvent: 'Η υπηρεσία {service} δέχτηκε τη σύνδεση', deviceRefusedEvent: 'Η συσκευή απέρριψε τη σύνδεση', factoryRestoredEvent: 'Επαναφέρθηκαν οι εργοστασιακές ρυθμίσεις',
    systemInit: 'Ο προσομοιωτής PortPilot ξεκίνησε. Ο router είναι online.', configStartup: '3 αρχικοί κανόνες ενεργοί. Αναμονή για εισερχόμενη κίνηση.', invalidPortLog: 'Το packet απορρίφθηκε: η θύρα πρέπει να είναι από 1 έως 65535.', packetReceivedLog: 'Εισερχόμενο {protocol} packet στην εξωτερική θύρα {port}...', evaluatingLog: 'Έλεγχος packet στους εφαρμοσμένους κανόνες προώθησης...', noRuleLog: 'Δεν βρέθηκε κανόνας για την εξωτερική θύρα {port}. Απόρριψη στο gateway.', ruleForwardLog: 'Βρέθηκε κανόνας: προώθηση στο {ip}:{internalPort}...', serviceAcceptedLog: 'Η υπηρεσία {service} δέχτηκε σύνδεση στο {ip}:{port}.', serviceProtocolRefusedLog: 'Απόρριψη σύνδεσης: ασυμφωνία πρωτοκόλλου στο {device}.', servicePortRefusedLog: 'Η υπηρεσία {service} ακούει στη θύρα {port}, όχι στην {internalPort}.', appliedRulesLog: 'Εφαρμόστηκαν {count} {ruleWord} προώθησης στο gateway.', factoryResetLog: 'Ο router επανήλθε στις εργοστασιακές ρυθμίσεις. Φορτώθηκαν 3 αρχικοί κανόνες.', consoleClearedLog: 'Η κονσόλα καθαρίστηκε. Αναμονή για κίνηση.'
  }
};

let language = localStorage.getItem('portpilot-language') === 'el' ? 'el' : 'en';
let currentBanner = { kind: 'neutral', icon: '◎', titleKey: 'readyTitle', detailKey: 'readyDetail', signalKey: 'idle' };
let currentApplyStatus = { key: 'statusActive', tone: 'applied' };
let lastEventState = { key: 'awaitingPacket' };
let logHistory = [];

translations.en.readyTitle = 'Ready to inspect a packet';
translations.en.readyDetail = 'Send traffic from the public internet to begin the simulation.';
translations.en.idle = 'IDLE';
translations.el.readyTitle = 'Έτοιμο για έλεγχο packet';
translations.el.readyDetail = 'Στείλε κίνηση από το δημόσιο internet για να ξεκινήσει η προσομοίωση.';
translations.el.idle = 'ΑΝΑΜΟΝΗ';

function t(key, vars = {}) {
  const template = translations[language][key] || translations.en[key] || key;
  return template.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? '');
}

function localizedRuleName(name) {
  if (name === 'Minecraft Server') return t('ruleMinecraft');
  if (name === 'Web Access') return t('ruleWeb');
  if (name === 'Plex Remote') return t('rulePlex');
  if (name === 'New forwarding rule') return t('newRule');
  return name;
}

function localizedDevice(ip) {
  return t({ '192.168.1.10': 'gamingPc', '192.168.1.20': 'webServer', '192.168.1.30': 'homeNas' }[ip] || 'router');
}

function updateRuleCount() {
  const matchesApplied = draftRules.length === appliedRules.length && draftRules.every((rule, index) => JSON.stringify(rule) === JSON.stringify(appliedRules[index]));
  const word = language === 'el' ? (draftRules.length === 1 ? 'ΚΑΝΟΝΑΣ' : 'ΚΑΝΟΝΕΣ') : (draftRules.length === 1 ? 'RULE' : 'RULES');
  const key = draftRules.length === 0 ? 'ruleCountEmpty' : matchesApplied ? 'ruleCountActive' : 'ruleCountReady';
  ruleCount.textContent = t(key, { count: draftRules.length, word });
}

let draftRules = structuredClone(defaultRules);
let appliedRules = structuredClone(defaultRules);
let isRouting = false;

const $ = (selector) => document.querySelector(selector);
const rulesBody = $('#rulesBody');
const ruleCount = $('#ruleCount');
const applyStatus = $('#applyStatus');
const applyTime = $('#applyTime');
const routeBanner = $('#routeBanner');
const packetBubble = $('#packetBubble');
const networkMap = $('#networkMap');
const consoleOutput = $('#consoleOutput');
const sendPacketButton = $('#sendPacketButton');

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}

function renderRules() {
  rulesBody.innerHTML = draftRules.map((rule, index) => `
    <tr data-rule-index="${index}">
      <td><input class="rule-input" data-field="name" value="${escapeHtml(localizedRuleName(rule.name))}" aria-label="${escapeHtml(t('ruleName'))}" /></td>
      <td><select class="rule-select" data-field="protocol" aria-label="Rule protocol"><option ${rule.protocol === 'TCP' ? 'selected' : ''}>TCP</option><option ${rule.protocol === 'UDP' ? 'selected' : ''}>UDP</option><option ${rule.protocol === 'BOTH' ? 'selected' : ''}>BOTH</option></select></td>
      <td><input class="rule-input" data-field="externalPort" type="number" min="1" max="65535" value="${rule.externalPort}" aria-label="External port" /></td>
      <td><input class="rule-input" data-field="internalPort" type="number" min="1" max="65535" value="${rule.internalPort}" aria-label="Internal port" /></td>
      <td><select class="rule-select" data-field="targetIp" aria-label="Target local IP">${Object.keys(services).map((ip) => `<option value="${ip}" ${rule.targetIp === ip ? 'selected' : ''}>${ip}</option>`).join('')}</select></td>
      <td><button class="remove-rule" type="button" data-remove-rule="${index}" aria-label="Remove ${escapeHtml(rule.name || 'rule')}">×</button></td>
    </tr>`).join('');
  updateRuleCount();
}

function nowTime() {
  return new Date().toLocaleTimeString([], { hour12: false });
}

function appendLog(entry) {
  const line = document.createElement('div');
  line.className = `log-line ${entry.tone || ''}`;
  line.innerHTML = `<span class="log-time">${entry.time || nowTime()}</span><span><span class="log-tag">[${entry.tag}]</span> <span class="log-message">${escapeHtml(t(entry.key, entry.vars))}</span></span>`;
  consoleOutput.appendChild(line);
  consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

function logTraffic(tag, key, tone = '', vars = {}) {
  const entry = { tag, key, tone, vars, time: nowTime() };
  logHistory.push(entry);
  appendLog(entry);
}

function redrawLogs() {
  consoleOutput.innerHTML = '';
  logHistory.forEach(appendLog);
}

function setApplyStatus(messageKey, tone = 'applied') {
  currentApplyStatus = { key: messageKey, tone };
  applyStatus.className = `apply-status ${tone}`;
  applyStatus.innerHTML = `<span class="apply-status-icon">${tone === 'applied' ? '✓' : '!'}</span><span>${escapeHtml(t(messageKey))}</span><span class="apply-time" id="applyTime">${tone === 'applied' ? (language === 'el' ? 'ΜΟΛΙΣ ΤΩΡΑ' : 'JUST NOW') : (language === 'el' ? 'ΠΡΟΧΕΙΡΟ' : 'DRAFT CHANGED')}</span>`;
}

function setLastEvent(key, vars = {}) {
  lastEventState = { key, vars };
  $('#lastEvent').textContent = t(key, vars);
}

function updateClock() {
  const date = new Date();
  $('#liveClock').textContent = `${date.toLocaleTimeString([], { hour12: false })} UTC`;
}

function updateRuleFromInput(event) {
  const field = event.target.dataset.field;
  const row = event.target.closest('tr');
  if (!field || !row) return;
  const index = Number(row.dataset.ruleIndex);
  draftRules[index][field] = event.target.type === 'number' ? Number(event.target.value) : event.target.value;
  setApplyStatus('statusDraft', 'draft');
}

function clearRouteState() {
  document.querySelectorAll('.network-node').forEach((node) => node.classList.remove('active', 'success', 'refused', 'blocked'));
  document.querySelectorAll('.route-path').forEach((path) => path.classList.remove('route-active', 'route-success', 'route-danger'));
  packetBubble.className = 'packet-bubble';
  $('#routeCallout').classList.remove('hidden');
  $('#latencyValue').textContent = '—';
}

function setBanner(kind, icon, titleKey, detailKey, signalKey, vars = {}) {
  currentBanner = { kind, icon, titleKey, detailKey, signalKey, vars };
  routeBanner.className = `route-banner banner-${kind}`;
  $('#bannerIcon').textContent = icon;
  $('#bannerTitle').textContent = t(titleKey, vars);
  $('#bannerDetail').textContent = t(detailKey, vars);
  $('#bannerSignal').textContent = t(signalKey, vars);
}

function pointFor(element) {
  const mapRect = networkMap.getBoundingClientRect();
  const rect = element.getBoundingClientRect();
  return { x: rect.left - mapRect.left + rect.width / 2, y: rect.top - mapRect.top + rect.height / 2 };
}

function mapEdgePoint(element, edge) {
  const mapRect = networkMap.getBoundingClientRect();
  const rect = element.getBoundingClientRect();
  return {
    x: (edge === 'right' ? rect.right : rect.left) - mapRect.left,
    y: rect.top - mapRect.top + rect.height / 2
  };
}

function toRoutePoint(point) {
  const mapRect = networkMap.getBoundingClientRect();
  return { x: (point.x / mapRect.width) * 1000, y: (point.y / mapRect.height) * 600 };
}

function curvedRoute(startPoint, endPoint) {
  const start = toRoutePoint(startPoint);
  const end = toRoutePoint(endPoint);
  const bend = Math.max(42, Math.min(150, Math.abs(end.x - start.x) * .42));
  return `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} C ${(start.x + bend).toFixed(1)} ${start.y.toFixed(1)}, ${(end.x - bend).toFixed(1)} ${end.y.toFixed(1)}, ${end.x.toFixed(1)} ${end.y.toFixed(1)}`;
}

function updateRouteGeometry() {
  if (!networkMap) return;
  const router = $('#routerNode');
  const internet = $('#internetNode');
  const internetPath = $('.path-internet');
  const lanPaths = document.querySelectorAll('.path-lan');
  if (!router || !internet || !internetPath || lanPaths.length !== 3) return;

  internetPath.setAttribute('d', curvedRoute(mapEdgePoint(internet, 'right'), mapEdgePoint(router, 'left')));
  ['192.168.1.10', '192.168.1.20', '192.168.1.30'].forEach((ip, index) => {
    const device = document.getElementById(`device-${ip}`);
    if (device) lanPaths[index].setAttribute('d', curvedRoute(mapEdgePoint(router, 'right'), mapEdgePoint(device, 'left')));
  });
}

function movePacket(point, duration = 900) {
  packetBubble.style.transitionDuration = `${duration}ms`;
  packetBubble.style.left = `${point.x}px`;
  packetBubble.style.top = `${point.y}px`;
  return new Promise((resolve) => window.setTimeout(resolve, duration));
}

function setActivePath(pathIndex, tone = 'active') {
  const paths = document.querySelectorAll('.route-path');
  if (pathIndex === 0) paths[0].classList.add(`route-${tone}`);
  if (pathIndex > 0) paths[pathIndex].classList.add(`route-${tone}`);
}

function lanPathIndex(targetIp) {
  return { '192.168.1.10': 1, '192.168.1.20': 2, '192.168.1.30': 3 }[targetIp] || 2;
}

async function sendTestPacket() {
  if (isRouting) return;
  const port = Number($('#packetPort').value);
  const protocol = $('#packetProtocol').value;
  if (!port || port < 1 || port > 65535) {
    setBanner('blocked', '!', 'invalidPortTitle', 'invalidPortDetail', 'signalInputError');
    logTraffic('INPUT', 'invalidPortLog', 'error');
    return;
  }
  if (!appliedRules.length) {
    setBanner('blocked', '×', 'noRulesTitle', 'noRulesDetail', 'signalBlocked');
  }
  isRouting = true;
  sendPacketButton.disabled = true;
  clearRouteState();
  setLastEvent('packetEnteringTitle', { protocol, port });
  $('#packetLabel').textContent = `${protocol} :${port}`;
  setBanner('neutral', '◌', 'packetEnteringTitle', 'packetEnteringDetail', 'signalInTransit', { protocol, port });
  logTraffic('TRAFFIC', 'packetReceivedLog', '', { protocol, port });
  packetBubble.classList.add('visible');
  await movePacket(pointFor($('#internetNode')), 50);
  await movePacket(pointFor($('#routerNode')), 800);
  $('#routerNode').classList.add('active');
  $('#latencyValue').textContent = '12 ms';
  logTraffic('NAT', 'evaluatingLog');
  await new Promise((resolve) => window.setTimeout(resolve, 360));

  const exactRule = appliedRules.find((rule) => Number(rule.externalPort) === port && (rule.protocol === protocol || rule.protocol === 'BOTH'));
  const samePortRule = appliedRules.find((rule) => Number(rule.externalPort) === port);

  if (!exactRule && !samePortRule) {
    packetBubble.classList.add('danger');
    setActivePath(0, 'danger');
    setBanner('blocked', '×', 'noRulesTitle', 'noMatchDetail', 'signalBlocked', { port, protocol });
    logTraffic('FIREWALL', 'noRuleLog', 'error', { port });
    setLastEvent('packetDroppedEvent');
    await new Promise((resolve) => window.setTimeout(resolve, 480));
    packetBubble.classList.remove('visible');
    isRouting = false;
    sendPacketButton.disabled = false;
    return;
  }

  const rule = exactRule || samePortRule;
  const device = services[rule.targetIp];
  const deviceNode = document.getElementById(`device-${rule.targetIp}`);
  const protocolMismatch = !exactRule;
  setBanner('neutral', '↗', 'ruleFoundTitle', 'forwardingDetail', 'signalForwarding', { name: localizedRuleName(rule.name || 'Unnamed rule'), protocol, port, ip: rule.targetIp, internalPort: rule.internalPort });
  logTraffic('NAT', 'ruleForwardLog', '', { ip: rule.targetIp, internalPort: rule.internalPort });
  const devicePathIndex = lanPathIndex(rule.targetIp);
  setActivePath(devicePathIndex, protocolMismatch ? 'danger' : 'active');
  await movePacket(pointFor(deviceNode), 980);
  deviceNode.classList.add(protocolMismatch ? 'refused' : 'active');

  const serviceReachable = !protocolMismatch && Number(rule.internalPort) === device.port;
  if (serviceReachable) {
    packetBubble.classList.add('success');
    deviceNode.classList.remove('active');
    deviceNode.classList.add('success');
    setActivePath(devicePathIndex, 'success');
    setBanner('success', '✓', 'successTitle', 'successDetail', 'signalAccepted', { service: device.service, ip: rule.targetIp, port: device.port });
    logTraffic('SERVICE', 'serviceAcceptedLog', 'success', { service: device.service, ip: rule.targetIp, port: device.port });
    setLastEvent('deviceAcceptedEvent', { service: device.service });
  } else {
    packetBubble.classList.add('danger');
    packetBubble.style.transform = 'scale(1.15)';
    setBanner('refused', '!', 'refusedTitle', protocolMismatch ? 'protocolMismatchDetail' : 'wrongPortDetail', 'signalRefused', protocolMismatch ? { ruleProtocol: rule.protocol, protocol } : { device: localizedDevice(rule.targetIp), internalPort: rule.internalPort });
    logTraffic('SERVICE', protocolMismatch ? 'serviceProtocolRefusedLog' : 'servicePortRefusedLog', 'warn', protocolMismatch ? { device: localizedDevice(rule.targetIp) } : { service: device.service, port: device.port, internalPort: rule.internalPort });
    setLastEvent('deviceRefusedEvent');
  }
  await new Promise((resolve) => window.setTimeout(resolve, 720));
  packetBubble.classList.remove('visible');
  packetBubble.style.transform = '';
  isRouting = false;
  sendPacketButton.disabled = false;
}

function applyRules() {
  appliedRules = draftRules.filter((rule) => rule.name || rule.externalPort || rule.internalPort).map((rule) => ({ ...rule }));
  setApplyStatus('statusActive');
  logTraffic('CONFIG', 'appliedRulesLog', '', { count: appliedRules.length, ruleWord: language === 'el' ? (appliedRules.length === 1 ? 'κανόνα' : 'κανόνες') : (appliedRules.length === 1 ? 'rule' : 'rules') });
  setLastEvent('rulesAppliedEvent');
  renderRules();
}

function resetFactory() {
  draftRules = structuredClone(defaultRules);
  appliedRules = structuredClone(defaultRules);
  clearRouteState();
  setApplyStatus('statusActive');
  renderRules();
  setBanner('neutral', '◎', 'readyTitle', 'readyDetail', 'idle');
  setLastEvent('factoryRestoredEvent');
  logTraffic('CONFIG', 'factoryResetLog');
}

rulesBody.addEventListener('input', updateRuleFromInput);
rulesBody.addEventListener('change', updateRuleFromInput);
rulesBody.addEventListener('click', (event) => {
  const removeButton = event.target.closest('[data-remove-rule]');
  if (!removeButton) return;
  draftRules.splice(Number(removeButton.dataset.removeRule), 1);
  renderRules();
  setApplyStatus('statusDraft', 'draft');
});
$('#addRuleButton').addEventListener('click', () => {
  draftRules.push({ name: 'New forwarding rule', protocol: 'TCP', externalPort: 8080, internalPort: 8080, targetIp: '192.168.1.20' });
  renderRules();
  setApplyStatus('statusDraft', 'draft');
  const lastInput = rulesBody.querySelector('tr:last-child input');
  lastInput?.focus();
});
$('#applyRulesButton').addEventListener('click', applyRules);
$('#resetButton').addEventListener('click', resetFactory);
sendPacketButton.addEventListener('click', sendTestPacket);
$('#clearLogButton').addEventListener('click', () => { logHistory = []; consoleOutput.innerHTML = ''; logTraffic('SYSTEM', 'consoleClearedLog'); });
document.querySelectorAll('.hint-link').forEach((button) => button.addEventListener('click', () => {
  $('#packetPort').value = button.dataset.testPort;
  $('#packetProtocol').value = button.dataset.testProtocol;
  $('#packetPort').focus();
}));
document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') applyRules();
});

function applyLanguage(nextLanguage = language) {
  language = nextLanguage === 'el' ? 'el' : 'en';
  localStorage.setItem('portpilot-language', language);
  document.documentElement.lang = language === 'el' ? 'el' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll('[data-language]').forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  renderRules();
  setApplyStatus(currentApplyStatus.key, currentApplyStatus.tone);
  setBanner(currentBanner.kind, currentBanner.icon, currentBanner.titleKey, currentBanner.detailKey, currentBanner.signalKey, currentBanner.vars);
  setLastEvent(lastEventState.key, lastEventState.vars);
  redrawLogs();
  requestAnimationFrame(updateRouteGeometry);
}

document.querySelectorAll('[data-language]').forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.language));
});

renderRules();
applyLanguage(language);
requestAnimationFrame(updateRouteGeometry);
window.addEventListener('resize', updateRouteGeometry);
if (window.ResizeObserver) new ResizeObserver(updateRouteGeometry).observe(networkMap);
logTraffic('SYSTEM', 'systemInit');
logTraffic('CONFIG', 'configStartup');
setInterval(updateClock, 1000);
updateClock();
