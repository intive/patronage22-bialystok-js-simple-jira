import { useEffect, useState } from "react";
import { mockProjects } from "../../mockData/mockProjects";

export const useProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<typeof mockProjects>([]);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setProjects(mockProjects);
      setIsLoading(false);
    }, 3_000);

    return () => clearTimeout(timeoutID);
  }, []);

  return [isLoading, projects] as const;
};
