export const STORAGE_PREFIX = "TODO_APP--";
export const TASK_LISTS = STORAGE_PREFIX + "TASK_LISTS";

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}