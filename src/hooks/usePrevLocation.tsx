import { useLocation, useNavigate, useParams } from "react-router-dom";

export const usePrevLocation = () => {
  const { projectName: projectName, projectId: projectId } = useParams();
  return `/projects/${projectName?.replace(" ", "%20")}&${projectId}`;
};
