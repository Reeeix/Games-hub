const getAppRoot = () => document.querySelector("#app");

const clearApp = () => {
  const appRoot = getAppRoot();
  if (appRoot) appRoot.replaceChildren();
};

export { getAppRoot, clearApp };
