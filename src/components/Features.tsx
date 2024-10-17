import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import image from '../assets/cat-junior.jpeg';
// import image3 from '../assets/rich-developer.jpeg';
// import image4 from '../assets/tech-woman.jpeg';

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: 'Plug-and-Play Integration ',
    description:
      'Easily integrate with a simple GET request, making it perfect for quick setups and rapid development of your projects.',
    image: "https://raw.githubusercontent.com/matefs/Free-gpt-api-no-key-needed/refs/heads/main/assets/tech-woman-CG8g7r62.jpeg",
  },
  {
    title: 'Cost-Free Project Development ',
    description:
      'Bring your ideas to life and create innovative projects without spending a dime. Leverage the power of our API to build, scale, and succeed—completely free of charge!',
    image: "https://raw.githubusercontent.com/matefs/Free-gpt-api-no-key-needed/refs/heads/main/assets/rich-developer-uV_Z4yMa.jpeg",
  },
  {
    title: 'No API Key Required',
    description:
      'Eliminate the hassle of signing up and managing API keys. Start using the API instantly, without any need for authentication or login.',
    image: "https://raw.githubusercontent.com/matefs/Free-gpt-api-no-key-needed/refs/heads/main/assets/cat-junior-CkzY3Ilx.jpeg",
  },
];

const featureList: string[] = [
  'No API Key required',
  'Fast response times (1 to 3 seconds)',
  'GET requests for easy integration',
  'Swagger documentation',
  'Chatbot support',
  'Content generation',
  'Learning tool integration',
  'No authentication required',
  'Completely free to use',
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{' '}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <img
              src={image}
              alt="About feature"
              className="w-[200px] lg:w-[300px] mx-auto mt-4 rounded-lg"
            />

            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
