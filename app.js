const STORAGE_KEY = "rareconnect-prototype-v1";

const navItems = [
  { id: "home", label: "Home", icon: "home" },
  { id: "communities", label: "Circles", icon: "people" },
  { id: "messages", label: "Chat", icon: "chat", badge: true },
  { id: "services", label: "Support", icon: "compass" },
  { id: "profile", label: "You", icon: "user" }
];

const iconPaths = {
  home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v10h13V10"/><path d="M9.5 20v-6h5v6"/>',
  people: '<path d="M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 20v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  chat: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/><path d="M8 9h8M8 13h5"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  heart: '<path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6l1.2 1.2L12 21l7.6-7.6 1.2-1.2a5.4 5.4 0 0 0 0-7.6z"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4z"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5z"/><path d="M4 6.5v13"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  map: '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/>',
  equipment: '<path d="M7 18a4 4 0 1 0 4 4"/><circle cx="15" cy="5" r="2"/><path d="m13 8-2 5h6l2 5M11 13H7l-2 5"/>',
  document: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>',
  flask: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 18l-5-9V3"/><path d="M8 15h8"/>',
  megaphone: '<path d="m3 11 16-6v14L3 13z"/><path d="M11.6 16 13 21H8l-1.5-6"/>',
  more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  bookmark: '<path d="M6 3h12v18l-6-4-6 4z"/>',
  reply: '<path d="m9 17-5-5 5-5"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/>',
  send: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>'
};

function icon(name, className = "") {
  return `<svg class="ui-icon ${className}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name] || iconPaths.compass}</svg>`;
}

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
  { icon: "map", title: "Nearby care", text: "Reviewed places and support.", meta: "Reviewed 18 Aug" },
  { icon: "document", title: "Government help", text: "Simple steps and official links.", meta: "Reviewed 26 Aug" },
  { icon: "flask", title: "Clinical trials", text: "Registry listings to discuss with your doctor.", meta: "Updated 29 Aug" }
];

const services = [
  { id: "care", icon: "map", tone: "teal", title: "Nearby care", text: "Find reviewed support." },
  { id: "equipment", icon: "equipment", tone: "blue", title: "Equipment", text: "Providers, loans and repairs." },
  { id: "schemes", icon: "document", tone: "amber", title: "Government help", text: "Schemes made simpler." },
  { id: "trials", icon: "flask", tone: "coral", title: "Clinical trials", text: "Check registry listings." },
  { id: "learning", icon: "book", tone: "teal", title: "Learn", text: "Skills for everyday life." },
  { id: "grievance", icon: "megaphone", tone: "blue", title: "Raise a concern", text: "Find the right official route." }
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
  return `<button class="nav-item ${state.route === item.id ? "active" : ""}" data-route="${item.id}" aria-current="${state.route === item.id ? "page" : "false"}"><span class="nav-icon">${icon(item.icon)}</span><span>${item.label}</span>${unread}</button>`;
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
  const posts = allPosts().filter((post) => state.joined.includes(post.community));
  return `<div class="page">
    <div class="grid home-grid">
      <div class="stack">
        <section class="card welcome-card">
          <span class="eyebrow hero-eyebrow">Good morning, Asha</span>
          <h1>You’re among people<br>who understand.</h1>
          <p>Share, listen, or find support—at your pace.</p>
          <div class="welcome-actions"><button class="primary-button mint" data-action="create-post">${icon("pen")} Share something</button><button class="secondary-button" data-route="communities">${icon("people")} Find your circle</button></div>
        </section>
        <section class="quick-actions" aria-label="Quick actions">
          <button class="quick-action" data-route="messages"><span class="quick-icon mint-bg">${icon("chat")}</span><span><strong>Talk</strong><small>${state.notificationCount ? `${state.notificationCount} new` : "Messages"}</small></span>${icon("arrow", "quick-arrow")}</button>
          <button class="quick-action" data-route="services"><span class="quick-icon blue-bg">${icon("compass")}</span><span><strong>Find support</strong><small>Reviewed help</small></span>${icon("arrow", "quick-arrow")}</button>
          <button class="quick-action" data-action="open-service" data-service="learning"><span class="quick-icon amber-bg">${icon("book")}</span><span><strong>Learn</strong><small>Small steps</small></span>${icon("arrow", "quick-arrow")}</button>
        </section>
        <section class="card composer"><span class="avatar avatar-asha">AS</span><button class="composer-prompt" data-action="create-post">What’s on your mind?</button><button class="round-primary" data-action="create-post" aria-label="Create post">${icon("plus")}</button></section>
        <section>
          <div class="section-head calm-head"><div><span class="eyebrow">Your circles</span><h2>Shared with care</h2></div><div class="filter-chips"><button class="chip active">Latest</button><button class="chip">Questions</button></div></div>
          <div class="stack">${posts.slice(0, 3).map(postMarkup).join("") || emptyFeedMarkup()}</div>
        </section>
      </div>
      <aside class="stack home-side">
        <section class="card context-card"><div class="section-head"><div><span class="eyebrow">Your circles</span><h3>You belong here</h3></div><button class="icon-link" data-route="communities" aria-label="View all circles">${icon("arrow")}</button></div>${state.joined.slice(0, 3).map((id) => communityMiniMarkup(getCommunity(id))).join("")}</section>
        <section class="card context-card people-card"><div class="section-head"><div><span class="eyebrow">People</span><h3>Say hello</h3></div></div><div class="people-list">${visiblePeople().filter((p) => !state.connections.includes(p.id)).slice(0, 2).map(personRowMarkup).join("")}</div></section>
        <div class="kind-note">${icon("shield")}<span><strong>You choose what to share.</strong><small>Connect before chatting.</small></span></div>
      </aside>
    </div>
  </div>`;
}

