import { CardProject } from "@/feature/projects/components/CardProjec";
import { FeaturedProject } from "@/feature/projects/components/FeaturedProject";
import { projects } from "@/feature/projects/utils/projects";

const Page = () => {
  return (
    <div>
      <div className="pt-10">
        <FeaturedProject />
      </div>
      <div className="py-10 flex flex-col gap-5">
        {projects.map((item, index) => (
          <CardProject
            key={index}
            description={item.description}
            href={item.href}
            title={item.title}
            urlImage={item.urlImage}
            techs={item.techs}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
