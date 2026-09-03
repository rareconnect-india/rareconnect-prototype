const STORAGE_KEY = "rareconnect-prototype-v1";

const navItems = [
  { id: "home", label: "Home", icon: "⌂" },
  { id: "communities", label: "Communities", icon: "◎" },
  { id: "messages", label: "Messages", icon: "✦", badge: true },
  { id: "services", label: "Services", icon: "◇" },
  { id: "profile", label: "Profile", icon: "◉" }
];

const people = [
  { id: "meera", name: "Meera Patel", initials: "MP", avatar: "avatar-blue", role: "Adult living with hemophilia", city: "Vadodara", community: "Hemophilia", bio: "Design professional, accessibility advocate and founding community volunteer." },
  { id: "vikram", name: "Vikram Desai", initials: "VD", avatar: "avatar-green", role: "Caregiver", city: "Surat", community: "Muscular dystrophy", bio: "Father, small-business owner and experienced caregiver navigating equipment and schemes." },
  { id: "farida", name: "Farida Ansari", initials: "FA", avatar: "avatar-purple", role: "Caregiver", city: "Ahmedabad", community: "Lysosomal disorders", bio: "Parent advocate interested in making verified information easier to understand." },
  { id: "rohan", name: "Rohan Mehta", initials: "RM", avatar: "avatar-coral", role: "Adult living with thalassemia", city: "Rajkot", community: "Thalassemia", bio: "Student and peer mentor who enjoys helping young adults prepare for work and college." },
  { id: "nisha", name: "Nisha Shah", initials: "NS", avatar: "avatar-yellow", role: "Caregiver", city: "Gandhinagar", community: "SMA", bio: "Caregiver focused on accessible learning and finding practical local support." }
];

const communities = [
  { id: "hemophilia", name: "Hemophilia", icon: "◌", tone: "teal", members: 18, description: "Peer support, treatment-centre navigation and everyday living." },
  { id: "thalassemia", name: "Thalassemia", icon: "♡", tone: "coral", members: 24, description: "Transfusion routines, education, work and caregiver support." },
  { id: "muscular", name: "Muscular dystrophy", icon: "⌁", tone: "blue", members: 16, description: "Mobility, equipment, rehabilitation and family connection." },
  { id: "lsd", name: "Lysosomal disorders", icon: "◇", tone: "amber", members: 11, description: "A shared space for Gaucher, Pompe, Fabry and MPS families." },
  { id: "sma", name: "SMA interest group", icon: "✣", tone: "teal", members: 8, description: "A reserve founding group for adults and adult caregivers." }
];

const seededPosts = [
  { id: "p1", author: "meera", community: "hemophilia", time: "2h", title: "A small travel checklist that helped me", body: "I made a simple checklist for carrying treatment documents and planning rest stops. What would you add for an overnight journey?", tags: ["Daily life", "Travel"], support: 12, thanks: 7, comments: 4 },
  { id: "p2", author: "vikram", community: "muscular", time: "5h", title: "Wheelchair repair options around Surat", body: "Our regular repair shop closed. I found two providers, but I want to verify accessibility and service coverage before sharing details. Has anyone used a reliable local option?", tags: ["Equipment", "Local support"], support: 9, thanks: 4, comments: 6 },
  { id: "p3", author: "farida", community: "lsd", time: "Yesterday", title: "Preparing questions before a genetics appointment", body: "Writing down our questions reduced the stress of the visit. I grouped them into diagnosis, daily care and follow-up. This is only a personal organisation tip—not medical advice.", tags: ["Caregiver", "Appointments"], support: 16, thanks: 11, comments: 3 },
  { id: "p4", author: "rohan", community: "thalassemia", time: "Yesterday", title: "How do you discuss accommodations at college?", body: "I am preparing for the next semester and would value experiences from adults who have requested schedule flexibility without oversharing health details.", tags: ["Young adults", "Education"], support: 13, thanks: 8, comments: 9 }
];

const resources = [
  { icon: "⌂", title: "Find nearby care", text: "Reviewed genetics, rehabilitation, blood-disorder and support services.", meta: "Reviewed 18 Aug 2026" },
  { icon: "▣", title: "Government schemes", text: "Plain-language checklists with links to official sources. Eligibility is not guaranteed.", meta: "Reviewed 26 Aug 2026" },
  { icon: "⌕", title: "Clinical trials", text: "Source-checked registry records and questions to discuss with a clinician.", meta: "Synced 29 Aug 2026" }
];

const services = [
  { id: "care", icon: "⌂", tone: "teal", title: "Nearby care", text: "Find reviewed genetics, rehabilitation, blood-disorder and NGO services." },
  { id: "equipment", icon: "▤", tone: "blue", title: "Equipment", text: "Explore verified providers, loan programmes and maintenance resources." },
  { id: "schemes", icon: "▣", tone: "amber", title: "Government schemes", text: "Understand possible routes, documents and official application links." },
  { id: "trials", icon: "⌕", tone: "coral", title: "Clinical trials", text: "Search source-checked registry listings without eligibility promises." },
  { id: "learning", icon: "✦", tone: "teal", title: "Learn skills", text: "Short paths for self-advocacy, digital safety, education and work." },
  { id: "grievance", icon: "↗", tone: "blue", title: "Grievance routes", text: "Prepare a checklist, then continue to the appropriate official portal." }
];

