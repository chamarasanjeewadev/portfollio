import { createLazyFileRoute } from '@tanstack/react-router';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import careerInfo from './../assets/projects.json';
import { TechTag } from '@/components/Experience';
export const Route = createLazyFileRoute('/history')({
  component: About,
});

function About() {
  const projects: any[] = careerInfo.projects;

  return (
    <section className="h-screen p-2">
      <Table>
        <TableHeader>
          <TableRow className=" font-bold">
            <TableHead className="w-[10%] font-bold">Year</TableHead>
            <TableHead className="w-[20%] font-bold">Project</TableHead>
            <TableHead className="w-[60%] font-bold">Tech stack</TableHead>
            {/* <TableHead className="font-bold">My contribution</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map(project => (
            <TableRow>
              <TableCell className="font-medium">{project.year}</TableCell>
              <TableCell className="font-medium">
                {project.name} {project.url}
              </TableCell>
              <TableCell className=" flex flex-wrap ">
                {project.teckStack.map((item, index) => (
                  <div className=" m-1">
                    <TechTag key={index} technology={item} />
                  </div>
                ))}
              </TableCell>

              {/* <TableCell>{project.contribution}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
