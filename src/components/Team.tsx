import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamMember: TeamProps = {
  imageUrl: 'https://avatars.githubusercontent.com/matefs',
  name: 'Mateus Schverz',
  position: 'Fullstack developer',
  socialNetworks: [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/mateus-schverz/',
    },
  ],
};

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin':
        return <Linkedin size="20" />;
      case 'Facebook':
        return <Facebook size="20" />;
      case 'Instagram':
        return <Instagram size="20" />;
    }
  };

  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Dedicated{' '}
        </span>
        Crew
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Our talented team is committed to delivering top-notch solutions and
        driving innovation in every project we undertake.
      </p>

      <div className="flex justify-center">
        <Card
          key={teamMember.name}
          className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
        >
          <CardHeader className="mt-8 flex justify-center items-center pb-2">
            <img
              src={teamMember.imageUrl}
              alt={`${teamMember.name} ${teamMember.position}`}
              className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
            />
            <CardTitle className="text-center">{teamMember.name}</CardTitle>
            <CardDescription className="text-primary">
              {teamMember.position}
            </CardDescription>
          </CardHeader>

          <CardContent className="text-center pb-2">
            <p>
              I'm a full-stack developer skilled in JavaScript, Node.js, and
              Python. I started as a Test Analyst/QA, building a solid
              foundation in software quality assurance.
            </p>
          </CardContent>

          <CardFooter>
            {teamMember.socialNetworks.map(
              ({ name, url }: SociaNetworkslProps) => (
                <div key={name}>
                  <a
                    rel="noreferrer noopener"
                    href={url}
                    target="_blank"
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'sm',
                    })}
                  >
                    <span className="sr-only">{name} icon</span>
                    {socialIcon(name)}
                  </a>
                </div>
              )
            )}
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};