const defaultState = {
  route: "home",
  onboardingComplete: false,
  role: "Caregiver",
  primaryCommunity: "hemophilia",
  joined: ["hemophilia", "muscular"],
  connections: ["meera", "vikram"],
  pendingOutgoing: [],
  blocked: [],
  incomingRequests: ["farida"],
  reactions: {},
  customPosts: [],
  activeConversation: "meera",
  messages: {
    meera: [
      { mine: false, text: "Hi Asha, welcome to the founding community!", time: "10:12" },
      { mine: true, text: "Thank you. I’m especially interested in practical caregiver resources.", time: "10:16" },
      { mine: false, text: "I’ll send the community checklist we discussed. Please verify anything clinical with your care team.", time: "10:18" }
    ],
    vikram: [
      { mine: false, text: "Would you like the equipment-maintenance worksheet?", time: "Yesterday" }
    ]
  },
  notificationCount: 3,
  quietHours: true,
  privateProfile: true,
  language: "EN"
};

let state = loadState();

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return stored ? { ...defaultState, ...stored, messages: { ...defaultState.messages, ...(stored.messages || {}) } } : structuredClone(defaultState);
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" })[char]);
}

function getPerson(id) { return people.find((person) => person.id === id); }
function getCommunity(id) { return communities.find((community) => community.id === id); }
function visiblePeople() { return people.filter((person) => !state.blocked.includes(person.id)); }
function allPosts() { return [...state.customPosts, ...seededPosts].filter((post) => !state.blocked.includes(post.author)); }

function avatar(person, className = "") {
  return `<span class="avatar ${person.avatar || "avatar-asha"} ${className}">${escapeHTML(person.initials)}</span>`;
}

function navMarkup(item, mobile = false) {
  const unread = item.badge && state.notificationCount ? `<span class="nav-badge">${state.notificationCount}</span>` : "";
  return `<button class="nav-item ${state.route === item.id ? "active" : ""}" data-route="${item.id}" aria-current="${state.route === item.id ? "page" : "false"}"><span class="nav-icon" aria-hidden="true">${item.icon}</span><span>${item.label}</span>${unread}</button>`;
}

function renderNavigation() {
  document.querySelector("#side-nav").innerHTML = navItems.map((item) => navMarkup(item)).join("");
  document.querySelector("#bottom-nav").innerHTML = navItems.map((item) => navMarkup(item, true)).join("");
}