function postMarkup(post) {
  const person = getPerson(post.author) || { name: "Asha Shah", initials: "AS", avatar: "avatar-asha", role: state.role, city: "Ahmedabad" };
  const community = getCommunity(post.community);
  const reaction = state.reactions[post.id] || "";
  return `<article class="card post-card">
    <header class="post-header"><button class="avatar-button" data-action="view-member" data-person="${post.author}" aria-label="View ${escapeHTML(person.name)}">${avatar(person)}</button><div class="post-author"><strong>${escapeHTML(person.name)}</strong><span class="post-meta">${escapeHTML(community?.name || "Community")} · ${escapeHTML(post.time)}</span></div><button class="post-menu" data-action="post-menu" data-post="${post.id}" aria-label="Post options">${icon("more")}</button></header>
    <h3 class="post-title">${escapeHTML(post.title)}</h3><p class="post-body">${escapeHTML(post.body)}</p>
    <div class="post-tags">${post.tags.slice(0, 2).map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}</div>
    <footer class="post-actions"><button class="post-action ${reaction === "support" ? "active" : ""}" data-action="react" data-post="${post.id}" data-reaction="support" aria-label="Send support">${icon("heart")}<span>${post.support + (reaction === "support" ? 1 : 0)}</span></button><button class="post-action" data-action="comment" data-post="${post.id}" aria-label="Reply">${icon("reply")}<span>${post.comments}</span></button><button class="post-action save-action" data-action="save-post" data-post="${post.id}" aria-label="Save post">${icon("bookmark")}</button></footer>
  </article>`;
}

function emptyFeedMarkup() {
  return `<div class="card empty-state"><div><div class="empty-illustration">${icon("people")}</div><h3>Your circle is ready</h3><p>Say hello when it feels right.</p><button class="primary-button" data-action="create-post">Share something</button></div></div>`;
}

function communityMiniMarkup(community) {
  if (!community) return "";
  return `<button class="community-mini" data-action="open-community" data-community="${community.id}"><span class="community-icon ${community.tone}">${icon("people")}</span><span><strong>${escapeHTML(community.name)}</strong><small>${community.members} people</small></span>${icon("arrow", "row-arrow")}</button>`;
}

