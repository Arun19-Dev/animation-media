const STORAGE_KEY = 'css_learning_lab_progress';

export const getProgress = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error('Error reading progress:', error);
    return {};
  }
};

export const saveProgress = (moduleId, data) => {
  try {
    const current = getProgress();
    current[moduleId] = { ...current[moduleId], ...data, lastUpdated: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  } catch (error) {
    console.error('Error saving progress:', error);
  }
};

export const resetProgress = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error resetting progress:', error);
  }
};
