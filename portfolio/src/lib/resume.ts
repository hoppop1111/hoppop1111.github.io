// The resume view is a full-screen overlay that several places can open
// (menu, about section); they talk to it through a window event.

export const RESUME_EVENT = "resume:open";

/** Open the full-screen resume view. */
export function openResume() {
  window.dispatchEvent(new Event(RESUME_EVENT));
}