function personRowMarkup(person) {
  const pending = state.pendingOutgoing.includes(person.id);
  return `<div class="person-row"><button class="avatar-button" data-action="view-member" data-person="${person.id}" aria-label="View ${escapeHTML(person.name)}">${avatar(person)}</button><div class="person-info"><strong>${escapeHTML(person.name)}</strong><small>${escapeHTML(person.city)}</small></div><button class="connect-button" data-action="connect" data-person="${person.id}" ${pending ? "disabled" : ""} aria-label="${pending ? "Connection requested" : `Connect with ${escapeHTML(person.name)}`}">${pending ? "✓" : icon("plus")}</button></div>`;
}

function resourceCompactMarkup(resource) {
  return `<div class="community-mini"><span class="community-icon teal">${icon(resource.icon)}</span><div><strong>${escapeHTML(resource.title)}</strong><small>${escapeHTML(resource.meta)}</small></div></div>`;
}

function renderCommunities() {
  return `<div class="page"><header class="page-header simple-header"><div><span class="eyebrow">Find your people</span><h1>Your circles</h1><p>Quiet, moderated spaces where experience is enough.</p></div><div class="header-actions"><button class="round-secondary" data-action="community-request" aria-label="Request a circle">${icon("plus")}</button></div></header>
    <div class="filter-chips" style="margin-bottom:18px"><button class="chip active">All circles</button><button class="chip">Joined</button></div>
    <section class="community-grid">${communities.map(communityCardMarkup).join("")}</section>
    <section class="card card-pad people-discovery" style="margin-top:18px"><div class="section-head"><div><span class="eyebrow">People</span><h2>Meet someone who gets it</h2></div></div><div class="people-list">${visiblePeople().map(personRowMarkup).join("")}</div></section>
  </div>`;
}

function communityCardMarkup(community) {
  const joined = state.joined.includes(community.id);
  const associated = visiblePeople().filter((person) => person.community.toLowerCase().includes(community.name.split(" ")[0].toLowerCase())).slice(0, 3);
  return `<article class="card community-card" style="--tint:var(--${community.tone === "teal" ? "mint-soft" : community.tone + "-soft"})"><div class="community-card-top"><span class="community-icon ${community.tone}">${icon("people")}</span><span class="status-dot ${joined ? "joined" : ""}" aria-label="${joined ? "Joined" : "Not joined"}"></span></div><h3>${escapeHTML(community.name)}</h3><p>${escapeHTML(community.description.split(",")[0])}.</p><footer class="community-card-footer"><span class="member-count">${community.members} people</span><button class="${joined ? "secondary-button" : "primary-button"} small-button" data-action="${joined ? "open-community" : "join-community"}" data-community="${community.id}">${joined ? "Open" : "Join"}</button></footer></article>`;
}