function routeTo(route) {
  state.route = route;
  if (route === "messages") state.notificationCount = Math.max(0, state.notificationCount - 1);
  saveState();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function render() {
  renderNavigation();
  const main = document.querySelector("#main-content");
  const routes = { home: renderHome, communities: renderCommunities, messages: renderMessages, services: renderServices, profile: renderProfile };
  main.innerHTML = (routes[state.route] || renderHome)();
  if (state.route === "messages") scrollMessages();
  if (!state.onboardingComplete && !document.querySelector(".onboarding")) openOnboarding();
}

function renderHome() {
  const selected = getCommunity(state.primaryCommunity) || communities[0];
  const posts = allPosts().filter((post) => state.joined.includes(post.community));
  return `<div class="page">
    <div class="grid home-grid">
      <div class="stack">
        <section class="card welcome-card">
          <span class="eyebrow" style="color:var(--mint)">Good morning, Asha</span>
          <h1>You should not have to navigate rare disease alone.</h1>
          <p>Connect with people who understand, exchange practical experiences and find reviewed routes to support.</p>
          <div class="welcome-actions"><button class="primary-button mint" data-action="create-post">Share with your community</button><button class="secondary-button" data-route="communities">Find people</button></div>
          <div class="stats-row"><div class="stat"><strong>${state.joined.length}</strong><small>communities</small></div><div class="stat"><strong>${state.connections.length}</strong><small>connections</small></div><div class="stat"><strong>3</strong><small>saved resources</small></div></div>
        </section>
        <section class="card composer"><span class="avatar avatar-asha">AS</span><button class="composer-prompt" data-action="create-post">Ask a question or share an experience…</button><button class="primary-button" data-action="create-post" aria-label="Create post">＋</button></section>
        <section>
          <div class="section-head"><div><h2>Your community feed</h2><p>Posts from joined, moderated communities</p></div><div class="filter-chips"><button class="chip active">Latest</button><button class="chip">Unanswered</button><button class="chip">Resources</button></div></div>
          <div class="stack">${posts.map(postMarkup).join("") || emptyFeedMarkup()}</div>
        </section>
      </div>
      <aside class="stack home-side">
        <section class="card context-card"><div class="section-head"><div><span class="eyebrow">Your communities</span><h3>Continue where you left off</h3></div><button class="text-button" data-route="communities">View all</button></div>${state.joined.slice(0, 3).map((id) => communityMiniMarkup(getCommunity(id))).join("")}</section>
        <section class="card context-card people-card"><div class="section-head"><div><span class="eyebrow">People</span><h3>You may want to meet</h3></div></div><div class="people-list">${visiblePeople().filter((p) => !state.connections.includes(p.id)).slice(0, 3).map(personRowMarkup).join("")}</div></section>
        <div class="trust-note"><span aria-hidden="true">◇</span><div><strong>Your safety comes first</strong><p>Share only what feels right. Connection requests need acceptance, and report or block is always available.</p></div></div>
        <section class="card context-card"><div class="section-head"><div><span class="eyebrow">Reviewed for you</span><h3>Useful next steps</h3></div></div>${resources.slice(0, 2).map(resourceCompactMarkup).join("")}<button class="text-button" data-route="services">Explore all services →</button></section>
      </aside>
    </div>
  </div>`;
}

function postMarkup(post) {
  const person = getPerson(post.author) || { name: "Asha Shah", initials: "AS", avatar: "avatar-asha", role: state.role, city: "Ahmedabad" };
  const community = getCommunity(post.community);
  const reaction = state.reactions[post.id] || "";
  return `<article class="card post-card">
    <header class="post-header"><button class="avatar-button" data-action="view-member" data-person="${post.author}" aria-label="View ${escapeHTML(person.name)}">${avatar(person)}</button><div class="post-author"><strong>${escapeHTML(person.name)}</strong><span class="post-meta">${escapeHTML(person.role)} · ${escapeHTML(community?.name || "Community")} · ${escapeHTML(post.time)}</span></div><button class="post-menu" data-action="post-menu" data-post="${post.id}" aria-label="Post options">•••</button></header>
    <h3 class="post-title">${escapeHTML(post.title)}</h3><p class="post-body">${escapeHTML(post.body)}</p>
    <div class="post-tags">${post.tags.map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}</div>
    <footer class="post-actions"><button class="post-action ${reaction === "support" ? "active" : ""}" data-action="react" data-post="${post.id}" data-reaction="support">♡ Support <span>${post.support + (reaction === "support" ? 1 : 0)}</span></button><button class="post-action ${reaction === "thanks" ? "active" : ""}" data-action="react" data-post="${post.id}" data-reaction="thanks">✦ Thanks <span>${post.thanks + (reaction === "thanks" ? 1 : 0)}</span></button><button class="post-action" data-action="comment" data-post="${post.id}">◌ ${post.comments} comments</button><button class="post-action" data-action="save-post" data-post="${post.id}">▱ Save</button></footer>
  </article>`;
}

function emptyFeedMarkup() {
  return `<div class="card empty-state"><div><div class="empty-illustration">◎</div><h3>Your feed is ready for a first post</h3><p>Join a community or introduce yourself with a question that others can respond to.</p><button class="primary-button" data-action="create-post">Create a post</button></div></div>`;
}

function communityMiniMarkup(community) {
  if (!community) return "";
  return `<div class="community-mini"><span class="community-icon ${community.tone}">${community.icon}</span><div><strong>${escapeHTML(community.name)}</strong><small>${community.members} founding members</small></div><button class="text-button" data-action="open-community" data-community="${community.id}">Open</button></div>`;
}

function personRowMarkup(person) {
  const pending = state.pendingOutgoing.includes(person.id);
  return `<div class="person-row"><button class="avatar-button" data-action="view-member" data-person="${person.id}">${avatar(person)}</button><div class="person-info"><strong>${escapeHTML(person.name)}</strong><small>${escapeHTML(person.role)} · ${escapeHTML(person.city)}</small></div><button class="secondary-button small-button" data-action="connect" data-person="${person.id}" ${pending ? "disabled" : ""}>${pending ? "Requested" : "Connect"}</button></div>`;
}

function resourceCompactMarkup(resource) {
  return `<div class="community-mini"><span class="community-icon teal">${resource.icon}</span><div><strong>${escapeHTML(resource.title)}</strong><small>${escapeHTML(resource.meta)}</small></div></div>`;
}

function renderCommunities() {
  return `<div class="page"><header class="page-header"><div><span class="eyebrow">Find your people</span><h1>Communities</h1><p>Condition-based spaces for lived experience—not medical recommendations.</p></div><div class="header-actions"><button class="secondary-button" data-action="community-request">Request a community</button><button class="primary-button" data-action="invite-member">Invite someone</button></div></header>
    <div class="filter-chips" style="margin-bottom:18px"><button class="chip active">All pilot groups</button><button class="chip">Joined</button><button class="chip">Most active</button><button class="chip">Caregiver-led</button></div>
    <section class="community-grid">${communities.map(communityCardMarkup).join("")}</section>
    <section class="card card-pad" style="margin-top:18px"><div class="section-head"><div><span class="eyebrow">Discover members</span><h2>Connect across communities</h2><p>Profiles show only what members choose to share.</p></div></div><div class="people-list">${visiblePeople().map(personRowMarkup).join("")}</div></section>
  </div>`;
}

function communityCardMarkup(community) {
  const joined = state.joined.includes(community.id);
  const associated = visiblePeople().filter((person) => person.community.toLowerCase().includes(community.name.split(" ")[0].toLowerCase())).slice(0, 3);
  return `<article class="card community-card" style="--tint:var(--${community.tone === "teal" ? "mint-soft" : community.tone + "-soft"})"><span class="community-icon ${community.tone}">${community.icon}</span><span class="chip soft">${joined ? "Joined" : "Pilot community"}</span><h3>${escapeHTML(community.name)}</h3><p>${escapeHTML(community.description)}</p><footer class="community-card-footer"><div><div class="member-stack">${associated.map((person) => avatar(person)).join("") || '<span class="avatar avatar-green">RC</span>'}</div><span class="member-count">${community.members} founding members</span></div><button class="${joined ? "secondary-button" : "primary-button"} small-button" data-action="${joined ? "open-community" : "join-community"}" data-community="${community.id}">${joined ? "Open" : "Join"}</button></footer></article>`;
}

function renderMessages() {
  const conversations = state.connections.filter((id) => !state.blocked.includes(id));
  const active = conversations.includes(state.activeConversation) ? state.activeConversation : conversations[0];
  if (active) state.activeConversation = active;
  const person = active ? getPerson(active) : null;
  return `<div class="page"><header class="page-header"><div><span class="eyebrow">Adult safe chat</span><h1>Messages</h1><p>Every conversation starts with a request and explicit acceptance.</p></div><div class="header-actions"><button class="primary-button" data-route="communities">Find people</button></div></header>
    <section class="card messages-layout ${person ? "chat-open" : ""}" id="messages-layout">
      <div class="conversation-list"><div class="conversation-list-header"><h2>Conversations</h2><label class="mini-search"><span>⌕</span><input type="search" placeholder="Search messages" aria-label="Search messages" /></label></div>
        ${state.incomingRequests.filter((id) => !state.blocked.includes(id)).map(requestPreviewMarkup).join("")}
        ${conversations.map(conversationItemMarkup).join("")}
        ${!conversations.length && !state.incomingRequests.length ? '<div class="empty-state"><div><p>No conversations yet.</p><button class="text-button" data-route="communities">Find members →</button></div></div>' : ""}
      </div>
      ${person ? chatPanelMarkup(person) : '<div class="chat-panel"><div class="empty-state"><div><div class="empty-illustration">✦</div><h3>Select a conversation</h3><p>Accepted connections appear here.</p></div></div></div>'}
    </section>
  </div>`;
}

function requestPreviewMarkup(id) {
  const person = getPerson(id);
  return `<div class="request-card"><div class="person-row">${avatar(person)}<div class="person-info"><strong>${person.name}</strong><small>Wants to connect · ${person.community}</small></div></div><p style="margin:12px 0 0;color:var(--muted);font-size:12px">“I’d like to exchange practical caregiver resources.”</p><div class="request-actions"><button class="primary-button small-button" data-action="accept-request" data-person="${id}">Accept</button><button class="secondary-button small-button" data-action="decline-request" data-person="${id}">Decline</button></div></div>`;
}

function conversationItemMarkup(id) {
  const person = getPerson(id);
  const thread = state.messages[id] || [];
  const last = thread.at(-1);
  return `<button class="conversation-item ${state.activeConversation === id ? "active" : ""}" data-action="open-conversation" data-person="${id}">${avatar(person)}<span class="conversation-copy"><span><strong>${person.name}</strong><small>${last?.time || "New"}</small></span><span class="conversation-preview">${escapeHTML(last?.text || "You are now connected")}</span></span>${id === "vikram" ? '<span class="unread" aria-label="Unread"></span>' : ""}</button>`;
}

function chatPanelMarkup(person) {
  const thread = state.messages[person.id] || [];
  return `<div class="chat-panel"><header class="chat-header"><button class="icon-button chat-back" style="display:none" data-action="back-to-conversations" aria-label="Back to conversations">←</button><button class="avatar-button" data-action="view-member" data-person="${person.id}">${avatar(person)}</button><div class="person-info"><strong>${person.name}</strong><small>${person.role} · ${person.city}</small></div><button class="icon-button" data-action="view-member" data-person="${person.id}" aria-label="Conversation options">•••</button></header><div class="safety-strip"><span>◇</span><span>Protect personal details. RareConnect cannot provide emergency or medical support.</span></div><div class="message-thread" id="message-thread"><span class="message-day">Today</span>${thread.map((message) => `<div class="message-bubble ${message.mine ? "mine" : ""}">${escapeHTML(message.text)}<time>${escapeHTML(message.time)}</time></div>`).join("")}</div><form class="message-composer" id="message-form" data-person="${person.id}"><textarea name="message" maxlength="500" required placeholder="Write a message…" aria-label="Message ${person.name}"></textarea><button class="primary-button" type="submit">Send</button></form></div>`;
}

function renderServices() {
  return `<div class="page"><header class="page-header"><div><span class="eyebrow">Practical support</span><h1>Services</h1><p>Reviewed navigation with sources, dates and clear boundaries.</p></div><div class="header-actions"><button class="secondary-button" data-action="suggest-resource">Suggest a resource</button></div></header><section class="service-grid">${services.map(serviceCardMarkup).join("")}</section><section class="card card-pad" style="margin-top:18px"><div class="section-head"><div><span class="eyebrow">Recently reviewed</span><h2>Trusted starting points</h2></div><span class="chip soft">Human reviewed</span></div><div class="resource-list">${resources.map(resourceRowMarkup).join("")}</div></section></div>`;
}

function serviceCardMarkup(service) {
  return `<button class="card service-card" data-action="open-service" data-service="${service.id}"><span class="community-icon ${service.tone}">${service.icon}</span><h3>${service.title}</h3><p>${service.text}</p><span class="text-button">Explore safely →</span></button>`;
}

function resourceRowMarkup(resource) {
  return `<div class="resource-row"><span class="community-icon teal">${resource.icon}</span><div><h4>${resource.title}</h4><p>${resource.text}</p><span class="verified">✓ ${resource.meta}</span></div><button class="secondary-button small-button" data-action="resource-preview" data-resource="${resource.title}">View</button></div>`;
}

function renderProfile() {
  return `<div class="page"><section class="card profile-hero"><span class="avatar avatar-asha">AS</span><div><span class="eyebrow">Your profile</span><h1>Asha Shah</h1><p>${escapeHTML(state.role)} · Ahmedabad · Member since the founding pilot</p></div><div class="profile-stats"><div><strong>${state.connections.length}</strong><small>Connections</small></div><div><strong>${state.joined.length}</strong><small>Communities</small></div><div><strong>${state.customPosts.length}</strong><small>Posts</small></div></div></section>
    <div class="settings-grid" style="margin-top:18px"><section class="card setting-card"><div class="section-head"><div><h2>Privacy &amp; safety</h2><p>You control what other members can see.</p></div></div><div class="setting-row"><div><strong>Limited profile</strong><small>Hide city and community activity from non-connections.</small></div><button class="toggle ${state.privateProfile ? "on" : ""}" data-action="toggle-setting" data-setting="privateProfile" aria-label="Toggle limited profile"></button></div><div class="setting-row"><div><strong>Blocked members</strong><small>${state.blocked.length} blocked account${state.blocked.length === 1 ? "" : "s"}</small></div><button class="text-button" data-action="manage-blocked">Manage</button></div><div class="setting-row"><div><strong>Data and consent</strong><small>View, export or request deletion of prototype data.</small></div><button class="text-button" data-action="data-rights">Open</button></div></section>
      <section class="card setting-card"><div class="section-head"><div><h2>Notifications</h2><p>Private previews and quiet hours are on by default.</p></div></div><div class="setting-row"><div><strong>Quiet hours</strong><small>Pause non-urgent notifications from 9 PM to 8 AM.</small></div><button class="toggle ${state.quietHours ? "on" : ""}" data-action="toggle-setting" data-setting="quietHours" aria-label="Toggle quiet hours"></button></div><div class="setting-row"><div><strong>Language</strong><small>English prototype; Gujarati and Hindi are planned.</small></div><button class="text-button" id="profile-language" data-action="language">${state.language}</button></div></section>
      <section class="card setting-card"><div class="section-head"><div><h2>Pilot feedback</h2><p>Help shape the next prototype round.</p></div></div><p style="color:var(--muted)">Tell us what felt useful, confusing or unsafe. Feedback is reviewed separately from community moderation.</p><button class="primary-button" data-action="feedback">Share feedback</button></section>
      <section class="card setting-card"><div class="section-head"><div><h2>Prototype controls</h2><p>Use these during stakeholder demonstrations.</p></div></div><div class="setting-row"><div><strong>Restart onboarding</strong><small>Show the adult/caregiver setup again.</small></div><button class="text-button" data-action="restart-onboarding">Restart</button></div><div class="setting-row"><div><strong>Reset prototype data</strong><small>Remove demo posts, messages and connection changes.</small></div><button class="text-button" style="color:#a43b34" data-action="reset-demo">Reset</button></div></section></div></div>`;
}

function openModal({ title, subtitle = "", body, footer = "", wide = false, className = "" }) {
  document.querySelector("#modal-root").innerHTML = `<div class="modal-backdrop" data-action="close-modal"><section class="modal ${wide ? "wide" : ""} ${className}" role="dialog" aria-modal="true" aria-labelledby="modal-title"><header class="modal-header"><div><h2 id="modal-title">${title}</h2>${subtitle ? `<p>${subtitle}</p>` : ""}</div><button class="modal-close" data-action="close-modal" aria-label="Close">×</button></header><div class="modal-body">${body}</div>${footer ? `<footer class="modal-footer">${footer}</footer>` : ""}</section></div>`;
  document.querySelector(".modal-close")?.focus();
}

function closeModal() { document.querySelector("#modal-root").innerHTML = ""; }

function openCreatePost() {
  const options = state.joined.map((id) => `<option value="${id}">${getCommunity(id)?.name}</option>`).join("");
  openModal({ title: "Share with your community", subtitle: "Speak from experience and avoid personal contact or medical instructions.", body: `<form class="form-grid" id="post-form"><label class="field"><span>Community</span><select name="community">${options}</select></label><label class="field"><span>Title</span><input name="title" maxlength="90" required placeholder="What would you like help with?" /></label><label class="field"><span>Your post</span><textarea name="body" maxlength="700" required placeholder="Share context, what you have tried, or the experience you are looking for…"></textarea><small>Do not include phone numbers, addresses or medical reports.</small></label><label class="field"><span>Topic</span><select name="tag"><option>Daily life</option><option>Caregiver</option><option>Equipment</option><option>Education</option><option>Work</option><option>Government schemes</option></select></label><div class="consent-note">Posts are visible to members of the selected pilot community and may be reviewed after a report.</div><button class="primary-button" type="submit">Publish post</button></form>` });
}

function openMember(id) {
  const person = getPerson(id);
  if (!person) return;
  const connected = state.connections.includes(id);
  const pending = state.pendingOutgoing.includes(id);
  openModal({ title: "Member profile", body: `<div class="member-modal-head">${avatar(person)}<div><h2 style="margin:0 0 3px">${person.name}</h2><p style="margin:0;color:var(--muted)">${person.role} · ${person.city}</p><span class="chip soft" style="display:inline-block;margin-top:8px">${person.community}</span></div></div><p class="member-bio">${person.bio}</p><div class="trust-note"><span>◇</span><div><strong>Limited pilot profile</strong><p>No exact location, contact details or diagnosis records are shown.</p></div></div><div class="safety-menu"><button class="safety-action" data-action="report-member" data-person="${id}">⚑ Report this member</button><button class="safety-action danger" data-action="block-member" data-person="${id}">⊘ Block this member</button></div>`, footer: connected ? `<button class="secondary-button" data-route="messages" data-action="message-person" data-person="${id}">Open conversation</button>` : `<button class="secondary-button" data-action="close-modal">Close</button><button class="primary-button" data-action="connect" data-person="${id}" ${pending ? "disabled" : ""}>${pending ? "Request sent" : "Send connection request"}</button>` });
}

function openReport(id, type = "member") {
  openModal({ title: `Report ${type}`, subtitle: "A trained pilot moderator will review only the information needed for this report.", body: `<form id="report-form" class="form-grid" data-target="${id}" data-type="${type}"><label class="field"><span>What happened?</span><select name="reason" required><option value="">Choose a reason</option><option>Harassment or unwanted contact</option><option>Unsafe medical claim</option><option>Personal information shared</option><option>Spam or fundraising pressure</option><option>Something else</option></select></label><label class="field"><span>Additional context (optional)</span><textarea name="details" maxlength="400" placeholder="Describe what the moderator should review"></textarea></label><div class="consent-note">RareConnect is not an emergency service. If someone is in immediate danger, contact local emergency services.</div><button class="danger-button" type="submit">Submit report</button></form>` });
}

function openService(id) {
  const service = services.find((item) => item.id === id);
  if (!service) return;
  const boundaries = {
    schemes: "RareConnect can explain possible routes but cannot decide eligibility or submit an application.",
    trials: "Registry information may be incomplete or change. A treating clinician and trial team determine suitability.",
    grievance: "Draft privately, then submit directly on the official portal. RareConnect never requests government credentials.",
    care: "Listings are source-reviewed, not rankings or endorsements.",
    equipment: "The pilot does not support peer sales, payments or device recommendations.",
    learning: "Lessons are educational and do not replace professional medical, legal or financial advice."
  };
  openModal({ title: service.title, subtitle: "Prototype service preview", body: `<div style="display:flex;gap:14px;align-items:flex-start"><span class="community-icon ${service.tone}">${service.icon}</span><div><p>${service.text}</p><div class="trust-note"><span>◇</span><div><strong>Know the boundary</strong><p>${boundaries[id]}</p></div></div></div></div><div class="resource-list" style="margin-top:18px">${resources.slice(0,2).map(resourceRowMarkup).join("")}</div>`, footer: `<button class="secondary-button" data-action="close-modal">Close</button><button class="primary-button" data-action="service-feedback">Tell us what you need</button>` });
}

function openSearch(query = "") {
  const q = query.trim().toLowerCase();
  const personResults = visiblePeople().filter((person) => !q || `${person.name} ${person.role} ${person.community} ${person.city}`.toLowerCase().includes(q));
  const communityResults = communities.filter((community) => !q || `${community.name} ${community.description}`.toLowerCase().includes(q));
  const results = [
    ...communityResults.map((community) => `<button class="search-result" data-action="open-community" data-community="${community.id}"><span class="community-icon ${community.tone}">${community.icon}</span><span><strong>${community.name}</strong><small>Community · ${community.members} members</small></span><span>→</span></button>`),
    ...personResults.map((person) => `<button class="search-result" data-action="view-member" data-person="${person.id}">${avatar(person)}<span><strong>${person.name}</strong><small>${person.role} · ${person.city}</small></span><span>→</span></button>`)
  ];
  openModal({ title: "Search RareConnect", subtitle: q ? `Results for “${escapeHTML(query)}”` : "Find a community or founding member", body: `<label class="mini-search" style="margin-bottom:14px"><span>⌕</span><input id="modal-search" value="${escapeHTML(query)}" type="search" placeholder="Try ‘hemophilia’ or ‘caregiver’" /></label><div class="search-overlay-results">${results.join("") || '<div class="empty-state"><div><p>No matching people or communities.</p></div></div>'}</div>` });
  setTimeout(() => document.querySelector("#modal-search")?.focus(), 0);
}

function openOnboarding(step = 1) {
  const progress = `<div class="onboarding-progress">${[1,2,3].map((n) => `<span class="${n <= step ? "done" : ""}"></span>`).join("")}</div>`;
  if (step === 1) {
    openModal({ title: "", className: "onboarding", body: `${progress}<div class="onboarding-hero"><span class="brand-mark">R</span><span class="eyebrow">Welcome to the founding pilot</span><h1>A safer way to find people who understand.</h1><p>RareConnect helps adults living with rare diseases and caregivers exchange lived experience and find reviewed support routes.</p></div><div class="consent-note"><strong>Important:</strong> this prototype does not provide medical advice, emergency help or treatment recommendations.</div>`, footer: `<button class="primary-button" data-action="onboarding-next" data-step="2">Continue</button>` });
  } else if (step === 2) {
    openModal({ title: "Tell us your role", subtitle: "The first pilot is restricted to adults and adult caregivers.", className: "onboarding", body: `${progress}<div class="choice-grid"><label class="choice-card"><input type="radio" name="role" value="Adult living with a rare disease" ${state.role.includes("living") ? "checked" : ""}/><span><strong>I live with a rare disease</strong><small>I am 18 or older.</small></span></label><label class="choice-card"><input type="radio" name="role" value="Caregiver" ${state.role === "Caregiver" ? "checked" : ""}/><span><strong>I am a caregiver</strong><small>I am 18 or older.</small></span></label></div><label class="choice-card" style="margin-top:12px"><input id="adult-confirm" type="checkbox"/><span><strong>I confirm I am 18 or older</strong><small>Minor accounts, profiles and chat are not included in this pilot.</small></span></label>`, footer: `<button class="secondary-button" data-action="onboarding-next" data-step="1">Back</button><button class="primary-button" data-action="onboarding-role">Continue</button>` });
  } else {
    openModal({ title: "Choose a starting community", subtitle: "You can join more communities later.", className: "onboarding", body: `${progress}<div class="choice-grid">${communities.slice(0,4).map((community, index) => `<label class="choice-card"><input type="radio" name="community" value="${community.id}" ${state.primaryCommunity === community.id || (!state.primaryCommunity && index === 0) ? "checked" : ""}/><span><strong>${community.name}</strong><small>${community.description}</small></span></label>`).join("")}</div><div class="consent-note" style="margin-top:12px">Your community choice stays private from non-connections. Notifications never display a diagnosis on the lock screen.</div>`, footer: `<button class="secondary-button" data-action="onboarding-next" data-step="2">Back</button><button class="primary-button" data-action="finish-onboarding">Enter RareConnect</button>` });
  }
}

function showToast(title, detail = "") {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<strong>${escapeHTML(title)}</strong>${detail ? `<small>${escapeHTML(detail)}</small>` : ""}`;
  document.querySelector("#toast-root").append(toast);
  setTimeout(() => toast.remove(), 3600);
}

function openGenericForm(title, subtitle, label = "Tell us more") {
  openModal({ title, subtitle, body: `<form id="generic-form" class="form-grid"><label class="field"><span>${label}</span><textarea name="details" required maxlength="500"></textarea></label><button class="primary-button" type="submit">Submit</button></form>` });
}

function scrollMessages() { setTimeout(() => { const thread = document.querySelector("#message-thread"); if (thread) thread.scrollTop = thread.scrollHeight; }, 0); }

document.addEventListener("click", (event) => {
  const routeButton = event.target.closest("[data-route]");
  if (routeButton && !routeButton.dataset.action) { closeModal(); routeTo(routeButton.dataset.route); return; }
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const { action, person, community, post, reaction, service, step, setting } = button.dataset;

  if (action === "close-modal") {
    if (button.classList.contains("modal-backdrop") && event.target !== button) return;
    closeModal();
  }
  if (action === "create-post") openCreatePost();
  if (action === "view-member") openMember(person);
  if (action === "connect") {
    if (!state.pendingOutgoing.includes(person)) state.pendingOutgoing.push(person);
    saveState(); closeModal(); render(); showToast("Connection request sent", "They must accept before either of you can message.");
  }
  if (action === "join-community") {
    if (!state.joined.includes(community)) state.joined.push(community);
    saveState(); render(); showToast(`Joined ${getCommunity(community)?.name}`, "Community rules apply to every post and message.");
  }
  if (action === "open-community") { closeModal(); routeTo("home"); showToast(`${getCommunity(community)?.name}`, "Showing joined-community activity in your feed."); }
  if (action === "react") { state.reactions[post] = state.reactions[post] === reaction ? "" : reaction; saveState(); render(); }
  if (action === "save-post") showToast("Post saved privately", "Saved items are not visible to other members.");
  if (action === "comment") openGenericForm("Add a supportive comment", "Respond from lived experience. Avoid medical instructions or personal contact details.", "Your comment");
  if (action === "post-menu") openModal({ title: "Post options", body: `<div class="safety-menu"><button class="safety-action" data-action="save-post" data-post="${post}">▱ Save privately</button><button class="safety-action danger" data-action="report-post" data-post="${post}">⚑ Report post</button></div>` });
  if (action === "report-post") openReport(post, "post");
  if (action === "report-member") openReport(person, "member");
  if (action === "block-member") {
    openModal({ title: `Block ${getPerson(person)?.name}?`, subtitle: "They will not be notified.", body: `<p>Blocking immediately removes this member from your feed, connections and messaging.</p>`, footer: `<button class="secondary-button" data-action="close-modal">Cancel</button><button class="danger-button" data-action="confirm-block" data-person="${person}">Block member</button>` });
  }
  if (action === "confirm-block") {
    state.blocked = [...new Set([...state.blocked, person])];
    state.connections = state.connections.filter((id) => id !== person);
    state.incomingRequests = state.incomingRequests.filter((id) => id !== person);
    state.pendingOutgoing = state.pendingOutgoing.filter((id) => id !== person);
    delete state.messages[person];
    saveState(); closeModal(); render(); showToast("Member blocked", "Their profile, posts and messages are now hidden.");
  }
  if (action === "accept-request") {
    state.incomingRequests = state.incomingRequests.filter((id) => id !== person);
    if (!state.connections.includes(person)) state.connections.push(person);
    state.messages[person] = [{ mine: false, text: "Thank you for accepting. I’d like to exchange practical caregiver resources.", time: "Now" }];
    state.activeConversation = person;
    saveState(); render(); showToast("Connection accepted", "You can now exchange text messages.");
  }
  if (action === "decline-request") { state.incomingRequests = state.incomingRequests.filter((id) => id !== person); saveState(); render(); showToast("Request declined", "The member was not notified of a reason."); }
  if (action === "open-conversation") { state.activeConversation = person; saveState(); render(); }
  if (action === "back-to-conversations") document.querySelector("#messages-layout")?.classList.remove("chat-open");
  if (action === "message-person") { state.activeConversation = person; saveState(); closeModal(); routeTo("messages"); }
  if (action === "open-service") openService(service);
  if (["suggest-resource", "community-request", "invite-member", "feedback", "service-feedback"].includes(action)) {
    const content = { "suggest-resource": ["Suggest a reviewed resource", "Share the official source and why it may help."], "community-request": ["Request a community", "Requests are reviewed for membership, content and moderation readiness."], "invite-member": ["Invite an adult or caregiver", "The pilot team will send an opt-in invitation; do not submit medical information."], feedback: ["Share pilot feedback", "Feedback goes to the product team, not the community feed."], "service-feedback": ["What support do you need?", "Describe the task you are trying to complete."] }[action];
    openGenericForm(content[0], content[1]);
  }
  if (action === "resource-preview") showToast("Resource preview opened", "Source, review date and service boundary are visible in the full build.");
  if (action === "toggle-setting") { state[setting] = !state[setting]; saveState(); render(); showToast("Setting updated"); }
  if (action === "language" || action === "pilot-info") openModal({ title: "Language and access", body: `<p>The interactive prototype is currently in English. Gujarati and Hindi content will be reviewed by human editors before the pilot.</p><div class="trust-note"><span>◇</span><div><strong>Accessibility target</strong><p>Responsive layout, keyboard support, readable contrast and screen-reader labels are part of every core journey.</p></div></div>` });
  if (action === "choose-language") { state.language = button.dataset.language || "EN"; saveState(); document.querySelector("#language-button").textContent = state.language; closeModal(); showToast("Language updated"); }
  if (action === "manage-blocked") openModal({ title: "Blocked members", body: state.blocked.length ? state.blocked.map((id) => `<div class="person-row">${avatar(getPerson(id))}<div class="person-info"><strong>${getPerson(id).name}</strong></div><button class="secondary-button small-button" data-action="unblock" data-person="${id}">Unblock</button></div>`).join("") : "<p>You have not blocked anyone.</p>" });
  if (action === "unblock") { state.blocked = state.blocked.filter((id) => id !== person); saveState(); closeModal(); render(); showToast("Member unblocked"); }
  if (action === "data-rights") openModal({ title: "Your data and consent", body: `<div class="stack"><div class="trust-note"><span>◇</span><div><strong>Prototype storage</strong><p>This demo stores activity only in this browser. Production rights flows will include access, correction, export, deletion and consent withdrawal.</p></div></div><button class="secondary-button" data-action="export-demo">Export prototype data</button></div>` });
  if (action === "export-demo") { const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" }); const link = Object.assign(document.createElement("a"), { href: URL.createObjectURL(blob), download: "rareconnect-prototype-data.json" }); link.click(); URL.revokeObjectURL(link.href); showToast("Prototype data exported"); }
  if (action === "restart-onboarding") { state.onboardingComplete = false; saveState(); openOnboarding(); }
  if (action === "reset-demo") openModal({ title: "Reset prototype data?", body: "<p>This removes locally created posts, messages and connection changes from this browser.</p>", footer: `<button class="secondary-button" data-action="close-modal">Cancel</button><button class="danger-button" data-action="confirm-reset">Reset</button>` });
  if (action === "confirm-reset") { state = structuredClone(defaultState); state.onboardingComplete = true; saveState(); closeModal(); routeTo("home"); showToast("Prototype reset"); }
  if (action === "onboarding-next") openOnboarding(Number(step));
  if (action === "onboarding-role") {
    const role = document.querySelector('input[name="role"]:checked')?.value;
    const adult = document.querySelector("#adult-confirm")?.checked;
    if (!role || !adult) { showToast("Please confirm your role and age", "The closed pilot is for participants aged 18 or older."); return; }
    state.role = role; saveState(); openOnboarding(3);
  }
  if (action === "finish-onboarding") {
    const choice = document.querySelector('input[name="community"]:checked')?.value;
    if (!choice) { showToast("Choose a starting community"); return; }
    state.primaryCommunity = choice;
    if (!state.joined.includes(choice)) state.joined.push(choice);
    state.onboardingComplete = true;
    saveState(); closeModal(); render(); showToast("Welcome to RareConnect", "Your founding community is ready.");
  }
});

document.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  if (form.id === "post-form") {
    state.customPosts.unshift({ id: `custom-${Date.now()}`, author: "self", community: data.get("community"), time: "Now", title: data.get("title"), body: data.get("body"), tags: [data.get("tag")], support: 0, thanks: 0, comments: 0 });
    saveState(); closeModal(); routeTo("home"); showToast("Post published", "It is now visible to the selected pilot community.");
  }
  if (form.id === "message-form") {
    const person = form.dataset.person;
    const text = String(data.get("message") || "").trim();
    if (!text) return;
    state.messages[person] ||= [];
    state.messages[person].push({ mine: true, text, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) });
    saveState(); render(); scrollMessages();
  }
  if (form.id === "report-form") { closeModal(); showToast("Report received", "The pilot safety team will review it and provide a status update."); }
  if (form.id === "generic-form") { closeModal(); showToast("Thank you", "Your response has been recorded in this prototype."); }
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); document.querySelector("#global-search")?.focus(); }
  if (event.key === "Escape") closeModal();
});

document.querySelector("#global-search").addEventListener("keydown", (event) => {
  if (event.key === "Enter") { event.preventDefault(); openSearch(event.currentTarget.value); }
});

document.querySelector("#notifications-button").addEventListener("click", () => {
  state.notificationCount = 0; saveState(); renderNavigation();
  openModal({ title: "Notifications", subtitle: "Previews avoid condition and message details.", body: `<div class="people-list"><div class="community-mini"><span class="community-icon teal">♡</span><div><strong>Someone supported your introduction</strong><small>12 minutes ago</small></div></div><div class="community-mini"><span class="community-icon blue">✦</span><div><strong>You have a new connection request</strong><small>1 hour ago</small></div></div><div class="community-mini"><span class="community-icon amber">▣</span><div><strong>A saved resource was reviewed</strong><small>Yesterday</small></div></div></div>` });
});

document.querySelector("#language-button").addEventListener("click", () => {
  openModal({ title: "Choose language", subtitle: "Only English copy is complete in this prototype.", body: `<div class="choice-grid"><button class="choice-card" data-action="choose-language" data-language="EN"><span><strong>English</strong><small>Available</small></span></button><button class="choice-card" disabled><span><strong>ગુજરાતી</strong><small>Human review planned</small></span></button><button class="choice-card" disabled><span><strong>हिन्दी</strong><small>Human review planned</small></span></button></div>` });
});

document.querySelector("#pilot-info-button").addEventListener("click", () => {
  openModal({ title: "How pilot safety works", body: `<div class="stack"><div class="trust-note"><span>1</span><div><strong>Adults and caregivers only</strong><p>No minor accounts, public profiles or child chat.</p></div></div><div class="trust-note"><span>2</span><div><strong>Consent before messaging</strong><p>A connection request must be accepted before text can be sent.</p></div></div><div class="trust-note"><span>3</span><div><strong>Report, block and appeal</strong><p>Controls remain visible in profiles, posts and conversations.</p></div></div><div class="trust-note"><span>4</span><div><strong>Clear service boundaries</strong><p>No medical advice, clinical eligibility promises or grievance submission.</p></div></div></div>` });
});

document.addEventListener("input", (event) => {
  if (event.target.id === "modal-search") openSearch(event.target.value);
});

if ("serviceWorker" in navigator && location.protocol !== "file:") navigator.serviceWorker.register("./sw.js").catch(() => {});

render();
