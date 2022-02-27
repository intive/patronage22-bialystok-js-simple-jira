export const getProjects = async () => {
  const response = await fetch("/my-app/exampleProjects.json");

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