function renderMessages() {
  const conversations = state.connections.filter((id) => !state.blocked.includes(id));
  const active = conversations.includes(state.activeConversation) ? state.activeConversation : conversations[0];
  if (active) state.activeConversation = active;
  const person = active ? getPerson(active) : null;
  return `<div class="page"><header class="page-header simple-header"><div><span class="eyebrow">Private conversations</span><h1>Chat</h1><p>Connect first. Talk when you’re ready.</p></div><div class="header-actions"><button class="round-primary" data-route="communities" aria-label="Find people">${icon("plus")}</button></div></header>
    <section class="card messages-layout ${person ? "chat-open" : ""}" id="messages-layout">
      <div class="conversation-list"><div class="conversation-list-header"><h2>Conversations</h2><label class="mini-search">${icon("search")}<input type="search" placeholder="Search" aria-label="Search messages" /></label></div>
        ${state.incomingRequests.filter((id) => !state.blocked.includes(id)).map(requestPreviewMarkup).join("")}
        ${conversations.map(conversationItemMarkup).join("")}
        ${!conversations.length && !state.incomingRequests.length ? '<div class="empty-state"><div><p>No conversations yet.</p><button class="text-button" data-route="communities">Find members →</button></div></div>' : ""}
      </div>
      ${person ? chatPanelMarkup(person) : `<div class="chat-panel"><div class="empty-state"><div><div class="empty-illustration">${icon("chat")}</div><h3>Choose a conversation</h3><p>Your connections appear here.</p></div></div></div>`}
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
  return `<div class="chat-panel"><header class="chat-header"><button class="icon-button chat-back" style="display:none" data-action="back-to-conversations" aria-label="Back to conversations">←</button><button class="avatar-button" data-action="view-member" data-person="${person.id}">${avatar(person)}</button><div class="person-info"><strong>${person.name}</strong><small>${person.city}</small></div><button class="icon-button" data-action="view-member" data-person="${person.id}" aria-label="Conversation options">${icon("more")}</button></header><div class="safety-strip">${icon("shield")}<span>Keep personal details private.</span></div><div class="message-thread" id="message-thread"><span class="message-day">Today</span>${thread.map((message) => `<div class="message-bubble ${message.mine ? "mine" : ""}">${escapeHTML(message.text)}<time>${escapeHTML(message.time)}</time></div>`).join("")}</div><form class="message-composer" id="message-form" data-person="${person.id}"><textarea name="message" maxlength="500" required placeholder="Write a message…" aria-label="Message ${person.name}"></textarea><button class="round-primary" type="submit" aria-label="Send message">${icon("send")}</button></form></div>`;
}

function renderServices() {
  return `<div class="page"><header class="page-header simple-header"><div><span class="eyebrow">Here when you need it</span><h1>Support</h1><p>Clear starting points, reviewed by people.</p></div><div class="header-actions"><button class="round-secondary" data-action="suggest-resource" aria-label="Suggest a resource">${icon("plus")}</button></div></header><section class="service-grid">${services.map(serviceCardMarkup).join("")}</section><section class="card card-pad reviewed-card" style="margin-top:18px"><div class="section-head"><div><span class="eyebrow">Recently checked</span><h2>Good places to start</h2></div><span class="review-badge">${icon("shield")} Reviewed</span></div><div class="resource-list">${resources.map(resourceRowMarkup).join("")}</div></section></div>`;
}

function serviceCardMarkup(service) {
  return `<button class="card service-card" data-action="open-service" data-service="${service.id}"><span class="service-icon ${service.tone}">${icon(service.icon)}</span><span><h3>${service.title}</h3><p>${service.text}</p></span>${icon("arrow", "service-arrow")}</button>`;
}

function resourceRowMarkup(resource) {
  return `<button class="resource-row" data-action="resource-preview" data-resource="${resource.title}"><span class="community-icon teal">${icon(resource.icon)}</span><span><h4>${resource.title}</h4><small>${resource.meta}</small></span>${icon("arrow", "row-arrow")}</button>`;
}

function renderProfile() {
  return `<div class="page"><section class="card profile-hero"><span class="avatar avatar-asha">AS</span><div><span class="eyebrow">Your space</span><h1>Asha Shah</h1><p>${escapeHTML(state.role)} · Ahmedabad</p></div><div class="profile-stats"><div><strong>${state.connections.length}</strong><small>People</small></div><div><strong>${state.joined.length}</strong><small>Circles</small></div></div></section>
    <div class="settings-grid" style="margin-top:18px"><section class="card setting-card"><div class="section-head"><div><span class="setting-title-icon">${icon("shield")}</span><h2>Privacy</h2></div></div><div class="setting-row"><div><strong>Limited profile</strong><small>Share less with new people.</small></div><button class="toggle ${state.privateProfile ? "on" : ""}" data-action="toggle-setting" data-setting="privateProfile" aria-label="Toggle limited profile"></button></div><div class="setting-row"><div><strong>Blocked people</strong><small>${state.blocked.length} blocked</small></div><button class="icon-link" data-action="manage-blocked" aria-label="Manage blocked people">${icon("arrow")}</button></div><div class="setting-row"><div><strong>Your data</strong><small>View or export.</small></div><button class="icon-link" data-action="data-rights" aria-label="Open data controls">${icon("arrow")}</button></div></section>
      <section class="card setting-card"><div class="section-head"><div><span class="setting-title-icon">${icon("chat")}</span><h2>Peace &amp; quiet</h2></div></div><div class="setting-row"><div><strong>Quiet hours</strong><small>9 PM–8 AM</small></div><button class="toggle ${state.quietHours ? "on" : ""}" data-action="toggle-setting" data-setting="quietHours" aria-label="Toggle quiet hours"></button></div><div class="setting-row"><div><strong>Language</strong><small>English</small></div><button class="text-button" id="profile-language" data-action="language">${state.language}</button></div></section>
      <section class="card setting-card feedback-card"><span class="setting-title-icon">${icon("heart")}</span><h2>Help us make this kinder</h2><button class="primary-button" data-action="feedback">Share feedback</button></section>
      <section class="card setting-card"><div class="section-head"><div><h2>Demo controls</h2></div></div><div class="setting-row"><div><strong>Start welcome again</strong></div><button class="text-button" data-action="restart-onboarding">Restart</button></div><div class="setting-row"><div><strong>Clear demo activity</strong></div><button class="text-button" style="color:#a43b34" data-action="reset-demo">Reset</button></div></section></div></div>`;
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
  openModal({ title: "", body: `<div class="member-modal-head">${avatar(person)}<div><h2 style="margin:0 0 3px">${person.name}</h2><p style="margin:0;color:var(--muted)">${person.city}</p><span class="chip soft" style="display:inline-block;margin-top:8px">${person.community}</span></div></div><p class="member-bio">${person.bio}</p><div class="kind-note compact">${icon("shield")}<span><strong>Limited profile</strong><small>Only chosen details are visible.</small></span></div><div class="safety-menu"><button class="safety-action" data-action="report-member" data-person="${id}">${icon("megaphone")} Report</button><button class="safety-action danger" data-action="block-member" data-person="${id}">⊘ Block</button></div>`, footer: connected ? `<button class="secondary-button" data-route="messages" data-action="message-person" data-person="${id}">${icon("chat")} Message</button>` : `<button class="secondary-button" data-action="close-modal">Close</button><button class="primary-button" data-action="connect" data-person="${id}" ${pending ? "disabled" : ""}>${pending ? "Request sent" : `${icon("plus")} Connect`}</button>` });
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
  openModal({ title: service.title, subtitle: "A clear place to begin", body: `<div class="service-modal-intro"><span class="service-icon ${service.tone}">${icon(service.icon)}</span><div><p>${service.text}</p><div class="kind-note compact">${icon("shield")}<span><strong>Good to know</strong><small>${boundaries[id]}</small></span></div></div></div><div class="resource-list" style="margin-top:18px">${resources.slice(0,2).map(resourceRowMarkup).join("")}</div>`, footer: `<button class="secondary-button" data-action="close-modal">Close</button><button class="primary-button" data-action="service-feedback">I need something else</button>` });
}

function openSearch(query = "") {
  const q = query.trim().toLowerCase();
  const personResults = visiblePeople().filter((person) => !q || `${person.name} ${person.role} ${person.community} ${person.city}`.toLowerCase().includes(q));
  const communityResults = communities.filter((community) => !q || `${community.name} ${community.description}`.toLowerCase().includes(q));
  const results = [
    ...communityResults.map((community) => `<button class="search-result" data-action="open-community" data-community="${community.id}"><span class="community-icon ${community.tone}">${icon("people")}</span><span><strong>${community.name}</strong><small>${community.members} people</small></span>${icon("arrow", "row-arrow")}</button>`),
    ...personResults.map((person) => `<button class="search-result" data-action="view-member" data-person="${person.id}">${avatar(person)}<span><strong>${person.name}</strong><small>${person.city}</small></span>${icon("arrow", "row-arrow")}</button>`)
  ];
  openModal({ title: "Search", subtitle: q ? `Results for “${escapeHTML(query)}”` : "People, circles and support", body: `<label class="mini-search" style="margin-bottom:14px">${icon("search")}<input id="modal-search" value="${escapeHTML(query)}" type="search" placeholder="Try ‘hemophilia’" /></label><div class="search-overlay-results">${results.join("") || '<div class="empty-state"><div><p>No matches yet.</p></div></div>'}</div>` });
  setTimeout(() => document.querySelector("#modal-search")?.focus(), 0);
}

function openOnboarding(step = 1) {
  const progress = `<div class="onboarding-progress">${[1,2,3].map((n) => `<span class="${n <= step ? "done" : ""}"></span>`).join("")}</div>`;
  if (step === 1) {
    openModal({ title: "", className: "onboarding", body: `${progress}<div class="onboarding-hero"><span class="brand-mark">R</span><span class="eyebrow">Welcome</span><h1>You don’t have to do this alone.</h1><p>Meet people who understand. Find support when you need it.</p></div><div class="kind-note compact">${icon("shield")}<span><strong>A safer space</strong><small>No medical or emergency advice.</small></span></div>`, footer: `<button class="primary-button" data-action="onboarding-next" data-step="2">Continue</button>` });
  } else if (step === 2) {
    openModal({ title: "Tell us your role", subtitle: "The first pilot is restricted to adults and adult caregivers.", className: "onboarding", body: `${progress}<div class="choice-grid"><label class="choice-card"><input type="radio" name="role" value="Adult living with a rare disease" ${state.role.includes("living") ? "checked" : ""}/><span><strong>I live with a rare disease</strong><small>I am 18 or older.</small></span></label><label class="choice-card"><input type="radio" name="role" value="Caregiver" ${state.role === "Caregiver" ? "checked" : ""}/><span><strong>I am a caregiver</strong><small>I am 18 or older.</small></span></label></div><label class="choice-card" style="margin-top:12px"><input id="adult-confirm" type="checkbox"/><span><strong>I confirm I am 18 or older</strong><small>Minor accounts, profiles and chat are not included in this pilot.</small></span></label>`, footer: `<button class="secondary-button" data-action="onboarding-next" data-step="1">Back</button><button class="primary-button" data-action="onboarding-role">Continue</button>` });
  } else {
    openModal({ title: "Choose your first circle", subtitle: "You can change this anytime.", className: "onboarding", body: `${progress}<div class="choice-grid">${communities.slice(0,4).map((community, index) => `<label class="choice-card"><input type="radio" name="community" value="${community.id}" ${state.primaryCommunity === community.id || (!state.primaryCommunity && index === 0) ? "checked" : ""}/><span class="choice-icon">${icon("people")}</span><span><strong>${community.name}</strong><small>${community.members} people</small></span></label>`).join("")}</div><div class="kind-note compact" style="margin-top:12px">${icon("shield")}<span><strong>Your choice stays private.</strong></span></div>`, footer: `<button class="secondary-button" data-action="onboarding-next" data-step="2">Back</button><button class="primary-button" data-action="finish-onboarding">Enter RareConnect</button>` });
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
  if (action === "language" || action === "pilot-info") openModal({ title: "A safer space", body: `<div class="stack"><div class="kind-note compact">${icon("shield")}<span><strong>You are in control</strong><small>Connect before chat. Report or block anytime.</small></span></div><div class="kind-note compact">${icon("book")}<span><strong>Made to be accessible</strong><small>Readable contrast, keyboard support and clear labels.</small></span></div></div>` });
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
  openModal({ title: "Notifications", subtitle: "Private by default", body: `<div class="people-list"><div class="community-mini"><span class="community-icon teal">${icon("heart")}</span><div><strong>Someone sent support</strong><small>12 minutes ago</small></div></div><div class="community-mini"><span class="community-icon blue">${icon("people")}</span><div><strong>New connection request</strong><small>1 hour ago</small></div></div><div class="community-mini"><span class="community-icon amber">${icon("shield")}</span><div><strong>A resource was reviewed</strong><small>Yesterday</small></div></div></div>` });
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
