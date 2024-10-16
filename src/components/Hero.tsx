import { Button } from './ui/button';
import { buttonVariants } from './ui/button';
//import { HeroCards } from './HeroCards';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Unleash Your Inner Developer
            </span>{' '}
            with
          </h1>{' '}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Free GPT API
            </span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Bring life to your projects without breaking the bank! No API Key Drama!
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a href="/docs">
            <Button className="w-full md:w-1/3">Let's Dive In!</Button>
          </a>

          <a
            rel="noreferrer noopener"
            href="https://github.com/matefs/Free-gpt-api-no-key-needed"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="z-10">
        <img
          className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[500px] h-[500px]"
          src="https://raw.githubusercontent.com/matefs/Free-gpt-api-no-key-needed/refs/heads/main/assets/Icon%20with%20Shadow.png"
        />
      </div>

      <div className="shadow"></div>
    </section>
  );
};
