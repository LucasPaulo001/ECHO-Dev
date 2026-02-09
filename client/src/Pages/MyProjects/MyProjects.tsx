import { MyProjectsAPI } from "@/api/project";
import { EchoCard } from "@/components/EchoCard/EchoCard";
import { TUser, useAuthContext } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";

type TProject = {
    id: string;
    title: string,
    description?: string | undefined,
    status: "completed" | "peending",
    tags: string[],
    ownerId: TUser,
    isPublic: boolean,
    link: string
}

export function MyProjectPage(){

    const [myProjects, setMyProjects] = useState<TProject[] | null>(null);

    const { token } = useAuthContext();

    useEffect(() => {
        async function FetchProjects(){
            const myProjectsList = await MyProjectsAPI(token);
            setMyProjects(myProjectsList);
        }

        FetchProjects();
    }, [])

    return(
        <div>
            {
                myProjects?.length == 0 ? (
                    <span>Nenhum projeto encontrado.</span>
                ) :
                myProjects?.map((project) => (
                    <EchoCard key={project.id} time={project.title} title={project.title} content={project.description} tag={project.tags} />
                ))
            }
        </div>
    )
}